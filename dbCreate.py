from models import *
from server import *

with app.app_context():
    db.init_app(app)
    db.create_all()
