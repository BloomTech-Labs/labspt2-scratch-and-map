from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, CheckConstraint, UniqueConstraint



models = Flask(__name__)
models.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/scratch_mapdb'

db = SQLAlchemy(models)

class users(db.Model):
    id = db.Column(Integer, primary_key=True)
    username = db.Column(String, unique=True,  nullable=False)
    password = db.Column(String, nullable=False)
    first_name = db.Column(String, nullable=False)
    last_name = db.Column(String, nullable=False)
    age = db.Column(Integer, CheckConstraint( 'age>=14' ), nullable=False)
    nationality = db.Column(String, nullable=False)
    picture_url = db.Column(String)
    email = db.Column(String, unique=True, nullable=True)
    role = db.Column(String, nullable=False)
   

    def __init__(self, username, password, first_name, last_name, age, nationality, picture_url, email, role):
        self.username = username
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.nationality = nationality
        self.picture_url = picture_url
        self.email = email
        self.role = role
    
    def __repr__(self):
        return '<User %r>' % self.username

# class friends_with(db.Model):
#     id = db.Column(Integer, primary_key=True)
#     user_1 = db.Column(Integer, nullable=False)
#     user_2 = db.Column(Integer, nullable=False)
#     first_name = db.Column(String, nullable=False)
#     last_name = db.Column(String, nullable=False)
#     age = db.Column(Integer, CheckConstraint( 'age>=14' ), nullable=False)
#     nationality = db.Column(String, nullable=False)
#     picture_url = db.Column(String)
#     email = db.Column(String, nullable=True)
#     role = db.Column(String, nullable=False)

#     def __init__(self, username, password, first_name, last_name, age, nationality, picture_url, email, role):
#         self.username = username
#         self.password = password
#         self.first_name = first_name
#         self.last_name = last_name
#         self.age = age
#         self.nationality = nationality
#         self.picture_url = picture_url
#         self.email = email
#         self.role = role
    
#     def __repr__(self):
#         return '<User %r>' % self.username





@models.route('/')
def index():
    return "<h1 style ='color: red'>Hello Flask</h1>"

if __name__ == '__main__':
    models.run()

