export const ADD_TEMP = 'ADD_TEMP';
export const RESET_CONTAINER = 'RESET_CONTAINER';

//Acciones del contenedor de temperamentos seleccionados

export function addTemperament(payload) {
    return { type: ADD_TEMP,
             payload:payload
            };
  }
export function resetTemperament() {
    return { type: RESET_CONTAINER};
  }


