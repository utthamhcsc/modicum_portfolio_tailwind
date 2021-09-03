import React, { useState } from 'react'
import { Images } from '../../../../assets'

function Index() {
    const [index,SetIndex]=useState(0)
    const content=[
        {
            title:'Discover',
            description:'Through intensive design research and strategic analysis. We identify your business issues,priorities and objectives discover inspires and guides design and deliver.'
        },{
            title:'Define',
            description:' The beginning of the project we spend the time understanding your business needs and defining your objectives form this preliminary research we put together the project scope document that all stakeholders agree and commit to.'
        },{
            title:'Design',
            description:'Here is where we produce a range of design approaches and concepts to more fully address the clients challange. The concept are reviewed,tested,refined and crafted into a focused design direction.'
        },{
            title:'Develop',
            description:'We are experts at bringing synergy between aesthetic design and strong coding by combinning the inter face,content and graphics with the underlying system frame.'
        },{
            title:'Deploy',
            description:' We are experts at bringing synergy between aesthetic design and strong coding by combinning the inter face,content and graphics with the underlying system frame.'
        },
        {
            title:'Deliver',
            description:'In this phase we specify document and deliver project details to the client for implementation or we get involved directly in the production process both guarantee the accurate translation of ideas into reality.'
        },
    ]


    return (
        <section id='service'className='mt-20 w-4/5  mx-auto text-center'>
        <div className='relative  '>
            <h1 className='text-9xl tracking-wide font-black  text-gray-100 uppercase text-center'>Our Process</h1>
            <div className=' absolute  top-8 text-center w-full'>
                    <h1 className='text-6xl w-full font-black text-gray-900  text-center '>Our 6D Process</h1>
                    </div>
        </div>
        <div className='h-6 w-full'/>
        <div className='flex space-x-2 justify-around'>
            {content.map((item,i)=><ChooseCard set={i===index} key={'d'+i} action={()=>SetIndex(i)} title={item.title}/>)}
        </div>
        <div className='grid grid-cols-12 gap-3 mt-6 pt-6'>
            <div className='max-h-44 col-span-4 space-y-4 text-left'>
                <h4 className='font-black text-left mt-4'>{content[index].title}</h4>
                <p className='text-gray-400'>
                {content[index].description}
                </p>
            </div>
            <div className='max-h-48 col-span-8 px-6 '>
                <img alt='' src={Images.homeBanner} className='h-full w-full object-cover shadow-lg rounded-lg'/>
            </div>
        </div>        
        </section> 
    )
}

export default Index

const ChooseCard=({title,action,set})=><div onClick={action} className={` ${set && 'bg-black text-white'} h-40 w-40 flex-col group rounded-lg border border-gray-400 flex items-center justify-center  relative hover:text-white hover:bg-black`}>
        <div><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
</svg></div>
        <div>{title}</div>
         <div className={`h-4 w-4 -bottom-2 transform border-b border-r  border-gray-400 rotate-45 absolute  bg-black ${set ? 'bg-black':'bg-white'} group-hover:bg-black`}/> 
    </div>