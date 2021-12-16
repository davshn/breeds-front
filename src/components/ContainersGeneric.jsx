import styled from "styled-components";
import {char} from "../const/theme";

//Estilos de contenedores generales

export const SectionGen = styled.main`   //Estilo contenedores de la navegacion
    height:68vh;
    padding:1vh;
    display: flex;
    align-items: center;
    justify-content:center;
`

export const HomeContainer = styled.main`   //Estilo contenedor del home
    height:68vh;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows: 1rem 5.7rem;
    
    @media (min-width: 992px) {
        grid-template-rows: 1rem 7rem;
     }
`

export const HeaderGen = styled.header`     //Estilo del header
    height:13vh;
    padding:1vh;
    display:grid;
    grid-template-columns:repeat(2,1fr);
`

export const FooterGen = styled.footer`     //Estilo del footer
    color:${char};
    height:13vh;
    display:block;
    text-align:center;
    padding:1vh;
`