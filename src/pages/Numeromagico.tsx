import React, { useState } from 'react';
import "../style/Numeromagico.css"

const Numeromagico: React.FC = () => {
  const [intentos, setIntentos] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [eleccion, setEleccion] = useState<string>('');

  const Aleatorio = Math.floor(Math.random() * 1000);

  const mifuncion = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIntentos(intentos + 1);

    if (eleccion.length === 0) {
      setRespuestas([...respuestas, "<p>Ponle algo bien</p>"]);
      return;
    }

    const eleccionNumero = Number(eleccion);
    if (eleccionNumero > Aleatorio) {
      setRespuestas([...respuestas, `<p>${eleccionNumero} es mayor al numero magico</p>`]);
    } else if (eleccionNumero < Aleatorio) {
      setRespuestas([...respuestas, `<p>${eleccionNumero} es menor al numero magico</p>`]);
    } else {
      setRespuestas([...respuestas, `<h1>${eleccionNumero} es el ganador</h1>`]);
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Numero magico</title>
        <link rel="stylesheet" href="estilo.css" />
      </head>
      <body>
        <div id="blanco">
          <h1>Numero Magico</h1>
          <h3>Adivina el numero entre 0 y 1000</h3>
          <input
            type="number"
            name=""
            id=""
            value={eleccion}
            onChange={(e) => setEleccion(e.target.value)}
          />
          <button onClick={mifuncion}>Adivinar</button>
          <p>
            Intentos<b>{intentos}</b>
          </p>
          <div id="respuestas">{respuestas.map((respuesta, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: respuesta }} />
          ))}</div>
        </div>

        <script defer src="numeromagico.js"></script>
      </body>
    </html>
  );
};

export default Numeromagico;