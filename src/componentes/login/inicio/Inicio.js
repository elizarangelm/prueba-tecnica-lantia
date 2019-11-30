
import React from 'react';
import '../../../App.css';


class Inicio extends React.Component {
 
  render() {
 
    return (
 
        <form className="mb-5" >
 
 <div className="form-group" >
            <label htmlFor="email" className="negrita">Correo Electronico</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="clave" className="negrita">Contraseña</label>
            <input type="password" className="form-control" id="clave" required />
          </div>
 
          <button type="submit" className="btn btn-primary">INICIAR SESION</button>
 
        </form>
 
    )
    
  }
 
}
 
export default Inicio;
