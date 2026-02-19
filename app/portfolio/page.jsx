"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Portfoliopage = () => {
  const workitems=[
    {
      title:"Portfoliowebsite",
      url:"",
      desc:"This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string."
      ,color:"from-green-400 to-blue-400"
    },
    {
      title:"Portfoliowebsite8",
      url:"",
      desc:"This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string."
      ,color:"from-yellow-400 to-blue-400"
    
    },
    {
      title:"Portfoliowebsite1",
      url:"",
      desc:"This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string."
      ,color:"from-violet-400 to-orange-400"
    
    },
    {
      title:"Portfoliowebsite2",
      url:"",
      desc:"This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string."
      ,color:"from-orange-400 to-yellow-400"
    
    }
  ]

  const ref=useRef();

  const {scrollYProgress}=useScroll({target:ref})
  const x=useTransform(scrollYProgress,[0,1],["0%","-83%"])

  return (

    <motion.div
      className='h-full w-full'
      animate={{y:"0"}}
      initial={{y:"100vw"}}
      transition={{duration:1.5}}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-4rem)] text-7xl justify-center flex items-center">My WORKS</div>
        <div className="sticky top-0 bg-amber-600 flex h-screen overflow-hidden">
              <motion.div style={{x}} className="flex">
                <div className="w-[100vw] h-screen bg-linear-to-r from-purple-400 to-red-400"></div>
              {
                workitems.map((item)=>{
                  return( 
                    <div key={item.title} className={`w-screen h-screen flex items-center justify-center bg-linear-to-r ${item.color}`}>
                      <div  className="">
                        <div className="">{item.title}</div>
                        <div className="">{item.desc}</div>
                      </div>
                    </div>
                  )
                })
              }
              
              </motion.div>
        </div>
      </div>
      <div className="sticky w-screen h-screen">
        contact uS
      </div>
    </motion.div>
  )
}

export default Portfoliopage
