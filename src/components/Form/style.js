import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;

  height: fit-content;

  padding: 24px;

  display: flex;
  flex-direction: column;

  gap: 24px;

  border: 2px solid var(--color-grey-1);
  border-radius: 8px;

  & > h2{
    font-weight: 700;
    font-size: 18pt;
    line-height: 24px;

    color: var(--color-grey-3);
  }

  & > p{
    font-weight: 400;
    font-size: 14pt;
    line-height: 18px;

    color: var(--color-grey-2);
    text-align: center;
  }

  & .errorMessage{
    font-weight: 400;
    font-size: 14pt;
    line-height: 18px;

    color: var(--color-negative);
    text-align: start;
  }

  & button{
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
    }
  }
`