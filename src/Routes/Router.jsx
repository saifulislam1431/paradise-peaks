import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            
        ]
    }
]);

export default Router;