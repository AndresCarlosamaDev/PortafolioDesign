import './App.css';
import './assets/css/base/base.css';
import { TemporaryDrawer } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Acerca } from './components/Acerca/Acerca';
import { MenuProy } from './components/MenuProy/MenuProy';
import { Contactame } from './components/Contactame/Contactame';
import { Redes } from './components/Redes/Redes';
import { Servicios } from './components/Servicios/Servicios';

function App() {
  return (
    <>
      <TemporaryDrawer />
      <Banner />
      <Acerca />
      <MenuProy />
      <Servicios />
      <Contactame />
      <Redes />
    </>
  );
}

export default App;
