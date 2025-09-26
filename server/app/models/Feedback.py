from ..config.database import db
from sqlalchemy.sql import func
from ..utils.helpers import generateId

# FEEDBACK MODEL
class Feedback(db.Model):
    __tablename__ = 'feedbacks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), db.ForeignKey('users.name'), nullable=False)
    email = db.Column(db.String(100), db.ForeignKey('users.email'), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    feedback = db.Column(db.Text, nullable=False)
    is_read = db.Column(db.Boolean(), default=0)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)

    def __init__(self, name, email, subject, feedback):
        self.id = generateId("fdb_", 8)
        self.name = name
        self.email = email
        self.subject = subject
        self.feedback = feedback

    @classmethod
    def get_all(cls):
        return cls.query.all()

    def data(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'subject': self.subject,
            'feedback': self.feedback,
            'is_read': self.is_read,
            'created_at': self.created_at
        }

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
