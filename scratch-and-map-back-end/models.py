from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, CheckConstraint, ForeignKey, ARRAY



models = Flask(__name__)
models.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/scratch_mapdb'

db = SQLAlchemy(models)

class users(db.Model):
    id = db.Column(Integer, autoincrement=True, primary_key=True)
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

class friends_with(db.Model):
    id = db.Column(Integer, autoincrement=True, primary_key=True)
    user_1 = db.Column(Integer, nullable=False)
    user_2 = db.Column(Integer, nullable=False)
    first_name = db.Column(String, nullable=False)
    status = db.Column(String, nullable=False)

    def __init__(self, user_1, user_2, first_name, status):
        self.user_1 = user_1
        self.user_2 = user_2
        self.first_name = first_name
        self.status = status
        
    
    def __repr__(self):
        return '<User %r>' % self.username


class countries(db.Model):
    id = db.Column(Integer, autoincrement=True, primary_key=True)
    country_name = db.Column(String, nullable=False)
    flag = db.Column(String, nullable=False)
    country_img = db.Column(String, nullable=False)

    def __init__(self, country_name, flag, country_img):
        self.country_name = country_name
        self.flag = flag
        self.country_img = country_img
        
    
    def __repr__(self):
        return '<User %r>' % self.username


class user_countries(db.Model):
    id = db.Column(Integer, autoincrement=True, primary_key=True)
    visited = db.Column(ARRAY(String), unique=True,  nullable=True)
    lived = db.Column(ARRAY(String), unique=True, nullable=True)
    transited = db.Column(ARRAY(String), unique=True, nullable=True)
    to_visit = db.Column(ARRAY(String), unique=True, nullable=True)
    user_id = Column(Integer, ForeignKey(users.id), primary_key=True)
   
   

    def __init__(self, visited, lived, transited, user_id):
        self.visited = visited
        self.lived = lived
        self.transited = transited
        self.to_visit = to_visit
        self.user_id = user_id
        
    
    def __repr__(self):
        return '<User %r>' % self.username






@models.route('/')
def index():
    return "<h1 style ='color: red'>Hello Flask</h1>"

if __name__ == '__main__':
    models.run()

