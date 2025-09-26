from flask import Flask, render_template, flash, redirect, url_for, request, jsonify
from flask_cors import CORS
from flask_login import LoginManager
from os import path
from .config.database import db
from .models.User import User
from .config.variables import (
    SECRET_KEY,
    JWT_SECRET,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DB,
    DATABASE_URI,
    CLIENT_URI,
)
from flask_jwt_extended import JWTManager
from .utils.helpers import response


def create_app():
    app = Flask(__name__)

    # CONFIGS
    app.config["SECRET_KEY"] = SECRET_KEY
    app.config["MYSQL_HOST"] = MYSQL_HOST
    app.config["MYSQL_PORT"] = MYSQL_PORT
    app.config["MYSQL_USER"] = MYSQL_USER
    app.config["MYSQL_PASSWORD"] = MYSQL_PASSWORD
    app.config["MYSQL_DB"] = MYSQL_DB
    app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URI

    # MIDDLEWARES
    CORS(app, resources={r"/*": {"origins": [CLIENT_URI]}},)
    
    app.config["JWT_SECRET_KEY"] = JWT_SECRET
    jwt = JWTManager(app)

    # BLUEPRINT FOR ALL ROUTES
    from .views import routes
    app.register_blueprint(routes, url_prefix="/api/v1")

    # Other setups
    db.init_app(app)

    # Models
    from . import models

    create_database(app)

    # Login Manager
    # login_manager = LoginManager()
    # login_manager.login_view = 'auth.login_page'
    # login_manager.init_app(app)

    # @login_manager.user_loader
    # def load_user(usr_id):
    #     return User.query.get(usr_id)

    # @login_manager.unauthorized_handler
    # def handle_needs_login():
    #     flash("You have to be logged in to access this page.")
    # return redirect(url_for('auth.login_page', next=request.endpoint))

    # ERROR ROUTES
    @app.errorhandler(400)
    def bad_request_error(error):
        return response(str(error), None, False)

    @app.errorhandler(404)
    def invalid_route(error):
        return response("Invalid route", None, False)
    
    @app.errorhandler(Exception)
    def server_error(error):
        print("SERVER ERROR:", str(error))
        return response(str(error), None, False)

    return app


def create_database(app):
    if not path.exists("app/" + MYSQL_DB):
        with app.app_context():
            db.create_all()
            print(" *", "Database created and tables initialized!")
