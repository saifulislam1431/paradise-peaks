import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { FaBackward, FaBed,FaDollarSign } from 'react-icons/fa';
import {IoBed} from "react-icons/io5";

const RoomDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { id, category, description, img, price, occupancy, beds } = details;
    return (
        <main className='my-6 lg:my-14'>
            <section className='my-3 lg:my-6 flex items-center justify-center'>
                <div className='w-2/3'>
                    <h1 className='text-gradient text-center mb-5'>{category}</h1>
                    <img src={img} alt="Room Img" className='rounded-lg' />
                    <div>
                        <p className='mt-3 font-medium'>{description}</p>
                    </div>
                    <div className='my-6 flex flex-col gap-4 lg:flex-row items-center justify-between'>
                        <div className='flex gap-12'>
                          <span className='inline-flex items-center gap-2 border py-2 px-4 rounded-lg text-lg font-bold'><FaBed className='h-8 w-5 text-gradient-ternary'/> {occupancy}</span>

                          <span className='inline-flex items-center gap-2 border py-2 px-4 rounded-lg text-lg font-bold'> <IoBed className='h-8 w-5 text-gradient-ternary'/>{beds}</span>
                         
                        </div>
                        <div className='flex gap-10 items-center'>
                        <span className='inline-flex items-center gap-2 border py-2 px-4 rounded-lg text-lg font-bold'><FaDollarSign className='h-6 w-5 text-gradient-ternary'/>{price}</span>
                        <Link to ="/">
                            <button className='myBtnSecond rounded-lg'>Book Room</button>
                        </Link>
                        </div>
                    </div>
                    <div className='text-center my-10'>
                    <Link to ="/rooms">
                            <button className='myBtnSecond rounded-lg inline-flex items-center  gap-2'><FaBackward />Back</button>
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default RoomDetails;