import {SET_VISIBLE,SET_INVISIBLE}from '../actions/tempModalActions';

//Reducer para el modal de temperamentos

const INITIAL_STATE = {
    tempModal:false          //Inicializa el modal invisible
}

const  modalReducer = (state=INITIAL_STATE,{type})=>{
    switch  (type){
        case SET_VISIBLE: return{ 
            ...state,                   //Hace visible el modal
            tempModal:true}
        case SET_INVISIBLE: return{ 
            ...state,                   //Hace invisible el modal
            tempModal:false}
        default: return state;
    }
}

export default modalReducer;