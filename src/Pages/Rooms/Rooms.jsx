import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRoom from '../SingleRoom/SingleRoom';

const Rooms = () => {
    const allRooms = useLoaderData();
    const [isAllShow , setIsAllShow] = useState(false);

    // console.log(allRooms);
    return (
        <main className='my-6 lg:my-20'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8'>
               {
                allRooms.slice(0,isAllShow ? 20 :9).map(rooms => <SingleRoom
                key={rooms.id}
                singleRoom ={rooms}
                ></SingleRoom>)
               }
            </section>
           <div className='text-center'>
          {
            !isAllShow &&  <button className='myBtn my-10' onClick={()=> setIsAllShow(!isAllShow)}>Show All</button>
          }
           </div>
        </main>
    );
};

export default Rooms;