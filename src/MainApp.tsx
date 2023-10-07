import "./style/Portafolio.css"
import Inferior from "./components/Inferior"


const MainApp = () => {
  return <>
    <h1 className="NameP">Portafolio</h1>
    <div className='Portafolio'>
      <img className='ImgPerfil' src="Yo.jpeg" alt="" />
      <h2 className='Nombre'>Jose Juan Bañuelos Hernandez 
      </h2>
    </div>
      
      <div className='Proyecto1'>
        <img className='ImgProyecto1' src="amerike-top-blanco.png" alt="" />
        <h3 className='TextoProyecto1'>Universidad: Amerike</h3>
        <h3 className='TextoProyecto1'>Carrera: Desarrollo de software intercativo y videojuegos</h3>
        <h3 className='TextoProyecto1'>Semestre actual: 3ro</h3>
        <h3 className='TextoProyecto1'>Conocimientos: C++, html, python</h3>
        <h3 className='TextoProyecto1'>Redes:</h3>
      </div>

      <br /><br /><br /><br /><br />

    <Inferior/>
      
  </>
}

export default MainApp