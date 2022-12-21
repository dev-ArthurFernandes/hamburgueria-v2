import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;

  flex-direction: column;

  @media (min-width: 1024px) {
    min-width: 800px;
  }
`;
