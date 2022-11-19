import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid black;
`;

export const Logo = styled.div``;

export const Search = styled.div``;

export const User = styled.div``;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  padding: 15px;
  border: 1px solid black;
  cursor: pointer;

  ${({ isActive }) =>
    isActive
      ? css`
          background: blue;
        `
      : css``}
`;
