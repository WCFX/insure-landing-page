import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    height: 100vh;

    font-size: 62.5;
    --font: hsl(228, 45%, 44%);
    --bg: #FFF;
    --grey: #7c777e;
    --black: #2b282f;

    /* 
      font-family: 'DM Serif Display', serif; ---> Header <---
      font-family: 'Karla', sans-serif;  --> Body <---
    */

  }
`;