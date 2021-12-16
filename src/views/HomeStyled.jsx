import { HomeContainer } from "../components/ContainersGeneric";
import CardCont from "../components/CardsContStyled";
import styled from "styled-components";
import { useState,useEffect } from "react";
import {useDispatch,useSelector } from "react-redux";
import { searchBreeds,orderByAZ,orderByWeight,orderByID,filterByTemp,getBreeds,filterByCreat } from "../stateManagement/actions/breedsActions";
import {getTemp}from "../const/controlledForm";
import {button,char,form,buttext,shadow} from "../const/theme";

//Contenedor de la pagina principal

const SearchT=styled.input`                             //Estilo cuadro texto buscador
    margin:0.2rem;
    width:80%;
    border-radius: 25px;
    background: ${form};
    border:none;
    color:${char};
`
const SearchB=styled.button`                            //Estilo boton de busqueda
    position:absolute;
    margin:0.2rem;
    border-radius: 25px;
    background: ${button};
    color: ${buttext};
    border:none;
    box-shadow: 4px 4px 9px -4px ${shadow};

    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${buttext};
            color:${button};
            transition:0.5s;
        }
     }
`
const LabelT=styled.span`                               //Estilo Labels
    color: ${char};
`
const Form=styled.form`                               //Estilo Labels
    grid-column: 1/span 2;
    justify-self:center;
    width:90%;
`
const LabelO=styled.span`                               //Estilo Labels
    color: ${char};
    margin:0 auto;
`
const OrderB=styled.div`                               //Estilo Labels
    display:flex;
    flex-direction: column;
    padding: 5% 20%;
`
const List = styled.select`                             //Estilo Listas filtrados
   background:${button};
   color:${buttext};
   margin:0.2rem 0;
   border-radius: 10px;
   border:none;
   cursor: pointer;
    option {
        text-align:center;     
    }
`

export default function HomeStyled(){
    let i=0;
    const [listTemp, setListTemp]=useState([])                //Guarda la lista de temperamentos
    const [search, setSearch]=useState("");              //Estado de la barra de busqueda
    const [order, setOrder]=useState("ID");             //Controla que el radiobuton vuelva  a su posicion inicial
    const dispatch = useDispatch();
    const breeds= useSelector(state=>state.breedsReducer.breeds);         //Trae las razas
    useEffect(() => {getTemp().then((e)=>{setListTemp(e)})},[]);    //Trae informacion de los temperamentos del back

    function handleSearch(e){                                  //Si esta en la primera pagina no retrocede mas
        setSearch(e.target.value);              // Guarda la informacion de la busqueda en el estado
    }

    function onSearch(e){
        e.preventDefault();                     //Evita recarga
        dispatch(searchBreeds(search));          //Envia la peticion de busqueda
        e.target.reset();
        setSearch("");
        setOrder("ID");
    }

    function orderAZ(){                         //Invoca la accion que ordena por nombre
        dispatch(orderByAZ(breeds));
        setOrder("AZ");
    }
    
    function orderWeight(){
        dispatch(orderByWeight(breeds));        //Invoca la accion que ordena por peso
        setOrder("WH");
    }

    function orderID(){
        dispatch(orderByID(breeds));        //Invoca la accion que ordena por id
        setOrder("ID");
    }

    function filterTemp(e){                 //Fltra por temperamentos
        if(e.target.value==="All"){
            dispatch(getBreeds());
            setOrder("ID");
        }
        dispatch(filterByTemp(breeds,e.target.value));  
    }

    function filterCreat(e){                 //Filtra por Creacion
        if(e.target.value==="All"){
            dispatch(getBreeds()); 
            setOrder("ID");
        }
        else if (e.target.value==="Created"){dispatch(filterByCreat(breeds,true));}   
        else dispatch(filterByCreat(breeds,false));
    }

    return(
        <HomeContainer>                        {/* <main> */}   
            <Form onSubmit={onSearch}>
                <SearchT onChange={handleSearch} placeholder="Search a breed by name" />
                <SearchB type="submit" >Search</SearchB>
            </Form>
            <OrderB>
                <LabelO>Order By:</LabelO>
                <li>
                <input type="radio" name="sort" checked={(order==="ID")?true:false} onChange={orderID}/>
                <LabelT>ID</LabelT>
                </li>
                <li>
                <input type="radio" name="sort" onChange={orderAZ}/>
                <LabelT>A-Z</LabelT>
                </li>
                <li>
                <input type="radio" name="sort" onChange={orderWeight}/>
                <LabelT>Weight</LabelT>
                </li>
            </OrderB>
            <OrderB>
                <LabelO>Filter By:</LabelO>
                <List onChange={filterTemp}><option >All</option>{listTemp.map((temp) => (<option key={i++} value={temp}>{temp}</option>))}</List>
                <List onChange={filterCreat}><option >All</option><option>Created</option><option>Existing</option></List>
            </OrderB>
            <CardCont/>                         {/* Contenedor de las cartas */}
        </HomeContainer>
    )
}