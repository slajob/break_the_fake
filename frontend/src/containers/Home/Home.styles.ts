import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 10%;
`;

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Article = styled.div`
  margin-bottom: 30px;
`;

export const RemainingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 90px;
  margin-bottom: 90px;
`;

export const RemainingWrapperTitle = styled.div`
  flex: 0.9;
  font-size: 36px;
`;

export const FilterButton = styled.div`
  flex: 0.1;
  margin-right: 30px;
  padding: 16px 10px;
  background: #fbfbfb;
  box-shadow: 4px 4px 8px rgba(164, 164, 164, 0.08);
  border-radius: 8px;
  color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;
