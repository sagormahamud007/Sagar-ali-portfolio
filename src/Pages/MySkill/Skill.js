import React from 'react';

const Skill = () => {
    return (
        <div data-aos="fade-up-left" className='mt-16 mb-32 bg-black-300 py-12 px-12'>
            <h1 className='text-5xl mb-8 text-black'>MY SKILLS</h1>
            <div>
                <div className='w-full mb-3'>
                    <h2>HTML</h2>
                    <progress className="progress progress-secondary w-2/3 bg-white" value="90" max="100">HTML</progress>90%
                </div>
                <div className='mb-3'>
                    <h2>CSS</h2>
                    <progress className="progress progress-primary w-2/3 bg-white" value="90" max="100">CSS</progress>90%
                </div>
                <div className='mb-3'>
                    <h2>Bootstrap</h2>
                    <progress className="progress progress-accent w-2/3 bg-white" value="90" max="100"></progress>90%
                </div>
                <div className='mb-3'>
                    <h2>TailwindCSS</h2>
                    <progress className="progress progress-success w-2/3 bg-white" value="80" max="100"></progress>80%
                </div>
            </div>
            <div>
                <div className='mb-3'>
                    <h2>Javascript</h2>
                    <progress className="progress progress-info w-2/3 bg-white" value="70" max="100"></progress>70%
                </div>
                <div className='mb-3'>
                    <h2>React Js</h2>
                    <progress className="progress progress-warning w-2/3 bg-white" value="70" max="100"></progress>70%
                </div>
                <div className='mb-3'>
                    <h2>NodeJS</h2>
                    <progress className="progress progress-error w-2/3 bg-white" value="60" max="100"></progress>60%
                </div>
                <div className='mb-3'>
                    <h2>ExpressJS</h2>
                    <progress className="progress progress-secondary w-2/3 bg-white" value="60" max="100"></progress>60%
                </div>
            </div>

        </div>
    );
};

export default Skill;