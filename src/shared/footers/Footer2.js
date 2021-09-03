import React from 'react'

function Footer2() {
    const data=[
    {
        icon:<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>,
      title:'Phone',
      details:'+91-7022767486'
    },
    {
        icon:<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>,
      title:'Email',
      details:'info@modicumtechnologies.com'
    },
    {
        icon:<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>,
      title:'Address',
      details:'#363, 19th Main Road,1st Block, Rajajinagar Bangalore - 560010'
    }
    
    ]

    return (
        <div className='flex justify-between  border-t-2 py-4 border-gray-100 flex-wrap'>
            <GridItem {...data[0]}/>
            <GridItem {...data[1]}/>
            <GridItem {...data[2]}/>
        </div>
    )
}

export default Footer2
const GridItem=({icon,details,title})=><div className='flex cursor-pointer items-center justify-center '>
     <span className='rounded-full p-3 bg-gray-100'>{icon}</span>
<div className='ml-3 text-white'>
    <h4 className='text-sm font-semibold'>{title}</h4>
    <p className='text-xs '>{details}</p>
</div>    
</div>

