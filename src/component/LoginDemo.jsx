import React from 'react'

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
import {  signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.Config"
const auth = getAuth();



const LoginDemo = () => {
  const handelLogin=()=>{
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      alert("Login SuccessFully Done!")
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
     console.log(errorMessage)
     
    });
  }
  return (
    <div className='m-5 p-5'>
      <button className='bg-primary px-4 text-white' onClick={handelLogin}>Login</button>

    </div>
  )
}

export default LoginDemo