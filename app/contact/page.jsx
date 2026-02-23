"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Form from 'next/form'

const Contactpage = () => {
  const text="SAY HELLO"
  const textarr=text.split("")

  return (
    <motion.div
      className='h-full w-full'
      initial={{x:"100vw"}}
      animate={{x:"0"}}
      transition={{duration:1.5}}
    >
  
        <div className="h-full w-full overflow-auto flex flex-col md:flex-row items-center justify-center">
          <div className="flex w-full md:w-1/2 h-1/2 gap-2 md:gap-4 items-center justify-center">
            {
              text.split("").map((letter,ind)=>{
                return(
            
                  <motion.span key={ind}
                  animate={{opacity:0}}
                  initial={{opacity:1}}
                  transition={{repeat:Infinity,duration:3,delay:ind*0.1}}
                  className="text-2xl font-bold md:whitespace-pre md:text-5xl md:font-extrabold">
                    {letter}
                  </motion.span>
                )
              })
            }
            <motion.div className=""
              animate={{rotate:45}}
              initial={{rotate:-45}}
              style={{transformOrigin:"bottom"}}
              transition={{duration:1,delay:1,repeat:Infinity}}
            >
              <Image src="/hiimg.png" alt="" height={55} width={55}></Image>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 h-3/4">
            <form className='flex flex-col gap-7 justify-center items-center' action="">
              <label className='md:text-2xl font-semibold' for="msg">Hi, Suresh Kumavat</label>
              <textarea name="msg" id="" placeholder='Type your Message' className='bg-linear-to-t from-red-100 to-orange-100 p-2 focus:outline-none resize-none w-3/4 border-b-2' rows={7}></textarea>
              <label className='md:text-2xl font-semibold' for="email">Connect me here</label>
              <input type="text" placeholder='Your Email' name='email' className='bg-linear-to-t from-red-100 to-orange-200 p-2 focus:outline-none w-3/4 border-b-2 '/>
              <div className="w-3/4 ">
                <button className='cursor-pointer w-full text-center font-bold text-2xl border-2 border-orange-800 rounded-2xl bg-amber-400'>Submit</button>
              </div>
            </form>
          </div>
            
       

      </div>
    </motion.div>
  )
}

export default Contactpage
