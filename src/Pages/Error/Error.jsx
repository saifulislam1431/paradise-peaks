import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/77620-404-website-error-animation.json';
import { Link } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';

const Error = () => {
    return (
        <main>
            <section className='flex items-center justify-center min-h-[calc(100vh - 100px)'>
                <div>
                    <div>
                        <Lottie animationData={errorAnimation} loop={true} />
                    </div>
                    <div className='text-center my-10'>
                        <Link to="/">
                            <button className='myBtnSecond rounded-lg inline-flex items-center  gap-2'><FaBackward />Back</button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Error;