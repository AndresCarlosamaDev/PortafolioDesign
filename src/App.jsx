import './App.css';
import './assets/css/base/base.css';
import { TemporaryDrawer } from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Pages/Home'
import { Page404 } from './components/Pages/Page404';

function App() {
  return (
    <Router>
      <TemporaryDrawer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/aboutme" element={<AboutMe />}></Route> */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
