import React from 'react';
 
import Menu from '../menu/Menu'; 

import Formulario from './formulario/Formulario';
import Img from './img/Img'; 

 
 
class Registro extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        
		  	        <Formulario /> // Componente Servicios (Lo crearé a continuación) 
                    <Img/>
					
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		
 
	  		</>
 
		)
 
	}
 
}
 
export default Registro;