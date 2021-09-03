import React from 'react'
import { Images } from '../../../../assets'

function index() {
    return (
        <section id='aboutus' className='mt-6 w-4/5  mx-auto '>
        <div className='relative  '>
            <h1 className='text-9xl font-black tracking-wide  text-gray-100 uppercase text-center'>MODICUM</h1>
            <div className='text-2xl text-gray-800 absolute text-center top-6'>
            Modicum provides one stop automated solution for your trade and industry. Depending on the size and field of your organization, we have different set of services to meet your requirements.
            </div>
        </div> 
        <div className='grid grid-cols-2 space-x-3 my-5 items-stretch'> 
            <div className='p-5'>
                <img alt='' className='rounded-lg h-full w-full object-cover shadow-md' src={Images.homeBanner}/>
            </div>  
            <div className='p-5 space-y-3'>
                <h1 className='font-bold text-3xl '>About Us</h1>
               <p className='text-gray-500  text-md'> We are a small group of young professionals striving hard for the 
development of the organization. Modicum is a software services firm 
based in Bangalore. We have extensive experience in many diverse 
areas of software development.
</p>
<p className='text-gray-500  text-md'>

Our staff of professionals will work with a wide array of platforms, 
languages, and tools in the course of our various projects.We built our 
solutions by closely learning our potential clientele and their 
expectations from our product. We know how to analyze this 
information and customize our offering to changing market needs.
</p>
<p className='text-gray-500  text-md'>

Modicum Is Focusing exclusively in high quality and cost-effective 
software development and implementation services.

</p>

<button className='border border-primary text-primary hover:text-white hover:bg-primary rounded-full text-sm py-1 px-2 flex items-center'>Learn More <span className='pl-1 '>
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
</span></button>
            </div>   
        </div>      
        </section>
    )
}

export default index
