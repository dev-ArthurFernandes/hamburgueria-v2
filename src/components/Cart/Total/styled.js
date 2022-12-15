import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;

  height: 120px;

  display: flex;
  flex-direction: column;

  gap: 30px;

  justify-content: center;
  align-items: center;

  border-top: 2px solid var(--color-grey-20);

  padding: 5px 0;

  & span {
    width: 100%;
    display: flex;

    justify-content: space-between;
  }

  & h2 {
    font-weight: 600;
    font-size: 14pt;
    line-height: 24px;
  }

  & p {
    font-weight: 600;
    font-size: 14pt;
    line-height: 24px;

    color: var(--color-grey-50);
  }

  & button {
    width: 100%;

    padding: 10px;

    background: var(--color-grey-20);

    border: 2px solid var(--color-grey-20);
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: var(--color-grey-50);

    cursor: pointer;
  }
`;
