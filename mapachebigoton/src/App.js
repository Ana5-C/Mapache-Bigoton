import logo from './logo.svg';
import './App.css';
import HeadComponent from './components/HeadComponent';
import ListaPersonasComponents from './components/ListaPersonasComponent';
import FootComponent from './components/FootComponent';

function App() {
  return (
    <div>
      <HeadComponent />
      <ListaPersonasComponents />
      <FootComponent />
    </div>
  );
}

export default App;
