import { FC, memo } from "react";

import * as Styled from "./Button.styles";

export interface ButtonProps {}

const Button: FC<ButtonProps> = () => {
  return <Styled.Wrapper></Styled.Wrapper>;
};

export default memo(Button);
