import React from 'react';

import Menu from '../menu/Menu';
import Img from './img/Img';
import Inicio from './inicio/Inicio';
 
 
class Login extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
					<div class="row">
    
					<div class="column" style={{float:"left"}}>
		  	  				  	        
					<Img /> 
					</div>
					<div class="column" style={{padding:"30px"}}>
                    <Inicio/>
					
					</div>
					</div>
 
		            </div>
 
	  		</main>
 
	  		
 
	  		</>
 
		)
 
	}
 
}
 
export default Login;