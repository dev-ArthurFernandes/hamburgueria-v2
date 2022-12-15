import styled from "styled-components";

export const Container = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  position: relative;

  gap: 50px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
