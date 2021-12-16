import axios from 'axios';

//Trae datos del backend

export function getBreedId(id){
    const breed= axios.get(`https://breeds-back.herokuapp.com/dogs/${id}`) //Trae por get la informacion de la raza por id
        .then((resource) => resource.data[0])      //Tiene los datos de la raza
        .catch((res)=>console.log(res));  
    return breed;
}

export function getTemps(breed){                //Recibe el objeto de raza y convierte los temperamentos en string
    if (breed.created){return breed.temperaments.map((tem)=>tem.temperament).toString()}
    return breed.temperament
}

export function paginate(breeds,page){           //envia los 8 objetos de la pagina actual a graficar
    let contain=[];
    const min=(page-1)*8;
    const max=(page*7)+(page-1)
    
    for(let i=min;i<=max;i++){
        contain.push(breeds[i]);
    }
  
    return contain;
  }

  export function sortOnAZ(property){       //Transforma en mayusculas la propiedad del objeto y ordena alfabetico
    return function(a, b){
        if(a[property].toUpperCase() < b[property].toUpperCase()){
            return -1;
        }else if(a[property].toUpperCase() > b[property].toUpperCase()){
            return 1;
        }else{
            return 0;   
        }
    }
}

export function sortOnNum(property){       //Ordena en orden numerico
    return function(a, b){
        return (a[property] - b[property])}
    }

export function filterTemp(breeds,temp){               //Filtra por temperamentos
    const filtered=breeds.filter(breed=>{
        if(breed.temperaments){breed.temperament=getTemps(breed)};
        if (breed.temperament) {
            return breed.temperament.includes(temp)}
        return null;
        });
    return filtered
} 

export function filterCreat(breeds,creat){               //Filtra por Creacion
    const filtered=breeds.filter(breed=>breed.created===creat);
    return filtered
} 