import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthProviders/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { registerUser } = useContext(UserContext);
    const [type, setType] = useState('password');
    const [show, setShow] = useState(false);
    const [error, getError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleShow = () => {
        setType('text')
    }
    const handleHide = () => {
        setType('password')
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUrl = form.photoUrl.value;
        const userName = form.userName.value;
        if (password !== confirmPassword) {
            getError("Password doesn't match");
            return;
        }
        if(password.length < 6){
            getError("Password must be contain 6 characters.");
            return;
        }else if(!/(?=.*?[A-Z])/.test(password)){
            getError("Password must be contain At least one upper case characters.");
            return;
        }else if(!/(?=.*?[0-9])/.test(password)){
            getError("Password must be contain At least one digit.");
            return;
        }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            getError("Password must be contain At least one special character.");
            return;
        }

        console.log(email, password, confirmPassword, photoUrl, userName);
        registerUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                toast.success('Register Successfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                updateProfile(loggedUser , {
                    displayName : userName , photoURL : photoUrl
                }).then(()=>{console.log("Update")}).catch((error)=>{console.log(error);})
                navigate('/');
                form.reset();
                getError('');
            }).catch(error=>{
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
                <h2 className='text-center my-8 font-bold text-gradient'>Register Now!</h2>
                <form className='flex flex-col' onSubmit={handleRegister}>
                    <label htmlFor="email" className='mb-2 font-medium text-gray-600'>Email:</label>
                    <input type="email" id="email" name="email" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0' required />

                    <label htmlFor="userName" className='mt-4 mb-2 font-medium text-gray-600'>User Name:</label>
                    <input type="text" id="userName" name="userName" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0' required />

                    <label htmlFor="photoUrl" className='mt-4 mb-2 font-medium text-gray-600'>Photo URL:</label>
                    <input type="url" id="photoUrl" name="photoUrl" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0' />

                    <label htmlFor="password" className='mt-4 mb-2 font-medium text-gray-600'>Password:</label>
                    <span className='flex items-center '>
                        <input type={type}
                            id="password" name="password" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0' required />
                        <span className='cursor-pointer right-8 relative' onClick={() => setShow(!show)}>
                            {
                                show ? <FaEye className='w-5 text-gradient-primary' onClick={handleHide} /> : <FaEyeSlash className='w-5 text-gradient-primary' onClick={handleShow} />
                            }
                        </span>
                    </span>

                    <label htmlFor="confirmPassword" className='mt-4 mb-2 font-medium text-gray-600'>Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className='border border-gray-300 rounded-md outline-none bg-gray-300 bg-opacity-20  focus:border-0' required />
                    <p className='font-medium text-red-600 mt-2'>{error}</p>
                    <button type="submit" className='myBtn mt-5'>Register</button>
                </form>
                <hr className='my-5' />
                <div className='flex flex-col'>
                    <p className='font-medium'>Already have an account? <Link to="/login" className='text-green-400'>Login</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default Register;