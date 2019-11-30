import React from 'react';

class Servicios extends React.Component {
    constructor(props){
        super(props);
        this.state={
            articles: [] 
        }
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=db9f5b114b904df284d18ec4b747d029')
  .then((response) => {
    return response.json();
  })
  .then((myJson) =>{
    this.setState({
    articles: myJson.articles
    });
  });
    }
 
  render() {
    console.log(this.state);
    return (
    <div className="Servicios">
            {this.state.articles.map((item) =>{
               return (
            <div>
                
               <h2 style={{textAlign:'left'}}>
                    {item.title}
                </h2>
                <b>{item.Author}</b>
                <img src={item.urlToImage} style={{width:'30vw'}}></img>
                <p>{item.content}</p>
                </div>

                );
            })}
        
        </div>
 
    )
    
  }
 
}
 
export default Servicios;