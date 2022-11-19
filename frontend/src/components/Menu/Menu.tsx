import { useRouter } from "next/router";
import { FC, memo } from "react";

import * as Styled from "./Menu.styles";

export interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const router = useRouter();

  const isHomePageActive = router.route === "/";
  const isReviewPageActive = router.route === "/review";

  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.Logo>LOGO</Styled.Logo>
        <Styled.Search>Search</Styled.Search>
        <Styled.User>O</Styled.User>
      </Styled.Top>
      <Styled.Nav>
        <Styled.NavItem
          isActive={isHomePageActive}
          onClick={() => router.push("/")}
        >
          Nowości
        </Styled.NavItem>
        <Styled.NavItem
          isActive={isReviewPageActive}
          onClick={() => router.push("review")}
        >
          Prawda czy fałsz
        </Styled.NavItem>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};

export default memo(Menu);
