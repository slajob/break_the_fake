import io
import os

#STT
# HWR
import requests
import webbrowser
import hashlib
import io
import requests
from bs4 import BeautifulSoup
# import matplotlib.pyplot as plt
import re



def detect_document(path,typ,detale,jsonx):
    """Detects document features in an image."""
    #print("odczyt pliku")
    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response=[]

    if str(typ)=="pismo_odręczne":
        
        response = client.document_text_detection(image=image)
        all_text = ''

        texts = response.text_annotations
        licz=0
        odp=""
        for text in texts:
            #print('\n"{}"'.format(text.description))
            if licz==0:
                #print(text.description)
                odp=text.description
                licz=licz+1
        #print("")
        
        '''
        for page in response.full_text_annotation.pages:
            for block in page.blocks:
                if detale:
                    print('\nBlock confidence: {}\n'.format(block.confidence))

                for paragraph in block.paragraphs:
                    if detale:
                        print('Paragraph confidence: {}'.format(paragraph.confidence))

                    for word in paragraph.words:
                        word_text = ''.join([symbol.text for symbol in word.symbols])
                        all_text = all_text + word_text + ' '
                        if detale:
                            print('Word text: {} (confidence: {})'.format(word_text, word.confidence))

                        for symbol in word.symbols:
                            if detale:
                                print('\tSymbol: {} (confidence: {})'.format(symbol.text, symbol.confidence))
        #print(all_text)
        '''  

    if str(typ)=="obiekty_sceny":
        # Performs label detection on the image file
        response = client.label_detection(image=image)
        labels = response.label_annotations
        print('Wykryte obiekty:')
        for label in labels:
            print(label.description)

    # response = client.

    if jsonx:
        print("")
        print(response)
        print("")
        plik = open('odp.json', 'w')
        plik.write(str(response))
        plik.close()
    
    return odp

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


def text(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    if re.search('interia.pl', url):
        content=soup.find(class_="article-content").text
        title = soup.find('title').text
        serwis="INTERIA"
        desc = soup.find(class_='article-lead').text
        author = soup.find(class_='article-author-name').text
        publication = soup.find(class_='article-date').text
    if re.search('wp.pl', url):
        #contenttemp=str(soup.find_all(class_="article--text"))
        #content=contenttemp.
        title = soup.find('title').text
        serwis="WP.PL"
        lead = soup.find(class_='article--lead').text
        author = soup.find(class_='signature--author').text
        publication = soup.find(class_='signature--when d2VIX-Kh desktop').text
    if re.search('onet.pl', url):
        title = soup.find('title').text
        serwis='onet.pl'
        lead = soup.find(class_='hyphenate lead').text
        author = soup.find(class_='name').text
        publication = soup.find(class_='datePublished').text
    if re.search('o2.pl', url):
        title = soup.find(class_='uf3vtz-1 kFqbVU').text
        serwis='o2.pl'
        lead = soup.find(class_='uf3vtz-4 iXEThf').text
        author = soup.find(class_='sc-141an0q-0 cwhzqq').text
        publication = soup.find(class_='t357wt-0 bobNZX').text
    return publication, title, lead, author
    
     



# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    analiza_czasu=True
    detale_analizy=True
    pokaz_json=True
    typ_analizy= "obiekty_sceny"
    print("")
    images_google('/shopping.png')

    url="https://wydarzenia.interia.pl/raporty/raport-ukraina-rosja/aktualnosci/news-przewodow-pogrzeb-pierwszej-ofiary-wybuchu-rakiety,nId,6421383?parametr=zobacz_takze"
    url2="https://wiadomosci.wp.pl/idzie-kryzys-dudek-nie-bedzie-oszczednosci-bez-ograniczenia-programow-spolecznych-6835377261013664a"
    url3="https://wiadomosci.onet.pl/tylko-w-onecie/polka-odwiedzila-rosje-i-nie-ma-zludzen-zachod-widzi-to-co-chce-widziec/8vxwvxp"
    url4="https://www.o2.pl/biznes/ludzie-przecieraja-oczy-na-jarmarku-w-gdansku-cena-grochowki-szokuje-6835661165365952a"
    text(url2)
    #odp=detect_document("/shopping.png",typ_analizy,detale_analizy,pokaz_json)
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
