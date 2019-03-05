from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, CheckConstraint, ForeignKey, ARRAY
from flask_marshmallow import Marshmallow 



app = Flask(__name__)


# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/scratch_mapdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Countries Class/Model
class Countries(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  country_name = db.Column(db.String(100), unique=True)
  flag = db.Column(db.String(100), unique=True)
  country_img = db.Column(db.String(100), unique=True)

  def __init__(self, country_name, flag, country_img):
    self.country_name = country_name
    self.flag = flag
    self.country_img = country_img


# Product Schema
class CountriesSchema(ma.Schema):
  class Meta:
    fields = ('id', 'country_name', 'flag', 'country_img')

# Init schema
country_schema = CountriesSchema(strict=True)
countries_schema = CountriesSchema(many=True, strict=True)


#Routes
@app.route('/')
def index():
  return '<h1>Landing page</h1>'

@app.route('/signup')
def signup():
  return '<h1>signup page</h1>'

@app.route('/login')
def login():
  return '<h1>login page</h1>'

@app.route('/mapview')
def mapView():
  return '<h1>Current User</h1>'

@app.route('/mapview/<int:id>')
def mapViewId(id):
  return '<h1>User map info by ID</h1>' 'user ID %d' % id

@app.route('/mapview/friends')
def mapViewFriends():
  return '<h1>Friendslist map info of current user</h1>'

# /friends/list route needs an ID? Just going off of our TDD

@app.route('/friends/list')
def friendsList():
  return '<h1>Get all friends of user by ID</h1>'

@app.route('/friends/list/<int:id>')
def friendsList():
  return '<h1>Friends list by ID</h1>' 'user ID %d' % id

@app.route('/friends/request/send/<int:id>')
def friendRequestSend(id):
  return '<h1>Current user requests another user as a friend</h1>' 'user ID %d' % id

@app.route('/friends/request/accept/<int:id>')
def friendRequestAccept(id):
  return '<h1>Current user accepts another user as a friend</h1>' 'user ID %d' % id

@app.route('/friends/request/decline/<int:id>')
def friendRequestDecline(id):
  return '<h1>Current user decline another user as a friend</h1>' 'user ID %d' % id

@app.route('/users/<username>')
def username(username):
  return '<h1>Get all users with similar name</h1>' 'username %s' % username

@app.route('/users/<int:id>')
def userId(id):
  return '<h1>Get user by ID</h1>' 'user ID %d' % id

@app.route('/users/settings')
def userSettings():
  return '<h1>Get users settings by current User</h1>'

@app.route('/countries', methods=['POST'])
def add_country():
  countries = request.json['countries'] #list of objects [{}]

  for country in countries:
    country_name = country.country_name
    flag = country.flag
    country_img = country.country_img

    new_country = Countries(country_name, flag, country_img)

    db.session.add(new_country)
    db.session.commit()

    return country_schema,jsonify(new_country)




if __name__ == "__main__":
  app.run()