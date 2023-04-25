import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Blogs from '../Pages/Blogs/Blogs';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Rooms from '../Pages/Rooms/Rooms';
import RoomDetails from '../Pages/RoomDetails/RoomDetails';

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
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
                loader:()=> fetch("https://paradise-peaks-server.vercel.app/allRooms")
            },
            {
                path: "/rooms/:id",
                element: <RoomDetails></RoomDetails>,
                loader: ({params})=> fetch(`https://paradise-peaks-server.vercel.app/allRooms/${params.id}`)
            }
        ]
    }
]);

export default Router;