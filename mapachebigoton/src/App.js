import './App.css';
import HeadComponent from './components/HeadComponent';
import InicioSesionComponent from './components/InicioSesionComponent';
import FootComponent from './components/FootComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistroComponent from './components/RegistroComponent';
import CitasComponent from './components/CitasComponent';
import CitaRegistradaComponent from './components/CitaRegistradaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeadComponent />
        <div className='container'>
          <Routes>
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
