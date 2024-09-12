import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto h-auto md:h-[40rem] w-full rounded-md relative overflow-hidden py-10 md:py-0'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='text-center z-10 w-full p-4'>
        <h1
        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Master the art of Music</h1>
        <p
        className="mt-4 font-normal text-base md:text-lg text-neutral-400 max-w-lg mx-auto"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem facilis in beatae voluptas delectus laudantium minus, illum recusandae exercitationem reiciendis?</p>
        <div className='mt-4'>
            <Link href={"/courses"} >
                <Button
                 borderRadius="1.75rem"
                 className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                 >Explore Courses</Button>
            </Link>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection
