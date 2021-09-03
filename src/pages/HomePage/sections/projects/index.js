import React from 'react'
import { useHistory } from 'react-router-dom';
import { Images } from '../../../../assets'
import {Routes} from '../../../../constants/Routes'
function Index() {
    const history=useHistory();

    const goToProjects=()=>history.push(Routes.portfolio)
    const data=[{
        title:'Website Development',
        details:'From image sliders to custom content elements and contact forms, Incubator theme is guaranteed to display properly on all major devices'
    },
    {
        title:'Mobile Application Development',
        details:'Modicum Technologies offers various web services with high quality,user friendly,customizable and affordable prices.'},
    {
        title:'ERP Softwares / Application Development',
        details:'Our proficient mobile application developers build excellent mobile application architecture which makes your app living magic.' },
    
]
    return (
        <section id='projects' className='mt-16 w-4/5  mx-auto text-center'>
        <div className='relative  '>
            <h1 className='text-9xl tracking-wide font-black  text-gray-100 uppercase text-center'>Projects</h1>
            <div className=' absolute  top-6 text-center w-full'>
                    <h1 className='text-6xl w-full font-black text-gray-900  text-center '>Our Projects</h1>
                    <h4 className='text-2xl w-full text-gray-800  text-center '>Software Support for all types of buisnesses</h4>
             </div>

        </div> 
        <div className='grid grid-cols-3 gap-6 mt-10'>
            {data.map((item,index)=><ProjectCard key={'er'+index} {...item} goToProjects={goToProjects}/>)}

        </div> 
        <button onClick={goToProjects} className=' mt-6 mx-auto border border-primary text-primary hover:text-white hover:bg-primary rounded-full text-sm py-1 px-2 flex items-center'>Learn More <span className='pl-1 '>
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
</span></button>
        </section>
    )
}

export default Index

const ProjectCard=({title,details,goToProjects})=><div onClick={goToProjects} className='relative group overflow-hidden cursor-pointer '>
    <div className='max-w-xl cursor-pointer'>
        <img src={Images.homeBanner} className='h-30 w-full rounded-t-lg' alt=''/>
        
    </div>
    <div  className='  transition-all max-w-xl cursor-pointer w-full absolute -bottom-11 group-hover:bottom-0'>
    <div className='bg-white py-2 text-center text-sm font-semibold border border-gray-200 '>
           { title}
        </div>
    </div>
</div>