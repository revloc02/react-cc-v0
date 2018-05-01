import styled from "styled-components";

const gaps = {
  "0": "0",
  "4": "0.25rem" /* 4px */,
  "8": "0.5rem" /* 8px */,
  "16": "1rem" /* 16px */,
  "24": "1.5rem",
  "32": "2rem" /* 32px */,
  "64": "4rem" /* 64px */,
  "128": "8rem" /* 128px */,
  default: "1rem"
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns = 1 }) => `repeat( ${columns}, 1fr)`};
  grid-column-gap: ${({ columnGapSize, gapSize = "16" }) =>
    gaps[columnGapSize] || gaps[gapSize]};
  grid-row-gap: ${({ rowGapSize, gapSize = "16" }) =>
    gaps[rowGapSize] || gaps[gapSize]};
`;

export default Grid;
