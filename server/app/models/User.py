from ..config.database import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from werkzeug.security import generate_password_hash
from ..utils.helpers import generateId


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.String(20), primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    contact_number = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(10), default='user')
    # is_email_verified = db.Column(db.Boolean, default=False)
    date_created = db.Column(db.DateTime(timezone=True), default=func.now())

    def __init__(self, name, email, contact_number, password, role='user',
                 date_created=func.now()):
        self.id = generateId('USR_', 8)
        self.name = name
        self.email = email
        self.contact_number = contact_number
        self.password = generate_password_hash(f"{password}")
        self.role = role
        self.date_created = date_created

    def get_all(self):
        users = self.query.all()
        return users

    def find_by_id(self, id):
        user = self.query.filter_by(id=id).first()  # Get the first result
        return user

    def data(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'contact_number': self.contact_number,
            'password': self.password,
            'role': self.role,
            'date_created': self.date_created,
        }

