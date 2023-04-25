import React, { useEffect } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const loc = useLocation();
    useEffect(()=>{
        if(loc.pathname == "/"){
            document.title = "Paradise peaks"
        }else{
            document.title =`Paradise peaks ${loc.pathname.replace("/", "| ")}`
        }
    },[loc.pathname])
    return (
        <main className='myContainer'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </main>
    );
};

export default Main;