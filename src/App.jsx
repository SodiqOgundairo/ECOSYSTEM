import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Main from "./pages/Main";
import AOS from 'aos';
import 'aos/dist/aos.css'; // or import 'animate.css';
import { useEffect } from "react";
import About from "./pages/About";
import NinReg from "./pages/NinREg";


function App() {
  useEffect(() => {
    AOS.init({
      // Optional configuration options for AOS
    });
  }, []);
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/nin-registration" element={<NinReg />} />
        </Routes>
      <Footers />
    </div>
  );
}

export default App;
