"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

const Homepage = () => {
  return (
    <motion.div
      className="h-full w-full"
      animate={{y:"0"}}
      initial={{y:"-100vh"}}
      transition={{duration:1.5}}
    >

    <div className="h-full flex flex-col md:flex-row md:items-center ">
      {/* h-[calc(100vh-4rem)] */}
      <div className="h-3/5 md:w-3/5 md:h-full relative overflow-hidden">
        <Image src="/suresh.png" alt="" fill className="object-contain scale-110 md:scale-115" ></Image>
      </div>
      
      <div className="h-2/5 md:w-2/5 flex flex-col gap-1 md:gap-4 p-2">
        <h1 className="font-bold text-4xl md:text-4xl">Design|Develop|Deliver.
          Web Solutions That Scales High & BIG</h1>
        <p className="text-[15px] md:text-2xl">I build websites with clear intent and strong foundations.
          Every feature exists for a reason.
          Modern technologies ensure performance and adaptability.
          The end product is clean, focused, and effective.</p>
        <div className="flex justify-center gap-10 md:justify-start">
          <button className="h-full bg-black text-white rounded-2xl px-5 py-2 font-semibold">View My Work</button>
          <button className="h-full bg-black text-white rounded-2xl px-5 py-2 font-semibold">Contact ME</button>
        </div>
      </div>

    </div>
    </motion.div>
  )
}

export default Homepage
