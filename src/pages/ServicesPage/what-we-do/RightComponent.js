import React from 'react'
import MyRadioButtton from '../../../shared/buttons/MyRadioButtton'

function RightComponent({image,data,index,title}) {
    if(!(index%2))
    return (
        <>
        
     <div className={` relative lg:p-12 pb-0 border-black min-h-40`}
        style={{minHeight:'40px'}}
        > <img src={image} className='bg-center object-cover bg-cover w-full h-full rounded-md filter grayscale hover:grayscale-0' alt=''/>
        <div className='hidden lg:block absolute top-12 -right-3'> 
                <MyRadioButtton/>
             </div> 
        </div> 
        
        <div className={`lg:p-12 lg:text-left lg:border-l-2 border-black min-h-40`}
        style={{minHeight:'40px'}}
        >
            <h2 className='text-2xl font-semibold pb-3'>{title}</h2>
           <div dangerouslySetInnerHTML={{__html:data}}/>
           </div>
        
        </>
    )
    else{
        return (
            <>
            
         <div className={`relative lg:p-12 pb-0 lg:text-right border-black min-h-40`}
            style={{minHeight:'40px'}}
            > 
            <h2 className='text-2xl pb-3 font-semibold'>{title}</h2>
            <div dangerouslySetInnerHTML={{__html:data}}/>
            <div className='hidden lg:block absolute top-12 -right-3'> 
                <MyRadioButtton/>
             </div>   
            </div> 
            <div className={`lg:p-12 order-2 lg:order-1  lg:border-l-2 border-black min-h-40`}
            style={{minHeight:'40px'}}
            >
               <img src={image} className=' bg-center object-cover bg-cover rounded-md h-full w-full filter grayscale hover:grayscale-0' alt=''/>
               </div>
            
            </>
        )
    }
}

export default RightComponent
