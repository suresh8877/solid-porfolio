"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import Navlink from "./navlink"
import { motion } from "framer-motion"

const list=[
    {url:"/",title:"Home"},
    {url:"/about",title:"About"},
    {url:"/portfolio",title:"Portfolio"},
    {url:"/contact",title:"Contact"},
]

const variants={
    variant1:{
        rotate:35,
        background:"white"
    },
    variant:{
        rotate:0,
    },
    variant2:{
        opacity:0,
    },
    variant3:{
        rotate:-35,
        background:"white"
    },
    menuclosed:{
        x:"100%",
    },
    menuopen:{
        x:"0",
    },
    menuitemclosed:{
        x:"-100%",
        opacity:0
    },
    menuitemopen:{
        x:"0",
        opacity:1
    }
}


const Navbar= () =>{

    const [open, setopen] = useState(false)
    
    return(
        <div className="h-full flex justify-between items-center px-5 mx-10">
            <div className="w-1/3 font hidden md:block">
                {
                    list.map((item)=>(
                        <Navlink link={item} key={item.title}/>
                    ))
                }
            </div>
            <div className="w-1/3 flex justify-center">
            <Link href={"/"}>
            
            <div className="border-5 w-40 border-black rounded-lg bg-black">
                <span className="text-white mx-2 font-semibold">Suresh</span>
                <span className="h-12 px-2 bg-white rounded text-black font-semibold">Kumavat</span>
            </div>
            
            </Link>
            </div>
            
            <div className="z-100 md:hidden">
                <button onClick={(()=>setopen(!open))} className=" cursor-pointer flex flex-col h-5 justify-between">
                    <motion.div variants={variants} animate={open?"variant1":"variant"} transition={{duration:.5}} style={{transformOrigin:"left"}} className="w-7 h-1 bg-black"/>
                    <motion.div variants={variants} animate={open?"variant2":"variant"} className="w-7 h-1 bg-black"/>
                    <motion.div variants={variants} animate={open?"variant3":"variant"} transition={{duration:.5}} style={{transformOrigin:"left"}} className="w-7 h-1 bg-black"/>
                </button>
            </div>
            <div className="w-1/3 hidden md:block">
                <div className="flex gap-4 justify-center">
                    <Image src="../github.svg" alt="" width={30} height={30}></Image>
                    <Image src="../linkendin.svg" alt="" width={30} height={30}></Image>
                    <Image src="../facebook.svg" alt="" width={30} height={30}></Image>
                    <Image src="../instagram.svg" alt="" width={30} height={30}></Image>
                    <Image src="../youtube.svg" alt="" width={30} height={30}></Image>
                </div>
            </div>
            {open &&
                <motion.div variants={variants} initial={"menuclosed"} animate={"menuopen"} transition={{duration:1,when:"beforeChildren",staggerChildren:.2}} className="z-50 absolute top-0 left-0 bg-black text-white h-screen w-screen flex flex-col justify-center items-center gap-1 text-5xl">
                    {
                        list.map(item=>(
                            <motion.div variants={variants} initial={"menuitemclosed"} animate={"menuitemopen"} transition={{duration:2}} className="">

                            <Link href={item.url} key={item.title}>
                                {item.title}
                            </Link>

                            </motion.div>
                        ))
                    }
                </motion.div>
            }
        </div>
    )
}
export default Navbar