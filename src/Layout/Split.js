import styled from "styled-components";

const grids = {
  "1/4": "25% 1fr",
  "1/3": "33% 1fr",
  "2/3": "1fr 33%",
  "3/4": "1fr 25%",
  "1/2": "1fr 1fr",
  default: "1fr 1fr"
};

const gaps = {
  "0": "0",
  "4": "0.25rem", /* 4px */
  "8": "0.5rem", /* 8px */
  "16": "1rem", /* 16px */
  "24": "1.5rem",
  "32": "2rem", /* 32px */
  "64": "4rem", /* 64px */
  "128": "8rem", /* 128px */
  default: "1rem"
};

const Split = styled.div`
  display: grid;
  grid-template-columns: ${props => grids[props.ratio] || grids.default};
  grid-gap: ${props => gaps[props.gapSize] || gaps.default};
`;

export default Split;