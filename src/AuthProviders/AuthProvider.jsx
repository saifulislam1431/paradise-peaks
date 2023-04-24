import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const UserContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user , setUser] =useState(null);

    


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const userInfo = {
        user
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;