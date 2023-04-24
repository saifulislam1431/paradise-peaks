import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Blogs from '../Pages/Blogs/Blogs';
import About from '../Pages/About/About';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/about",
                element:<About></About>
            }
        ]
    }
]);

export default Router;