import React from 'react'

function Categories() {
    const category=['All','Website','Mobile Apps','ERP Softwares','UI/UX Design'];
    return (
        <div className='flex space-x-2 mt-2'>
            <div className='text-xs text-primary'>Category :</div>
           {category.map(item=><div className='text-xs hover:text-primary' key={item}>
               {item}
               
               </div>)} 
        </div>
    )
}

export default Categories
