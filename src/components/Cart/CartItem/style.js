import styled from "styled-components";

export const StyledCartItem = styled.li`
  width: 80%;

  display: grid;

  grid-template-columns: 90px 200px 100px;

  & img {
    width: 100%;
  }
  & span {
    display: flex;
  }

  & a {
    cursor: pointer;
  }
`;
