import styled from 'styled-components';

export const StyledRegisterPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  
  justify-content: center;
  align-items: center;

  padding: 10px;

  gap: 62px;

  & section{
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;

    justify-content: center;

    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img{
      display: none;
    }

    .section2{
      align-items: center;
    }
  }
`