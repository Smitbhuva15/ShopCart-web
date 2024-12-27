import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const desc="Energistia an deliver atactica metrcs after avsionary Apropria transition an sources applications emerging psd template."


const ProductDisplay = ({item}) => {
    const {category,name,seller,price,ratingsCount,id,quantity,img}=item;
    const[preQuntity,setPreQuntity]=useState(quantity);
    const[coupon,setCoupon]=useState("");
    const[size,setSize]=useState("select Size");
    const[color,setColor]=useState("select Color");

    const handelSize=(e)=>{
        setSize(e.target.value);
    }

    const handelColor=(e)=>{
        setColor(e.target.value);
    }

    const handelDecrease=(e)=>{
        if(preQuntity>1){
            setPreQuntity(preQuntity-1);
        }
      
    }
    const handelIncrease=(e)=>{
        setPreQuntity(preQuntity+1);
       
    }
    const  handelsubmit =(e)=>{
         e.preventDefault();
         const product={
            id :id,
            img:img,
            name:name,
            price:price,
            quantity:preQuntity,
            size:size,
            color:color,
            coupon :coupon,

           

         }
      const existingCart=JSON.parse(localStorage.getItem("cart")) ||[];

      const existingProductIndex=existingCart.findIndex((item)=>item.id===id);
      if(existingProductIndex!==-1){
        existingCart[existingProductIndex].quantity+=preQuntity;
      }
      else{
        existingCart.push(product);
      }

    //   update localstorage

    localStorage.setItem("cart",JSON.stringify(existingCart));

    // reset  from field

    setColor("Select Color");
    setPreQuntity(1);
    setCoupon("");
    setSize("Select Size")
    }
 
  return (
    <div>
        <div >
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingsCount}</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>

        {/* card component */}

        <div>
            <form onSubmit={handelsubmit}>

                {/* SIZEING */}
                <div className='select-product size'>
                    <select value={size} onChange={handelSize} >
                        <option >select size</option>
                        <option >SM</option>
                        <option >MD</option>
                        <option >LG</option>
                        <option >XL</option>
                        <option >XXL</option>

                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                {/* color */}
                <div className='select-product color'>
                    <select value={color} onChange={handelColor} >
                        <option >select color</option>
                        <option >WHITE</option>
                        <option >RED</option>
                        <option >BLACK</option>
                        <option >ASH</option>
                        <option >BLUE</option>
                        <option >PINK</option>


                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>
                {/* cart plus minus */}
                <div className='cart-plus-minus'>
                    <div className='dec qtybutton' onClick={handelDecrease}>-</div>
                    <input type="text" name="qtybutton" id="qtybutton"  value={preQuntity} className='cart-plus-minus-box' onChange={(e)=>setPreQuntity(e.target.value)}/>
                    <div className='inc qtybutton' onClick={handelIncrease}>+</div>

                </div>

                 {/* coupan field */}
                 <div className='discount-code mb-2'>
                    <input type="text" placeholder='Enter Discount code'  onChange={(e)=>setCoupon(e.target.value)}/>
                 </div>

                 {/* button sec */}
                 <button type='submit' className='lab-btn'>
                    <span>Add to Cart</span>
                 </button>
                 <Link to="/cart-page" className='lab-btn bg-primary'>
                    <span>Check Out</span>
                 </Link>

            </form>
        </div>
    </div>
  )
}

export default ProductDisplay