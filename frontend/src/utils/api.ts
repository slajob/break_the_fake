import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Article } from "./api.types";

class Api {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8000",
      headers: {
        common: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    });
  }

  getArticles = (): Promise<AxiosResponse<Article[]>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              author: "Jakub Leszczyński",
              clickbait_rating: 5.3,
              clickbait_rating_community: 2.3,
              created_at: 1668874343532,
              description: "Lorem description",
              title: "Lorem title",
              fake_rating: 1.2,
              fake_rating_community: 1.4,
              id: 1,
              img_url:
                "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/38_afi_article1_caring-for-a-kitten-tips-for-the-first-month.png",
              published_at: 1668874343532,
              url: "https://google.com",
              review_data: {
                hate_speech_detected: false,
                other_img_urls: [
                  "https://www.collinsdictionary.com/images/full/kitten_101801980.jpg",
                  "https://www.lomsnesvet.ca/wp-content/uploads/sites/21/2019/08/Kitten-Blog.jpg",
                ],
              },
            },
            {
              author: "Jakub Leszczyński",
              clickbait_rating: 5.3,
              clickbait_rating_community: 2.3,
              created_at: 1668874343532,
              description: "Lorem description",
              title: "Lorem title",
              fake_rating: 1.2,
              fake_rating_community: 1.4,
              id: 2,
              img_url:
                "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/38_afi_article1_caring-for-a-kitten-tips-for-the-first-month.png",
              published_at: 1668874343532,
              url: "https://google.com",
              review_data: {
                hate_speech_detected: false,
                other_img_urls: [
                  "https://www.collinsdictionary.com/images/full/kitten_101801980.jpg",
                  "https://www.lomsnesvet.ca/wp-content/uploads/sites/21/2019/08/Kitten-Blog.jpg",
                ],
              },
            },
            {
              author: "Jakub Leszczyński",
              clickbait_rating: 5.3,
              clickbait_rating_community: 2.3,
              created_at: 1668874343532,
              description: "Lorem description",
              title: "Lorem title",
              fake_rating: 1.2,
              fake_rating_community: 1.4,
              id: 3,
              img_url:
                "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/38_afi_article1_caring-for-a-kitten-tips-for-the-first-month.png",
              published_at: 1668874343532,
              url: "https://google.com",
              review_data: {
                hate_speech_detected: false,
                other_img_urls: [
                  "https://www.collinsdictionary.com/images/full/kitten_101801980.jpg",
                  "https://www.lomsnesvet.ca/wp-content/uploads/sites/21/2019/08/Kitten-Blog.jpg",
                ],
              },
            },
          ],
          headers: {},
          status: 200,
          statusText: "OK",
          config: {},
        });
      }, 500);
    });
  };

  postArticle = (): Promise<AxiosResponse<{ success: boolean }>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: { success: true },
          headers: {},
          status: 200,
          statusText: "OK",
          config: {},
        });
      }, 500);
    });
  };

  postReview = (): Promise<AxiosResponse<{ success: boolean }>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: { success: true },
          headers: {},
          status: 200,
          statusText: "OK",
          config: {},
        });
      }, 500);
    });
  };
}

export default new Api();
