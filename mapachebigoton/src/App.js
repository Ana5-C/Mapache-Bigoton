import './App.css';
import HeadComponent from './components/HeadComponent';
import ListaPersonasComponent from './components/InicioSesionComponent';
import FootComponent from './components/FootComponent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistroComponent from './components/RegistroComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeadComponent />
        <div className='container'>
          <Routes>
            <Route path='/iniciosesion' element={<ListaPersonasComponent />}></Route>
            <Route path='/registro' element={<RegistroComponent />}></Route>
          </Routes>
        </div>
        <FootComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
