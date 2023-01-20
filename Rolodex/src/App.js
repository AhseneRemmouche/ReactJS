import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        console.log('Constructor');
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        console.log('ComponentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {
                        console.log(this.state);
                    }
                )
            );
    }
    render() {
        console.log('Render');
        const filteredMonsters = this.state.monsters.filter(monster => {
            console.log(monster.name);
            return monster.name.toLowerCase().includes(this.state.searchField);
        });
        return (
            <div className='App'>
                <input
                    className='search-box'
                    type='search'
                    placeholder='Search monsters'
                    onChange={event => {
                        const searchField = event.target.value.toLowerCase();

                        console.log(filteredMonsters);
                        this.setState(
                            () => {
                                return { searchField };
                            },
                            () => {}
                        );
                    }}
                />
                {this.state.monsters.map(monster => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
