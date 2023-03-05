import React from 'react';
import image from '../../../Asstes/Image/about-us.png'
const Introduce = () => {
    return (
        <div className="hero min-h-screen  mt-24">
            <div className="hero-content flex-col lg:flex-row">
                <img data-aos="fade-up-right" className='w-50' src={image} alt='' />
                <div data-aos="fade-up-left">
                    <h1 className="text-5xl font-bold">LET ME
                        INTRODUCE
                        MYSELF</h1>
                    <p className="py-6">My name is Sagar Ali. I am from Bangladesh and I study at Dinajpur Polytechnical Institute on Computer Science.
                        <br />
                        <br />
                        I am an expert web developer. I can build a website's design and development. I have good experience in back-end development. And I am also an expert on Web design. I always try to build my work for the user interface.</p>
                    <a href="https://drive.google.com/file/d/1xqbGIZYUJH7Zl_KYU3oW4ZiXv52JCi5e/view?usp=share_link"><button className="bg-gray-400 rounded py-3 rounded w-36 font-bold hover:bg-gray-500 border">DOWNLOAD CV</button></a>
                </div>
            </div>
        </div>
    );
};

export default Introduce;