import "../style/Contacto.css"

const Contacto = () => {
  return (
    <div className="container">
      <h1>Gracias por tomarse el tiempo para comunicarse. </h1>
      <h2>¿Cómo puedo ayudarte hoy?</h2>
      <form target="_blank" action="https://formsubmit.co/pepebh2002@gmail.com" method="POST">
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input type="text" name="name" className="form-control" placeholder="Nombre" required />
            </div>
            <div className="col">
              <input type="email" name="email" className="form-control" placeholder="Email" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea placeholder="Tu mensaje" className="form-control" name="Your Message" rows={10} required></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
      </form>
    </div>
  );
};

export default Contacto;