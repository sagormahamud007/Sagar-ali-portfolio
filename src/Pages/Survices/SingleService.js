import React from 'react';

const SingleService = ({ service }) => {
    const { image, title, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl border border-secondary hover:bg-base-300 hover:transition-0.5">
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