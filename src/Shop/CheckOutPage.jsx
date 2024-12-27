import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../Shop/model.css'



const CheckOutPage = () => {

    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");
    

    // direct to home page

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // handle Tab change

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }
    const orderConfirm = () => {
        alert("Your order is Placed Successfully");
        localStorage.removeItem("cart");
        navigate(from, { replace: true })
    }

    const handelShow = () => setShow(true);
    const handelClose = () => setShow(false);
    return (
        <div className='modalcard'>
            {/* <button variant='primary' className=' '></button> */}
            <button type="button" className="btn btn-primary py-2" onClick={handelShow}>proceed to CheckOut</button>

            <Modal
                show={show}
                onHide={handelClose}
                animation={false}
                className="modal fade"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <img src="./images/pyment/newpaypal..png" alt="loding" width={160} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*paypal content */}

                    <div className='mt-4 mx-4'>
                        <div className='text-center'>
                            <h5>PayPal Account Info</h5>
                        </div>
                        <div className='form mt-3'>
                            <div className='inputbox'>
                                <input type="text" name="name" id="name" className='from-control' required />
                                <span>Enter your email</span>
                            </div>
                            <div className='inputbox'>
                                <input type="text" name="number" id="number" min="1" max="999" className='from-control' required />
                                <span>Your Name</span>
                            </div>
                            <div className='inputbox'>
                                <input type="text" name="number" id="number" min="1" max="999" className='from-control' required />
                                <span>Extra info</span>
                            </div>

                            <div className='pay'>
                                <button className='btn  btn-primary btn-block ' onClick={orderConfirm}>Add PayPal</button>
                            </div>
                            <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer:  </em> In no event shall payment or partial payment by Owner for any materia; or service</p>
                        </div>

                    </div>

                </Modal.Body>
            </Modal>

        </div>
    )
}

export default CheckOutPage