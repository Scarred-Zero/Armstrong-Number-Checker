from flask import Blueprint, request, render_template, redirect, flash, url_for
from ..config.database import db
from ..models.User import User
from ..utils.helpers import validate_password
from email_validator import validate_email, EmailNotValidError
from werkzeug.security import  check_password_hash
from flask_login import current_user, login_user, login_required, logout_user
from ..utils.errors import catch_exception, CustomRequestError
from ..utils.helpers import response
from flask_jwt_extended import create_access_token
from datetime import timedelta


# CREATE A BLUEPRINT FOR AUTHENTICATION
auth = Blueprint('auth', __name__)


# ROUTE FOR THE LOGIN PAGE
@auth.post("/login")
@catch_exception
def handle_user_login():
    body = request.get_json()

    if not body.get("email"):
        raise CustomRequestError("Email is required!")
    if not body.get("password"):
        raise CustomRequestError("Password is required!")

    user = db.session.execute(
        db.select(User).filter_by(email=body.get("email"))
    ).scalar()
    if not user:
        raise CustomRequestError("User not found!")

    if not check_password_hash(user.password, body.get("password")):
        raise CustomRequestError("Incorrect credentials")
    
    expiry_time = timedelta(days=7)
    token = create_access_token(identity=user.id, expires_delta=expiry_time)

    data = {
        "user": user.data(), 
        "token": token
    }

    return response("Login successful!", data), 201


# ROUTE FOR HANDLING USER REGISTRATION
@auth.post("/register")
@catch_exception
def handle_user_registration():
  body = request.get_json()

  if not body.get("name"): raise CustomRequestError("Name is required!")
  if not body.get("email"): raise CustomRequestError("Email is required!")
  if not body.get("password"): raise CustomRequestError("Password is required!")
  if not body.get("confirm_password"): raise CustomRequestError("Confirm password is required!")
  if body.get("password") != body.get("confirm_password"): raise CustomRequestError("Passwords do not match!")
  if not body.get("contact_number"): raise CustomRequestError("Contact number is required!")

    # VALIDATE EMAIL
  try:
        valid = validate_email(body.get("email"))
        email = valid.email
  except EmailNotValidError as e:
        raise CustomRequestError(str(e))
    # VALIDATE PASSWORD
  password_error = validate_password(body.get("password"))  
  if password_error: raise CustomRequestError(password_error)

  # CHECK IF EMAIL EXISTS
  exist = db.session.execute(db.select(User).filter_by(email=email)).scalar()
  if exist: raise CustomRequestError("Email already exist!")

  user = User(
    name=body["name"],
    email=email,
    contact_number=body["contact_number"],
    password=body["password"],
  )
  db.session.add(user)
  db.session.commit()

  # SIGN USER IN
  expiry_time = timedelta(days=7)
  token = create_access_token(identity=user.id, expires_delta=expiry_time)

  data = {
    "user": user.data(),
    "token": token
  }

  return response("Registration successful!", data), 201


# LOGOUT A USER
@auth.post("/logout")
@catch_exception
@login_required
def handle_user_logout():
    logout_user()
    return response("Logout successful!", {}), 200


# # HANDLE DELETE USER ACCOUNT
# @auth.delete("/user/account/delete")
# @catch_exception
# def handle_delete_user_account():
#   body = request.get_json()

#   if not body.get("email"): raise CustomRequestError("Email is required!")
#   if not body.get("password"): raise CustomRequestError("Password is required!")

#   user = db.session.execute(db.select(User).filter_by(email=body.get("email"))).scalar()
#   if not user: raise CustomRequestError("User not found!")

#   if not check_password_hash(user.password, body.get("password")): raise CustomRequestError("Incorrect credentials")

#   db.session.delete(user)
#   db.session.commit()

#   data = {
#     "user": user.data(),
#   }

#   return response("Account deleted!", data), 200
