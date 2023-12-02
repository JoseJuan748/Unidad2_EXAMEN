import "./style/Portafolio.css"
import Inferior from "./components/Inferior"

const MainApp = () => {
  return <>
    <h1 className="NameP">Portafolio</h1>
    <div className='Portafolio'>
      <img className='ImgPerfil' src="Yo.jpeg" alt="" />
      <h2 className='Nombre'>Jose Juan Bañuelos Hernandez
        <h3 className='Universidad'>Alumno: 3er semestre
        <h4 className='Datos'>21 años</h4>
      </h3></h2>
    </div>
    <div className='Proyecto1'>
        <img className='ImgProyecto1' src="amerike-top-blanco.png" alt="" />
    </div>

      <div className="conocimientos">
        <h2 className="Texto">Conocimiento en legunajes de programacion</h2>

        <h3 className="Name">-C#</h3>
        <h3 className="Name">-Python</h3>
        <h3 className="Name">-Typescript</h3>
        <h3 className="Name">-JavaScrip</h3>
      </div>

      <div className="Ejemplos">
        <h3>Animaciones:
        </h3>
        <h3>El Cuadrito el cual va a girar en un bucle infinito</h3>
        <div className="Container">
          <div className="Cuadrito"></div>
        </div>
        <h3>El texto este cambiara su estilo y color</h3>
        <div className="Container">
          <div className="Hoverme">Hover me</div>
        </div>
        <br /><br />
      </div>
    <Inferior/>
      
  </>
}

export default MainApp
