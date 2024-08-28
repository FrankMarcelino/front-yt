import styled from "styled-components";

export const Topic = styled.div<{ openMenu: boolean }>`
  width: 100vw;
  height: 40px;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  padding-left: ${({ openMenu }) => (openMenu ? "250px" : "100px")};
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  overflow-x: auto;
  position: sticky;
  top: 55px;
`;
