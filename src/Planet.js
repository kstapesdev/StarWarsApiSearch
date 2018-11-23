import React from 'react';

const Planet = ({name, diameter, population, climate}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <p>Diameter: {diameter}</p>
            <p>Climate: {climate}</p>
        </div>
    );
}

export default Planet;
