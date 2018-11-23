import React from 'react';
import Planet from './Planet';

const PlanetList = ({planets}) => {
    return (
        <div>
            {
                planets.map((planet, i) => {
                    return (        
                        <Planet
                            key={i}
                            name={planets[i].name}
                            diameter={planets[i].diameter}
                            population={planets[i].population}
                            climate={planets[i].climate}
                        />
                    );
                })
            }
        </div>
    );
}

export default PlanetList;