import React from 'react'

function TestimonialCard({data}) {
    
    return (
        <div className=' w-full flex  mb-4'>
            <div className='p-2 relative bg-white shadow-lg text-center space-y-1'>
                <div className='z-10'>
                <img src={data.image} className='h-40 w-36 object-cover' alt=''/>
                <h3 className='text-xl  leading-tight font-medium'>{data.clientname}</h3>
                <p className='text-sm leading-tight font-medium text-gray-500'>{data.Designation}</p>
                </div>
                <div className='absolute -top-6 -bottom-11 bg-primary left-5 right-5 ' style={{zIndex:'-1'}}>
                </div>    
            </div>    
            <div className='flex-1 relative justify-self-start'>
                
            
                <div className='text-md border-t-4 border-black text-center py-2 px-11 font-bold w-2/6'>
                    Client Reviews
                 </div> 
                 <div className='w-4/5 mx-auto'>
                     <div className='flex shadow-sm text-sm justify-between font-semibold py-1 '>
                         <div>{data.companyname}</div>
                         <div>⭐⭐⭐⭐⭐</div>
                      </div>  
                      <div className='text-xs relative text-gray-400 leading-5 py-3 text-justify px-5 mt-3'>
                          <strong className='text-6xl absolute -left-2 -top-1 text-black'>“</strong>{data.Experience}<strong className='text-6xl absolute text-black px-3'>”</strong>
                      </div>     
                  </div>
            </div>    


        </div>
    )
}

export default TestimonialCard

