import React from 'react'
import { Link } from 'react-router-dom';


const btnText="sign up foe Free";
const title="shop Anytime, AnyWhere";
const desc="Take Shop on your device with our app & learn all time what you want, Just download & install & start to learn";
const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
         <div className='container'>
            <div className='section-header text-center'>
                <Link to="/singup" className='lab-btn mb-4'>{btnText}</Link>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>

            <div className='section-wrapper'>
                <ul className='lab-ul'>
                    <li><img src="/app/01.jpg" alt="" /></li>
                    <li><img src="/app/02.jpg" alt="" /></li>

                </ul>
            </div>


         </div>
    </div>
  )
}

export default AppSection