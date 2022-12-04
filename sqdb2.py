import sqlite3

class Database:
    def __init__(self, database_name):
        self.connectdb = sqlite3.connect(database_name)
        self.cursor = self.connectdb.cursor()

    def __del__(self):
        self.connectdb.close()

    def get_articles(self):
        self.cursor.execute("SELECT * FROM articles")

    def add_article(self, created_at, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community,
                published_at, title, lead, img_url, author, url):
        cmd = '''INSERT INTO articles(created_at, fake_rating, fake_rating_community, clickbait_rating,
         clickbait_rating_community,published_at, title, lead, img_url, author, url) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'''
        self.cursor.execute(cmd, [created_at, fake_rating, fake_rating_community, clickbait_rating,
                                  clickbait_rating_community, published_at, title, lead, img_url, author, url])
        self.connectdb.commit()

    def review_article(self, fake_rating, fake_rating_community, clickbait_rating, clickbait_rating_community):
        cmd = f"UPDATE articles SET fake_rating = '{fake_rating}', fake_rating_community = '{fake_rating_community}'," \
              f" clickbait_rating = '{clickbait_rating}', clickbait_rating_community = '{clickbait_rating_community}'" \
              f" WHERE id = '{id}'"
        self.cursor.execute(cmd)
        self.connectdb.commit()
