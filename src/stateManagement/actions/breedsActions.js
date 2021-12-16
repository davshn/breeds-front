import axios from 'axios';
import { sortOnAZ,sortOnNum,filterTemp,filterCreat } from '../../const/getData';

export const GET_BREEDS = 'GET_BREEDS';
export const SEARCH_BREEDS = 'SEARCH_BREEDS';
export const ORDER_BY_AZ = 'ORDER_BY_AZ';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const ORDER_BY_ID = 'ORDER_BY_ID';
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP';
export const FILTER_BY_CREAT = 'FILTER_BY_CREAT';

//Acciones del contenedor de razas traidas del back

export const getBreeds=()=>(dispatch)=> {
    return axios.get("https://breeds-back.herokuapp.com/dogs/") //Trae por get todas las razas
    .then((resource) => resource.data)      //Tiene los datos de la raza
    .then((breeds)=>{
      dispatch({
      type: GET_BREEDS,
      payload: breeds,
      });
    });
  }

export const searchBreeds=(name)=>(dispatch)=> {
  return axios.get(`https://breeds-back.herokuapp.com/dogs?name=${name}`) //Trae por get el resultado de la buqueda
  .then((resource) => resource.data)      //Tiene los datos de la busqueda
  .then((breeds)=>{
    dispatch({
      type: SEARCH_BREEDS,
      payload: breeds,
      });
    });
  }

export function orderByAZ(data) {       //Recibe un arreglo de datos y lo ordena por "name"
  const breeds=data.sort(sortOnAZ("name"));
  return { type: ORDER_BY_AZ,
           payload: breeds,
  };
}

export function orderByWeight(data) {     //Recibe un arreglo de datos y lo ordena por "weightMin"
  const breeds=data.sort(sortOnNum("weightMin"));
  return { type: ORDER_BY_WEIGHT,
           payload: breeds,
  };
}

export function orderByID(data) {     //Recibe un arreglo de datos y lo ordena por "id"
  const breeds=data.sort(sortOnNum("id"));
  return { type: ORDER_BY_ID,
           payload: breeds,
  };
}

export function filterByTemp(data,temp){    //Recibe un arreglo de datos y un temp y lo filtra
  const breeds=filterTemp(data,temp);
  return { type: FILTER_BY_TEMP,
           payload: breeds,
  };
}

export function filterByCreat(data,creat){    //Recibe un arreglo de datos y un creat y lo filtra
  const breeds=filterCreat(data,creat);
  return { type: FILTER_BY_CREAT,
           payload: breeds,
  };
}