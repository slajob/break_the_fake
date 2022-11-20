import Image from "next/image";
import { FC, memo, useEffect } from "react";
import MainArticle from "../../components/MainArticle/MainArticle";
import api from "../../utils/api";
import { useArticles } from "../../utils/queries";

import * as Styled from "./Home.styles";

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { data: articles, isLoading } = useArticles();

  if (isLoading) return null;

  const [mainArticle, ...remainingArticles] = articles?.data || [];

  return (
    <Styled.Wrapper>
      <Styled.ArticleList>
        <MainArticle article={mainArticle} isMain />
        <Styled.RemainingWrapper>
          <Styled.RemainingWrapperTitle>
            Wszystkie artykuły
          </Styled.RemainingWrapperTitle>
          <Styled.FilterButton>Filtruj</Styled.FilterButton>
        </Styled.RemainingWrapper>
        {remainingArticles.map((article) => (
          <MainArticle article={article} key={article.id} />
        ))}
      </Styled.ArticleList>
    </Styled.Wrapper>
  );
};

export default memo(Home);
