import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        </Routes>
      <Footers />
    </div>
  );
}

export default App;
