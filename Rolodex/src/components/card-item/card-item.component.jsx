import { Component } from 'react';
import './card-item.style.css';

class CardItem extends Component {
    render() {
        const { monsters } = this.props;
        return monsters.map(monster => {
            const { name, email, id } = monster;
            return (
                <div className='card-container' key={id}>
                    <img alt={`monster ${monster.name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            );
        });
    }
}

export default CardItem;
