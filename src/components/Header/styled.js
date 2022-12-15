import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;

  background-color: var(--color-grey-0);

  position: sticky;

  @media (max-width: 600px) {
    height: 139px;
  }
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 13px;

  @media (min-width: 600px) {
    width: 80%;

    flex-direction: row;

    justify-content: space-between;

    gap: 13px;
  }
`;

export const StyledDivInputHeader = styled.div`
  width: 100%;
  max-width: 365px;
  height: 60px;

  border: 2px solid var(--color-grey-20);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--color-White);
`;
