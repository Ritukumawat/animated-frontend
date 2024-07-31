import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen flex items-center gap-5 px-32'>
            <div className='card-container w-1/2 h-[50vh]' >
                <div className='card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2 left-10 bottom-10 border-[#CDEA68] text-[#CDEA68] rounded-full'>&copy; 2009</button>
                </div>
            </div>
            <div className="card-container w-1/2 h-[50vh] flex gap-5">
                <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#12332f]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2 left-10 bottom-10 border-[#CDEA68] text-[#CDEA68] rounded-full'>&copy; 2009</button>
                </div>
                <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#12332f]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2 left-10 bottom-10 border-[#CDEA68] text-[#CDEA68] rounded-full'>&copy; 2009</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
