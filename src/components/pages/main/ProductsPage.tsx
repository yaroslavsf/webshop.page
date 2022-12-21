import axios, { AxiosRequestConfig } from 'axios';
import { array } from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../moleculas/Card'
import { ProductLittle } from './SingleProductPage';

export const ProductsPage = () => {
   
    const navigate = useNavigate();
    const [cards, setCards] = React.useState<
        Array<ProductLittle>
    >([])

    const token = localStorage.getItem('token');
    
    const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          'token' :  token
        },
      };

    useEffect(() => {

        axios.get('http://localhost:5500/products', options)
            .then(response => {
                
                setCards(response.data[0])
                // console.log(cards)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    navigate(`/auth/login`);
                }
                console.error('Login on get a card', error);
                navigate('/not_found')
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