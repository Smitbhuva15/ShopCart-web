import React, { useState } from 'react'
import Data from '../products.json'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import PopulerPost from './PopulerPost';
import Tags from './Tags';


const showResult="Showing 01-07 of 63 Result";
const ShopPage = () => {
    const[gridList ,SetGridList]=useState(true);
  const [products,setProducts] = useState(Data);
//   Pagination
const [currentPage,setCurrentPage]=useState(1);
const productPerPag=9;

const indextOfLastProduct=currentPage*productPerPag;
const indextOfFirstProduct=indextOfLastProduct-productPerPag;
const currentProducts=products.slice(indextOfFirstProduct,indextOfLastProduct);
const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber);
}
 

  return (
    <div className='shop-page padding-tb'>
        <div className='container'>
            <div className='row justify-content-center'>
                {/* left side */}
                <div className='col-lg-8 col-12'>
                 <article>
                    <div className='shop-title d-flex flex-wrap justify-content-between'>
                        <p>{showResult}</p>
                        <div className={`product-view-mode ${gridList?"gridActive":"listActive"}`}>
                            <a className='grid ' onClick={()=>SetGridList(!gridList)}>
                                <i className='icofont-ghost'></i>
                            </a>
                            <a className='list ' onClick={()=>SetGridList(!gridList)}>
                                <i className='icofont-listine-dots'></i>
                            </a>
                        </div>
                    </div>

                    {/* Card */}
                    <div>
                        <ProductCard  gridList={gridList}  products={ currentProducts}/>
                    </div>

                    <Pagination 
                    productPerPag={productPerPag}
                    totalProducts={products.length}
                    paginate={paginate}
                    activePage={currentPage}
                    />
                 </article>
                </div>

                {/* right side */}
                <div className='col-lg-4 col-12'>
                    <aside>
                        <Search products={products} gridList={gridList}/>
                        <PopulerPost />
                        <Tags />
                    </aside>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default ShopPage