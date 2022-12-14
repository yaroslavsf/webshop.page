import axios from 'axios';
import { array } from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from '../molelculas/Card'

export const Main = () => {
    const [cards, setCards] = React.useState<
        Array<{
            cardName: string;
            cardCategory: string;
            cardPrice: number;
            cardDescription: string;
            imagePathURL: string;
        }>
    >([])

    useEffect(() => {

        axios.get('http://localhost:8000/shoes')
            .then(response => {
                setCards(response.data)

            })
            .catch(error => {
                console.error('Login error handle submit', error);
            });
    }, [])

    return (
        <>
            <ul role="list" className="flex flex-wrap">
                {

                    cards.map((card, index) => {
                        // if (index % 3 === 0 && index !== 0) {
                        //     return (
                        //         <>
                        //             <li className='basis-full h-0'></li>
                        //             <Card
                        //                 cardName={card.cardName}
                        //                 cardCategory={card.cardCategory}
                        //                 cardPrice={card.cardPrice}
                        //                 cardDescription={card.cardDescription}
                        //                 imagePathURL={card.imagePathURL} />
                        //         </>)
                        // } else {
                        return (
                            <Card
                                cardName={card.cardName}
                                cardCategory={card.cardCategory}
                                cardPrice={card.cardPrice}
                                cardDescription={card.cardDescription}
                                imagePathURL={card.imagePathURL} />
                        )
                        // }

                    })
                }

            </ul>
        </>
    );
}