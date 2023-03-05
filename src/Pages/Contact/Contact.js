import React from 'react';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className='mb-32'>
            <h2 className='text-5xl text-center font-semibold mb-7 text-secondary'>Contact Me</h2>
            <div className='flex justify-center mb-5'>
                <progress className="progress w-56 text-center text-secondary bg-secondary"></progress>
            </div>
            <form onClick={handleSubmit}>
                <div data-aos="fade-up-right" className='w-full mt-24 text-center'>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-2/3 mb-3 border-secondary" />
                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered border-secondary w-2/3" />
                    <div className='mt-5'>
                        <textarea name='message' className="textarea w-2/3 h-52 textarea-secondary" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className='text-center'>
                    <input className='text-center bg-secondary py-3 rounded-lg px-8 text-white' type="submit" value="Submit" />
                </div>
            </form>

        </div>
    );
};

export default Contact;