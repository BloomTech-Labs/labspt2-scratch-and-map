def return_users():
    users = db.session.query(users.username).all()

    return users
