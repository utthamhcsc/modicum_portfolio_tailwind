import React from 'react'
import { Images } from '../../assets'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
function Footer1() {
    const service={
        title:'Services',
        links:['Website Development',
          'Mobile Application Development',
          'ERP Software and Application Development',
          'Artificial Intelligence and Machine learning',
          'IOT Solutions',
         'Cloud Data Solutions',
          'UX/UI Designing',
          'E-Commerce Services']
          }
        
        const support={
          title:'Support',
          links:['Get Support',
            'Contact',
            'Our Portfolio',
            'Privacy Policy',
            'Pricing']
        } 
    return (
        <div className='md:flex text-white justify-between mb-4 flex-wrap'>
            <FooterLeft/>
            <Services l='services' data={service}/>
            <Services l='support' data={support}/>
            <Followus/>
        </div>
    )
}

export default Footer1

const Services=({l,data:{title,links=[]}})=><div className=' space-y-6'>
<h2 className='text-xl '>{title}</h2>
<div className='space-y-2'>
{links.map((item,i)=><div key={l+i} className='text-xs cursor-pointer'>{item}</div>)}
</div>
</div>

const FooterLeft=()=><div className='space-y-4 w-[300px] text-sm'>
<img src={Images.logo} height='8' width='150' alt=''/>
<div >
    <div className='text-black font-semibold'>Subscribe</div>
<div className='flex h-8 items-center'>
    <input placeholder='Email here...' className='outline-none w-full h-full px-2  text-gray-500'/>
    <span className='bg-black  px-2 h-full'><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg></span>
</div>
</div>
<div className='space-x-4 text-gray-500'>
    <button className='bg-white py-2 px-4'>whatsapp</button>
    <a href='tel:7022767486' className='bg-white py-2 px-4'>+91-7022767486 </a>
</div>    
</div>
const Followus=()=>
<div className='col-span-1 space-y-6'>
<h2 className='text-xl '>Follow Us</h2>
<div className='flex space-x-3 text-white'>

<div><FaFacebookF/>
</div>
<div><FaTwitter/>
</div><div><FaLinkedinIn/></div>
<div>
<FaYoutube/></div>
</div>
</div>
