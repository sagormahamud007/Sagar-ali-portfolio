import React from 'react';


const SingleService = ({ service }) => {
    const { image, title, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-5xl hover:translate-y-6 hover:transition-all">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleService;