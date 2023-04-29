import React from 'react';
import load from '../../assets/98432-loading.json';
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
            <Lottie animationData={load} loop={true} />
        </section>
    );
};

export default Loading;