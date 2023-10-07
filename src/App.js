import './App.css';
import './assets/css/base/base.css'
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Acerca } from './components/Acerca/Acerca';

function App() {
  return (
    <>
      <Banner />
      <Acerca />
    </>
  );
}

export default App;
