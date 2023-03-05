import React from 'react';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className='mb-32'>
            <h2 className='text-5xl text-center font-semibold mb-7 text-black'>Contact Me</h2>
            <div className='flex justify-center mb-5'>
                <progress className="h-2 w-60 text-center text-secondary "></progress>
            </div>
            <form onClick={handleSubmit}>
                <div data-aos="fade-up-right" className='w-full mt-24 text-center'>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-2/3 mb-3 " />
                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-2/3" />
                    <div className='mt-5'>
                        <textarea name='message' className="textarea w-2/3 h-52" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className='text-center'>
                    <input className='text-center bg-gray-400  py-3 rounded-lg px-16 mt-2 hover:bg-gray-500 text-white' type="submit" value="Submit" />
                </div>
            </form>

        </div>
    );
};

export default Contact;