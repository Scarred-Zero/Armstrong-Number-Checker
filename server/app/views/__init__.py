from flask import Blueprint

routes = Blueprint("routes", __name__)


from .auth import auth

routes.register_blueprint(auth, url_prefix="/auth")

from .app_routes import arm_num_checker

routes.register_blueprint(arm_num_checker, url_prefix="/arm_num_checker")

from .users import users

routes.register_blueprint(users, url_prefix="/user")
