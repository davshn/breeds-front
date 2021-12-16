import { createGlobalStyle } from 'styled-components';
import light from "../assets/lightback.jpg";
import dark from "../assets/darkback.jpg";
import lightbig from "../assets/lightbackbig.jpg";
import darkbig from "../assets/darkbackbig.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${(props)=>(props.$mode)?dark:light}) no-repeat;
    background-position:center;
    background-size:cover;
    background-attachment: fixed;
    
    @media (min-width: 992px) {
        background: url(${(props)=>(props.$mode)?darkbig:lightbig}) no-repeat;
        background-size:cover;
     }
  }
`