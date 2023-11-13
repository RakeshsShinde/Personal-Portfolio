import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { sendForm } from '@emailjs/browser';
import { toast } from 'react-toastify';
const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }

    }
}

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);


    useEffect(() => {
        if (success) {
            toast.success("email send sucessfully !", {
                position: 'top-center',
                draggable: true,
            })
            setsuccess(null);

        }
        if (error) {
            toast.error("something went wrong !", {
                position: 'top-center',
                draggable: true,
            })
            seterror(null);
        }
    }, [success, error])

    const sendEmail = (e) => {
        e.preventDefault();
        sendForm('service_evr7x39', 'template_3nylhda', formRef.current, 'BlnbqfEeKjrLKf393')
            .then((result) => {
                setsuccess(true);
            }).catch((error) => {
                seterror(true);
            })
    }


    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <section id="Contact Me" className='min-h-screen max-w-full overflow-y-hidden text-white font-mons '>
            <motion.div
                ref={ref}
                whileInView={isInView && "animate"}
                variants={variants}
                initial={'initial'}
                className=' w-full p-[10px] mt-[70px]   lg:leading-[50px]  flex-col md:max-w-[1366px] h-full md:flex-row  md:px-20 md:py-[150px] m-auto flex justify-center items-center gap-[50px]'>
                <motion.div className=' gap-[20px]  text-center md:text-left flex-1 flex flex-col md:gap-[40px]' variants={variants}>
                    <motion.h1 variants={variants} className='text-4xl md:leading-[60px] md:text-[70px] font-semibold font-mons'>Let's Connect</motion.h1>
                    <motion.div className='' variants={variants}>
                        <motion.h2 className='font-[600] font-mons'>Mail</motion.h2>
                        <motion.span className='font-[300]'>rakeshshinde5253@gmail.com</motion.span>
                    </motion.div>
                    <motion.div className='' variants={variants}>
                        <motion.h2 className='font-[600] font-mons'>Address</motion.h2>
                        <motion.span className='font-[300]'>Nashik</motion.span>
                    </motion.div>
                    <motion.div className='' variants={variants}>
                        <motion.h2 className='font-[600] font-mons'>Phone</motion.h2>
                        <motion.span className='font-[300]'>9096261321</motion.span>
                    </motion.div>
                </motion.div>
                <motion.div className='flex-1 w-[100%] p-8 '>
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        whileInView={isInView && "animate"}
                        className='flex flex-col gap-[20px]'>
                        <motion.input className='p-[10px] md:p-[20px] bg-transparent border-[1px] border-white' type={'text'} required placeholder='name' name='name' />
                        <motion.input className='p-[10px] md:p-[20px] bg-transparent border-[1px] border-white' type={'text'} required placeholder='email' name='email' />
                        <motion.textarea className='p-[20px] bg-transparent border-[1px] border-white' cols={8} placeholder='message' type={'text'} name='message' />
                        <motion.button type='submit' value={'send'} className=' text-xl p-[10px] md:p-[20px] border-none bg-green-500 cursor-pointer'>send</motion.button>
                        {error && "Error"}
                        {success && "success"}
                    </motion.form>
                </motion.div>
            </motion.div>

        </section>
    );
}

export default Contact;
