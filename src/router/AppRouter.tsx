import MainApp from "../MainApp";
import Calculadora from "../pages/Calculadora";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom"

const AppRouter = () => {
  return <>
        <Navbar/>
          <Routes >
              <Route path="/MainApp" element ={<MainApp/>} id="MainApp"/>
              <Route path="Calculadora" element={<Calculadora/>}/>
          </Routes>
  </>
  
}

export default AppRouter