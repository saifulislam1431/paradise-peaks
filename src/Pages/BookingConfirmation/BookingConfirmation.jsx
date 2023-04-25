import React from 'react';
import '../Home/Home.css'
import confirm from '../../assets/30297-transaction-confirmation.json';
import Lottie from 'lottie-react';

const BookingConfirmation = () => {
    return (
        <main>
            <section className='lg:my-14 flex flex-col items-center min-h-[calc(100vh-100px)] justify-center'>
                <div>
                   <h2 className='text-2xl font-bold title'>Congratulation Booking Confirmed!!</h2>
                </div>
                <Lottie animationData={confirm} loop={true} />
            </section>
        </main>
    );
};

export default BookingConfirmation;