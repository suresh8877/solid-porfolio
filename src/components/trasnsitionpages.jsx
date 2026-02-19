"use client";
import React from 'react'
import Navbar from './navbar';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Transitionpages = ({children}) => {
    const pathName=usePathname()
  return (
    <AnimatePresence mode="wait"> 
        <div key={pathName} className="w-screen h-screen bg-linear-to-b from-blue-200 to-pink-200 ">
            <motion.div
                className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
                animate={{height:"0vh"}}
                exit={{height:"100vh"}}
                transition={{duration:0.8 ,ease:"easeOut"}}
            />
            <motion.div
                className="text-white text-center text-8xl m-auto fixed left-0 right-0 top-0 bottom-0 w-fit h-fit cursor-default z-50"
                animate={{opacity:0}}
                exit={{opacity:0}}
                initial={{opacity:1}}
                transition={{duration:0.8,ease:"easeOut"}}
            >{pathName.substring(1) || "Home"}</motion.div>
            <motion.div
                className="w-screen h-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
                animate={{height:"0vh"}}
                exit={{height:"100vh"}}
                transition={{duration:0.5 ,delay:0.5 ,ease:"easeOut"}}
            />

            <div className="h-16 w-screen bg-linear-to-r from-red-200 to-orange-200">
                <Navbar/>
            </div>
            <div className="h-[calc(100vh-4rem)]">
                {children}
            </div>
            </div>
    </AnimatePresence>
  )
}

export default Transitionpages;
