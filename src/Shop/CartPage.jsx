import React, { useEffect, useState } from 'react'
import PageHeader from '../component/PageHeader'
import { Link } from 'react-router-dom';
import CheckOutPage from './CheckOutPage';

const CartPage = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // fetch data from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, [])

    // calculate prices

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }


    // handel to increase

    const handelIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems]);

        // update local storage with new cart itmes

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    // handel to decrease

    const handelDecraese = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;

        }
        setCartItems([...cartItems]);

        // update local storage with new cart itmes

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const handelItemRemove = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

        // updated cart
        setCartItems(updatedCart);

        // update localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }


    // cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);

    }, 0)

    // order total

    const orderTotal = cartSubtotal;


    return (
        <div>
            <PageHeader title={"shop Cart"} curPage={"Cart Page"} />

            <div className='shop-cart padding-tb'>
                <div className='container'>
                    <div className='section-wrapper'>

                        {/* cart top */}
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat.toprice'>total</th>
                                        <th className='cat-edit'>Edit</th>

                                    </tr>
                                </thead>

                                {/* tabel body */}
                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className='p-thumb'>
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className='p-content'>
                                                        <Link to="/shop">{item.name}</Link>

                                                    </div>
                                                </td>

                                                <td className='cat-price'> ${item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() => { handelDecraese(item) }}>- </div>
                                                        <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className='inc qtybutton' onClick={() => { handelIncrease(item) }}>+ </div>
                                                    </div>
                                                </td>

                                                <td className='cat-toprice'>
                                                    ${calculateTotalPrice(item)}
                                                </td>

                                                <td className='cat-edit'>
                                                    <a href="#" onClick={(e) => {
                                                        e.preventDefault(),
                                                        handelItemRemove(item)
                                                    }}>
                                                        <img src="/images/shop/del.png" alt="" />
                                                    </a>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>

                        {/* cart bottom */}
                        <div className='cart-bottom'>
                            {/* check-box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input type="text" className='cart-page-input-text' name='coupon' id='coupon' placeholder='Coupon Code....' />
                                    <input type="submit" value="Apply Coupon" />
                                </form>

                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckOutPage />
                                    </div>
                                </form>
                            </div>

                            {/* shopping box */}

                            <div className='shiping-box'>
                                <div className='row'>
                                    <div className='col-md-6 col-12'>
                                        <div className='calculate-shiping'>
                                            <h3>Calculate Shiping</h3>
                                            <div className='outline-select'>
                                                <select>

                                                    <option value="uk">United KingDom (UK)</option>
                                                    <option value="bd">Banladesh</option>
                                                    <option value="pak">Pakisthan</option>
                                                    <option value="usa">USA</option>
                                                    <option value="ind">India</option>
                                                    <option value="np">Nepal</option>

                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>

                                            </div>

                                            <div className='outline-select shipping-select'>
                                                <select>

                                                    <option value="uk">London</option>
                                                    <option value="bd">Dhaka</option>
                                                    <option value="pak">korachi</option>
                                                    <option value="usa">New York</option>
                                                    <option value="ind">New delhi</option>
                                                    <option value="np">choince</option>

                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>

                                            </div>
                                            <input type="text" name="postalcode" id="postlcode" t placeholder='Postocode/ZIP*' className='cart-page-input-text' />
                                            <button type='submit'>Update Address</button>
                                        </div>
                                    </div>
                                    {/* right side */}

                                    <div className='col-md-6 col-12'>
                                        <div className='cart-overview'>
                                        <h3>Cart Totals</h3>
                                        <ul className='lab-ul'> 
                                            <li>
                                                <span className='pull-left'>Cart Subtotal</span>
                                                <p className='pull-right'>${cartSubtotal}</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Shipping And Handling</span>
                                                <p  className='pull-right'>Free Shipping</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Order Total</span>
                                                <p  className='pull-right'>${orderTotal.toFixed(2)}</p>
                                            </li>
                                        </ul>
 
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CartPage