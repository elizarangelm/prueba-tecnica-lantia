import React from 'react';
 
class Menu extends React.Component {
 
  render() {
 
  	return (
 
  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
		    <a className="navbar-brand" href="#">Mi Proyecto</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    
			
		    </div>
 
		</nav>
 
  	)
    
  }
 
}
 
export default Menu;