import styled from "styled-components";
import {Github,Facebook,Linkedin,Twitter} from "@styled-icons/bootstrap";
import {menu} from "../const/theme";

//Menú de redes sociales

const SocialM = styled.nav`       //Estilo del contenedor nav
    width:50%;
    display:flex;
    justify-content:space-around;
    margin:1vh;
    margin-right:auto;
    margin-left:auto;
`
const Link = styled.a`      //Estilo de los links a las redes
   color:${menu}; 
`
export default function SocialMenu() {
    return(
        <SocialM>
            <Link href="https://github.com/davshn/"><Github size="2rem"/></Link>
            <Link href="https://www.linkedin.com/in/davshn/"><Linkedin size="2rem"/></Link>
            <Link href="https://www.facebook.com/david.figueroa.184"><Facebook size="2rem"/></Link>
            <Link href="https://twitter.com/Davshmr"><Twitter size="2rem"/></Link>
        </SocialM>
    )
}