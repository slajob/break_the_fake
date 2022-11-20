import time
from flask import Flask, jsonify, request
import sqdb
from scrap import text

app = Flask(__name__)


@app.route('/articles', methods=['GET'])
def get_articles():
    articles = sqdb.get_articles()
    return jsonify(articles)

@app.route('/add_article', methods=['POST'])
def add_article():
    article_details = request.get_json()
    created_at = time.time()
    fake_rating = article_details["fake_rating"]
    fake_rating_community = article_details["fake_rating_community"]
    clickbait_rating = article_details["clickbait_rating"]
    clickbait_rating_community = article_details["clickbait_rating_community"]
    published_at = article_details["published_at"]
    title = article_details["title"]
    lead = article_details["lead"]
    img_url = article_details["img_url"]
    author = article_details["author"]
    url = article_details["url"]
    print(text(url))
    result = sqdb.add_article(created_at, fake_rating, fake_rating_community, clickbait_rating,
                                            clickbait_rating_community, published_at, title, lead, img_url,
                                            author, url)
    return jsonify(result)

@app.route('/', methods=['GET'])
def index():
    return 'Index page'


if __name__ == '__main__':
    app.run(debug=True)
