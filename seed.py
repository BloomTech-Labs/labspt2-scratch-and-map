from sqlalchemy import func
import json
from models import users, countries
from server import app, connect_to_db, db

def load_users(user_filename):
    for i, row in enumerate(open(user_filename)):
        if row[0]!='i':
            row = row.rstrip()
            user_id, username, password, first_name, last_name, age, nationality, picture_url, email, role, auto_scratch, home_country, fb_user_id = row.split(",")

            user = users(username=username, password=password, first_name=first_name, last_name=last_name,
            age=age, nationality=nationality, picture_url=picture_url, email=email, role=role, auto_scratch=auto_scratch, home_country=home_country, fb_user_id=fb_user_id)

            db.session.add(user)
    db.session.commit()


def load_countries(countries_filename):
    for i, row in enumerate(open(countries_filename)):
        row = row.rstrip()
        country_id, country_name, flag, country_img, country_code = row.split(",")

        country = countries(country_name=country_name, flag=flag, country_img=country_img, code=country_code)

        db.session.add(country)
    db.session.commit()

if __name__ == "__main__":
    connect_to_db(app)
    db.create_all()
    user_filename = "seed_files/MOCK_DATA.csv"
    countries_filename = "seed_files/COUNTRY_DATA.csv"
    load_users(user_filename)
    load_countries(countries_filename)
