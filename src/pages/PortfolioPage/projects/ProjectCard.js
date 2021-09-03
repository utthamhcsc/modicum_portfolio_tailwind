import React from 'react'
import { Images } from '../../../assets'
import { FaAngular, FaAws, FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaReact, FaWordpress } from 'react-icons/fa'
import { DiIonic, DiJavascript1 } from 'react-icons/di'
const icons={
    angular:<FaAngular/>,
    react:<FaReact/>,
    html:<FaHtml5/>,
    php:<FaPhp/>,
    css:<FaCss3Alt/>,
    wordpress:<FaWordpress/>,
    js:<DiJavascript1/>,
    bootstrap:<FaBootstrap/>,
    java:<FaJava/>,
    ionic:<DiIonic/>,
    aws:<FaAws/>
}



function ProjectCard(props) {
    const {companyname,URL,compcatogary,compdesc_1,techUsed}=props
    return (
        <div className='shadow-lg'>
            <div className='h-80 w-full relative group rounded-t-md overflow-hidden cursor-pointer'>
                <img src={Images.homeBanner} className='h-full w-full bg-center bg-cover object-cover' alt=''/>
                <div style={{backgroundColor:'rgba(0,0,0,.2)'}} className='absolute h-full w-full  transition-all top-full group-hover:top-0 grid place-items-center'>
                    <a target='_blank' rel="noreferrer" href={URL} className='bg-white px-7 py-2 rounded-xl'>Go To Website</a>
                </div>
            </div> 
            <div className='bg-gray-300 text-center px-8 '>
                <h2 className='text-2xl font-semibold text-primary truncate'>
                    {companyname}
                </h2>
                <p className='uppercase text-xs font-medium pb-2 truncate'>project category:{compcatogary}</p>
            </div>   
            <div className='px-5 text-xs text-gray-500 space-y-2 pt-2'>
            <b className='block'>Description:
                    </b>
                <p className='leading-5'>{compdesc_1}</p>
                <div className='pb-5 flex space-x-2'>
                    <b>Technologies :</b>
                    <div className='flex space-x-2 text-3xl'>{Object.keys(icons).map(item=>
                       <div key={item} title={item}>{String(techUsed).toLowerCase().includes(item)? icons[item]:null}</div>
                        )}</div>
                </div>

            </div>        
        </div>
    )
}

export default ProjectCard
