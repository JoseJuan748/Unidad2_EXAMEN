import { useState } from 'react';
import "../style/Encuesta.css"

const Encuesta = () => {
  const [respuestas, setRespuestas] = useState({
    pregunta1: false,
    pregunta2: false,
    pregunta3: false,
    pregunta4: false,
    pregunta5: false,
    pregunta6: false,
    pregunta7: false,
    pregunta8: false,
    pregunta9: false,
    pregunta10: false,
  });

  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respuestasBloqueadas, setRespuestasBloqueadas] = useState(false);

  const handleRespuesta = (pregunta: string, valor: boolean) => {
    if (!respuestasBloqueadas) {
      setRespuestas((prevRespuestas) => ({
        ...prevRespuestas,
        [pregunta]: valor,
      }));
    }
  };

  const calcularPuntaje = () => {
    let puntaje = 0;
    for (const pregunta in respuestas) {
      if (Object.prototype.hasOwnProperty.call(respuestas, pregunta)) {
        puntaje += respuestas[pregunta as keyof typeof respuestas] ? 1 : 0;
      }
    }
    return puntaje;
  };

  const obtenerFrase = (puntaje: number) => {
    if (puntaje === 7) {
      return "Eres un programador senior";
    } else if (puntaje >= 4 && puntaje <= 6) {
      return "Eres un programador semi junior";
    } else if (puntaje >= 2 && puntaje <= 3) {
      return "Eres un programador junior";
    } else if (puntaje === 1) {
        return "Estas empezando con la programacion";
    } else {
      return "No eres programador";
    }
  };

  const mostrarResultadoHandler = () => {
    setMostrarResultado(true);
    setRespuestasBloqueadas(true);
  };

  return <>
  <form onSubmit={mostrarResultadoHandler}></form>
    <div className="encuesta-container">
      <h1 className='Encuesta'>Cuantos lenguajes sabes usar?</h1>
      <ol className="preguntas-lista">
        <li>
          <label>
            Sabes usar C/C++?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta1"
                value="si"
                onChange={(e) => handleRespuesta('pregunta1', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta1"
                value="no"
                onChange={(e) => handleRespuesta('pregunta1', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Sabes usar C#?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta2"
                value="si"
                onChange={(e) => handleRespuesta('pregunta2', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta2"
                value="no"
                onChange={(e) => handleRespuesta('pregunta2', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Sabes usar Python?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta3"
                value="si"
                onChange={(e) => handleRespuesta('pregunta3', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta3"
                value="no"
                onChange={(e) => handleRespuesta('pregunta3', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
          Sabes usar TypeScript?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta4"
                value="si"
                onChange={(e) => handleRespuesta('pregunta4', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta4"
                value="no"
                onChange={(e) => handleRespuesta('pregunta4', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
          Sabes usar Javascript?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta5"
                value="si"
                onChange={(e) => handleRespuesta('pregunta5', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta5"
                value="no"
                onChange={(e) => handleRespuesta('pregunta5', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Sabes usar Java?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta6"
                value="si"
                onChange={(e) => handleRespuesta('pregunta6', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta6"
                value="no"
                onChange={(e) => handleRespuesta('pregunta6', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Sabes usar PHP?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta7"
                value="si"
                onChange={(e) => handleRespuesta('pregunta7', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta7"
                value="no"
                onChange={(e) => handleRespuesta('pregunta7', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
      </ol>
      <button className="boton" onClick={mostrarResultadoHandler} disabled={mostrarResultado}>
        Resultado
      </button>
      {mostrarResultado && (
        <div className="resultado">
          <h2>Resultado:</h2>
          <p>{obtenerFrase(calcularPuntaje())}</p>
        </div>
      )}
    </div>
        <br /><br /><br />
  </>;
};

export default Encuesta;

