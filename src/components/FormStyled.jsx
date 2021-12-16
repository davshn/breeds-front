import styled from "styled-components";
import { useState,useEffect } from "react";
import {button,char,form,card,buttext,shadow} from "../const/theme";
import {validate,initialState,postBreed}from "../const/controlledForm";
import { useDispatch,useSelector} from "react-redux";
import { setModalVisible } from "../stateManagement/actions/tempModalActions";
import { resetTemperament } from "../stateManagement/actions/temperamentsActions";

const FormCont=styled.form`             //Estilo contenedor form
    display:grid;
    grid-template-columns:repeat(2,1fr);
    padding:1.6rem;
    backdrop-filter: blur(5px) saturate(60%);
    background-color:${card};
    border-radius: 12px;
`
const FormError = styled.span`             //Estilo errores
    color:red;
    font-size:0.7rem;
    display: block;
`
const FormText = styled.input`             //Estilo input textos
    margin:0.5rem;
    border-radius: 25px;
    background: ${form};
    border:none;
    color:${char};
`
const TempButton=styled.button`             //Estilo boton temperamentos
    grid-column: 1/span 2;
    margin:0.5rem;
    border-radius: 25px;
    background: ${button};
    color: ${buttext};
    border:none;
    box-shadow: 4px 4px 9px -4px ${shadow};
    width:45%;
    justify-self:center;

    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${buttext};
            color:${button};
            transition:0.5s;
        }
     }
`
const FormSubmit = styled.input`             //Estilo input boton
    grid-column: 1/span 2;
    margin:0.5rem;
    border-radius: 25px;
    background: ${button};
    color: ${buttext};
    border:none;
    box-shadow: 4px 4px 9px -4px ${shadow};
    width:60%;
    justify-self:center;
    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:${buttext};
            color:${button};
            transition:0.5s;
        }
     }
`
const FormLabel=styled.label`
    color: ${char};
`
export default function FormStyled() {
   
    const [input,setInput]=useState(initialState); //Crea el estado que contiene los datos
    const [errors,setErrors]=useState({});  //Crea el estado que contendrá los errores
    const dispatch = useDispatch();
    const temperaments= useSelector(state=>state.temperamentsReducer.temperaments);         //Obtiene los temperamentos seleccionados
    useEffect(() => {setInput(prev=>({...prev,temperament:temperaments}))},[temperaments]);    //Trae informacion de los temperamentos del back
    useEffect(() => {setErrors(validate(input));},[input]);                             //Valida si hay errores y los guarda en el estado

    function hadleInputChange(e){               //Cuando se digita el input lo guarda en el estado
        setInput(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    function handleModal(e){                    
        e.preventDefault();
        dispatch (setModalVisible());           //Hace visible el modal
    }
    
    function onSubmit(e){                            //Sube el form 
        e.preventDefault();
        if(Object.keys(errors).length === 0){       //Solo envía si el objeto errores está vacío
            postBreed(input);
            e.target.reset();
            dispatch (resetTemperament());
        }      
    }    

    return(
        <FormCont onSubmit={onSubmit}>
            <div>
                <FormLabel htmlFor="name">Breed name:</FormLabel>
                {errors.name&&(<FormError>{errors.name}</FormError>)}
            </div>
            <FormText name="name" placeholder="Name:" onChange={hadleInputChange}/>
            <div>
                <FormLabel htmlFor="heightMin">Min height:</FormLabel>
                {errors.heightMin&&(<FormError>{errors.heightMin}</FormError>)}   
            </div>
            <FormText name="heightMin" placeholder="Minimun height (Cm):" onChange={hadleInputChange}/>
            <div>
                <FormLabel htmlFor="heightMax">Max height:</FormLabel>
                {errors.heightMax&&(<FormError>{errors.heightMax}</FormError>)}
            </div>
            <FormText name="heightMax" placeholder="Maximun height (Cm):" onChange={hadleInputChange}/>
            <div>
                <FormLabel htmlFor="weightMin">Min weight:</FormLabel>
                {errors.weightMin&&(<FormError>{errors.weightMin}</FormError>)} 
            </div>
            <FormText name="weightMin" placeholder="Minimun weight (Kg):" onChange={hadleInputChange}/>
            <div>
                <FormLabel  htmlFor="weightMax">Max weight:</FormLabel>
                {errors.weightMax&&(<FormError>{errors.weightMax}</FormError>)}
            </div> 
            <FormText name="weightMax" placeholder="Maximun weight (Kg):" onChange={hadleInputChange}/>
            <div>
                <FormLabel htmlFor="origin">Origin Place:</FormLabel>
                {errors.origin&&(<FormError>{errors.origin}</FormError>)} 
            </div>
            <FormText name="origin" placeholder="Origin:" onChange={hadleInputChange} />
            <FormLabel htmlFor="lifeSpan">Life Span:</FormLabel>
            <FormText name="lifeSpan" placeholder="Life Span (Y):" onChange={hadleInputChange}/> 
            <FormLabel htmlFor="image">Url image:</FormLabel>
            <FormText name="image" placeholder="Url Image:" onChange={hadleInputChange}/>
            <TempButton onClick={handleModal}>Add Temperaments</TempButton>
            <FormSubmit type="submit" value="Create Breed"/>                 {/* Boton de enviar */}
        </FormCont>
    )
}