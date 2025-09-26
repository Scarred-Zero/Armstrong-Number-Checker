from functools import wraps
from ..config.database import db
from ..utils.errors import CustomRequestError
from ..models import User
from flask_jwt_extended import jwt_required, get_jwt_identity


def authorise(roles):
    def inner(fn):
        @jwt_required()
        @wraps(fn)
        def wrapper(*args, **kwargs):
            user_id = get_jwt_identity()
            user = db.session.execute(db.select(User).filter_by(id=user_id)).scalar()
            if not user:
                raise CustomRequestError("User not found", 404)
            if not user.role in roles:
                raise CustomRequestError(
                    "Unauthorised: You don't have permission to access this route.", 401
                )
            return fn(*args, **kwargs)

        return wrapper

    return inner
