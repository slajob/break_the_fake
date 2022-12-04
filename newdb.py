from sys import argv
from sqdb2 import Database


def new_table(database_name):
    db = Database(database_name)
    db.cursor.execute('''CREATE TABLE "articles" (
"id" INTEGER,
"created_at" NUMERIC,
"fake_rating" NUMERIC,
"fake_rating_community" NUMERIC,
"clickbait_rating" NUMERIC,
"clickbait_rating_community" NUMERIC,
"published_at" NUMERIC,
"title" TEXT,
"lead" TEXT,
"img_url" TEXT,
"author" TEXT,
"url" TEXT,
PRIMARY KEY("id")
)''')
    db.connectdb.commit()

if __name__ == '__main__':
    if len(argv) > 1:
        newdbname = argv[1]+'.db'
        print(f'Creating new database: {newdbname}')
        new_table(newdbname)
