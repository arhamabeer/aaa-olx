import React from 'react';
import { Card } from 'react-bootstrap';
import firebase from '../config/firebase.js'
import { Link } from 'react-router-dom';

class Cards extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: [],
    //         amount: [],
    //         url: [],
    //         length: 0
    //     }
    // }



    render() {
        const { item } = this.props;

        // var length = this.state.length;

        // console.log('card state >>> ', this.state)
        // console.log('card length >>> ', length)


        return (

            <div className='main-card-page'>
                <div className='cards-main-div'>
                    <div className='cards-row'>
                        <Link to={{
                            pathname:'/items', className:'link-card', detail:{ item: item }
                        }} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.url} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Rs: {item.amount}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}


export default Cards;