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
  
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex w-1/2 h-1/2 gap-4 items-center justify-center">
            {
              text.split("").map((letter,ind)=>{
                return(
            
                  <motion.span key={ind}
                  animate={{opacity:0}}
                  initial={{opacity:1}}
                  transition={{repeat:Infinity,duration:3,delay:ind*0.1}}
                  className="whitespace-pre text-5xl font-extrabold">
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
          <div className="border-2 w-1/2 h-3/4">
            <form className='flex flex-col gap-4' action="">
              <label htmlFor="msg">Hi Suresh Kumavat</label>
              <textarea name="msg" id="" placeholder='Type your Message' className='focus:outline-none resize-none w-3/4 border-b-2' rows={7}></textarea>
              <label htmlFor="email">Connect me here</label>
              <input type="text" name='email' className='focus:outline-none overflow-auto w-3/4 border-b-2 cursor-pointer'/>
              <button>Submit</button>
            </form>
          </div>
            
       

      </div>
    </motion.div>
  )
}

export default Contactpage
