import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Blogs from '../Pages/Blogs/Blogs';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
]);

export default Router;