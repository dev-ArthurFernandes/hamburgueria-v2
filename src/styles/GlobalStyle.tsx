import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #27AE60;
    --color-secondary: #EB5757;

    --color-grey-0: #f5f5f5;
    --color-grey-1: #e0e0e0;
    --color-grey-2: #828282;
    --color-grey-3: #333333;

    --color-negative: #e60000;
    --color-warning: #ffcd07;
    --color-success: #168821;
    --color-information: #155bcb;

    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
  }

  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  #root{
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 0;
    display: flex;

    justify-content: center;
    align-items: center;
    
  }
`