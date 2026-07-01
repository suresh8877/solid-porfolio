"use client"
import React, { useRef ,useEffect} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Imagepanel from '@/src/components/imagepanel'

const Portfoliopage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });

  const workitems=[
    {
      title:"Hoteling",
      url:[
          "/projectimg/hoteling1.png",
          "/projectimg/hoteling2.png",
          "/projectimg/Hoteling3.png",
          "/projectimg/hoteling4.png"
        ],
      desc:"Developed a full-stack hotel booking dashboard with an integrated admin panel using ReactJS and ExpressJS, enabling efficient management of hotel listings and bookings. Implemented secure JWT-based authentication along with RESTful APIs to ensure safe and structured data handling between the frontend and backend. Designed a fully responsive and user-friendly interface using Tailwind CSS, providing seamless usability across different devices. Additionally, optimized backend database queries in MongoDB, resulting in a 30% improvement in booking data retrieval performance and overall application efficiency."
      ,color:"from-green-400 to-blue-400"
    },
    {
      title:"iChat",
      url:[
          "/projectimg/ichat1.png",
        ],
      desc:"Developed a real-time chat application using React.js and Firebase, featuring secure user authentication, instant messaging, and user management. Implemented advanced functionalities such as friend requests, user blocking, online/offline presence tracking, and real-time updates using Firebase Firestore. Integrated Firebase Authentication to ensure secure access and designed the application to support multiple concurrent users with low-latency communication and scalable performance."
      ,color:"from-yellow-400 to-blue-400"
    
    },
    {
      title:"Infosys | Search & Data Management System Tool",
      url:[
          "/projectimg/infosys4.png",
          "/projectimg/infosys1.jpg",
          "/projectimg/infosys2.jpg",
          "/projectimg/infosys3.jpg"
        ],
      desc:"Developed an automated Google Name Search and Data Management System using Google Apps Script (GAS), Google Sheets, JavaScript, and Google Workspace APIs to efficiently manage large contact datasets. Implemented advanced search features such as dynamic filtering, partial name matching, regex-based lookup, and duplicate detection, significantly improving search accuracy and reducing manual effort. Automated data validation, synchronization, and record updates using Apps Script triggers (onEdit and time-driven triggers). Enhanced the user experience with custom menus, filters, and validation controls while optimizing script performance for faster processing and improved workflow efficiency."
      ,color:"from-violet-400 to-orange-400"
    
    },
    {
      title:"Spotify Music Player",
      url:[
          "/projectimg/spotify1.png",
          "/projectimg/spotify2.png",
          "/projectimg/spotify3.png",
          "/projectimg/spotify1.png"
        ],
      desc:"Developed a Spotify-inspired music player using HTML, CSS, and JavaScript with a responsive and interactive user interface. Implemented album-based navigation, dynamic song loading, and a fully functional music player featuring play/pause, next/previous, seek bar, shuffle, repeat, and volume controls. Utilized the HTML5 Audio API for seamless playback and JavaScript for playlist management, real-time progress updates, and smooth user interactions. Optimized the application for fast performance and compatibility across modern web browsers."
      ,color:"from-orange-400 to-yellow-400"
    
    }
  ]

  const ref=useRef([]);

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
                <div className="w-[100vw] md:h-screen bg-linear-to-r from-purple-400 to-red-400"></div>
              {
                workitems.map((item)=>{
                  return( 
                    <div key={item.title} className={`w-[100vw] md:w-screen md:h-screen flex items-center justify-center bg-linear-to-r ${item.color}`}>
                      <Imagepanel className={`w-[100vw] md:w-screen md:h-screen`} item={item}/>
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
