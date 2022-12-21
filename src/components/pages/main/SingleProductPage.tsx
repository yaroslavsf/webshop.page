import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, buttonSizeEnum } from '../../atoms/Button/Button';
import { Image } from '../../atoms/Image/Image';

export interface ProductLittle {
    id: number;
    name: string;
    category: string;
    price: number;
    littleDescription: string;
    imagePathURL: string;
}

export interface ProductFull extends ProductLittle {
    condition: string;
    fullDescription: string;
}


// const SingleProductPage = (props: SinglePageProps) => {
const SingleProductPage = () => {
    let { id } = useParams();
    const [product, setProduct] = React.useState<ProductFull>()

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          'token' :  token
        },
      };
    useEffect(() => {

        axios.get(`http://localhost:5500/products/${id}`, options)
            .then(response => {
                setProduct(response.data)               
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
        <>

            <div className="flex justify-center items-center">
                <div className="py-5  md:px-6 2xl:px-0 flex justify-center items-center ">
                    <div className="flex flex-col justify-start items-start w-11/12 ">
                        

                        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                            <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                                <div className="flex flex-col justify-start items-start w-full space-y-4">
                                    <p id="name-id" className="text-xl md:text-2xl leading-normal text-gray-800">{product ? product.name : "undefined"}</p>
                                    <p id="littleDescription-id" className="text-base font-semibold leading-none text-gray-600">{product ? product.littleDescription : "undefined"}</p>
                                </div>  
                                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-56 sm:w-auto xl:w-full">
                                    <Image width='full' height='full' imagePathURL={product ? product.imagePathURL : "undefined"}/>
                                </div>
                            </div>

                            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">

                                <div className="mt-2">
                                    <h5 id="price-id"  className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product ? product.price : "undefined"} $</h5>
                                </div>
                                <div className="mt-1" id="category-id" >
                                {product ? product.category : "undefined"}
                                </div>

                                <div className="flex flex-row justify-center items-center mt-6">
                                    <hr className="border w-full" />
                                    <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">Description</p>
                                    <hr className="border w-full" />
                                </div>

                                <p id="condition-id" className="text-xl md:text-2xl leading-normal text-gray-800">Condition: {product ? product.condition : "undefined"}</p>
                                <div className="flex flex-col justify-between  mt-6">

                                    <div className="mt-2 flex-col">


                                        <p id="fullDescription-id"  className="font-normal text-gray-700 dark:text-gray-400">{product ? product.fullDescription : "undefined"}</p>

                                    </div>



                                <div className='mt-8'>
                                    <Button value='Buy' buttonSize={buttonSizeEnum.Large}></Button>
                                    
                                    </div>{/* <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                        <div>
                                            <p className="text-base leading-4">Buy</p>
                                        </div>
                                    </button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default SingleProductPage;