import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Main from "./pages/Main";
import AOS from 'aos';
import 'aos/dist/aos.css'; // or import 'animate.css';
import { useEffect } from "react";
import About from "./pages/About";
import NinReg from "./pages/NinREg";
import Agent from "./pages/Agent";
import Paypoint from "./pages/Paypoint";
import POS from "./pages/POS";


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
        <Route path="/agent-network-mgt" element={<Agent />} />
        <Route path="/pay-point" element={<Paypoint />} />
        <Route path="/pos-distribution" element={<POS />} />
        </Routes>
      <Footers />
    </div>
  );
}

export default App;
