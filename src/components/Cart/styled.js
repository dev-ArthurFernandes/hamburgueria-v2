import styled from "styled-components";

export const ShoppingCart = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 450px;

  min-height: 200px;

  display: flex;
  flex-direction: column;

  align-items: center;

  background: var(--color-grey-0);

  position: sticky;

  border-radius: 5px;

  overflow: hidden;
`;

export const HeaderCart = styled.div`
  width: 100%;
  height: 65px;

  display: flex;

  justify-content: center;
  align-items: center;

  background: var(--color-primary);

  & h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color-White);
  }
`;
