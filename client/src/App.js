import React, { Component } from 'react';
import Axios from 'axios';
import Result from './Component/Result'
import Favorites from './Component/Favorite'
import Menu from './Component/Menu'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'flume',
      type: 'musicTrack',
      hits: [],
      favorites: []
    }
  }

 

  handleSubmit = (e) => {
    e.preventDefault();
    let query = e.target.elements.query.value;
    let type = this.state.type;
    
    
    const hits = this.state.hits;
    Axios.get(`/api/search/${query}/${type}`)
          .then((response) => this.setState({hits: response.data}))
          .catch((err) => console.log(err));
          
  }


  deleteFavorite = (index, e) => {
    const favorites = Object.assign([], this.state.favorites);
    favorites.splice(index, 1);
    this.setState({favorites: favorites})
  }
  render() {
    


    let query = this.state.query;
    let type = this.state.type;
    let hits = this.state.hits;
    let favorites = this.state.favorites;


    
    return (


      
      
        <div className="mainClass">
        
        <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossOrigin="anonymous"
  />
          <Menu />

          <h1>Welcome to the itunes search</h1><br />
          <p>This is where we search for different itunes resource</p><br />

          <form id="/" onSubmit={this.handleSubmit}>
            <input name="query" value={query} onChange={(e) => this.setState({query: e.target.value})} placeholder="Enter query..."/>
            
            <select value={type} onChange={(e) => this.setState({type: e.target.value})}>
              <option value="movie">Movie</option>
              <option value="podcast">Podcast</option>
              <option value="musicTrack">Music</option>
              <option value="audiobook">Audiobook</option>
              <option value="shortFilm">Short Film</option>
              <option value="tvEpisode">Tv Show</option>
              <option value="software">Software</option>
              <option value="ebook">ebook</option>
              <option value="allTrack">All</option>
    
            </select>
            
            <button>Submit</button>
          </form>


          <Container>
            <Row>
              <Col>
              <br /><br />
              <p><strong>Search results</strong></p><br /><br />
                  {
                    hits.map((result) => (
                
                      <Result data-testid = "resolved" result = {result} addFav={(fav) => this.setState({ favorites: [...favorites, fav]})}/>
            
                    ))
                  }
              </Col>
              <Col>
                  <br /><br />
                  <p><strong>Favorite artists</strong></p><br /><br /> 
                  <ul>    
                    {
                      favorites.map((favResult, index) => (
                        
                        <Favorites id="/favorite" favResult = {favResult} delEvent = {this.deleteFavorite.bind(this, index)}/>
                    
                        
                      ))
                    }
                  </ul>
              </Col>
            </Row>
          </Container>
          

            
             

            
 

        </div>
      
    );
  }
}

export default App;