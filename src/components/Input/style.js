import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  max-width: 452px;
  min-height: 60px;

  border: 2px solid var(--color-grey-3);
  border-radius: 8px;

  background: #fff;

  position: relative;

  z-index: 1;

  & > input{
    width: 100%;
    height: 60px;

    border: none;
    
    outline: none;

    padding: 0 0 0 10px;

    background: transparent;
  }

  & > label{
    position: absolute;

    text-align: center;

    top: 20px;
    left: 10px;

    padding: 0 5px;

    font-weight: 400;
    font-size: 16pt;
    line-height: 19px;
    color: var(--color-grey-2);

    background-color: #fff;

    transition: .2s;

    box-shadow: 0px 0px 300px -50px rgba(0,0,0,0.19);

    z-index: -1;
  }

  &:focus-within label{
    color: var(--color-grey-3);
    transform: translate(0, -30px) scale(1);
    font-size: 10pt;
  }

  & .activ{
    transform: translate(0, -30px) scale(1);
    font-size: 10pt;
    z-index: 0;
  }

  &.error{
    border: 2px solid var(--color-negative);
  }

  &.success{
    border: 2px solid var(--color-success);
  }
`;
