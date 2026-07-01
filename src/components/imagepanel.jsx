"use client"
import React, { useRef ,useEffect} from 'react'
import Image from 'next/image';

function Imagepanel({item}) {
    const scrollref=useRef(null)
    const scrollimg=(data)=>{
        if (!scrollref.current) return;
        if (data==="l"){
            scrollref.current.scrollLeft-=700;
        }
        else{
            scrollref.current.scrollLeft+=700;
        }
    }
    
  return (
    <div>
        <div  className="flex flex-col justify-center items-center">
            <div className="text-2xl text-center font-bold md:text-5xl text-slate-950">{item.title}</div>
            <div className='w-[90vw] flex gap-4 justify-center'>

                <div className="flex gap-4 mb-2 ">
                        <button className="cursor-pointer" onClick={()=>scrollimg("l")}>
                            <Image src="../leftarrow.svg" alt="" width={40} height={40}/>
                        </button>
                </div>
                <div ref={scrollref} className="w-[500px] relative md:w-[700px] h-[440px] items-center overflow-x-hidden flex">
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='contain md:object-cover' src={item.url[0]} fill alt="" />
                    </div>
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='contain md:object-cover' src={item.url[1]} fill alt="" />
                    </div>
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='contain md:object-cover' src={item.url[2]} fill alt="" />
                    </div>
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='contain md:object-cover' src={item.url[3]} fill alt="" />
                    </div>
                </div>
                <div className="flex gap-4 mb-2">
                        <button className="cursor-pointer" onClick={()=>scrollimg("r")}>
                            <Image src="../rightarrow.svg" alt="" width={40} height={40}/>
                        </button>
                </div>

            </div>
            <div className="px-5 w-[100vw] text-[15px] md:w-[1000px] md:text-[17px] text-center font-bold">{item.desc}</div>
        </div>
    </div>
  )
}

export default Imagepanel
