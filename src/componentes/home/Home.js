import React from 'react';
 
import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 

import Servicios from './servicios/Servicios';
import Tweet from './tweet/Tweet';
import Video from './video/Video';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
class Home extends React.Component {

	render() {
 
		return(
 
			<>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
					<div class="row">
    
					<div class="col-8">
					<hr style={{height:"2px", backgroundColor:"yellow"}}></hr>
					<img src="https://img.icons8.com/cotton/64/000000/news.png"/>
					<b>Noticias</b>

		  	        <Servicios />  
				</div>
				<div class="col-4 sm-2">
				<hr style={{height:"2px", backgroundColor:"red"}}></hr>
				<img src="https://img.icons8.com/doodle/48/000000/youtube--v4.png"></img>

				<b>Videos</b>
					<Video/>
					
                    <Tweet/>
					
					</div>
 
		            </div>
</div>
				
 
	  		</main>
 
	  		
 
	  		</>
 
		)
 
	}
 
}
 
export default Home;