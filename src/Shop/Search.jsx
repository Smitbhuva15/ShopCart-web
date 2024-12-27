import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Search = ({ products, gridList }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const findThePhoto = (e) => {
        setSearchTerm(e.target.value)

    }
    const filterProducts = products.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    
    return (
        <div className='widget-search widget'>
            <form className='search-wrapper mb-3'>
                <input type="text" name="search" placeholder='Search....' defaultValue={searchTerm} onChange={findThePhoto} />
                <button type='submit'>
                    <i className='icofont-search-2'></i>
                </button>
            </form>

            {/* showing serach result */}

            <div>
                {
                    searchTerm && filterProducts.map((product) => (
                        <Link key={product.id} to={`shop/${product.id}`}>
                            <div className='d-flex gap-3 p-2'>
                                <div>
                                    <div className='pro-thumb h-25'>
                                        <img src={product.img} alt="" width={70} className='flex-{grow|shink}-0' />
                                    </div>
                                </div>
                                <div className='product-content'>
                                    <p >
                                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                    </p>
                                    <h6>${product.price}</h6>
                                </div>

                            </div>
                        </Link>

                    ))
                }
            </div>

        </div>
    )
}

export default Search