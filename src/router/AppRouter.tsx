import MainApp from "../MainApp";
import Calculadora from "../pages/Calculadora";
import Encuesta from "../pages/Encuesta";
import Lista from "../pages/Lista";
import Contacto from "../pages/Contacto";
import Numeromagico from "../pages/Numeromagico";
import Navbar from "./Navbar";

import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/MainApp" element={<MainApp />} id="MainApp" />
        <Route path="/Calculadora" element={<Calculadora />} />
        <Route path="/Encuesta" element={<Encuesta />} /> {}
        <Route path="/Lista" element={<Lista Name={""} />} /> {}
        <Route path="/Contacto" element={<Contacto />} /> {}
        <Route path="/Numeromagico" element={<Numeromagico />} /> {}
      </Routes>
    </>
  );
};

export default AppRouter;

