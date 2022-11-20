import { useRouter } from "next/router";
import { FC, memo } from "react";
import MainArticle from "../../components/MainArticle/MainArticle";
import { useArticles } from "../../utils/queries";

import * as Styled from "./Article.styles";

export interface ArticleProps {}

const Article: FC<ArticleProps> = () => {
  const router = useRouter();
  const { data: articles, isLoading } = useArticles();

  if (isLoading) return null;

  const articleId = Number(router.query["id"]);

  const article = articles?.data.find(({ id }) => id === articleId);

  if (!article) return <div>404</div>;

  return (
    <Styled.Wrapper>
      <MainArticle article={article} isMain isSingle />
      {article.is_clickbait && (
        <Styled.IsClickBait>
          <Styled.ClickBait>
            Uwaga, artykuł może być clickbaitem
          </Styled.ClickBait>
        </Styled.IsClickBait>
      )}
      <Styled.Metrics>
        <Styled.MetricsTitle>
          Wskaźnik prawdopodobieństwa fake newsa
        </Styled.MetricsTitle>
        <Styled.Metric>
          <Styled.MetricTitle>Opinia użytkowników</Styled.MetricTitle>

          <Styled.MetricContent>
            <Styled.MetricBar percent={article.fake_rating_community * 10}>
              <Styled.MetricBarFilled
                percent={article.fake_rating_community * 10}
              />
            </Styled.MetricBar>
            <Styled.MetricValue>
              {article.fake_rating_community}
            </Styled.MetricValue>
          </Styled.MetricContent>
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricTitle>Opinia ekspertów</Styled.MetricTitle>
          <Styled.MetricContent>
            <Styled.MetricBar percent={article.fake_rating * 10}>
              <Styled.MetricBarFilled percent={article.fake_rating * 10} />
            </Styled.MetricBar>
            <Styled.MetricValue>{article.fake_rating}</Styled.MetricValue>
          </Styled.MetricContent>
        </Styled.Metric>
      </Styled.Metrics>
    </Styled.Wrapper>
  );
};

export default memo(Article);
