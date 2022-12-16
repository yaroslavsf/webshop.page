import { LoginForm } from "../../organisms/LoginForm";

export const LoginPage = () => {
    
    return (
        <>
            <section className="h-screen">
                
                    <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
                        
                        <div className="md:w-8/12 lg:w-4/12">
                            <LoginForm/>
                        </div>
                    </div>
             
            </section>
        </>
    )
}