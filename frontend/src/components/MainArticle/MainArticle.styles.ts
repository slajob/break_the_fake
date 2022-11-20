import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ isSingle: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 20px;
  ${({ isSingle }) =>
    isSingle
      ? ""
      : css`
          border-bottom: 1px solid rgba(97, 97, 97, 0.2);
          padding-bottom: 80px;
        `}
`;

export const Title = styled.div`
  font-size: 32px;
  display: flex;
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 35px;
`;
export const TitleBorder = styled.div`
  height: 4px;
  width: 50%;
  background: #2d5478;
`;

export const Top = styled.div`
  display: flex;
`;

export const Tags = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Tag = styled.div`
  flex: 1;
  margin: 0 15px;
  background: #f4f4f4;
  padding: 10px 24px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #616161;
`;

export const Assesment = styled.div`
  display: flex;
  flex: 0.4;
  justify-content: flex-end;
  align-items: center;
`;

export const AssesmentTitle = styled.div`
  font-size: 16px;
  margin-right: 16px;
`;

export const AssesmentScore = styled.div`
  font-size: 16px;
  background: #f4f4f4;
  padding: 10px 24px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #616161;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Image = styled.div<{ isMain: boolean }>`
  flex: ${({ isMain }) => (isMain ? 0.37 : 0.2)};
`;

export const Right = styled.div<{ isMain: boolean }>`
  flex: ${({ isMain }) => (isMain ? 0.63 : 0.8)};
  margin-left: 40px;
`;

export const HotTopic = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const HotTopicLabel = styled.div`
  font-size: 24px;
  margin-left: 20px;
`;

export const Info = styled.div`
  font-size: 16px;
  color: #616161;
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.div`
  display: flex;
`;

export const InfoTextLabel = styled.div`
  margin-right: 8px;
`;

export const InfoTextValue = styled.div``;

export const Text = styled.div`
  margin-top: 20px;
  flex: 0.9;
`;

export const ArticleTitle = styled.div`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 24px;
  color: #111111;
`;

export const Summary = styled.div`
  font-size: 16px;
  color: #616161;
`;

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

export const Score = styled.div<{ value: number }>`
  font-size: 36px;
  color: #fbfbfb;
  background: ${({ value }) => articleColors[value - 1]};
  width: 85px;
  height: 85px;
  border-radius: 30px;
  box-shadow: inset -4px -4px 16px rgba(33, 33, 33, 0.24),
    inset 8px 8px 24px rgba(249, 249, 249, 0.24);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;

export const SecondaryButton = styled.div`
  margin-right: 30px;
  flex: 0.4;
  padding: 16px 10px;
  background: #fbfbfb;
  border-radius: 8px;
  border: 1px solid rgba(97, 97, 97, 0.2);
  color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Button = styled.div`
  margin-right: 30px;
  flex: 0.4;
  padding: 16px 10px;
  background: #2d5478;
  border-radius: 8px;
  color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Texts = styled.div`
  display: flex;
  justify-content: space-between;
`;
