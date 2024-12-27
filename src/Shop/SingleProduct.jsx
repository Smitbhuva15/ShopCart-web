import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../component/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules"
import "swiper/css";
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import PopulerPost from './PopulerPost';
import Tags from './Tags';


const SingleProduct = () => {
    const [product, setProduct] = useState([]);

    // get a id
    const { id } = useParams();
    useEffect(() => {
        fetch("/products.json").then(res => res.json()).then(data => setProduct(data));
    }, [])

    const result = product.filter((p) => p.id === id);

    return (

        <div>
            <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop      /     Single Product"} />
            <div className='shop-single padding-tb aside-bg'>
                <div className='container'>
                    <div className='row justify-content-center'>

                        {/* left side */}
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='product-details'>
                                    <div className='row align-items-center'>

                                        {/* image */}
                                        <div className='col-md-6 col-12'>
                                            <div className='product-thumb'>
                                                <div className='swiper-container pro-single-top'>
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}

                                                        Loop={"true"}
                                                        autoplay={
                                                            {
                                                                delay: 2000,
                                                                disableOnInteraction: false
                                                            }
                                                        }
                                                        modules={[Autoplay]}
                                                        navigation={
                                                            {
                                                                prevEl: ".pro-single-prev",
                                                                nextEl: ".pro-single-next",

                                                            }
                                                        }

                                                        className="mySwiper">

                                                        {
                                                            result.map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className='single-thumb'>
                                                                        <img src={item.img} alt="" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>

                                                    <div class="pro-single-prev">
                                                        <i class="icofont-rounded-right"></i>
                                                    </div>
                                                    <div class=" pro-single-next">
                                                        <i class="icofont-rounded-left"></i>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className='post-content'>
                                                {
                                                    result.map(item => <ProductDisplay key={item.id} item={item} />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* review */}

                                <div className='review'>
                                   <Review />
                                </div>


                            </article>
                        </div>

                        {/* right side */}
                        <div className='col-lg-4 col-12'>
                            <aside className='ps-lg-4'>
                                <PopulerPost />
                                <Tags />

                            </aside>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct