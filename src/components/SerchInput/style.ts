import styled from 'styled-components';

export const StyledSearch = styled.div`
  width: 100%;
  max-width: 400px;
  height: 60px;

  border: 2px solid var(--color-grey-2);
  border-radius: 8px;

  position: relative;

  background-color: transparent;

  overflow: hidden;

  display: flex;

  align-items: center;

  z-index: 1;

  @media (max-width: 500px) {
    display: none;

    &.OpenSearch{
      display: flex;
        
      border: 2px solid var(--color-grey-2);
      
      position: absolute;
      
      left: 0;
      bottom: -63px;
      
      overflow: hidden;

      input{
        display: block;
      }
    }
  }

  & input{
    width: 100%;
    height: 100%;

    padding-left: 10px;

    color: var(--color-grey-1);

    border: none;

    outline: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    z-index: 0;
  }

  & input::placeholder{
    color: var(--color-grey-1);

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  & button{
    width: fit-content;
    height: fit-content;

    padding: 5px;

    border: none;
    border-radius: 8px;

    position: absolute;

    z-index: 1;

    display: block;

    right: 10px;

    background-color: var(--color-primary);

    cursor: pointer;
  }


  
` 