import Image from "next/image";
import { FC, memo } from "react";
import { useArticles } from "../../utils/queries";

import * as Styled from "./Home.styles";

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { data: articles, isLoading } = useArticles();

  if (isLoading) return null;

  return (
    <Styled.Wrapper>
      <Styled.ArticleList>
        {articles?.data?.map((article) => (
          <Styled.Article key={article.id}>
            <div>Tytuł: {article.title}</div>
            <div>Autor: {article.author}</div>
            <div>Clickbait: {article.clickbait_rating}</div>
            <div>
              Clickbait społeczność: {article.clickbait_rating_community}
            </div>
            <div>Tekst: {article.description}</div>
            <div>Fake: {article.fake_rating}</div>
            <div>Fake społeczność: {article.fake_rating_community}</div>
            <div>
              Obrazek: {/* eslint-disable-next-line */}
              <img src={article.img_url} alt="Img" width="100" height="100" />
            </div>
            <div>{new Date(article.published_at).toISOString()}</div>
          </Styled.Article>
        ))}
      </Styled.ArticleList>
    </Styled.Wrapper>
  );
};

export default memo(Home);
