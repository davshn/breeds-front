import axios from 'axios';

//Trae Datos del back y hace validaciones para el formulario

export function validate(input){
    let error={};       //Guarda temporalmente los errores encontrados
    if(!input.name){error.name="Required"}
    else if(!(/^[a-z ,.'-]+$/i).test(input.name)){error.name="Must be text"};    //Valida contra un regExp que no acepta numeros
    if(error.origin!==null&&!(/^[a-z ,.'-]+$/i).test(input.origin)){error.origin="Must be text"}
    if(!input.heightMin){error.heightMin="Required"}
    else if(!(/^[1-9]\d*$/gm).test(input.heightMin)){error.heightMin="Must be valid"}; //Valida contra un regExp que solo acepta numeros
    if(!input.heightMax){error.heightMax="Required"}
    else if(!(/^[1-9]\d*$/gm).test(input.heightMax)){error.heightMax="Must be valid"};
    if(!input.weightMin){error.weightMin="Required"}
    else if(!(/^[1-9]\d*$/gm).test(input.weightMin)){error.weightMin="Must be valid"};
    if(!input.weightMax){error.weightMax="Required"}
    else if(!(/^[1-9]\d*$/gm).test(input.weightMax)){error.weightMax="Must be valid"};
    return error;
}

export const initialState={ //Estado inicial para las razas nuevas
    name:null,
    origin:null,
    heightMin:null,
    heightMax:null,
    weightMin:null,
    weightMax:null,
    lifeSpan:null,
    image:null,
    temperament:[],
}

export function postBreed(input){
        axios.post('https://breeds-back.herokuapp.com/dog',input) //Envia por post la a crear
        .then((res)=>{window.alert(`Created with ID: ${res.data.msg}`);})
        .catch((res)=>console.log(res));  
}

export async function getTemp(){
    try{
        const temperaments= await axios.get('https://breeds-back.herokuapp.com/temperament') //Trae por get los temperamentos
            .then((resource) => resource.data)
            .then((res)=>res.map((e)=>e.temperament))       //Crea un arreglo con los temperamentos
            .catch((res)=>console.log(res));  
        return temperaments;}
    
        catch(e){console.log(e)}
}