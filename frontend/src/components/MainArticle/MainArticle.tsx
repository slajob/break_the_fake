import { useRouter } from "next/router";
import { FC, memo } from "react";
import { Article } from "../../utils/api.types";

import * as Styled from "./MainArticle.styles";

export interface MainArticleProps {
  article: Article;
  isMain?: boolean;
  isSingle?: boolean;
}

const addLeadingZero = (number: number): string => {
  if (number > 9) return `${number}`;

  return `0${number}`;
};

const formatDate = (value: string | Date | number): string => {
  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${addLeadingZero(day)}/${addLeadingZero(month)}/${year}`;
};

const MainArticle: FC<MainArticleProps> = ({
  article,
  isMain = false,
  isSingle = false,
}) => {
  const router = useRouter();

  const handleArticleButtonClick = () => {
    window?.open(article.url, "_blank");
  };

  const handleMoreInfoButtonClick = () => {
    router.push(`/article/${article.id}`);
  };

  if (!article) return null;

  const score = article.fake_rating;

  return (
    <Styled.Wrapper isSingle={isSingle}>
      <Styled.Title>
        <div>Wojna</div>
        <Styled.TitleBorder />
      </Styled.Title>
      <Styled.Top>
        <Styled.Tags>
          <Styled.Tag>#wojna</Styled.Tag>
          <Styled.Tag>#ukraina</Styled.Tag>
          <Styled.Tag>#wazne</Styled.Tag>
          <Styled.Tag>#polska</Styled.Tag>
        </Styled.Tags>
        <Styled.Assesment>
          <Styled.AssesmentTitle>Przekaz:</Styled.AssesmentTitle>
          <Styled.AssesmentScore>Pozytywny</Styled.AssesmentScore>
        </Styled.Assesment>
      </Styled.Top>
      <Styled.Content>
        <Styled.Image isMain={isMain}>
          {/* eslint-disable-next-line */}
          <img src="/kot.jpg" alt="img" style={{ width: "80%" }} />
        </Styled.Image>
        <Styled.Right isMain={isMain}>
          {isMain && !isSingle && (
            <Styled.HotTopic>
              {/* eslint-disable-next-line */}
              <img src="/flame.svg" alt="Flame" />
              <Styled.HotTopicLabel>Gorący temat</Styled.HotTopicLabel>
            </Styled.HotTopic>
          )}
          <Styled.Info>
            <Styled.InfoText>
              <Styled.InfoTextLabel>źródło:</Styled.InfoTextLabel>
              <Styled.InfoTextValue>
                {new URL(article.url).hostname}
              </Styled.InfoTextValue>
            </Styled.InfoText>
            <Styled.InfoText>
              <Styled.InfoTextLabel>Autor:</Styled.InfoTextLabel>
              <Styled.InfoTextValue>{article.author}</Styled.InfoTextValue>
            </Styled.InfoText>
            <Styled.InfoText>
              <Styled.InfoTextLabel>opublikowano:</Styled.InfoTextLabel>
              <Styled.InfoTextValue>
                {String(article.published_at).split(",")[1]}
              </Styled.InfoTextValue>
            </Styled.InfoText>
          </Styled.Info>
          <Styled.Texts>
            <Styled.Text>
              <Styled.ArticleTitle>{article.title}</Styled.ArticleTitle>
              <Styled.Summary>{article.description}</Styled.Summary>
            </Styled.Text>
            {!isSingle && !!score && (
              <Styled.Score value={Math.round(score)}>
                {score.toFixed(1)}
              </Styled.Score>
            )}
          </Styled.Texts>
          \
          <Styled.Buttons>
            <Styled.SecondaryButton onClick={handleArticleButtonClick}>
              Artykuł
            </Styled.SecondaryButton>
            {!isSingle && (
              <Styled.Button onClick={handleMoreInfoButtonClick}>
                Więcej
              </Styled.Button>
            )}
          </Styled.Buttons>
        </Styled.Right>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default memo(MainArticle);
