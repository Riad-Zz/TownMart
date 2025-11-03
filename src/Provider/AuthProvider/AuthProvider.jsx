import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";


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
    //---------------------Email Password Register------------------
    const emailRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password) ;
    }
    //------------------User Info Update--------------------
    const updateUser = (useInfo)=>{
        return updateProfile(auth.currentUser,useInfo)
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
        emailRegister,
        updateUser
    }
    return (
        <div>
            <AuthContext value={AuthData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;