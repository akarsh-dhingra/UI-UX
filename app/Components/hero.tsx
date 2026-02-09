import React from 'react'

export const Hero = () => {
  return (
    // tracking-tight: Letters ko paas mai laane ka liye!!
    // leading-tight:  Doh Lines ka letters ko paas mai laane ka liye!!
    <div className='my-40 flex flex-col items-center ' >
        <h1 className="text-center text-transparent text-6xl 
        max-w-xl font-bold tracking-tight leading-tight bg-gradient-to-b from-neutral-400 to-neutral-500 bg-clip-text
        ">Unleash the power of intutive Finance</h1>
        <p className='text-neutral-500 mt-10 text-center text-xl max-w-3xl leading-tight selection:bg-white ' >
            Say goodbye to the outdated financial tools. Every small business owner, 
            regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.
        </p>
        <div className='flex justify-center mt-8' >
            <input type='text' className='border border-neutral-600 rounded-2xl' ></input>
            <button className='relative cursor-pointer rounded-xl border  border-neutral-700 px-4 py-2 text-white' >
                <div className='absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-b from-transparent via-sky-600 to-transparent' ></div>
                Hi there
            </button>
        </div>
    </div>
  )
}
{/* <h1 className="leading-tight 
        text-center max-w-xl 
        text-6xl font-bold 
        tracking-tight 
        bg-gradient-to-b from-neutral-400 to-neutral-500 
        text-transparent bg-clip-text
        "></h1> */}

// Tailwind is a design system 
// xs sm md lg xl 2xl 
//