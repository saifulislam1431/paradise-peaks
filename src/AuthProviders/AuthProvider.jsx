import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const UserContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user , setUser] =useState(null);

    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth , email ,password);
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth , email, password);
    }

    const logOut =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const userInfo = {
        user,
        registerUser,
        signInUser,
        logOut
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;