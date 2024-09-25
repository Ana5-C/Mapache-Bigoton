import './App.css';
import HeadComponent from './components/HeadComponent';
import ListaPersonasComponent from './components/InicioSesionComponent';
import FootComponent from './components/FootComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistroComponent from './components/RegistroComponent';
import PrincipalComponent from './components/PrincipalComponent';
import UbicacionComponent from './components/UbicacionComponent';
import ServiciosComponent from './components/ServiciosComponent';
import CitaComponent from './components/CitaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeadComponent />
        <div className='container'>
          <Routes>
            <Route path='/iniciosesion' element={<ListaPersonasComponent />}></Route>
            <Route path='/registro' element={<RegistroComponent />}></Route>
            <Route path='/'element={<PrincipalComponent/>}></Route>
            <Route path='/ubicacion' element={<UbicacionComponent/>}></Route>
            <Route path='/servicios'element={<ServiciosComponent/>}></Route> 
            <Route path='/citas'element={<CitaComponent/>}></Route> 
          </Routes>
        </div>
        <FootComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
