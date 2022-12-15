import styled from "styled-components";

export const StyledGreenButton = styled.button`
  width: fit-content;
  height: fit-content;

  padding: 10px;

  border: 1px solid var(--color-primary);
  border-radius: 8px;

  background: var(--color-primary);

  color: var(--color-grey-0);

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  cursor: pointer;

  &:hover {
    background: var(--color-primary-50);
    border: 1px solid var(--color-primary-50);
  }
`;
