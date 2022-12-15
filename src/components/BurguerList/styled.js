import styled from "styled-components";

export const StyledBurguerList = styled.ul`
  width: 100%;

  padding: 10px;

  display: flex;

  overflow-x: scroll;

  gap: 10px;

  &::-webkit-scrollbar {
    border-radius: 5px;

    background-color: var(--color-grey-20);
  }

  &::-webkit-scrollbar-thumb {
    width: 2px;
    height: 2px;

    border-radius: 5px;

    background: var(--color-primary);
  }

  &::-webkit-scrollbar-track {
    width: 2px;
    height: 2px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: none;
  }

  @media (min-width: 1270px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
