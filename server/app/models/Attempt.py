from app.config.database import db
from flask_login import UserMixin
import json


class Attempt(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    attempt_type = db.Column(db.String(20))  # 'range' or 'single'
    min_num = db.Column(db.Integer, nullable=True)
    max_num = db.Column(db.Integer, nullable=True)
    number = db.Column(db.Integer, nullable=True)
    result = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, server_default=db.func.now())

    def data(self):
        # Try to parse JSON stored in result, fall back to raw string
        parsed_result = None
        try:
            parsed_result = json.loads(self.result) if self.result else None
        except (ValueError, TypeError):
            parsed_result = self.result

        return {
            "id": self.id,
            "user_id": self.user_id,
            "attempt_type": self.attempt_type,
            "min_num": self.min_num,
            "max_num": self.max_num,
            "number": self.number,
            "result": parsed_result,
            "timestamp": self.timestamp.isoformat() if self.timestamp else None,
        }
