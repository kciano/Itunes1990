import React from 'react';

const Favorite = (props) => {

    const favResult = props.favResult;
    const {artistName, trackName} = favResult;
    return (
        <li>
                
                <h4>Artist:  {artistName}</h4>
                <h5>Track:  {trackName}</h5> <br />
                <button onClick={props.delEvent}>Delete</button>

        </li>
    );
};

export default Favorite;