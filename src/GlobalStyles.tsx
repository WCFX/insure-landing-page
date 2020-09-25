import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;

     /* 
      font-family: 'DM Serif Display', serif; ---> Header <---
      font-family: 'Karla', sans-serif;  --> Body <---
      font-family: 'Playfair Display', serif; BODY <------
    */
  }
  body {
    height: 100vh;

    --font: hsl(228, 45%, 44%);
    --bg-blue: #2c2640;
    --bg: #FFF;
    --grey: #7c777e;
    --black: #2b282f;

  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
  
`;