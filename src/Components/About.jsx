import React from 'react'

function About() {
    return (
        <div className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
            <div className='w-full h-full pr-[15em]'>
                <h1 className='font-["Neue_Montreal"] text-[3.7vw] leading-[2.9rem] tracking-tight '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.   
                </h1>
            </div>
            <div className='border-t-[1px] pt-10 mt-16 flex border-[#7b894a] '>
                <div className="w-1/2">
                    <h1 className="text-6xl">Our Approach</h1>
                    <button className='rounded-full mt-10 bg-black px-6 py-5 flex items-center gap-4 text-gray-200'>Read More
                        <div className='bg-gray-200 h-4 w-4 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 bg-[#71852a] rounded-3xl h-[70vh]'></div>
            </div>
        </div>
    )
}

export default About
