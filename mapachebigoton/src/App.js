import './App.css';
import FootComponent from './components/FootComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrincipalComponent from './components/PrincipalComponent';
import UbicacionComponent from './components/UbicacionComponent';
import ServiciosComponent from './components/ServiciosComponent';

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
          </Routes>
        </div>
        <FootComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
