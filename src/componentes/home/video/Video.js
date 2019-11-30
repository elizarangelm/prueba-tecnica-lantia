import React from 'react';
 
class Video extends React.Component {
 
  render() {
 
    return (
        
        <div className="embed-responsive embed-responsive-4by3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7nHx14x8-Tc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
 
    )
    
  }
 
}
 
export default Video;