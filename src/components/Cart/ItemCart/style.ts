import styled from 'styled-components';


export const StyledItemCart = styled.li`
  width: 100%;
  height: 80px;

  display: flex;

  align-items: center;  
  justify-content: space-around;

  border: none;

  & img{
    width: 70px;
    height: 90%;
    border: none;
    border-radius: 8px;
    background-color: var(--color-grey-1);
  }

  & h2{
    width: fit-content;
    height: fit-content;
    font-weight: 700;
    font-size: 12px;
  }

  & div{
    height: 100%;
    display: flex;
    gap: 10px;

    align-items: center;
  }
  
  & span{
    height: 100%;
    display: flex;
    flex-direction: column;

    justify-content: space-around;
  }

  & button{
    border: none;
    padding: 5px;
    cursor: pointer;
    background: transparent;
  }

  & .Counter{
    width: fit-content;
    height: fit-content;
    border: 1px solid var(--color-grey-1);

    & > button{
      background-color: var(--color-grey-0);
    }
  }
  & p {
    color: var(--color-primary);
  }
`