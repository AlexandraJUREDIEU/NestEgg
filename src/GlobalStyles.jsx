import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: #5C2774;
    background: -moz-linear-gradient(-45deg, #5C2774 0%, #3960CB 100%);
    background: -webkit-linear-gradient(-45deg, #5C2774 0%, #3960CB 100%);
    background: linear-gradient(135deg, #5C2774 0%, #3960CB 100%);  
    font-family: 'Quicksand', 'Arial', 'Roboto' ;
    color: #fff ;
    font-size: 1.5em;
  }
`;

export default GlobalStyles;