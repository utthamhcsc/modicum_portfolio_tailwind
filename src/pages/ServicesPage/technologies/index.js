import React from 'react'
import { FaAws, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { RiFlutterFill } from "react-icons/ri";
import { SiMicrosoftazure,SiMongodb,SiMysql } from "react-icons/si";
function index() {
    const data=[
        {
            icon:<FaReact fontSize='3rem'/>,
            title:'React JS',
            subTitle:'WebSite Development'
        },
        {
            icon:<FaReact fontSize='3rem'/>,
            title:'React Native',
            subTitle:'Mobile App Development'
        },
        {
            icon:<RiFlutterFill fontSize='3rem'/>,
            title:'Flutter',
            subTitle:'Mobile|WebSite Development'
        },
        {
            icon:<FaJava fontSize='3rem'/>,
            title:'Java',
            subTitle:'Framework SpringBoot'
        },
        {
            icon:<FaNodeJs fontSize='3rem'/>,
            title:'Node JS',
            subTitle:'Framework Express JS'
        },
        {
            icon:<FaAws fontSize='3rem'/>,
            title:'Server-AWS',
            subTitle:'Server Maintanance & Hosting'
        },
        {
            icon:<SiMysql fontSize='3rem'/>,
            title:'MySql',
            subTitle:'Database Management System'
        },
        {
            icon:<SiMongodb fontSize='3rem'/>,
            title:'Mongo  DB',
            subTitle:'Database Management System'
        },
        {
            icon:<SiMicrosoftazure fontSize='3rem'/>,
            title:'Microsoft  Azure',
            subTitle:'AI,ML,IOT & Cloud Data Solution'
        },
        {
            icon:<FaPython fontSize='3rem'/>,
            title:'Python',
            subTitle:'AI and ML'
        }
    ]
    const content={
        heading:'FUTURE-READY',
        subtitle:'Ready To be Technical Partner in every Sectors',
        subtitle1:'Technology Vision 2021: Leaders wanted',
        subtitle2:'Check out what programming languages, database systems, and platforms we use to complete projects for our tech.'
    }
    return (
        <div className='text-center bg-gray-200 w-4/5 mx-auto -mt-16 pt-16'>
           
            <h2 className='text-5xl text-primary pt-6 font-bold tracking-wide mb-2'>{content.heading}</h2>
            <p className='text-lg inline-block text-gray-500 border-b-2 pb-1 border-gray-900'>
              {content.subtitle} 
            </p>
            <p className='font-bold mt-6'>
                {content.subtitle1}
            </p>  
            <p className=' mt-2 max-w-lg mx-auto'>
                {content.subtitle2}
            </p>  
            <div className='w-4/5 mx-auto py-9'> 
           <div className='grid grid-cols-2  lg:grid-cols-5 sm:grid-cols-3  gap-6'>

               {data.map(item=><div key={item.title} className='h-36 w-36 
               rounded-lg bg-white space-y-1
               hover:text-white
               hover:bg-black
               transition-all
               justify-center
               items-center
               flex flex-col'>
                   <div>{item.icon}</div>
                   <div className='text-md font-semibold whitespace-nowrap'>{item.title}</div>
                   <div className='text-xs px-3'>{item.subTitle}</div>
                   </div>)}
            </div>
           </div>
        </div>
    )
}

export default index
