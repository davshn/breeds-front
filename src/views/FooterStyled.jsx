import SocialMenu from '../components/SocialMenuStyled';
import { FooterGen } from '../components/ContainersGeneric';
import {useDispatch } from "react-redux";
import { getBreeds } from "../stateManagement/actions/breedsActions";
import { useEffect,} from "react";

//Contenedor del footer

export default function FooterStyled(){
    let year = new Date().getFullYear();
    const dispatch = useDispatch();
    
    useEffect(()=>{                                         //Obtiene la informacion de las razas del back
        dispatch(getBreeds())                               // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
         
    return(
        <FooterGen>                 {/* <footer> */}
            © Copyright {year} David Figueroa
           <SocialMenu/>            {/* Menú redes sociales */}
            Bogotá, Colombia.
        </FooterGen>
    )
}