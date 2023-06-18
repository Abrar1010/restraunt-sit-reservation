import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate()

    const handleSignin = () =>{
        navigate('/reservation');
    }


    return (
        <div className='body'>
            <body>
                <section class="min-h-screen flex items-stretch text-white ">
                    <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center  bg-[url(/src/assets/login.jpg)]" >
                        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                        <div class="w-full px-24 z-10">
                            <h1 class="text-5xl font-bold text-left tracking-wide">Abrar's Cafe & Bistro</h1>
                        </div>

                    </div>
                    <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
                        <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-[url(/src/assets/res.jpg)]">
                            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
                        </div>
                        <div class="w-full py-6 z-20">
                            <p class="text-gray-100">
                                Use email your account
                            </p>
                            <form onSubmit={handleSignin} action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                                <div class="pb-2 pt-4">
                                    <input type="email" name="email" id="email" placeholder="Email" class="block w-full p-4 text-lg rounded-sm bg-black" required />
                                </div>
                                <div class="pb-2 pt-4">
                                    <input class="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password" required />
                                </div>
                                <div class="px-4 pb-2 pt-4">
                                    <button className='uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none' type='submit'>Sign in</button>
                                    {/* <Link to='/reservation'>   <button class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                                        sign in  </button></Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </body>

        </div>
    );
};

export default Login;