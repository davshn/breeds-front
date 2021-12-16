import {GET_BREEDS,SEARCH_BREEDS,ORDER_BY_AZ,ORDER_BY_WEIGHT,ORDER_BY_ID,FILTER_BY_TEMP,FILTER_BY_CREAT}from '../actions/breedsActions';

//Reducer para el contenedor de razas traidas del back

const INITIAL_STATE = {
    breeds:[]          //Inicializa el contenedor vacio
}

const  breedsReducer = (state=INITIAL_STATE,{type,payload})=>{
    switch  (type){
        case GET_BREEDS: return{ 
            ...state,
            breeds: payload                   //Trae todas las razas del back
            }
        case SEARCH_BREEDS: return{ 
            ...state,
            breeds: payload                   //Trae la respuesta del back a la busqueda por nombre
            }
        case ORDER_BY_AZ: return{ 
            ...state,
            breeds: payload                   //Trae la respuesta al ordenamiento por nombre
            }
        case ORDER_BY_WEIGHT: return{ 
            ...state,
            breeds: payload                   //Trae la respuesta al ordenamiento por peso
            }
        case ORDER_BY_ID: return{ 
            ...state,
            breeds: payload                   //Trae la respuesta al ordenamiento por id
            }
        case FILTER_BY_TEMP: return{ 
            ...state,
            breeds: payload                   //Trae la respuesta al filtro por temperamentos
            }
        case FILTER_BY_CREAT: return{ 
            ...state,
            breeds: payload                   //Trae la respuesta al filtro por creacion
            }         
        default: return state;
    }
}

export default breedsReducer;