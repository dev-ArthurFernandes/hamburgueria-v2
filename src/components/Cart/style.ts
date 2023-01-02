import styled from 'styled-components';


export const StyledCart = styled.div`
  width: 100%;
  max-width: 320px;
  height: 100%;

  position: absolute;

  right: -500px;

  background-color: white;

  box-shadow: -10px 0px 55px -15px rgba(0,0,0,0.42);
  
  transition: .5s;


  & .headerCart{
    width: 100%;
    height: 60px;

    color: white;
    background-color: var(--color-primary);

    display: flex;

    justify-content: space-around;
    align-items: center;

    & h2{
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
  }

  & .totaly{
    width: 100%;
    height: 120px;

    position: absolute;

    bottom: 0;

    border-top: 1px solid var(--color-grey-1);

    padding: 10px;
    
    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    gap: 30px;

    & div{
      width: 100%;
      display: flex;
      justify-content: space-between;

      & h2{
        font-weight: 600;
        font-size: 18pt;
        line-height: 24px;

        color: var(--color-grey-3);
      }

      & p{
        font-weight: 600;
        font-size: 14pt;
        line-height: 24px;

        color: var(--color-grey-2);
      }
    }
  }

  &.see{
    right: 0;
  }

`