import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const Login = () => {
    const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || '/';
console.log(from)
    const {login}=useContext(AuthContext)
    const [loginError,setLoginError]= useState('');


   const register = e=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    login(email,password)
    .then(result=>{
        const user = result.user;
        console.log(user)
        navigate(from,{replace:true})
    })
    .catch(error=>{
        console.log(error.message)
        setLoginError(error.message)

    })
   }
    return (
        <div>

            <div className="flex min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full p-6  bg-white rounded-lg border border-gray-200 shadow-md max-w-md space-y-8">
                    <div>
                       
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                           Login
                        </h2>

                    </div>
                    <form onSubmit={register} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                          
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <p className='text-red-600'>{loginError}</p>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="main-hr flex items-center  text-center">
                        <hr className="hr-tag border-gray-300 border-1 w-full rounded-md" />
                        <label className="hr-tag block font-medium text-sm text-gray-600 w-full">
                            Or continue with
                        </label>
                        <hr className="hr-tag border-gray-300 border-1 w-full" />
                    </div>
                  

                    <div className="mt-7">
                        <div className="flex justify-center items-center">
                            <label className="mr-2" >Create account?</label>

                            <Link className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" to='/signup'>Sign Up</Link>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;