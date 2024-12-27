import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Navitems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);


    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        }
        else {
            setHeaderFixed(false);
        }
    })
    const handelclose=()=>{
        setMenuToggle(!menuToggle);
    };
    return (

        

        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`} >
            {/* header top start */}
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/singup" className='lab-btn me-3'>Create Account</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>

            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        {/* logo */}
                        <div className='logo-search-acte'>

                            <div className='logo'>
                                <Link to="/">
                                    <img src="/images/logo/logo.png" alt="Logo" />

                                </Link>
                            </div>
                        </div>

                        {/* menu-bar  */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/" onClick={handelclose}>Home</Link></li>
                                    <li><Link to="/shop" onClick={handelclose}>Shop</Link></li>
                                    <li><Link to="/blog" onClick={handelclose}>Blog</Link></li>
                                    <li><Link to="/about" onClick={handelclose}>About</Link></li>
                                    <li><Link to="/contact" onClick={handelclose}>Contact</Link></li>

                                </ul>


                            </div>

                            {/* sign in and log in */}
                            <Link to="/singup" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Log In</Link>

                            {/* menu toggle */}
                            <div onClick={()=>{setMenuToggle(!menuToggle)}} className={`header-bar d-lg-none  ${ menuToggle ?"active":""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/*scoial toggle */}
                            <div className='ellepsis-bar d-md-none'
                            onClick={()=>{setSocialToggle(!socialToggle)}}>
                            <i className="icofont-info-square"></i>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
};

export default Navitems