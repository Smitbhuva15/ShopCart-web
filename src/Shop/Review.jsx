import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Ratting from '../Home/Ratting'

const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

const Review = () => {

    const [reviewShow, setReviewShow] = useState(true);

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
            </ul>

            {/* desc & review content */}
            <div className={` review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>

                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* add review field */}

                    <div className='client-review'>
                        <div className='review-form'>
                            <div className='review-title'>
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action='action' className='row'>
                                <div className='col-md-4 col-12'>
                                    <input type="text" name='name' id='name' placeholder='Full Name *' />
                                </div>
                                <div className='col-md-4 col-12'>
                                    <input type="email" name='Email' id='name' placeholder='Full Name *' />
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='rating'>
                                        <span className='me-2'>Your Rating </span>
                                        <Ratting />
                                    </div>
                                </div>
                                <div>
                                    <textarea name="message" id="message" rows="8" placeholder='Type Here Message' className='textarea'> </textarea>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='defualt-butoon'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                {/* descripation */}
                {
                    !reviewShow && <div className='description'>
                        <p> Facere id animi perspiciatis eos voluptatum non aperiam possimus voluptate consequatur pariatur ab, velit aspernatur veniam provident suscipit recusandae iure labore saepe alias! Deserunt adipisci at veritatis quos vero ipsam natus quidem culpa inventore non hic beatae soluta eos eveniet animi blanditiis, odio amet aliquid laudantium quisquam iure sint assumenda similique. Sapiente corrupti numquam quis iste iusto animi repellendus aut amet unde!</p>
                        <div className='post-item'>
                            <div className='post-thumb'>
                                <img src="/images/shop/01.jpg" alt="" />
                            </div>


                            <div className='post-content'>
                                <ul className='lab-ul'>
                                    <li> ipsum dolor sit amet consectetur adipisicing elit. Dicta, neque!</li>
                                    <li> Tempora, dolore magnam aperiam sunt corporis deleniti minima!</li>
                                    <li> Eligendi repellat facilis, maxime suscipit ipsum commodi . </li>
                                    <li>
                                        Id tenetur iste soluta voluptatem excepturi dolorum harum quis voluptate eos veritatis molestias
                                    </li>
                                    <li>
                                        asperiores sed perferendis cumque impedit aliquid. Amet aspernatur neque.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p> Assumenda suscipit, voluptatem et ea explicabo ab magnam esse. Eos saepe, fuga quae, aperiam expedita dolores, labore neque assumenda non omnis itaque accusamus veritatis? Ipsum dolores quibusdam voluptates magni cum cupiditate nisi est ut impedit, magnam odio omnis porro nobis nihil sit quidem eius molestiae vitae repellat unde expedita fuga. Repellendus animi praesentium quisquam dicta delectus in maiores corporis et facilis.</p>
                    </div>
                }
            </div>
        </>
    )
}

export default Review