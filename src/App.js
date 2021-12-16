import { Route,Routes} from 'react-router-dom';
import HeaderStyled from './views/HeaderStyled';
import CreateStyled from './views/CreateStyled';
import LandingStyled from './views/LandingStyled';
import HomeStyled from './views/HomeStyled';
import DetailedStyled from './views/DetailedStyled';
import {ThemeProvider} from 'styled-components';
import { useSelector } from 'react-redux';
import {GlobalStyle} from './const/GlobalStyles';
import FooterStyled from './views/FooterStyled';

//Raiz de la aplicacion, contiene todas las rutas

export default function App() {
  const modes = useSelector(state=>state.darkModeReducer.darkMode);       //Hook trae si esta en modo claro u oscuro
  return (
    <>
      <ThemeProvider theme={{ mode: (modes)?'dark':'light' }}>
        <GlobalStyle $mode={modes} />
        <HeaderStyled/>
        <Routes>
            <Route exact path="/" element={<LandingStyled/>}/>
            <Route exact path="/home" element={<HomeStyled/>}/>             {/*Home*/}
            <Route exact path="/create" element={<CreateStyled/>}/>         {/*Crear raza*/}
            <Route exact path="/detailed/:id" element={<DetailedStyled/>}/>       {/*Razas detalladas*/}
        </Routes>
        <FooterStyled/>     {/*Footer*/}
      </ThemeProvider>
    </>
  )
}
