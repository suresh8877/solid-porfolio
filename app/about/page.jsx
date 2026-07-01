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
       <div className='flex flex-col w-[100vw] gap-10 p-5 md:p-20 md:w-[55%]'>
          <div className='flex flex-col gap-2 '>
              <h1 className='font-bold text-2xl'>Bibliography</h1>
              <p>
              I develop responsive and scalable web applications using React, Java, and JavaScript, focusing on performance optimization and smooth user experience. I design reusable front-end components and integrate RESTful APIs with backend services to ensure efficient system communication. I actively improve code quality and reliability using tools like SonarQube along with unit and end-to-end testing practices. My work includes optimizing application speed, debugging complex issues, and following best practices in modern software development. I also have strong experience with full-stack technologies such as ReactJS, NodeJS, ExpressJS, MongoDB, SQL, and cloud fundamentals, along with hands-on work in automation and AI-based projects.
              </p>             
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
                    fontSize="40"
                    fill="#000"
                  >
                    Suresh Kumavat
                  </text>
              </svg>
          </div>
          <div className="">
            <h1 className='font-bold text-2xl'>SKILLS</h1>
            <div className="flex flex-wrap gap-2">
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Java</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Python</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">JavaScript</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">HTML</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">CSS</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">SQL</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">ReactJS</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">AngularJS</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">NodeJS</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">ExpressJS</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Redux</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">TailwindCSS</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Bootstrap</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">NextJS</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Spring Boot</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">MongoDB</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">MySQL</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Firebase</div>

                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Git</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">GitHub</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">Postman</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">VS Code</div>
                  <div className="hover:bg-white hover:border hover:text-black hover:scale-105 transition-transform duration-200 rounded bg-black text-white p-2 text-sm cursor-pointer">IntelliJ</div>

            </div>
            </div>

            <div className=''>
                <div className="flex flex-col my-10">
                    <h1 className='font-bold text-2xl'>Experience</h1>
                    <div className="my-.5 flex h-[30vh] justify-between">
                      <div className="w-1/3 flex flex-col items-center gap-1">
                        <div className="bg-white font-bold p-2 text-1xl text-center rounded-b-2xl rounded-s-2xl">System Design Engineer</div>
                        <div className="text-[12px] italic">At Infosys, I work as a Systems Trainee Engineer focusing on Java-based development and automation tasks to improve application efficiency and reliability. I build and maintain automation scripts and backend components using Java, helping streamline processes, reduce manual effort, and enhance overall system performance.!</div>
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
                        <div className="bg-white font-bold p-2 text-1xl text-center rounded-b-2xl rounded-s-2xl">Web Development Intern</div>
                        <div className="text-[12px] italic">Developed a language translation website using JavaScript, HTML, and CSS by integrating RapidAPI to enable real-time translations, which improved translation speed by 30% and enhanced overall user experience. Additionally, built a responsive text editor with real-time editing capabilities and customizable UI features, which improved user interaction and reduced editing errors by 25%, making the application more efficient and user-friendly.</div>
                        <div className="font-semibold text-red-700">2022 - 2023</div>
                        <div className="bg-white self-start font-bold p-1 text-[12px] w-fit text-center rounded">Code Clause</div>
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
