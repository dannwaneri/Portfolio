import {createGlobalStyle} from 'styled-components';




export const lightTheme = {

    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#222'
    
}
    
    export const darkTheme = {
    
        primary: '#6e27c5',
        secondary: '#ffb617',
        danger: '#f16623',
        light: '#f4f4f4',
        dark: '#222'
        
        }

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap');
*, ::before, ::after {
  box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html{
      scroll-behavior: smooth;
      font-size: 64.50%;

  }

body{
    font-family: 'Quicksand', sans-serif;
    line-height:1.5;
    height:100vh;
    background:rgba(36,52,71);
     color:#fff;
     display: flex;
     justify-content:center;
     align-items:center;
}
body.fixed-header{
    top: 0;
  }
   body.fixed-header main{
     transform: scale(1);
   }
h2{
    font-family: Sans-serif;
}

`;


