import sqlite3
DATABASE = "break_the_fake.db"


def get_db():
    conn = sqlite3.connect(DATABASE)
    return conn

def insert_article(created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,
                   published_at, title, description, img_url, author, url):
    db = get_db()
    cursor = db.cursor()
    cmd = "INSERT INTO articles(created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,published_at, title, description, img_url, author, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    cursor.execute(cmd, [created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,published_at, title, description, img_url, author, url])
    db.commit()
    return True

def get_articles():
    db = get_db()
    cursor = db.cursor()
    query = "SELECT * FROM articles"
    cursor.execute(query)
    return cursor.fetchall()