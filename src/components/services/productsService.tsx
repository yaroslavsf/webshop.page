import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const getProductById = (id: string|undefined, token:string|null) : Promise<AxiosResponse<any, any>> => {
    const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          'token' :  token
        },
      };
    return axios.get(`http://localhost:5500/products/${id}`, options)
}

export const getAllProducts = (token: string|null) : Promise<AxiosResponse<any, any>>=> {
    const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          'token' :  token
        },
      };
    return axios.get('http://localhost:5500/products', options)
    
}