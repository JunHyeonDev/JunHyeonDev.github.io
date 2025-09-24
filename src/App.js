import './App.css';
import './AppMobile.css';
import './Anims.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Lenis from '@studio-freight/lenis';


function App() {
  
  const lenis = new Lenis();


  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
