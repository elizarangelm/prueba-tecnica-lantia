
import React from 'react';
import '../../../App.css';
 
class Formulario extends React.Component {
 
  render() {
 
    return (
 
        <form className="mb-5">
 
          <div className="form-group">
            <label htmlFor="nombres" className="negrita">Nombres</label>
            <input type="text" className="form-control" id="nombres" required />            
          </div>
          <div className="form-group">
            <label htmlFor="apellidos" className="negrita">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" required />            
          </div>
          <div className="form-group">
            <label htmlFor="celular" className="negrita">Celular</label>
            <input type="text" className="form-control" id="celular" required />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="negrita">Nombre de Usuario</label>
            <input type="text" className="form-control" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="negrita">Correo Electronico</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="clave" className="negrita">Contraseña</label>
            <input type="password" className="form-control" id="clave" required />
          </div>
 
          
 
          <button type="submit" className="btn btn-primary">REGISTRATE GRATIS</button>
 
        </form>
 
    )
    
  }
 
}
 
export default Formulario;
