from flask import Flask, render_template, flash, redirect, url_for, request, jsonify
from flask_cors import CORS
from flask_login import LoginManager
from os import path
from .config.database import db
from .models.Models import User
from .config.variables import SECRET_KEY, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, DATABASE_URI


def create_app():
    app = Flask(__name__)
    
    # Initialize CORS
    CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})

    # CONFIGS
    app.config['SECRET_KEY'] = SECRET_KEY
    app.config['MYSQL_HOST'] = MYSQL_HOST
    app.config['MYSQL_PORT'] = MYSQL_PORT
    app.config['MYSQL_USER'] = MYSQL_USER
    app.config['MYSQL_PASSWORD'] = MYSQL_PASSWORD
    app.config['MYSQL_DB'] = MYSQL_DB
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI

    # Blueprint for authentication
    from .views.auth import auth
    app.register_blueprint(auth, url_prefix='/auth')

    # Blueprint for Armstrong Number Checker
    from .views.app_routes import arm_num_checker
    app.register_blueprint(arm_num_checker, url_prefix='/arm-num-checker')

    # Blueprint for user management
    from .views.user import user_bluprt
    app.register_blueprint(user_bluprt, url_prefix='/user')

    # Other setups
    db.init_app(app)

    # Models
    from . import models

    create_database(app)

    # Login Manager
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login_page'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(usr_id):
        return User.query.get(usr_id)

    @login_manager.unauthorized_handler
    def handle_needs_login():
        flash("You have to be logged in to access this page.")
        return redirect(url_for('auth.login_page', next=request.endpoint))

    # Error handling
    @app.errorhandler(400)
    def bad_request_error(error):
        response = jsonify({'error': 'Bad request', 'message': str(error)})
        response.status_code = 400
        return response

    @app.errorhandler(500)
    def internal_server_error(error):
        response = jsonify({'error': 'Internal server error', 'message': str(error)})
        response.status_code = 500
        return response

    return app


def create_database(app):
    if not path.exists('app/' + MYSQL_DB):
        with app.app_context():
            db.create_all()
            print(' *', 'Database created and tables initialized!')
