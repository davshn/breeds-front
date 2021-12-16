import { useDispatch, useSelector } from "react-redux";
import { setDarkModeOn } from "../stateManagement/actions/darkModeActions";
import { setDarkModeOff } from "../stateManagement/actions/darkModeActions";
import styled from "styled-components";
import {button,form} from "../const/theme";


//Boton activar modo oscuro

const ModeCont=styled.aside`    //Estilo contenedor
    position:fixed;
    top:1.2rem;
    right:1rem;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`

const ModeBorder=styled.div`     //Estilo borde del boton
    width: 2rem;
    height: 1rem;
    cursor: pointer;
    border-radius: 100px;
    border: 1px solid ${button};
    background:${(props)=>(props.$mode)?"#4A4A4A":button};
`
const ModeToggle=styled.span`     //Estilo selector
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 45px;
    background: ${(props)=>(props.$mode)?"#BFBFBF":form};
    box-shadow: 0 0 6px 0 ${(props)=>(props.$mode)?"white":"darkorange"};
    transition: 0.7s;
    transform: translateX(${(props)=>(props.$mode)?"100%":"0%"}) rotateY(${(props)=>(props.$mode)?"0deg":"360deg"});
    &:hover {                       
        box-shadow: 0 0 6px 6px ${(props)=>(props.$mode)?"white":"darkorange"};
      } 
`
export default function DarkButton() {
    const dispatch = useDispatch();
    function darkModeSet(mode){                                         //Activa el modo oscuro si esta desactivado o lo desactiva
        if(mode===false){dispatch (setDarkModeOn());}
        else{dispatch (setDarkModeOff());}
    }
    const mode = useSelector(state=>state.darkModeReducer.darkMode);    //Trae el estado del modo oscuro
    return (
        <ModeCont>
            <ModeBorder $mode={mode} onClick={(e) => {darkModeSet(mode);}}>
                <ModeToggle $mode={mode}/>
            </ModeBorder>
        </ModeCont>
    )
}