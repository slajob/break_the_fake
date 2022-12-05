import os
import requests
from bs4 import BeautifulSoup
import re


def show_similar_images_from_db(start_image_idx, n_inputs=5, n_neighbors=10):
    input_images = images[start_image_idx:start_image_idx+n_inputs]
    knn = NearestNeighbors(n_neighbors=5, metric="cosine")
    features = vectorizer.predict(input_images)
    knn_output = knn.kneighbors(features, n_neighbors=n_neighbors)
    
    images_with_distances_and_nbors = zip(input_images, *knn_output)
    
    fig, axes = plt.subplots(len(input_images), n_neighbors+1, figsize=(20, len(input_images)*3))
    
    for i, (image, distances, nbors) in enumerate(images_with_distances_and_nbors):
        for j in range(n_neighbors+1):
            ax = axes[i, j]
            img = image if j==0 else images[nbors[j-1]]
            if j == 0:
                ax.set_title("Input Image")
            else:
                ax.set_title(f"Sim: {1-distances[j-1]:.2f}")
            ax.set_axis_off()
            ax.imshow(img)

    fig.savefig("02-image-search-grid.png")


def images_google(path):
    filepath=os.path.abspath(path)
    searchUrl = 'http://www.google.hr/searchbyimage/upload'
    multipart = {'encoded_image': (filepath, open(filepath, 'rb')), 'image_content': ''}
    response = requests.post(searchUrl, files=multipart, allow_redirects=False)
    fetchUrl = response.headers['Location']
    print(fetchUrl)
    page = requests.get(fetchUrl)
    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.findAll(r"s='data:image/jpeg;base64,(.*?)';")
    print(results)


CLEANR = re.compile('<.*?>') 


def cleanhtml(raw_html):
  cleantext = re.sub(CLEANR, '', raw_html)
  return cleantext


def text(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    if re.search('interia.pl', url):
        img_src=soup.find(class_='img-responsive')['src']
        content=soup.find(class_="article-content").text
        title = soup.find('title').text
        serwis="INTERIA"
        lead = soup.find(class_='article-lead').text
        author = soup.find(class_='article-author-name').text
        publication = soup.find(class_='article-date').text
    if re.search('wp.pl', url):
        img_src=soup.find(class_='d2M9GK-e')['src']
        contenttemp=str(soup.find_all(class_="article--text"))
        content=cleanhtml(contenttemp)
        title = soup.find('title').text
        serwis="WP.PL"
        lead = soup.find(class_='article--lead').text
        author = soup.find(class_='signature--author').text
        publication = soup.find(class_='signature--when d2VIX-Kh desktop').text
    if re.search('onet.pl', url):
        img_temp=soup.find('picture')
        img_src=img_temp.find('img')['src']
        title = soup.find('title').text
        content=soup.find(class_="detailContent").text
        serwis='onet.pl'
        lead = soup.find(class_='hyphenate lead').text
        author = soup.find(class_='name').text
        publication = soup.find(class_='datePublished').text
    if re.search('o2.pl', url):
        img_src=soup.find('img', class_='sc-ah7wm2-3 iZStgW')['src']
        title = soup.find(class_='sc-1mskw74-0 sc-7eqdwf-0 cYcZJb').text
        content=soup.find('article').text
        serwis='o2.pl'
        lead = soup.find(class_='sc-1mskw74-0 sc-7eqdwf-0 sc-24u8x8-0 cTKBPX').text
        author = soup.find(class_='sc-1mskw74-0 sc-7eqdwf-0 ihSKrH sc-6fk6fo-0 eLtABC').text
        publication = soup.find('time').text
    return publication, title, lead, author, content, serwis, img_src
