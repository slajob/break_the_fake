import json
from flask import Flask, jsonify, request

import sqdb

app = Flask(__name__)


@app.route('/articles', methods=['GET'])
def get_articles():
    articles = sqdb.get_articles()
    return jsonify(articles)

@app.route('/insert_article', methods=['POST'])
def article_post():
    article_details = request.get_json()
    created_at = article_details["created_at"]
    fake_rating = article_details["fake_rating"]
    fake_rating_community = article_details["fake_rating_community"]
    clickbait_rating = article_details["clickbait_rating"]
    clickbait_rating_community = article_details["clickbait_rating_community"]
    published_at = article_details["published_at"]
    title = article_details["title"]
    description = article_details["description"]
    img_url = article_details["img_url"]
    author = article_details["author"]
    url = article_details["url"]
    result = sqdb.insert_article(created_at, fake_rating, fake_rating_community, clickbait_rating,
                                            clickbait_rating_community, published_at, title, description, img_url,
                                            author, url)
    return jsonify(result)

@app.route('/', methods=['GET'])
def index():
    return 'Index page'


if __name__ == '__main__':
    app.run(debug=True)
