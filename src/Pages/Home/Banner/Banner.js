import React from 'react';
import img1 from '../../../Asstes/mominul.jpg'
import './Banner.css'
const Banner = () => {

    return (
        <section className='overlay'>
            <div className=" w-full  py-9">
                <div className="flex items-center justify-around lg:flex-row-reverse flex-col lg:flex-row">
                    <div className="avatar">
                        <div data-aos="fade-up-left" className="w-80 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={img1} alt='' />
                        </div>
                    </div>
                    <div data-aos="fade-up-right" className='px-5'>
                        <h1 className="text-5xl font-bold animate__animated animate__bounce animate__faster animate__animated animate__fadeInRight animate__bounceOutLeft">Hey _______</h1>
                        <h1 className="animate__animated animate__bounce text-7xl font-bold mt-4 animate__faster animate__animated animate__fadeInLeft">I am Momin Islam</h1>
                        <h3 className="text-3xl font-bold mt-5 animate__animated animate__bounce animate__repeat-2">MERN Stack Developer</h3>
                        <div className='mt-8 flex items-center'>
                            <button id="my-modal-5" className="bg-slate-300 py-3 rounded w-36 font-bold">HIRE ME</button>
                            <a href='https://drive.google.com/file/d/14eexCO0NYex-qiXzD-IzAQfPFQjsywvB/view?usp=share_link'><button className="bg-slate-300 w-36 ml-10 font-bold rounded ">DOWNLOAD RESUME</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;