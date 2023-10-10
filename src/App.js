import './App.css';
import './assets/css/base/base.css';
import { TemporaryDrawer } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Acerca } from './components/Acerca/Acerca';
import { ContProyectos } from './components/Proyectos/Proyectos';
import { Contactame } from './components/Contactame/Contactame';
import { Redes } from './components/Redes/Redes';

function App() {
  return (
    <>
      <TemporaryDrawer />
      <Banner />
      <Acerca />
      <ContProyectos />
      <Contactame />
      <Redes />
    </>
  );
}

export default App;
