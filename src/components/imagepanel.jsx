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
            <div className="font-bold text-5xl text-slate-950">{item.title}</div>
            <div className='flex gap-4'>

                <div className="flex gap-4 mb-2 ">
                        <button className="cursor-pointer" onClick={()=>scrollimg("l")}>
                            <Image src="../leftarrow.svg" alt="" width={40} height={40}/>
                        </button>
                </div>
                <div ref={scrollref} className="relative w-[700px] h-[440px] items-center overflow-x-hidden flex">
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='object-cover' src={item.url[0]} fill alt="" />
                    </div>
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='object-cover' src={item.url[1]} fill alt="" />
                    </div>
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='object-cover' src={item.url[2]} fill alt="" />
                    </div>
                    <div className="relative min-w-full h-[400px] border-b-black border-2 ">
                        <Image className='object-cover' src={item.url[3]} fill alt="" />
                    </div>
                </div>
                <div className="flex gap-4 mb-2">
                        <button className="cursor-pointer" onClick={()=>scrollimg("r")}>
                            <Image src="../rightarrow.svg" alt="" width={40} height={40}/>
                        </button>
                </div>

            </div>
            <div className="w-[1000px] text-[17px] text-center font-bold">{item.desc}</div>
        </div>
    </div>
  )
}

export default Imagepanel
