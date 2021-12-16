import DarkButton from '../components/DarkButtonStyled';
import { HeaderGen } from '../components/ContainersGeneric';
import { useSelector } from 'react-redux';
import dark from "../assets/darkhome.png";
import light from "../assets/lighthome.png";
import darkc from "../assets/darkcreate.png";
import lightc from "../assets/lightcreate.png";
import styled from 'styled-components';
import {char} from "../const/theme";
import { Link } from 'react-router-dom';
import { getBreeds } from "../stateManagement/actions/breedsActions";
import {useDispatch} from "react-redux";

//Contenedor del header
const Home=styled.img`                            //Estilo Boton home
    width:3.5rem;
    &:hover {                       
        transform:  rotateY(180deg);  //rotacion
      } 
`
const AppName=styled.h1`                            //Estilo Boton home
    grid-column: 1/span 2;
    padding:0.1rem;
    color:${char};
    justify-self:center;
`
const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
    margin:0 auto;
`


export default function HeaderStyled(){
    const modes = useSelector(state=>state.darkModeReducer.darkMode);       //Hook trae si esta en modo claro u oscuro
    const dispatch = useDispatch();
    function getBreedsDB(){
        dispatch(getBreeds());        //Trae los datos desde la DB
    }
    
    return(
        <HeaderGen>                 {/* <header> */}
        <   AppName>Breeds Database</AppName>
            <DarkButton/>           {/* Boton modo oscuro */}
            <MenuL to="/home">
                <Home onClick={getBreedsDB}src={modes?dark:light}/>
            </MenuL>
            <MenuL to="/create">
                <Home src={modes?darkc:lightc}/>
            </MenuL>
        </HeaderGen>
    )
}