import styled from "styled-components";

export const DivFilter = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  & h2 {
    color: var(--color-grey-100);
  }
  & i {
    color: var(--color-grey-50);
  }

  & button {
    display: none;
  }

  @media (min-width: 1024px) {
    & button {
      display: block;
    }
  }
`;
