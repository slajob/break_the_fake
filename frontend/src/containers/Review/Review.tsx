import { FC, memo } from "react";

import * as Styled from "./Review.styles";

export interface ReviewProps {}

const Review: FC<ReviewProps> = () => {
  return <Styled.Wrapper>review</Styled.Wrapper>;
};

export default memo(Review);
