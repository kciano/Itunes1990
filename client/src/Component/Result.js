import React, { Component } from 'react';

class Result extends Component {


 
    render() {
        const result = this.props.result;
        console.log(result);
        const {artistName, trackName, artworkUrl100, kind, trackPrice, currency} = result;
        return (
            <div>

                <h1>{artistName}</h1>
                <h3>{trackName}</h3>
                <img src={artworkUrl100} alt={artistName} />
                <p>{kind}</p>
                <h4>
                    {trackPrice}
                    {currency}
                </h4>
                
                <button onClick={() => this.props.addFav({artistName, trackName})}>Add to Favorite</button>
                <br /><br />
                
            </div>
        );
    }
}

export default Result;
