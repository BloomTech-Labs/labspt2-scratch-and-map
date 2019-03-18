import pytest
from server import db
from models import users


@pytest.fixture(scope='module')
def new_user():
    user = users( 'pdiddy','password','pascale','pierre', 20, 'Haitian', 'http://lorempixel.com/100/100/','pascale123@gmail.com', 'user', False, 'USA')
    return user


@pytest.fixture(scope='module')
def test_client():
    flask_app = create_app('flask_test.cfg')

    # Flask provides a way to test your application by exposing the Werkzeug test Client
    # and handling the context locals for you.
    testing_client = flask_app.test_client()

    # Establish an application context before running the tests.
    ctx = flask_app.app_context()
    ctx.push()

    yield testing_client  # this is where the testing happens!

    ctx.pop()


@pytest.fixture(scope='module')
def init_database():
    # Create the database and the database table
    db.create_all()

    # Insert user data
    user1 = users(email='pascale123@gmail.com', plaintext_password='FlaskIsAwesome')
    user2 = users(email='testtesttest@gmail.com', plaintext_password='testtesttest')
    db.session.add(user1)
    db.session.add(user2)

    # Commit the changes for the users
    db.session.commit()

    yield db  # this is where the testing happens!

    db.drop_all()
