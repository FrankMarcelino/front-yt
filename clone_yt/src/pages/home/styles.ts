import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  padding-left: ${({ openMenu }) => (openMenu ? "250px" : "100px")};
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
