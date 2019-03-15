from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, TEXT, Boolean, String, CheckConstraint, ForeignKey, ARRAY
from flask_marshmallow import Marshmallow
from models import *
from dotenv import load_dotenv
import os

app = Flask(__name__)

def connect_to_db(app, db_uri=None):
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
load_dotenv('.env')
DATABASE_URL = os.environ.get("DATABASE_URL")
print(DATABASE_URL)
connect_to_db(app, DATABASE_URL)

# Init db & mm
db = SQLAlchemy(app)
ma = Marshmallow(app)

PORT = int(os.environ.get("PORT",5000))
DEBUG = "NO_DEBUG" not in os.environ

#Routes
@app.route("/api/error")
def error():
    raise Exception("Error!")

@app.route('/api/signup', methods=['POST'])
def signup():
    username = request.json['username']
    password = request.json['password']
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    age = request.json['age']
    nationality = request.json['nationality']
    picture_url = request.json['picture_url']
    email = request.json['email']
    role = request.json['role']
    auto_scratch = request.json['auto_scratch']
    #travel_types = request.json['travel_types']

    new_user = users(username, password, first_name, last_name, age, nationality, picture_url, email, role, auto_scratch) #ADD travel_types
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.id)

@app.route('/api/login')
def login():
  return '<h1>login page</h1>'

@app.route('/api/countries/<int:id>', methods=['GET'])
def countryById(id): 
  country = countries.query.get(id)
  return country_schema.jsonify(country)

@app.route('/api/countries', methods=['POST'])
def addCountry():
    country_name = request.json['country_name']
    flag = request.json['flag']
    country_img = request.json['country_img']

    new_country = countries(country_name, flag, country_img)
    db.session.add(new_country)
    db.session.commit()

    return jsonify(new_country.id)

'''@app.route('/mapview/friends')
def mapViewFriends():
  return '<h1>Friendslist map info of current user</h1>'

@app.route('/friends/list')
def friendsList():
  return '<h1>Get all friends of user by ID</h1>'''

#MAY NOT NEED THESE ROUTES FOR MVP
'''@app.route('/mapview', methods=['GET'])
def mapView():
  country = users_countries_join.query.get(id)
  user_id = request.json['user_id']
  country_id = request.json['country_id']
  status = request.json['status']

@app.route('/mapview/<int:id>')
def mapViewId(id):
  return '<h1>User map info by ID</h1>' 'user ID %d' % id'''

#SEE users/:id, it may be able to stand in for this endpoint
'''@app.route('/friends/list/<int:id>')
def friendsListById(id):
  return '<h1>Friends list by ID</h1>' 'user ID %d' % id''' 

#WAITING on decision for FB API before writing logic for these endpoints
'''@app.route('/friends/request/send/<int:id>')
def friendRequestSend(id):
  return '<h1>Current user requests another user as a friend</h1>' 'user ID %d' % id

@app.route('/friends/request/accept/<int:id>')
def friendRequestAccept(id):
  return '<h1>Current user accepts another user as a friend</h1>' 'user ID %d' % id

@app.route('/friends/request/decline/<int:id>')
def friendRequestDecline(id):
  return '<h1>Current user decline another user as a friend</h1>' 'user ID %d' % id'''

'''@app.route('/users/<username>')
def username(username):
  return '<h1>Get all users with similar name</h1>' 'username %s' % username'''

@app.route('/api/user/countries', methods=['POST']) #endpoint may/will be renamed after initial testing, add /<int:id>
def add_user_country():
  user_id = request.json['user_id'] #JOIN user_id with username of specific id from users
  country_id = request.json['country_id'] #JOIN country_id with country_name in countries
  status = request.json['status']
  notes = request.json['notes']

  new_user_country = users_countries_join(user_id, country_id, status, notes) 
  db.session.commit()

  return jsonify(new_user_country.user_id, new_user_country.country_id, new_user_country.status, new_user_country.notes)

@app.route('/api/users/<int:id>', methods=['GET'])
def userId(id):
  user = users.query.get(id)
  return jsonify(
      username=user.username,
      password=user.password,
      first_name=user.first_name,
      last_name=user.last_name,
      age=user.age,
      nationality=user.nationality,
      picture_url=user.picture_url,
      email=user.email,
      role=user.role,
      auto_scratch=user.auto_scratch
  )

#GOING TO PULL SETTINGS FROM USERS TABLE
'''@app.route('/users/settings')
def userSettings():
  return '<h1>Get users settings by current User</h1>'''

@app.route('/api/users/<int:id>', methods=['PUT'])
def update_user(id): 
  user = users.query.get(id)
  user.username = request.json['username']
  user.email = request.json['email']
  user.password = request.json['password']
  user.first_name = request.json['first_name']
  user.last_name = request.json['last_name']
  user.age = request.json['age']
  user.nationality = request.json['nationality']
  user.picture_url = request.json['picture_url']
  user.role = request.json['role']
  user.auto_scratch = request.json['auto_scratch']

  db.session.commit()
  return user_schema.jsonify(user)

@app.route('/api/users/<int:id>', methods=['DELETE']) #BUGGY
def delete_user(id):
    user = users.query.get(id)
    db.delete(user)
    db.session.commit()

    return user_schema.jsonify(user)

@app.route('/api/signout') #WILL BE CHANGED DEPENDING ON AUTH
def signout():
  session.pop('username')
  return redirect(url_for('index'))

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
