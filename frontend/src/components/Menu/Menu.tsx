import { useRouter } from "next/router";
import { FC, memo, useState } from "react";
import { useAddArticle } from "../../utils/queries";

import * as Styled from "./Menu.styles";

export interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const router = useRouter();
  const { mutateAsync } = useAddArticle();
  const [url, setUrl] = useState("");

  const isHomePageActive = router.route === "/";
  const isReviewPageActive = router.route === "/review";

  const isSingleArticlePage = router.route === "/article/[id]";

  const send = async () => {
    await mutateAsync(url);
    setTimeout(() => {
      setUrl("");
    }, 500);
  };

  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.Logo>
          {/* eslint-disable-next-line */}
          <img src="/logo.png" width="100" alt="logo" />
        </Styled.Logo>
        <Styled.Search>
          <Styled.Input
            placeholder="Wklej link do artykułu"
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
          />
          <Styled.InputIcon>
            {/* eslint-disable-next-line */}
            <img src="/link.svg" alt="link" />
          </Styled.InputIcon>
          <Styled.InputButton onClick={send}>Wyślij</Styled.InputButton>
        </Styled.Search>
        <Styled.User>
          <Styled.Button>Zaloguj</Styled.Button>
        </Styled.User>
      </Styled.Top>
      {isSingleArticlePage ? (
        <Styled.BackButton onClick={() => router.push("/")}>
          {"<"} Powrót do strony głównej
        </Styled.BackButton>
      ) : (
        <Styled.Nav>
          <Styled.NavItem
            isActive={isHomePageActive}
            onClick={() => router.push("/")}
            isFirst
          >
            Nowości
          </Styled.NavItem>
          <Styled.NavItem
            isActive={isReviewPageActive}
            onClick={() => router.push("review")}
          >
            Zostaw ocenę
          </Styled.NavItem>
        </Styled.Nav>
      )}
    </Styled.Wrapper>
  );
};

export default memo(Menu);
