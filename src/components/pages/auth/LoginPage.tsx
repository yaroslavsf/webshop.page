import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { formikFormProperties, LoginForm } from "../../organisms/LoginForm";


export const LoginPage = () => {
    const navigate = useNavigate();
    const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          //token as well
        },
      };
  
    const onSubmitHandle = (values: formikFormProperties) => {
        axios.post('http://localhost:5500/auth/login', values, options)
            .then(response => {
                //save here in the context the user credentials
                localStorage.setItem('token', response.data);
                // console.log(response.data)
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