"""
This file (test_models.py) contains the unit tests for the models.py file.
"""


def test_new_user(new_user):
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the email, hashed_password, and role fields are defined correctly
    """
    assert new_user.email == 'pascale123@gmail.com'
    assert new_user.password != 'FlaskIsAwesome'
    assert new_user.role == 'user'

