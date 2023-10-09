import './App.css';
import './assets/css/base/base.css'
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Acerca } from './components/Acerca/Acerca';
import { ContProyectos } from './components/Proyectos/Proyectos';

function App() {
  return (
    <>
      <Banner />
      <Acerca />
      <ContProyectos />
    </>
  );
}

export default App;
