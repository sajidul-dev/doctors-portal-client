import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.reviews}</p>
                <div className='flex mt-6 items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <h2 class="card-title">{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;