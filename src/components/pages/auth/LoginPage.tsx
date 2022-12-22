import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { formikFormProperties, LoginForm } from "../../organisms/LoginForm";
import { postUserLogin } from "../../services/authService";


export const LoginPage = () => {
    const navigate = useNavigate();
    const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
    const onSubmitHandle = (values: formikFormProperties) => {
        postUserLogin(values)
            .then(response => {
                localStorage.setItem('token', response.data);
                navigate(`/products`);
            })
            .catch(error => {             
                console.error('Login error handle submit', error);
            });
    }
    return (
        <>
            <section className="h-screen">
                
                    <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
                        
                        <div className="md:w-8/12 lg:w-4/12">
                            <LoginForm onSubmitHandle={onSubmitHandle}/>
                        </div>
                    </div>
             
            </section>
        </>
    )
}