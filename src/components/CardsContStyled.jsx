import styled from "styled-components";
import { useSelector } from "react-redux";
import BreedCard from "./BreedCardStyled";
import {getTemps,paginate} from "../const/getData";
import { useState } from "react";
import {button,shadow,buttext} from "../const/theme";

//Contenedor de las tarjetas

const CardCont=styled.section`                             //Estilo contenedor
    display:grid;
    grid-column: 1/span 2;
    grid-template-columns:repeat(2,1fr);
    justify-items: center;
    overflow:scroll;
    height:100%;

    @media (min-width: 992px) {
        grid-template-columns:repeat(4,1fr);
        overflow:visible;
     }
`
const ArrowBut=styled.button`                           //Estilo boton flecha paginado
    margin:0.5rem;
    width:1.5rem;
    height:1.5rem;
    border-radius: 25px;
    background: ${button};
    color: ${buttext};
    border:none;
    box-shadow: 4px 4px 9px -4px ${shadow};

    @media (min-width: 992px) {
        cursor: pointer;
        grid-column: span 2;
        &:hover {
            background:${buttext};
            color:${button};
            transition:0.5s;
        }
     }
`
export default function CardsCont() {
          
    const breeds= useSelector(state=>state.breedsReducer.breeds);         //Trae las razas
    const [page,setPage]=useState(1);

    function handleBackBut(e){                                  //Si esta en la primera pagina no retrocede mas
        if (page>1){setPage(page-1)};
    }

    function handleFordBut(e){                                  //Si lega a la ultima pagina no avanza mas 
        if(page<Math.ceil(breeds.length/8)){setPage(page+1);}
    }

    return(
        <CardCont>
            <ArrowBut onClick={handleBackBut}>{"<"}</ArrowBut>
            <ArrowBut onClick={handleFordBut}>{">"}</ArrowBut>
            {paginate(breeds,page).map((breed)=>{if(!breed)return breed
                return<BreedCard 
                key={breed.id} 
                id={breed.id} 
                name={breed.name} 
                image={breed.image} 
                temperament={getTemps(breed)} 
                weightMin={breed.weightMin} 
                weightMax={breed.weightMax} 
            />})}
        </CardCont>
    )
}