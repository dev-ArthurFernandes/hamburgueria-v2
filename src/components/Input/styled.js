import styled from "styled-components";

export const StyledInput = styled.input`
  width: 75%;
  height: 100%;

  border: none;

  background: transparent;

  padding: 0 5px 0 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  outline: none;

  &::placeholder {
    color: var(--color-grey-20);
  }
`;
