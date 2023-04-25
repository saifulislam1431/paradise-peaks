import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const UserContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user , setUser] =useState(null);
    const facebookProvider = new FacebookAuthProvider();

    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth , email ,password);
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth , email, password);
    }

    const logOut =()=>{
        return signOut(auth);
    }
    
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth , email);
    }

    const facebookLogIn = () =>{
        return signInWithPopup(auth , facebookProvider)
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
        logOut,
        resetPassword,
        facebookLogIn
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;