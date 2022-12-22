import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { formikFormProperties } from "../organisms/LoginForm";

export const postUserLogin = (values: formikFormProperties) : Promise<AxiosResponse<any, any>> => {
    const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          //token as well
        },
      };
    return axios.post('http://localhost:5500/auth/login', values, options)
}