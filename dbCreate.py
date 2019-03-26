from server import *
from models import *
from seed import *

with app.app_context():
    db.create_all()

load_users("seed_files/MOCK_DATA.csv")
load_countries("seed_files/MOCK_DATA.csv")
