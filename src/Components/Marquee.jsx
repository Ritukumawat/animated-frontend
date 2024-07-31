import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (
        <div className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl '>
            <div className='border-t-2 border-b-2  text-gray-200 border-gray-400 flex overflow-hidden whitespace-nowrap'>
                <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear" , repeat: Infinity , duration:5}}  className='text-[24vw] tracking-[-0.08em] font-semibold uppercase  leading-[16rem] font-mono' >We are Ochi. </motion.h1>
                <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear" , repeat: Infinity , duration:5}}  className='text-[24vw] tracking-[-0.08em] font-semibold uppercase leading-[16rem] font-mono' > We are Ochi. </motion.h1>
                <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear" , repeat: Infinity , duration:5}}  className='text-[24vw] tracking-[-0.08em] font-semibold uppercase leading-[16rem] font-mono' > We are Ochi. </motion.h1>
            </div>
        </div>
    )
} 

export default Marquee

