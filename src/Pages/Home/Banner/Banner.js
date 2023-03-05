import React from 'react';
import img1 from '../../../Asstes/Image/Sagord_copy__1_-removebg.png'
const Banner = () => {

    return (
        <section className=''>
            <div className=" w-full bg-base-200 py-9">
                <div className="flex items-center justify-around lg:flex-row-reverse flex-col lg:flex-row">
                    <div className="avatar">
                        <div data-aos="fade-up-left" className="w-80 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={img1} alt='' />
                        </div>
                    </div>
                    <div data-aos="fade-up-right" className='px-5'>
                        <h1 className="text-5xl font-bold animate__animated animate__bounce animate__faster animate__animated animate__fadeInRight animate__bounceOutLeft">Hey _______</h1>
                        <h1 className="animate__animated animate__bounce text-7xl font-bold mt-4 animate__faster animate__animated animate__fadeInLeft">I am Sagar Ali</h1>
                        <h3 className="text-3xl font-bold mt-5 animate__animated animate__bounce animate__repeat-2">Web Developer</h3>
                        <div className='mt-8 flex items-center'>
                            <button id="my-modal-5" className="btn btn-secondary btn-secondary  w-36 font-bold">HIRE ME</button>
                            <a href='https://drive.google.com/file/d/14eexCO0NYex-qiXzD-IzAQfPFQjsywvB/view?usp=share_link'><button className="btn btn-outline btn-secondary w-36 ml-10 font-bold ">DOWNLOAD RESUME</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;