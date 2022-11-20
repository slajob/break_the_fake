import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 0 10%;
`;

export const Metrics = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MetricsTitle = styled.div`
  margin-bottom: 12px;
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

export const MetricBar = styled.div<{ percent: number }>`
  width: 60%;
  display: flex;
  position: relative;
  border-radius: 16px;
  height: 36px;
  border: 1px solid
    ${({ percent }) => articleColors[Math.round(percent / 10) - 1]};
  overflow: hidden;
`;

export const MetricBarFilled = styled.div<{ percent: number }>`
  position: absolute;
  left: 0;
  top: 0;
  background: ${({ percent }) => articleColors[Math.round(percent / 10) - 1]};
  height: 100%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  ${({ percent }) => css`
    width: ${percent}%;
  `}
`;

export const Metric = styled.div`
  margin-bottom: 20px;
`;

export const MetricTitle = styled.div`
  margin-bottom: 9px;
`;

export const MetricValue = styled.div`
  margin-left: 20px;
  font-size: 24px;
`;

export const MetricContent = styled.div`
  display: flex;
  align-items: center;
`;

export const IsClickBait = styled.div``;

export const ClickBait = styled.div`
  background: #ce2020;
  color: #fbfbfb;
  padding: 14px;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 24px;
`;
