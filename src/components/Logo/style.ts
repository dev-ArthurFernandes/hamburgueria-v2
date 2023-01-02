import styled from "styled-components";

export const StyledLogo = styled.div`
  width: fit-content;
  height: fit-content;

  gap: 0;

  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    padding-left: 10px;
  }
`;

export const Burguer = styled.h1`
  width: fit-content;
  height: fit-content;
  font-size: 35pt;
  font-weight: 800;
  line-height: 150%;

  color: #333333;

  @media (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const Kenzie = styled.h1`
  height: 100%;
  font-size: 20pt;
  font-weight: 800;
  line-height: 150%;

  display: flex;

  justify-content: center;
  align-items: flex-end;

  color: #eb5757;

  @media (max-width: 1440px) {
    font-size: 14px;
  }
`;
