import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './stateManagement/store';  //Almacenamiento de los estados
import './normalize.css';     //Normaliza los estilos

ReactDOM.render(
  <Provider store={store}>                {/*Provee los estados*/}
    <BrowserRouter>                       {/*Genera el enrutador*/}
        <App />                           {/*Raiz de la aplicacion*/}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);



