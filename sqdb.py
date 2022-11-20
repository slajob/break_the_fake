import sqlite3

DATABASE = "break_the_fake.db"


def get_db():
    conn = sqlite3.connect(DATABASE)
    return conn


def add_article(created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,
                published_at, title, lead, img_url, author, url):
    db = get_db()
    cursor = db.cursor()
    cmd = "INSERT INTO articles(created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,published_at, title, lead, img_url, author, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    cursor.execute(cmd, [created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,
                         published_at, title, lead, img_url, author, url])
    db.commit()
    return True


def get_articles():
    db = get_db()
    cursor = db.cursor()
    query = "SELECT * FROM articles"
    cursor.execute(query)

    values = [
            dict(id=row[0], created_at=row[1], fake_rating=row[2], fake_rating_community=row[3], clickbait_rating=row[4],
                 clickbait_rating_community=row[5], published_at=row[6], title=row[7], lead=row[8], img_url=row[9],
                 author=row[10], url=row[11])
            for row in cursor.fetchall()
        ]
    return values
