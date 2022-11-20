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
    return this.client.get("/articles");
  };

  postArticle = (url: string): Promise<AxiosResponse<{ success: boolean }>> => {
    return this.client.post("/add_article", {
      id: null,
      created_at: null,
      fake_rating: null, // 1-10 average
      fake_rating_community: null,
      is_clickbait: null,
      published_at: null,
      clickbait_rating: null,
      clickbait_rating_community: null,
      title: null,
      description: null,
      img_url: null,
      author: null,
      review_data: {
        other_img_urls: null,
        hate_speech_detected: null,
        // ...
      },

      url,
    });
  };

  postReview = (input: {
    article_id: number;
    fake_rating: number;
    is_clickbait: boolean;
  }): Promise<AxiosResponse<{ success: boolean }>> => {
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
