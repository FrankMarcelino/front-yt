import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

export const LogoContainer = styled.header`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.header`
  width: 40px;
  height: 40px;
  boder-radius: 50%;
  margin: 0 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;
