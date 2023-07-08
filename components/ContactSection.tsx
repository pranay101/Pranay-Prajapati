import React from 'react'

type Props = {}

const ContactSection = (props: { open: Boolean, setOpen: Function }) => {
    return (<>
        <section className={`fixed border-r-2 border-gray-200 w-[30vw] h-screen bg-gray-100 ${props.open ? "translate-x-[0]" : "-translate-x-[100%]"} duration-500 ease-out z-[100] shadow-lg text-center text-[#141414] flex flex-col items-centerj justify-center px-10`}>
            <span className='px-5 leading-5'>
                <h2 className='text-5xl pb-6'>Message</h2>
                <span className='text-sm text-light text-gray-400 w-[90%] tracking-wide'>Tell us about the things you liked about the webite, and things you wish to see improved. Or anything you have in your mind.</span>
            </span>
            <form className='flex flex-col p-5' action="">

                <input className='py-2 px-5 border border-gray-200 rounded-md focus:outline-none focus:py-3 tracking-wide mb-3 placeholder:opacity-80' placeholder='Your Name' type="text" />

                <input className='py-2 px-5 border border-gray-200 rounded-md focus:outline-none focus:py-3 tracking-wide mb-3 placeholder:opacity-80' placeholder='Your Email' type="email" name="" id="" />
                <textarea className='py-2 px-5 max-h-36 h-24 focus:outline-none focus:py-3 tracking-wide mb-3 rounded-md border border-gray-200 placeholder:opacity-80' name="" id="" placeholder='Message'></textarea>
            </form>
                <div className='flex justify-between gap-4 mt-4 px-10'>
                    <button className='border-2 border-red-900 text-red-900 w-full py-1.5 rounded-md font-medium hover:bg-red-50' onClick={() => props.setOpen(false)}>close</button>
                    <button className='w-full bg-[#141414] text-white rounded-md flex items-center justify-center gap-2 group'>Send
                        <svg className='fill-white text-xs group-hover:animate-spin' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" /></svg>
                    </button>
                </div>
        </section>
        <div onClick={() => props.setOpen(false)} className={`fixed h-screen w-screen bg-black z-50 opacity-50 blur-md ${props.open? "visible" : "hidden"} duration-500 ease-out`} />
    </>
        
    )
}

export default ContactSection