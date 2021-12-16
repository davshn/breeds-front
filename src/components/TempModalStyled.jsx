import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useDispatch} from "react-redux";
import { setModalInvisible } from "../stateManagement/actions/tempModalActions";
import { resetTemperament,addTemperament } from "../stateManagement/actions/temperamentsActions";
import {button,form,menu,shadow,buttext} from "../const/theme";
import {getTemp}from "../const/controlledForm";
import {useState,useEffect} from "react";

//Modal para elegir los temperamentos

const BlackScreen = styled.aside`     //Estilo  pantalla negra para la app
    width:250vh;
    height:100vh;
    background-color: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(5px) saturate(180%);
    position:fixed;
    display:${(props)=>(props.$modal)?"flex":"none"};
    justify-content:center;
    align-items:center;
`
const ModalCont = styled.div`     //Estilo contenedor
    background:${form};
    width:20rem;
    border-radius: 12px;
    padding:0.5rem;
`
const CloseButton = styled.button`     //Estilo Boton cerrar
    float: right;
    background:${menu};
    border-radius: 50%;
    color:${form};
    border-color:${shadow} solid;
    
    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${form};
            color:${menu};
            transition:0.5s;
        }
     }
`
const List = styled.select`     //Estilo Lista de temperamentos
    background:${button};
    display:block;
    color:${buttext};
    border-radius: 10px;
    border:none;
    margin: 0 auto;
   
    option {
        text-align:center; 
        cursor: pointer;    
    }
`
const Selected = styled.textarea`     //Estilo elementos seleccionados
    color:${buttext};
    width:95%;
    height:4rem; 
    background:none;
    border:none;
    margin:1px;
    overflow:scroll;
    text-align: center;
    overflow:hidden;
`
const Reset = styled.button`     //Estilo seleccionados
    border-radius: 25px;
    background: ${button};
    color: ${buttext};
    border:none;
    box-shadow: 4px 4px 9px -4px ${shadow};
    display:block;
    margin:1rem auto;
    
    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${buttext};
            color:${button};
            transition:0.5s;
        }
     }
`
export default function TempModal() {
    let i=0;
    const [listTemp, setListTemp]=useState([])                //Guarda la lista de temperamentos
    const temperaments= useSelector(state=>state.temperamentsReducer.temperaments);         //Obtiene los temperamentos seleccionados
    const modal = useSelector(state=>state.tempModalReducer.tempModal);         //Hook para controlar la visibilidad del modal
    const dispatch = useDispatch();
    useEffect(() => {getTemp().then((e)=>{setListTemp(e)})},[]);    //Trae informacion de los temperamentos del back

    function handleModal(e){                    //Hace invisible el modal
        e.preventDefault();
        dispatch (setModalInvisible());
    }

    function handleSelected(e){                 //Añade un temperamento al contenedor
        dispatch (addTemperament(e.target.value));
    }

    function handleReset(e){                    //Resetea el contenedor
        dispatch (resetTemperament());
    }

    return(
        <BlackScreen $modal={modal}>
            <ModalCont>
                <CloseButton onClick={handleModal}>X</CloseButton>
                <Selected value={temperaments} placeholder="Select the temperaments of the new breed" readOnly/>
                <List multiple>
                    {listTemp.map((temp) => (<option onClick={handleSelected} key={i++} value={temp}>{temp}</option>))}
                </List>
                <Reset onClick={handleReset}>Reset</Reset>
            </ModalCont>
        </BlackScreen>
    )
}