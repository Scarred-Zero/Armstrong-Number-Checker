from flask import Blueprint, request, jsonify, session
from flask_cors import cross_origin
from ..config.variables import CLIENT_URI
from ..config.database import db
from ..models.Attempt import Attempt
from flask_jwt_extended import get_jwt_identity, jwt_required
import json

# Create a Blueprint
arm_num_checker = Blueprint("arm_num_checker", __name__)


def is_armstrong(number):
    num_str = str(number)
    num_digits = len(num_str)
    return sum(int(digit) ** num_digits for digit in num_str) == number


def build_cors_preflight_response():
    response = jsonify({"message": "CORS Preflight"})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
    response.headers.add("Access-Control-Max-Age", "3600")
    return response


def validate_int(value, name):
    try:
        value = int(value)
        if value < 1:
            raise ValueError
        return value, None
    except (TypeError, ValueError):
        return None, f"{name} must be a positive integer."


# API Endpoint to check a range of numbers
@arm_num_checker.route("/check-range", methods=["POST", "OPTIONS"])
@jwt_required(optional=True)
@cross_origin(origin=CLIENT_URI)
def check_range():
    if request.method == "OPTIONS":
        return build_cors_preflight_response()

    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "No input data provided."}), 400

    min_num, min_err = validate_int(data.get("minNum"), "Minimum number")
    max_num, max_err = validate_int(data.get("maxNum"), "Maximum number")

    if min_err or max_err:
        return jsonify({"error": min_err or max_err}), 400
    if min_num > max_num:
        return (
            jsonify(
                {
                    "error": "Minimum number must be less than or equal to Maximum number."
                }
            ),
            400,
        )

    user_id = get_jwt_identity()
    armstrong_numbers = [n for n in range(min_num, max_num + 1) if is_armstrong(n)]

    # Always store a consistent result (JSON string). Decide to record empty attempts as empty array.
    attempt_result_json = json.dumps(armstrong_numbers)

    attempt = Attempt(
        user_id=user_id,
        attempt_type="range",
        min_num=min_num,
        max_num=max_num,
        result=attempt_result_json,
    )
    try:
        db.session.add(attempt)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Failed to save attempt: {str(e)}"}), 500

    # keep session value consistent (store actual list)
    session["armstrong_numbers"] = armstrong_numbers
    # return consistent structure (200), even if empty list
    resp = {"armstrong_numbers": armstrong_numbers}
    if not armstrong_numbers:
        resp["message"] = "No Armstrong numbers found within the given range."

    return jsonify(resp), 200


# API Endpoint to check a specific number
@arm_num_checker.route("/check-number", methods=["POST", "OPTIONS"])
@jwt_required(optional=True)
@cross_origin(origin=CLIENT_URI)
def check_number():
    if request.method == "OPTIONS":
        return build_cors_preflight_response()

    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "No input data provided."}), 400

    number, err = validate_int(data.get("number"), "Input")
    if err:
        return jsonify({"error": err}), 400

    user_id = get_jwt_identity()
    is_arm = is_armstrong(number)
    result_str = (
        f"{number} is an Armstrong Number"
        if is_arm
        else f"{number} is not an Armstrong Number"
    )

    # Store attempt (result as plain string)
    attempt = Attempt(
        user_id=user_id,
        attempt_type="single",
        number=number,
        result=result_str,
    )

    try:
        db.session.add(attempt)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Failed to save attempt: {str(e)}"}), 500

    session["check_num_result"] = result_str
    return jsonify({"result": result_str}), 200


# GET ALL ATTEMPTS FOR THE LOGGED-IN USER
@arm_num_checker.route("/attempts", methods=["GET"])
@jwt_required(optional=True)
def get_attempts():
    user_id = get_jwt_identity()
    attempts = (
        Attempt.query.filter_by(user_id=user_id)
        .order_by(Attempt.timestamp.desc())
        .all()
    )
    return jsonify({"attempts": [a.data() for a in attempts]}), 200


# DELETEA A SINGLE ATTEMPT
@arm_num_checker.route("/attempts/<int:attempt_id>", methods=["DELETE"])
@jwt_required(optional=True)
@cross_origin(origin=CLIENT_URI)
def delete_attempt(attempt_id):
    """
    Delete a single attempt.
    - If attempt.user_id is None (guest attempt), allow deletion only for unauthenticated requests.
    - If attempt.user_id is set, only the owner (matching JWT identity) may delete it.
    """
    user_id = get_jwt_identity()  # may be None when unauthenticated
    attempt = Attempt.query.filter_by(id=attempt_id).first()
    if not attempt:
        return jsonify({"error": "Attempt not found."}), 404

    # Guest attempt (no owner)
    if attempt.user_id is None:
        # allow deletion only if requester is NOT authenticated (guest)
        if user_id is not None:
            return jsonify({"error": "Not authorized to delete a guest attempt."}), 403
        # proceed to delete guest attempt

    else:
        # Owned attempt: requester must be authenticated
        if user_id is None:
            return (
                jsonify({"error": "Authentication required to delete this attempt."}),
                401,
            )
        if attempt.user_id != user_id:
            return jsonify({"error": "Not authorized to delete this attempt."}), 403

    try:
        db.session.delete(attempt)
        db.session.commit()
        return jsonify({"message": "Attempt deleted."}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Failed to delete attempt: {str(e)}"}), 500


# # ROUTES FOR CONTACT PAGE
# @arm_num_checker.route("/contact_submit_feedback/<usr_id>", methods=["GET", "POST"])
# @login_required
# def contact_page(usr_id):
# user = User.query.filter_by(usr_id=usr_id).first()
# form_data = FeedbackForm(obj=user)
# if request.method == "POST":
#     if form_data.validate_on_submit():
#         name = form_data.name.data
#         email = form_data.email.data
#         subject = form_data.subject.data
#         message = form_data.message.data

#         feedback = Feedback(
#             usr_id=current_user.usr_id,
#             name=name,
#             email=email,
#             subject=subject,
#             message=message,
#         )

#         try:
#             # SAVE THE FEEDBACK TO THE DATABASE
#             db.session.add(feedback)
#             db.session.commit()
#             flash(
#                 "Your message was sent successfully. Thank you for your feedback!",
#                 category="success",
#             )
#             return redirect(
#                 url_for("arm_num_checker.contact_page", usr_id=user.usr_id)
#             )
#         except Exception as e:
#             db.session.rollback()
#             flash(f"Error submitting feedback: {e}", category="error")
#             return redirect(
#                 url_for("arm_num_checker.contact_page", usr_id=user.usr_id)
#             )

# return render_template(
#     "contact.html", form=form_data, title="Contact Us | Armstrong Number Checker"
# )
