
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Images } from '../../assets'

function Index() {

    const [show,setShow]=useState(false);

    return (
        <div className='shadow-xl sticky top-0 z-50 bg-white'>
        <div className=' h-14  lg:w-5/6 mx-auto  flex-col  lg:flex lg:flex-row  items-center justify-between '>
          <div className='flex justify-between items-center px-6'>  <img src={Images.logo} alt='logo' className='h-10 max-w-xs object-contain'/>
          <div onClick={()=>setShow(v=>!v)} className='lg:hidden cursor-pointer'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg></div> 
           </div>
            <ul className={`bg-white justify-center  lg:static flex-col  lg:flex lg:flex-row items-center uppercase text-sm ${!show?'hidden':'flex'}`}>
                <li className='mr-8 '><NavLink exact to='/' className='nav-link ' >Home</NavLink></li>
                <li className='mr-8 '><a href='/#aboutus' className='nav-link' >About Us</a></li>
                <li className='mr-8 '><NavLink to='/service' className='nav-link border-0' activeClassName='active'>Services</NavLink></li>
                <li className='mr-8 '><NavLink to='/portfolio' className='nav-link ' activeClassName='active'>Portfolio</NavLink></li>
                <li className='mr-8  overflow-hidden'><a href='#contact-us' className='px-3 py-1 inline-block bg-primary text-white uppercase hover:opacity-70 rounded-lg'    ><div>Contact US</div></a></li>
                </ul>
              
            </div>  
            </div>
    )
}

export default Index
