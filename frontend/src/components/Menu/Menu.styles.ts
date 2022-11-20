import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin: 0 10%;
`;

export const Logo = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-start;
`;

export const Search = styled.div`
  position: relative;
  height: fit-content;
  flex: 0.6;
  display: flex;
`;

export const User = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-end;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
`;

export const NavItem = styled.div<{ isActive: boolean; isFirst?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  padding: 15px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive
      ? css`
          border-bottom: 1px solid #616161;
        `
      : css``}

  ${({ isFirst }) =>
    isFirst
      ? css`
          margin-left: 10%;
        `
      : css`
          margin-right: 10%;
        `}
`;

export const Input = styled.input`
  border: 1px solid #9d9d9d66;
  border-radius: 8px;
  padding: 12px 26px 12px 64px;
  font-size: 12px;
  flex: 1;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 26px;
  top: 50%;
  transform: translateY(-55%);
`;

export const Avatar = styled.div``;

export const BackButton = styled.div`
  margin-left: 10%;
  margin-top: 30px;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.6);
  }
`;

export const InputButton = styled.div`
  position: absolute;
  border: 1px solid rgba(97, 97, 97, 0.2);
  border-radius: 16px;
  padding: 4px 8px;
  right: 20px;
  top: 50%;
  font-size: 12px;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    background: rgba(97, 97, 97, 0.2);
  }
`;

export const Button = styled.div`
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
