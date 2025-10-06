# from flask import Blueprint, render_template, flash, redirect, url_for
# from flask_login import login_required, current_user
# from ..config.database import db
# from ..models.Models import User
# from werkzeug.security import generate_password_hash
# from ..utils.helpers import validate_password
# from email_validator import validate_email, EmailNotValidError


from flask import Blueprint, request
from ..config.database import db
from ..utils.errors import catch_exception, CustomRequestError
from ..utils.helpers import response
from ..models import User, Feedback
from flask_jwt_extended import jwt_required, get_jwt_identity


users = Blueprint("users", __name__)


# HANDLE GET ONE USERS
@users.get("/profile")
@catch_exception
@jwt_required()
def get_my_profile():
    user_id = get_jwt_identity()
    user = db.session.execute(db.select(User).filter_by(id=user_id)).scalar()
    if not user:
        raise CustomRequestError("User not found", 404)
    return response("User", user.data())


# HANDLE UPDATE USER
@users.patch("/profile/edit")
@catch_exception
@jwt_required()
def update_user():
    user_id = get_jwt_identity()

    # CHECK IF USER EXISTS
    user = db.session.execute(db.select(User).filter_by(id=user_id)).scalar()
    if not user:
        raise CustomRequestError("User does not exist!", 404)

    # UPDATE USERS DATA
    body = request.get_json()
    prev_data = user.data()

    user.name = body.get("name") or prev_data.get("name")
    user.email = body.get("email") or prev_data.get("email")

    db.session.add(user)
    db.session.commit()

    return response("User updated!", user.data())


# HANDLE DELETE USER
@users.delete("/profile/delete/")
@catch_exception
@jwt_required()
def delete_user():
    user_id = get_jwt_identity()

    # CHECK IF USER EXISTS
    user = db.session.execute(db.select(User).filter_by(id=user_id)).scalar()
    if not user:
        raise CustomRequestError("User does not exist!", 404)

    db.session.delete(user)
    db.session.commit()

    return response("User deleted!", user.data())

