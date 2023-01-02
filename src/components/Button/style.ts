import styled from "styled-components";

export const StyledGreenButton = styled.button`  
  border: none;
  border-radius: 8px;
  
  font-weight: 500;
  font-size: 14pt;
  line-height: 17px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;

  &.formButton{
    width: 100%;
    height: 60px;
  }

  &.Button{
    width: fit-content;
    height: fit-content;
    padding: 10px;
  }

  &.greenButton{
    background-color: var(--color-primary);
    color: var(--color-grey-0);
  }
  
  
  &.greyButton1{
    background-color: var(--color-grey-0);
    color: var(--color-grey-2 );

    &:hover{
      background-color: var(--color-grey-1);
      color: var(--color-grey-3);
    }
  }

`;
