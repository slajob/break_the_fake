type Timestamp = number;

// GET /articles
// GET /articles?search=test
export type Article = {
  id: number;
  created_at: Timestamp;

  fake_rating: number; // 1-10 average
  fake_rating_community: number;

  is_clickbait: boolean;

  published_at: Timestamp;
  title: string;
  description: string;
  img_url: string;
  author: string;
  url: string;

  review_data: {
    other_img_urls: string[];
    hate_speech_detected: boolean;
    // ...
  };
};

// POST /articles
export type Input = {
  url: string;
};

// POST /review
export type Review = {
  // id: number;
  article_id: number;
  fake_rating: number; // 1-10
  is_clickbait: boolean;
  // ...
};

// GET /articles/random
