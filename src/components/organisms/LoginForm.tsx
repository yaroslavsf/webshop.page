import { Formik, Form } from "formik";
import { TextField } from "../moleculas/TextField";
import * as Yup from "yup"
import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface formikFormProperties {
    email: string,
    password: string
}

interface LoginFormProps {
    onSubmitHandle: (values: formikFormProperties) => void
}

export const LoginForm = (props:LoginFormProps) => {
   

    const validate = Yup.object({
        email: Yup.string()
            // .max(15, "must be less then 15 characters")
            // .min(5, "should be not less then 5 characters")
            .email("Email is not valid")
            .required("Required"),

        password: Yup.string()
            .required('Required')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/^[A-Za-z0-9]*$/, 'Password can only contain Latin letters.')
    });

   
    

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={validate}
                onSubmit={props.onSubmitHandle}
                // onSubmit={(values) => console.log(values)}
            >
                {(formik) => {
                    // console.log(formik.values);
                    return (
                        <div>
                            <Form>
                                <div className="mb-6">
                                    <TextField label={"Email"} name={"email"} type={"email"} />
                                </div>


                                <div className="mb-6">
                                    <TextField label={"Password"} name={"password"} type={"password"} />
                                </div>

                                {/* <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck3"
                                            checked
                                        />
                                        <label className="form-check-label inline-block text-gray-800" 
                                        >Remember me</label
                                        >
                                    </div>
                                    <a
                                        href="#!"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>
                                </div> */}


                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Sign in
                                </button>


                            </Form>
                        </div>
                    );
                }}

            </Formik>
        </>
    );
}