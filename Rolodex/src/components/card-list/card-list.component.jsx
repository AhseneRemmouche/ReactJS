import { Component } from 'react';
import CardItem from '../card-item/card-item.component';
import './card-list.style.css';
class CardList extends Component {
    render() {
        console.log(this.props.monsters);
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {/* {monsters.map(monster => {
                    const { name, email, id } = monster;
                    return (
                        <div className='card-container' key={id}>
                            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    );
                })} */}
                <CardItem monsters={monsters} />
            </div>
        );
    }
}

export default CardList;
