import sqlite3


class Database:
    def __init__(self, database_name):
        self.connectdb = sqlite3.connect(database_name)
        self.cursor = self.connectdb.cursor()

    def __del__(self):
        self.connectdb.close()

global database_name
database_name = "break_the_fake.db"


def add_article(created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,
                published_at, title, lead, img_url, author, url):
    db = Database(database_name)
    query = "INSERT INTO articles(created_at, fake_rating, fake_rating_community, clickbait_rating, " \
            "clickbait_rating_community,published_at, title, lead, img_url, author, url) " \
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    db.cursor.execute(query, [created_at, fake_rating, fake_rating_community, clickbait_rating,
                              clickbait_rating_community, published_at, title, lead, img_url, author, url])
    db.connectdb.commit()
    return True


def get_articles():
    db = Database(database_name)
    query = "SELECT * FROM articles"
    db.cursor.execute(query)
    values = [
            dict(id=row[0], created_at=row[1], fake_rating=row[2], fake_rating_community=row[3],
                 clickbait_rating=row[4], clickbait_rating_community=row[5], published_at=row[6], title=row[7],
                 lead=row[8], img_url=row[9], author=row[10], url=row[11])
            for row in db.cursor.fetchall()
        ]
    return values


def review_article(id, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community):
    db = Database(database_name)
    query = f"UPDATE articles SET fake_rating = '{fake_rating}', fake_rating_community = '{fake_rating_community}'," \
            f" clickbait_rating = '{clickbait_rating}', clickbait_rating_community = '{clickbait_rating_community}' " \
            f"WHERE id = '{id}'"
    db.cursor.execute(query)
    db.connectdb.commit()
    return True
