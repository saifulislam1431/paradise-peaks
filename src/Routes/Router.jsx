import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Blogs from '../Pages/Blogs/Blogs';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "login",
                element:<Login></Login>
            },
            {
                path: "register",
                element:<Register></Register>
            }
        ]
    }
]);

export default Router;