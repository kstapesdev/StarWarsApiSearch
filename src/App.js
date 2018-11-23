import React, {Component} from 'react';
import PlanetList from './PlanetList';

class App extends Component {

    constructor(){
        super()
        this.state = {
            planets: []
        }
    }

    async getData(){
        const response = await fetch('https://swapi.co/api/planets/');
        const data = await response.json();
        this.setState({planets: data.results})
}

    componentDidMount(){
        this.getData();
    }

    render(){
        const {planets} = this.state;

        return !planets.length ?
        <h1>In a galaxy far far away...</h1> :

        (
            <div className='tc'>
                <h1 className='f1'>Star Wars Search</h1>

                <PlanetList planets={planets}/>
            </div>
        )
    }
}

export default App;
