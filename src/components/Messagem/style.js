import styled from "styled-components";

export const StyledMessage = styled.div`
  width: 100%;
  max-width: 377px;
  height: 95px;

  display: flex;

  align-items: center;
  gap: 19px;

  padding-left: 14px;

  border: 2px solid var(--color-grey-1);
  border-radius: 8px;

  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

  & div{
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    background-color: rgba(39, 174, 96, .2);
  }

  & p{
    font-weight: 400;
    font-size: 12pt;
    line-height: 22px;

    color: var(--color-grey-2);
  }

  & p > strong{
    color: var(--color-grey-3);
  }
`