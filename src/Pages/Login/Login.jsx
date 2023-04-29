import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaPhoneAlt } from "react-icons/fa";
import { UserContext } from '../../AuthProviders/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [type, setType] = useState('password');
    const [show, setShow] = useState(false);
    const { signInUser, resetPassword, facebookLogIn,googleLogIn } = useContext(UserContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const from = location.state.from.pathname || "/";
    // console.log(from);
    const emailRef = useRef()
    const handleShow = () => {
        setType('text')
    }
    const handleHide = () => {
        setType('password')
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                navigate(from , {replace: true});
                toast.success('Login Successfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                form.reset();
               
            }).catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
           
    }
    const resetPasswordEmail = () => {
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }
    const handleFacebookLogin =()=>{
        facebookLogIn()
        .then(res => {
            const loggedUser = res.user;
            navigate(from , {replace: true});
            toast.success('Login Successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
            form.reset();
        }).catch(error => {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

    const handleGoogleLogin =()=>{
        googleLogIn()
        .then(res => {
            const loggedUser = res.user;
            navigate(from , {replace: true});
            toast.success('Login Successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
            form.reset();
        }).catch(error => {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }
    return (
        <div className='flex items-center justify-center my-16'>
            <div>
                <h2 className='text-center my-8 font-bold text-gradient'>Login</h2>
                <form className='flex flex-col' onSubmit={handleLogin}>
                    <label htmlFor="email" className='mb-2 font-medium text-gray-600'>Email:</label>
                    <input type="email" id="email" name="email" ref={emailRef} className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0' />
                    <label htmlFor="password" className='mt-4 mb-2 font-medium text-gray-600'>Password:</label>
                    <span className='flex items-center '>
                        <input type={type}
                            id="password" name="password" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0' />
                        <span className='cursor-pointer right-8 relative' onClick={() => setShow(!show)}>
                            {
                                show ? <FaEye className='w-5 text-gradient-primary' onClick={handleHide} /> : <FaEyeSlash className='w-5 text-gradient-primary' onClick={handleShow} />
                            }
                        </span>
                    </span>

                    <button type="submit" className='myBtn mt-5'>Login</button>
                </form>
                <hr className='my-5' />
                <div className='flex flex-col'>
                    <p className='text-center font-medium'>Or login with:</p>
                    <div className='my-2'>
                        <span type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 cursor-pointer" onClick={handleGoogleLogin}>
                            <FaGoogle className='mr-2' />
                            Sign in with Google
                        </span>

                        <span className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 cursor-pointer" onClick={handleFacebookLogin}>
                            <FaFacebook className='mr-2' /> Sign in with Facebook
                        </span>

                       

                    </div>
                    <span className='my-2 font-medium text-red-500 underline' onClick={resetPasswordEmail}>Forgot password?</span>
                    <p className='font-medium'>Don't have an account? <Link to="/register" className='text-green-400'>Create one</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;