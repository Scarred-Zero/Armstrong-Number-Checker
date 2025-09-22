from flask import Blueprint, request, jsonify, session
from flask_cors import cross_origin
from flask_login import login_required

# Create a Blueprint
arm_num_checker = Blueprint("arm_num_checker", __name__)


def is_armstrong(number):
    num_str = str(number)
    num_digits = len(num_str)
    total = sum(int(digit) ** num_digits for digit in num_str)
    return total == number


def build_cors_preflight_response():
    response = jsonify({"message": "CORS Preflight"})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
    response.headers.add("Access-Control-Max-Age", "3600")
    return response


# API Endpoint to check a range of numbers
@arm_num_checker.route("/api/arm_num_checker/check-range", methods=["POST", "OPTIONS"])
@cross_origin(origin="http://localhost:5173")
# @login_required
def check_range():
    if request.method == "OPTIONS":
        return build_cors_preflight_response()
    else:
        return handle_check_range()


def handle_check_range():
    data = request.json
    if not data:
        return jsonify({"error": "No input data provided."}), 400

    min_num = data.get("minNum")
    max_num = data.get("maxNum")

    # Check for None
    if min_num is None or max_num is None:
        return jsonify({"error": "Minimum and Maximum numbers are required."}), 400

    # Convert to int if possible
    try:
        min_num = int(min_num)
        max_num = int(max_num)
    except (TypeError, ValueError):
        return jsonify({"error": "Minimum and Maximum numbers must be integers."}), 400

    if min_num > max_num:
        return (jsonify({"error": "Minimum number must be less than Maximum number."}), 400,)
    if min_num < 1 or max_num < 1:
        return (jsonify({"error": "Please enter positive integers for Minimum and Maximum numbers."}), 400,)

    armstrong_numbers = [number for number in range(min_num, max_num + 1) if is_armstrong(number)]
    if not armstrong_numbers:
        return (jsonify({"error": "No Armstrong numbers found within the given range."}), 400,)

    session["armstrong_numbers"] = armstrong_numbers
    return jsonify({"armstrong_numbers": armstrong_numbers}), 200


# API Endpoint to check a specific number
@arm_num_checker.route("/api/arm_num_checker/check-number", methods=["POST", "OPTIONS"])
@cross_origin(origin="http://localhost:5173")
# @login_required
def check_number():
    if request.method == "OPTIONS":
        return build_cors_preflight_response()
    else:
        return handle_check_number()


def handle_check_number():
    data = request.json
    if not data:
        return jsonify({"error": "No input data provided."}), 400
    number = data.get("number")

    if number < 1:
        return jsonify({"error": "Please enter a positive integer to check."}), 400
    if not isinstance(number, int):
        return jsonify({"error": "Input must be an integer."}), 400
    if number is None:
        return jsonify({"error": "No input data provided."}), 400
    

    result = (
        f"{number} is an Armstrong Number"
        if is_armstrong(number)
        else f"{number} is not an Armstrong Number"
    )
    session["check_num_result"] = result
    return jsonify({"result": result}), 200


# # ROUTES FOR DISPLAYING RESULTS
# @arm_num_checker.route("/results", methods=["GET"])  # <usr_id>
# @login_required
# def results_page():
#     # RETRIEVE THE RESULT FROM THE SESSION
#     armstrong_numbers = session.get('armstrong_numbers')
#     result = session.get('check_num_result')

#     return render_template(
#         "results.html",
#         armstrong_number=armstrong_numbers,
#         result=result,
#         title="Results | Armstrong Number Checker",
#     )


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
