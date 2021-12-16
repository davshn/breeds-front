import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import tempModalReducer from './tempModalReducer';
import temperamentsReducer from './temperamentsReducer';
import breedsReducer from './breedsReducer';

//Recibe los reducers a combinar

export default combineReducers ({       
    darkModeReducer,tempModalReducer,temperamentsReducer,breedsReducer
})