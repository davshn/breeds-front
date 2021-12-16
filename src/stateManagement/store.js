import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/combineReducers';   //reducers combinados

//Almacena los estados globales

export const store = createStore(           //Almacenmiento recibe reducers y middleware
    rootReducers,compose(applyMiddleware(thunk))
)