from sqlalchemy import func

from models import users, countries, connect_to_db, db
from server import app

def load_users(user_filename):
    for i, row in enumerate(open(user_filename)):
        row = row.rstrip()
        username, password, first_name, last_name, age, nationality, picture_url, email, role = row.split(",")

        user = users(username=username, password=password, first_name=first_name, last_name=last_name,
        age=age, nationality=nationality, picture_url=picture_url, email=email, role=role)

        db.session.add(user)
    db.session.commit()


def load_countries(countries_filename):
    for i, row in enumerate(open(countries_filename)):
        row = row.rstrip()
        country_name, flag, country_img = row.split(",")

        country = countries(country_name=country_name, flag=flag, country_img=country_img)

        db.session.add(country)
    db.session.commit()

if __name__ == "__main__":
connect_to_db(app)
db.create_all()
user_filename = "seed_files/users.txt"
countries_filename = "seed_files/countries.txt"
load_users(user_filename)
load_countries(countries_filename)


