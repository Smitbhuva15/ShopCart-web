import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.Config"
import {GoogleAuthProvider,createUserWithEmailAndPassword,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

 export const AuthContext=  createContext();

 const auth=getAuth();
 const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,SetLoading]=useState(true);

    // create user
    const createUser=(email,password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // create user using gmail

    const singUpWithGmail=()=>{
        SetLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    // login

    const login=(email,password)=>{
        SetLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logout function
    const logOut=()=>{
        return signOut(auth);
    }

    // user is available or not

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser);
            SetLoading(false);
            
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        singUpWithGmail,
        login,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider