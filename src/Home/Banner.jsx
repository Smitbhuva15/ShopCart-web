import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelctedCategory from '../component/SelctedCategory';

const title = (
    <h2>Search Your One From <span>Thousand</span> Of Products</h2>
)
const desc = "We have the largest collection of product";
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];




const Banner = () => {
    const handelSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
        const filtered = productData.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
        
        setFilterProducts(filtered);
    }


    const [searchInput, setSearchInput] = useState("");
    const [filterProducts, setFilterProducts] = useState(productData);
    console.log(productData)
    return (
        <div className='banner-section style-4'>
            <div className='container'>
                <div className='banner-content'>
                    {title}
                    <form >
                        <SelctedCategory />
                        <input type="text" name="search" id="search" placeholder='search your product' value={searchInput} onChange={handelSearch} />
                        <button type='submit'>
                            <i className='icofont-search'></i>
                        </button>
                    </form>
                    <p>
                        {desc}
                        <ul className='lab-ul'>
                            { 
                          searchInput&&filterProducts.map((product,i)=>(
                            <li ><Link to={`/shop/${product.id}`}>{product.name}</Link> </li>
                           )                
                           )
                            }
                        </ul>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Banner