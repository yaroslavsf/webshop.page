import axios from 'axios';
import { array } from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from '../moleculas/Card'
import { ProductLittle } from './SingleProductPage';

export const ProductsPage = () => {
   

    const [cards, setCards] = React.useState<
        Array<ProductLittle>
    >([])

    useEffect(() => {

        axios.get('http://localhost:5500/products')
            .then(response => {
                
                setCards(response.data[0])
                console.log(cards)
            })
            .catch(error => {
                console.error('Login error handle submit', error);
            });
    }, [])

    return (
        <section>
            <ul role="list" className="flex flex-wrap">
                {

                    cards.map((card, index) => {
                        return (
                            <Card
                          
                                cardId={card.id}
                                cardName={card.name}
                                cardCategory={card.category}
                                cardPrice={card.price}
                                cardDescription={card.littleDescription}
                                imagePathURL={card.imagePathURL} 
                                />
                        )
                        // }

                    })
                }

            </ul>
        </section>
    );
}