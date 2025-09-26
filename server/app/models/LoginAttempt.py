from ..config.database import db
from flask_login import UserMixin
from sqlalchemy.sql import func

# ATTEMPTS MODEL
class LoginAttempt(db.Model, UserMixin):
    __tablename__ = "login_attempts"

    id = db.Column(db.Integer, primary_key=True)
    attempt_time = db.Column(db.DateTime(timezone=True), default=func.now())
    success = db.Column(db.Boolean(), default=False, nullable=False)

    def __init__(self, attempt_time=func.now()):
        self.attempt_time = attempt_time

    def get_all(self):
        all_attempts = self.query.all()
        return all_attempts

    def data(self):
        return {
            "id": self.id, 
            "attempt_time": self.attempt_time
        }
