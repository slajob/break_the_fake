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
    url = article_details["url"]
    fake_rating = article_details["fake_rating"]
    fake_rating_community = article_details["fake_rating_community"]
    clickbait_rating = article_details["clickbait_rating"]
    clickbait_rating_community = article_details["clickbait_rating_community"]
    # published_at = article_details["published_at"]
    published_at = text(url)[0]
    title = text(url)[1]
    lead = text(url)[2]
    img_url = article_details["img_url"]
    author = text(url)[3]
    #text returns: publication, title, lead, author
    # text(url)[]

    result = sqdb.add_article(created_at, fake_rating, fake_rating_community, clickbait_rating,
                                            clickbait_rating_community, published_at, title, lead, img_url,
                                            author, url)
    return jsonify(result)

@app.route('/', methods=['GET'])
def index():
    return 'Index page'


if __name__ == '__main__':
    app.run(debug=True)
