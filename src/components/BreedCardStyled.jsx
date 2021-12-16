import styled from "styled-components";
import {char,card,button,shadow,buttext} from "../const/theme";
import { Link } from 'react-router-dom';
import  shadowImg  from "../assets/shadow.jpg";

//Tarjeta de razas

const CardCont=styled.div`                             //Estilo contenedor
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-column: 1/span 2;
    margin:0.5rem;
    padding:0.2rem;
    backdrop-filter: blur(10px) saturate(60%);
    background-color:${card};
    border-radius: 12px;
    width:90%;
    
    @media (min-width: 992px) {
        grid-column: span 1;
    }
`
const InfoTex=styled.span`                           //Estilo texto de informacion general
    grid-column: 2/span 3;
    color:${char};
    text-align:center;
    margin:0.1rem;
    
`
const Image=styled.img`                             //Estilo imagen raza
    width:6rem;
    height:6rem;
    border-radius: 50%;
    grid-column:1;
    grid-row:2/span 6;
    padding: 0.5rem;
`
const NameTex=styled.h3`                             //Estilo texto del titulo
    grid-column: 1/span 3;
    justify-self:center;
    margin:0.2rem;
    color:${button};
    text-shadow: 2px 2px 2px ${shadow};
`
const ArrayTex=styled.p`                            //Estilo Texto arreglo temperamentos
    grid-column: 2/span 3;
    color:${char};
    text-align:center;
    margin:0.1rem;
`
const ViewLink=styled.span`                           //Link a carta detallada
    background: ${button};
    color: ${buttext};
    margin:0.1rem;
    border-radius: 12px;

    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${buttext};
            color:${button};
            transition:0.5s;
        }
     }
`
const MenuL = styled(Link)`                           //Estilo link
    grid-column: 2/span 3;
    text-decoration:none;
    margin:0.2rem auto;
`

export default function BreedCard({id,name,image,temperament,weightMin,weightMax}){

    return(
        <CardCont>                      
            <NameTex>{name}</NameTex>
            <Image src={image?image:shadowImg}alt="Dog"/>
            <InfoTex>Weight Min:{weightMin}</InfoTex>
            <InfoTex>Weight Max:{weightMax}</InfoTex>
            <ArrayTex>{temperament}</ArrayTex>
            <MenuL to={`/detailed/${id}`}>
                <ViewLink>View more</ViewLink>
            </MenuL>
        </CardCont>
    )
}