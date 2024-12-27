import React from 'react'
import { Link } from 'react-router-dom';


const title="Most Popular Posts"
const postList = [
    {
    id:1,
    imgUrl: '/images/blog/10.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor People Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:2,
    imgUrl: '/images/blog/11.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:3,
    imgUrl: '/images/blog/12.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:4,
    imgUrl: '/images/blog/09.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    ]
const PopulerPost = () => {
  return (
    <div className='widget widget-post'>
        <div className='widg et-header'> 
            <h5>{title}</h5>
        </div>
        <ul className='widget-wrapper'>
            {
                postList.map((blog,i)=>(
                    <li key={i} className='d-flex flex-wrap justify-content-between'>
                        <div className='post-thumb'>
                            <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="" /></Link>
                        </div>
                        <div className='post-content'>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                        <p>{blog.date}</p>
                        </div>

                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default PopulerPost