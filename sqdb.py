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
    cursor.execute(cmd, [created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,published_at, title, lead, img_url, author, url])
    db.commit()
    return True

def get_articles():
    db = get_db()
    cursor = db.cursor()
    query = "SELECT * FROM articles"
    cursor.execute(query)
    key = cursor.description
    value = cursor.fetchall()[0]
    return {
        'id': value[0],
        'created_at': value[1],
        "fake_rating": value[2],
        "fake_rating_community": value[3],
        "clickbait_rating": value[4],
        "clickbait_rating_community": value[5],
        "published_at": value[6],
        "title": value[7],
        "lead": value[8],
        "img_url": value[9],
        "author": value[10],
        "url": value[11]
            }

# def update_article(id):
