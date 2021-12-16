import styled from "styled-components";
import {char,card,button,shadow,menu,form} from "../const/theme";
import { useParams } from "react-router";
import { useState,} from "react";
import {getBreedId,getTemps} from "../const/getData";
import  shadowImg  from "../assets/shadow.jpg";
import { Link } from 'react-router-dom';

//Tarjeta de raza detallada

const CardCont=styled.section`                       //Estilo Contenedor de tarjeta
    display:grid;
    grid-template-columns:repeat(2,1fr);
    margin:0.5rem;
    padding:0.5rem;
    backdrop-filter: blur(25px) saturate(60%);
    background-color:${card};
    border-radius: 12px;
    width:80vh;
`
const InfoTex=styled.span`                           //Estilo texto de informacion general
    color:${char};
    text-align:center;
    margin:0.3rem;
`
const NameTex=styled.h2`                             //Estilo texto del titulo
    grid-column: 1/span 2;
    color:${button};
    justify-self:center;
    text-shadow: 2px 2px 2px ${shadow};
`
const ArrayTex=styled.p`                            //Estilo Texto arreglo temperamentos
    grid-column: 1/span 2;
    color:${char};
    text-align:center;
    margin:0.3rem;
`
const Image=styled.img`                             //Estilo imagen raza
    grid-column: 1/span 2;
    width:60%;
    justify-self:center;
    margin:1rem;
    border-radius: 12px;
`
const CloseButton = styled.button`     //Estilo Boton cerrar
    position:fixed;
    right:0.5rem;
    top:0.5rem;
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
const CloseL = styled(Link)`      //Estilo link cerrar
    text-decoration:none;
`

export default function DetailedCard() {
    const id=useParams().id;                        //Guarda el id de la barra de direcciones
    const [breed,setBreed]=useState(fetchMyAPI);    //Estado Guarda la informacion de la raza
    
    async function fetchMyAPI() {                   //Funcion asincrona trae los datos del back
        const response = await getBreedId(id);
        setBreed(response);
    }

    return (
        <CardCont>
            <CloseL to="/home">
                <CloseButton>X</CloseButton>
            </CloseL>
            <NameTex>{breed.name}</NameTex>
            <Image src={breed.image?breed.image:shadowImg}alt="Dog"/>
            <InfoTex>Max Height:{breed.heightMax}Cm</InfoTex>
            <InfoTex>Min Height:{breed.heightMin}Cm</InfoTex>
            <InfoTex>Max Weight:{breed.weightMax}Kg</InfoTex>
            <InfoTex>Min Weight:{breed.weightMin}Kg</InfoTex>
            <InfoTex>Life Span:{breed.lifeSpan}Y</InfoTex>
            <InfoTex>Origin:{breed.origin}</InfoTex>
            <ArrayTex>Temperament:{getTemps(breed)}</ArrayTex>
        </CardCont>
    )


}