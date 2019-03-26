from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, TEXT, Boolean, String, CheckConstraint, ForeignKey, ARRAY
from flask_marshmallow import Marshmallow
from models import *
from dotenv import load_dotenv
import os

app = Flask(__name__)
cors = CORS(app)

def connect_to_db(app, db_uri):
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

load_dotenv('.env')
DATABASE_URL = os.environ.get("DATABASE_URL")
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

#AUTH ENDPOINTS
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
    home_country = request.json['home_country']
    fb_user_id = request.json['fb_user_id']

    new_user = users(username, password, first_name, last_name, age, nationality, picture_url, email, role, auto_scratch, home_country, fb_user_id)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.id)

@app.route('/api/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']
    user = users.query.filter_by(username=username, password=password).first()
    if user_schema.jsonify(user) == jsonify({}):
        return "False"
    else:
        return "True"

@app.route('/api/users/fb/<fbid>', methods=['GET'])
def get_user_by_fbid(fbid):
    user = users.query.filter(users.fb_user_id==fbid).first()
    return user_schema.jsonify(user)

#USERS ENDPOINTS
@app.route('/api/users', methods =['GET'])
def get_users():
  user = users.query.all()
  user_schema = UserSchema(many = True)
  output = user_schema.dump(user).data
  return jsonify({'users' : output})

@app.route('/api/users/<int:id>', methods=['GET'])
def userId(id):
  user = users.query.get(id)
  return user_schema.jsonify(user)

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
    user.fb_user_id = request.json['fb_user_id']

    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/api/users/<int:id>', methods=['DELETE']) #BUGGY, but do we need this if we do away with admin?
def delete_user(id):
    user = users.query.get(id)
    db.delete(user)
    db.session.commit()

    return user_schema.jsonify(user)

#COUNTRIES ENDPOINTS
@app.route('/api/countries/<int:id>', methods=['GET'])
def countryById(id):
  country = countries.query.get(id)
  return country_schema.jsonify(country)

@app.route('/api/countries/<int:id>', methods=['PUT'])
def update_country(id):
   country = countries.query.get(id)
   country.flag = request.json['flag']
   country.country_img = request.json['country_img']
   country.code = request.json['code']

   db.session.commit()
   return country_schema.jsonify(country)

@app.route('/api/countries', methods=['POST'])
def addCountry():
    country_name = request.json['country_name']
    flag = request.json['flag']
    country_img = request.json['country_img']
    code = request.json['code']

    new_country = countries(country_name, flag, country_img, code)
    db.session.add(new_country)
    db.session.commit()
    return jsonify(new_country.id,)

#MAPVIEW ENDPOINTS
@app.route('/api/mapview', methods=['GET'])
def mapView():
  user = users_countries_join.query.all()
  return user_country_schema.jsonify(user)
  #user_country_schema = UserCountrySchema(many = True)
  #output = user_country_schema.dump(user).data
  #return jsonify({user : output})

@app.route('/mapview/<int:id>') #This may refer to the relationship with users, working on displaying collection of mapview by user id objects as a field in users table
def mapViewId(id):
  return '<h1>User map info by ID</h1>' 'user ID %d' % id

@app.route('/api/mapview', methods=['POST'])
def add_mapView_data():
  user_id = request.json['user_id'] #JOIN user_id with username of specific id from users
  country_id = request.json['country_id'] #JOIN country_id with country_name in countries
  status = request.json['status']
  notes = request.json['notes']

  new_user_country = users_countries_join(user_id, country_id, status, notes)
  db.session.add(new_user_country)
  db.session.commit()

  return jsonify(new_user_country.id,new_user_country.user_id, new_user_country.country_id, new_user_country.status, new_user_country.notes)

@app.route('/api/mapview/<int:user_id>/<int:country_id>/<int:id>', methods=['PUT'])
def update_mapView_data(user_id, country_id, id):
    user_country = users_countries_join.query.get(id)
    user_country.user_id = request.json['user_id']
    user_country.country_id = request.json['country_id']
    user_country.status = request.json['status']
    user_country.notes = request.json['notes']

    db.session.commit()
    return user_country_schema.jsonify(user_country)

@app.route('/api/signout') #WILL BE CHANGED DEPENDING ON AUTH
def signout():
  session.pop('username')
  return redirect(url_for('index'))

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=PORT, debug=DEBUG)


'''MOVED THESE OUT OF THE WAY UNTIL THEY ARE USED
@app.route('/mapview/friends')
def mapViewFriends():
  return '<h1>Friendslist map info of current user</h1>'

@app.route('/friends/list')
def friendsList():
  return '<h1>Get all friends of user by ID</h1>'''

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
