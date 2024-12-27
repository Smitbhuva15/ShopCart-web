import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthProvider';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.Config"
const auth = getAuth();


const title = "Resister";
const socialTitle = "Login with Social Media"
const btnText = "Resister Now"


const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { singUpWithGmail, createUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();


    const handelRegister = () => {
        singUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("please provide valid email & password!")
        })

        //   signInWithPopup(auth, provider).then((result) => {
        //        const user = result.user;
        //        alert("Login SuccessFully Done!")

        //      }).catch((error) => {
        //        // Handle Errors here.
        //        const errorCode = error.code;
        //        const errorMessage = error.message;
        //       console.log(errorMessage)

        //      });
    }


    const handelSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword= form.confirmPassword.value
        // console.log(email,password,confirmPassword)
        if(password!==confirmPassword){
            setErrorMessage("Password doesn't match! please, provide a correct password!")
        }
        else{
            setErrorMessage("");
            createUser(email,password).then((useCredential)=>{
                const user=useCredential.user;
                alert("Account created successfully done!!!")
                navigate(from,{replace:true})
            }).catch((error)=>{
                console.log(error.message);
                alert(`${error.message}`)
            })

        }
        
    }
    return (
        <div>
            <div className='login-section padding-tb section-bg'>
                <div className='container'>
                    <div className='account-wrapper'>

                        <h3 className='title'>{title}</h3>
                        <form onSubmit={handelSignUp} className='account-form'>
                            <div className='form-group'>
                                <input type="text" name="name" id="name" placeholder='Full Name *' required />
                            </div>
                            <div className='form-group'>
                                <input type="email" name="email" id="email" placeholder='Email Address *' required />
                            </div>
                            <div className='form-group'>
                                <input type="password" name="password" id="password" placeholder='Password * ' required />
                            </div>
                            <div className='form-group'>
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Passwword * ' required />
                            </div>

                            {/* showing message */}
                            {
                                errorMessage && (
                                    <div className='error-message text-danger mb-1'>
                                        {errorMessage}
                                    </div>
                                )
                            }

                            <div className='form-group'>
                                <button type='submit' className='d-block lab-btn'>
                                    <span>
                                        {btnText}
                                    </span>
                                </button>
                            </div>
                        </form>

                        {/* account bottom */}
                        <div className='account-bottom'>
                            <span className='d-block cate pt-10'>
                                Have an Account? <Link to="/login">Login</Link>
                            </span>
                            <span className='or'>
                                <span>or</span>
                            </span>



                            {/* social login */}
                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className='lab-ul social-icons justify-content-center'>
                                <li >
                                    <button className='github' onClick={handelRegister}><i className='icofont-github'></i></button>
                                </li>
                                <li >
                                    <a href='/' className="facebook"><i className="icofont-facebook"></i></a>
                                </li>
                                <li >
                                    <a href='/' className="twitter"><i className="icofont-twitter"></i></a>
                                </li>
                                <li >
                                    <a href='/' className="linkedin"><i className="icofont-linkedin"></i></a>
                                </li>
                                <li >
                                    <a href='/' className="instagram"><i className="icofont-instagram"></i></a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp