import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const UserContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user , setUser] =useState(null);
    const [loading , setLoading] = useState(true);
    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const registerUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email ,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth , email);
    }

    const facebookLogIn = () =>{
        return signInWithPopup(auth , facebookProvider)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth , googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoading(false);
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
        facebookLogIn,
        googleLogIn,
        loading
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;