export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_INVISIBLE = 'SET_INVISIBLE';

//Acciones del estado para ver el modal de temperamentos

export function setModalVisible() {
    return { type: SET_VISIBLE};
  }
export function setModalInvisible() {
    return { type: SET_INVISIBLE};
  }


