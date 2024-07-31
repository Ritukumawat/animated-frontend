import React, { useEffect, useRef, useState } from 'react'

function Project() {

    const [rotate, setrotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let delX = mouseX - window.innerWidth/2;
            let delY = mouseY - window.innerHeight/2;

            var angle = Math.atan2( delY, delX) *(180/Math.PI);
            setrotate(angle -180);
        })
    })

    return (
        <div className='w-full h-screen relative bg-[#CDEA68]'>
            <div className='flex flex-col items-center justify-center h-full text-center'>
                <div className='uppercase text-[25vh] leading-none font-[Neue_Montreal] font-bold tracking-tighter'>ready</div>
                <div className='uppercase text-[25vh] leading-none font-[Neue_Montreal] font-bold tracking-tighter'>to start</div>
                <div className='uppercase text-[25vh] leading-none font-[Neue_Montreal] font-bold tracking-tighter'>the project?</div>
            
            <div className="eyes relative">
            <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className='w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-slate-100 ' >
                        <div className="relative w-2/3 h-2/3 rounded-full  bg-zinc-900">
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10 '>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-slate-100 ' >
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10 '>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Project
