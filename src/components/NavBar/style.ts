import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 80px;

  background-color: var(--color-grey-1);

  display: flex;

  align-items: center;
  
  justify-content: center;

  position: fixed;

  top: 0;
  left: 0;

  & .container{
    width: 70%;

    display: flex;
    
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  & span{
    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 20px;

    @media (max-width: 500px) {
      padding-right: 10px;
    }
  }

  & .CartIcon{
    width: fit-content;
    height: fit-content;

    border: none; 

    background-color: transparent;

    position: relative;
  }

  & .CartCount{
    width: 25px;
    height: 25px;

    border: none;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2px 8px;

    background-color: var(--color-primary);

    color: #fff;

    position: absolute;

    top: -10px;
    right: -10px;
  }

  & .searchButton{
    display: none;
    
    @media (max-width: 500px) {
      display: block;
    }
  }
`