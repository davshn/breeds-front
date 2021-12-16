import {ADD_TEMP,RESET_CONTAINER}from '../actions/temperamentsActions';

//Reducer para el contenedor de temperamentos seleccionados

const INITIAL_STATE = {
    temperaments:[]          //Inicializa el contenedor vacio
}

const  temperamentsReducer = (state=INITIAL_STATE,{type,payload})=>{
    switch  (type){
        case ADD_TEMP: return{ 
            ...state,
            temperaments: state.temperaments.concat(payload)                   //Agrega un elemento al contenedor
            }
        case RESET_CONTAINER: return{ 
            ...INITIAL_STATE}              //Resetea el contenedor
        default: return state;
    }
}

export default temperamentsReducer;