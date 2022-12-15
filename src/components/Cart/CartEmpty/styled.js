import styled from "styled-components";

export const StyledCartEmpty = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  & h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color-grey-100);
  }

  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-grey-50);
  }
`;
