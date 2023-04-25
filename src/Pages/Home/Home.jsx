import React from 'react';
import './Home.css'
import Lottie from 'lottie-react';
import animationImg from '../../assets/27315-appointment-booking-with-smartphone.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className='my-12 lg:my-24'>
            <section className='banner-section flex justify-center items-center'>
                <div>
                    <h1 className='px-8 text-lg lg:text-4xl text-gradient-ternary font-extrabold'>Escape for a while. Find your next stay....</h1>
                    <p className=' mt-5 px-7 lg:px-8 text-base lg:text-2xl text-yellow-100 font-semibold'>Enjoy the freedom of a monthly stay on paradise Peaks</p>
                </div>
            </section>
            <section className='my-10 flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div>
                    <h1 className='text-2xl font-bold title'>Book an room, suite or apartment for you....! </h1>
                    <button className='myBtn mt-5'>
                        <Link to="/rooms">Get Started</Link>
                    </button>
                </div>
                <div>
                    <Lottie animationData={animationImg} loop={true} />
                </div>

            </section>
        </main>
    );
};

export default Home;