import { useRouter } from "next/router";
import { FC, memo, useMemo, useState } from "react";
import MainArticle from "../../components/MainArticle/MainArticle";
import { Article } from "../../utils/api.types";
import { useAddReview, useArticles } from "../../utils/queries";

import * as Styled from "./Review.styles";

export interface ReviewProps {}

function getRandom(list: any = []) {
  return list[Math.floor(Math.random() * list?.length)];
}

const articleColors = [
  "#F60707",
  "#DC1C0A",
  "#C2320D",
  "#A9470F",
  "#8F5C12",
  "#757215",
  "#5B8718",
  "#429C1A",
  "#28B21D",
  "#0EC720",
];

const Review: FC<ReviewProps> = () => {
  const { data: articles, isLoading } = useArticles();
  const [lastHovered, setLastHovered] = useState(9);
  const [radioChecked, setRadioChecked] = useState("0");
  const router = useRouter();
  const { mutateAsync } = useAddReview();

  const randomArticle: Article = useMemo(
    () => getRandom(articles?.data),
    [articles?.data]
  );

  const onRadioClick = (v: any) => {
    setRadioChecked(v);
  };

  const onSkip = () => {
    router.reload();
  };

  const onSend = async () => {
    await mutateAsync({
      id: randomArticle.id,
      fake_rating: lastHovered + 1,
    });
  };

  if (isLoading) return null;

  return (
    <Styled.Wrapper>
      <MainArticle article={randomArticle} isMain isSingle />
      <Styled.Rate>
        <Styled.RateLabel>
          Oceń wiarygodność w skali od 1 do 10
        </Styled.RateLabel>
        <Styled.RateSlider>
          {articleColors.map((color, index) => (
            <Styled.RateSliderCell
              key={color}
              background={color}
              isFirst={index === 0}
              isLast={index === 9}
              isActive={lastHovered >= index}
              onMouseEnter={() => {
                setLastHovered(index);
              }}
            />
          ))}
        </Styled.RateSlider>
      </Styled.Rate>
      <Styled.FakeNews>
        <Styled.FakeNewsLabel>
          Uważasz, że przedstawiony artykuł może być clickbaitem?
        </Styled.FakeNewsLabel>
        <Styled.FakeNewsRadio>
          <label>
            Nie
            <Styled.Radio
              type="radio"
              id="click_bait"
              name="clickbait"
              checked={radioChecked === "0"}
              onChange={() => onRadioClick("0")}
            />
          </label>
          <label>
            Tak
            <Styled.Radio
              type="radio"
              id="click_bait"
              name="clickbait"
              defaultChecked
              checked={radioChecked === "1"}
              onChange={() => onRadioClick("1")}
            />
          </label>
        </Styled.FakeNewsRadio>
      </Styled.FakeNews>
      <Styled.Buttons>
        <Styled.SecondaryButton onClick={onSkip}>Pomiń</Styled.SecondaryButton>
        <Styled.PrimaryButton onClick={onSend}>Wyślij</Styled.PrimaryButton>
      </Styled.Buttons>
    </Styled.Wrapper>
  );
};

export default memo(Review);
