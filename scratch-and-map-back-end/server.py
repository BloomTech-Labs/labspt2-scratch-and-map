from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, CheckConstraint, ForeignKey, ARRAY




app = Flask(__name__)


# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/scratch_mapdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)

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

@app.route('/friends/list')
def friendsList():
  return '<h1>Get all friends of user by ID</h1>'

@app.route('/friends/list/<int:id>')
def friendsListById(id):
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

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = users.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return users.jsonify(user)


if __name__ == "__main__":
  app.run(debug=True)
