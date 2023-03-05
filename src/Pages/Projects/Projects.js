import React from 'react';
import learning from '../../Asstes/Image/Lerning.png'
import laptop from '../../Asstes/Image/Laptop.png'
import fashion from '../../Asstes/Image/fashion.png'
import Project from './Project';
import { Link } from 'react-router-dom';
const Projects = () => {
    // const projects = [
    //     {
    //         id: 1,
    //         image: learning,
    //         title: "Learning Courses"
    //     },
    //     {
    //         id: 1,
    //         image: laptop,
    //         title: "Laptop Market"
    //     },
    //     {
    //         id: 1,
    //         image: fashion,
    //         title: "Fashion Photographer"
    //     },

    // ]
    return (
        <div className='mt-16'>
            <h1 className='text-5xl text-black text-center font-semibold'>MY PROJECTS</h1>
            <div className='text-center mt-5'>
                <progress className=" bg-gray-300  w-60 text-center h-2"></progress>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 p-5'>
                {/* {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                } */}
                <div data-aos="flip-right" className="card bg-base-100 shadow-xl">
                    <figure><img src={learning} className="h-50" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" text-white font-bold text-2xl">Learning Courses</div>
                        </h2>
                        <h2 className='text-lg text-white'>Technology</h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">TailwindCSS</div>
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">NodeJs</div>
                            <div className="badge badge-outline">MongoDB</div>
                            <div className="badge badge-outline">Express.js</div>
                            <div className="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                    <Link to='/details'><button className="btn w-full bg-gray-400 border-none">View Details</button></Link>
                </div>

                <div data-aos="flip-right" className="card bg-base-100 shadow-xl">
                    <figure><img src={laptop} className="h-50" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" text-white font-bold text-2xl">Laptop Market</div>
                        </h2>
                        <h2 className='text-lg text-white'>Technology</h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">TailwindCSS</div>
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">NodeJs</div>
                            <div className="badge badge-outline">MongoDB</div>
                            <div className="badge badge-outline">Express.js</div>
                            <div className="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                    <Link to='/laptop'><button className="btn w-full bg-gray-400 border-none">View Details</button></Link>
                </div>

                <div data-aos="flip-right" className="card bg-base-100 shadow-xl">
                    <figure><img src={fashion} className="h-50" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" text-white font-bold text-2xl">Fashion Photographer</div>
                        </h2>
                        <h2 className='text-lg text-white'>Technology</h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">TailwindCSS</div>
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">NodeJs</div>
                            <div className="badge badge-outline">MongoDB</div>
                            <div className="badge badge-outline">Express.js</div>
                            <div className="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                    <Link to='/fashion'><button className="btn w-full bg-gray-400 border-none">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;