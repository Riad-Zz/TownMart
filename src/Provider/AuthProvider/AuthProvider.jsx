import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext() ;
const auth = getAuth(app) ;
const googleProvider = new GoogleAuthProvider() ;

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null) ;
    const [loading,setLoading] = useState(true) ;


    //-----------------Google Login -------------------------
    const gooogleLogin = ()=>{
        return  signInWithPopup(auth,googleProvider)
    }
    //------------------LogOut-------------------------------
    const LogOut = () => {
        return signOut(auth)
    }
    //----------------------Observer---------------------------
    useEffect(()=>{
        const tracking = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser) ;
            setLoading(false) ;
        })
        return()=>{
            tracking() ;
        }
    },[])

    const AuthData = {
        user,
        setUser,
        loading,
        setLoading,
        gooogleLogin,
        LogOut,
    }
    return (
        <div>
            <AuthContext value={AuthData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;