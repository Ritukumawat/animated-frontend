import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="0.8" className=' w-full h-screen pt-1'>
        <div className="textstructure mt-40">

            {["we create", "eye-opening","presentations"].map((item,index)=>{
                return  <div className="masker ">
                  <div className='w-fit  px-14 flex overflow-hidden'>
                    { index==1 && ( 
                      <motion.div 
                        initial={{width:0}} 
                        animate={{width: "9vw"}} 
                        transition={{ease: [0.42, 0, 0.58, 1]}} 
                        className='bg-red-500 relative top-[1vw] rounded-md w-[9vw] h-[5.2vw] overflow-hidden'>
                          <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img>
                      </motion.div> )}
                    <h1 className="uppercase flex items-center leading-[6.5vw] text-[7.5vw] tracking-[-0.11em] font-semibold text-black">{item}</h1>
                  </div>
            </div>
            })}
        
        </div>

        <div className="border-t-[1px] mt-[110px] border-zinc-800 flex justify-between items-center px-14 py-5">
        {["For public and private companies","From the first pitch to IPO"].map((item , index)=>{
          return <p className='text-md tracking-tighter font-light leading-none  text-black' >{item}</p>
        })
        }

        <div className="start flex gap-4">
          <div className='px-4 py-1 border-[2px] rounded-3xl border-zinc-300 font-light text-md uppercase '>start the project</div>
          <div className='px-2 py-2 font-light border-[2px] rounded-full rotate-45 border-zinc-300 '> 
            <span className='rotate-45'>< FaArrowUp /> </span></div>
        </div>

        </div>
    </div>
    
  )
}

export default LandingPage

