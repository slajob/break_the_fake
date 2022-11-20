import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 0 10%;
`;

export const Rate = styled.div`
  margin: 20px auto 0;
`;

export const RateLabel = styled.div`
  margin-bottom: 20px;
`;
export const RateSlider = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
export const RateSliderCell = styled.div<{
  background: string;
  isFirst: boolean;
  isLast: boolean;
  isActive: boolean;
}>`
  flex: 1;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;

  ${({ isFirst }) =>
    isFirst
      ? css`
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
        `
      : ""}

  ${({ isLast }) =>
    isLast
      ? css`
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
        `
      : ""}

  ${({ isActive, background }) =>
    isActive
      ? css`
          background: ${background};
          border: 1px solid transparent;
        `
      : css`
          border: 1px solid ${background};
        `}
`;

export const FakeNews = styled.div``;

export const FakeNewsLabel = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const FakeNewsRadio = styled.div``;

export const Radio = styled.input`
  margin-right: 100px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const SecondaryButton = styled.div`
  margin-right: 30px;
  width: 300px;
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

export const PrimaryButton = styled.div`
  margin-right: 30px;
  width: 300px;
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
