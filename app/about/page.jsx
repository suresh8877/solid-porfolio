"use client"
import React, { useRef } from 'react'
import { global } from 'styled-jsx/css'
import { motion, useScroll } from 'framer-motion'
import Gears from '@/src/components/gears'

const Aboutpage = () => {
  const containerRef=useRef()

  const {scrollYProgress}=useScroll({container:containerRef})
  console.log(scrollYProgress)
  return (
    <motion.div
      className='h-full w-full'
      initial={{x:"-100vw"}}
      animate={{x:"0"}}
      transition={{duration:1.5}}
    >
      <div className="h-full flex hide-scrollbar overflow-y-auto " ref={containerRef}>
       <div className='flex flex-col  gap-10 p-5 md:p-20 md:w-[55%]'>
          <div className='flex flex-col gap-2 '>
              <h1 className='font-bold text-2xl'>BiliBography</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopsum dolor sit amet consectetur adipisicing elit. Quo ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum dolor sit amet consectetur adipisicing elit. Quo i iure iste corporis deleniti iusto laboriosam veniam nisi aperiam blanditiis labore?</p>
              <svg className='self-center' width="400" height="180"  xmlns="http://www.w3.org/2000/svg">
        
                    <path
                      d="M40 110
                        C60 60, 120 60, 150 100
                        C180 140, 120 150, 100 120
                        C90 90, 150 80, 200 95
                        C260 115, 290 70, 340 85
                        C380 100, 420 140, 460 110
                        C500 80, 540 85, 560 100"
                      fill="none"
                      stroke="#000"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text
                    x="70"
                    y="135"
                    fontFamily="Pacifico, Brush Script MT, cursive"
                    fontSize="52"
                    fill="#000"
                  >
                    Suresh Kumavat
                  </text>
              </svg>
          </div>
          <div className="">
            <h1 className='font-bold text-2xl'>SKILLS</h1>
            <div className="flex flex-wrap gap-2">
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">JavaScript</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">React</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Node.js</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Express</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">MongoDB</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">MySQL</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">TypeScript</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Tailwind CSS</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">HTML</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">CSS</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Git</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Firebase</div>

            </div>
            </div>

            <div className=''>
                <div className="flex flex-col my-10">
                    <h1 className='font-bold text-2xl'>Experince</h1>
                    <div className="flex h-[30vh] justify-between">
                      <div className="w-1/3 flex flex-col items-center gap-1">
                        <div className="bg-white font-bold p-2 text-1xl text-center rounded-b-2xl rounded-s-2xl">System Design Engineer</div>
                        <div className="text-[12px] italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quidem!</div>
                        <div className="font-semibold text-red-700">2024-Present</div>
                        <div className="bg-white self-start font-bold p-1 text-[12px] w-fit text-center rounded">Infosys</div>
                      </div>
                      <div className="w-1 h-full bg-black relative">
                        <div className="border-red-800 -left-2 border-4 bg-white rounded-full w-[20px] h-[3vh] absolute"></div>
                      </div>  
                      <div className="w-1/3"></div> 
                    </div>
                    <div className="flex h-[30vh] justify-between">
                      <div className="w-1/3"></div> 
                      <div className="w-1 h-full bg-black relative">
                        <div className="border-red-800 -left-2 border-4 bg-white rounded-full w-[20px] h-[3vh] absolute"></div>
                      </div>
                      <div className="w-1/3 flex flex-col items-center gap-1">
                        <div className="bg-white font-bold p-2 text-1xl text-center rounded-b-2xl rounded-s-2xl">System Design Engineer</div>
                        <div className="text-[12px] italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quidem!</div>
                        <div className="font-semibold text-red-700">2024-Present</div>
                        <div className="bg-white self-start font-bold p-1 text-[12px] w-fit text-center rounded">Infosys</div>
                      </div>
                    </div>
                    <div className="flex h-[30vh] justify-between">
                      <div className="w-1/3 flex flex-col items-center gap-1">
                        <div className="bg-white font-bold p-2 text-1xl text-center rounded-b-2xl rounded-s-2xl">System Design Engineer</div>
                        <div className="text-[12px] italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quidem!</div>
                        <div className="font-semibold text-red-700">2024-Present</div>
                        <div className="bg-white self-start font-bold p-1 text-[12px] w-fit text-center rounded">Infosys</div>
                      </div>
                      <div className="w-1 h-full bg-black relative">
                        <div className="border-red-800 -left-2 border-4 bg-white rounded-full w-[20px] h-[3vh] absolute"></div>
                      </div>  
                      <div className="w-1/3"></div> 
                    </div>

                    
            </div>

          </div>

        </div>
        <div className="h-full w-full fixed -right-220  ">
              <Gears scrollYProgress={scrollYProgress}/>
        </div>

        </div>

    </motion.div>
  )
}

export default Aboutpage
