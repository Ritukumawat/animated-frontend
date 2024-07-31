import React from 'react'

function Featured() {
    return (
        <div className='py-20 w-full'>
            <div className='w-full px-16 border-b-[1px] pb-16 border-gray-400 '>
                <h1 className='font-["Neue_Montreal] text-zinc-800 text-6xl tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-16'> 
                    <div className=" card-container relative h-[80vh] w-1/2">
                        <h1 className='text-[rgb(205,234,104)] uppercase text-9xl absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold leading-none font-mono tracking-[-0.1em] '> 
                        {"Fyde".split("").map((item )=>(
                            <span>{item}</span>
                        ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl bg-zinc-400 overflow-hidden ">
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
                        </div>
                    </div>
                    <div className="card-container relative h-[80vh] w-1/2">
                        <h1 className='text-[#CDEA68] uppercase text-9xl absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-bold leading-none font-mono tracking-[-0.1em] '> 
                        {"vise".split("").map((item , index )=>(
                            <span>{item}</span>
                        ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl bg-zinc-400 overflow-hidden">
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
