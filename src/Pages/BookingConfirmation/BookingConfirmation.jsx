import React from 'react';
import '../Home/Home.css'
import confirm from '../../assets/30297-transaction-confirmation.json';
import Lottie from 'lottie-react';
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const BookingConfirmation = () => {
    const navigation = useNavigation;
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
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