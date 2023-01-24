import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box-component'
import './App.css';

class App extends Component {
    constructor() {

        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>
                this.setState(
                    () => {
                        return { monsters: users };
                    }

                )
            );
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();

        this.setState(
            () => {
                return { searchField };
            },
            () => { }
        );
    }

    render() {

        const { monsters, searchField } = this.state
        const { onSearchChange } = this

        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField);
        });

        return (
            <div className='App'>


                <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monster' className='monster-search-box' />
                <CardList monsters={filteredMonsters} className='card-list' />
            </div>

        )
    }
}

export default App;
