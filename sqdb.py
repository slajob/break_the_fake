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

    # key = cursor.description
    # values = cursor.fetchall()
#[(1, 1668873815.1195192, 6.5, 5.43, 6.4, 4.8, 1668875608.3761518, 'SomeTitle', 'blablablablalballalala', 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg', 'ktoś', 'https://przegladsportowy.onet.pl/pilka-nozna/ceny-w-polskiej-restauracji-w-katarze-przebily-wszystko-to-nie-najwieksze-zaskoczenie/hyjyx5r'), (2, 234324.32432, '', '', '', '', '', '', 'testlead', '', '', 'dupa'), (3, 234324.32432, '', '', '', '', '', '', 'testlead', '', '', 'dupa')]
    #     article = {}
    #     article["id"] = i["id"]
    #     article["created_at"] = i["created_at"]
    #     article["fake_rating"] = i["fake_rating"]
    #     article["fake_rating_community"] = i["fake_rating_community"]
    #     article["clickbait_rating"] = i["clickbait_rating"]
    #     article["clickbait_rating_community"] = i["clickbait_rating_community"]
    #     article["published_at"] = i["published_at"]
    #     article["title"] = i["title"]
    #     article["lead"] = i["lead"]
    #     article["img_url"] = i["img_url"]
    #     article["author"] = i["author"]
    #     article["url"] = i["url"]
    #     data.append(article)