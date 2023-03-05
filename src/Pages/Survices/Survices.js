import React from 'react';
import img1 from '../../Asstes/Icon/s1.png'
import img2 from '../../Asstes/Icon/s2.png'
import img3 from '../../Asstes/Icon/s3.png'
import img4 from '../../Asstes/Icon/s4.png'
import SingleService from './SingleService';
import './Service.css'

const Survices = () => {
    const services = [
        {
            id: 1,
            image: img1,
            title: "WEB DEVELOPMENT",
            description: "I provide my best feature when I develop any website. I always try to use the good and unique features of building a website."
        },
        {
            id: 2,
            image: img2,
            title: "WORDPRESS DEVELOPMENT",
            description: "I can build any type of WordPress website. I use the best WordPress plugin to develop. I also can do customize any WordPress site."
        },
        {
            id: 3,
            image: img3,
            title: "WEB DESIGN",
            description: "I provide web design services and try to give unique and user interface design on the website. I provide smooth any standard web template."
        },
        {
            id: 4,
            image: img4,
            title: "WEBSITE SEO",
            description: "I provide SEO service to the process of growing the quality and quantity of website traffic by increasing the visibility of a website."
        },
    ]
    return (
        <section>
            <div data-aos="fade-up-left" className='mb-12 px-5'>
                <h1 className='text-center text-5xl font-bold mb-5 mt-12'>SERVICES OFFER</h1>
                <p className='text-center'>My service is Web Design, Web Development, Wordpress development and Customize, Search Engine Optimization. <br></br> I also do customize and develop any website.</p>
            </div>
            <div className='flex justify-center'>
                <progress className="progress w-56 text-center text-secondary bg-slate-300"></progress>
            </div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 p-4 serviceOverlay'data-aos="fade-up-right">
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </section>
    );
};

export default Survices;