import './App.css';
import HeadComponent from './components/HeadComponent';
import FootComponent from './components/FootComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrincipalComponent from './components/PrincipalComponent';
import UbicacionComponent from './components/UbicacionComponent';
import ServiciosComponent from './components/ServiciosComponent';
import RegistroComponent from './components/RegistroComponent';
import CitasComponent from './components/CitasComponent';
import CitaRegistradaComponent from './components/CitaRegistradaComponent';
import InicioSesionComponent from './components/InicioSesionComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeadComponent />
        <div className='container'>
          <Routes>
            <Route path='/'element={<PrincipalComponent/>}></Route>
            <Route path='/ubicacion' element={<UbicacionComponent/>}></Route>
            <Route path='/servicios'element={<ServiciosComponent/>}></Route> 
            <Route path='/iniciosesion' element={<InicioSesionComponent />}></Route>
            <Route path='/registro' element={<RegistroComponent />}></Route>
            <Route path='/citas' element={<CitasComponent />}></Route>
            <Route path='/cita' element={<CitaRegistradaComponent />}></Route>
          </Routes>
        </div>
        <FootComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
