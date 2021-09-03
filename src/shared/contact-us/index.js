import React from 'react'

function index() {
    return (
        <div id='contact-us'className='mt-24' style={{boxShadow: `0 8px 40px 0 rgba(0, 0, 0, 0.05)`}}>
        <div className='w-4/5 mx-auto pt-5 grid grid-cols-12 mt-10 lg:space-y-4 items-center'>
            <Left/>
            <Form/>
        </div>\</div>
    )
}

export default index

const Left=()=><div className='col-span-12 lg:col-span-7 space-y-4'>
    <div className='capitalize text-2xl font-bold'>would u like to start a project with us?</div>
    <div className='capitalize text-md  text-gray-400 '>Modicum is focusing exclusively in high quality and cost-effective software development and implementation services.</div>
</div>
const Form=()=><form className='col-span-12 lg:col-span-5 space-y-3 bg-gray-100 p-4 rounded-md text-center'>
    <div className='flex border-b border-gray-400 focus-within:border-primary w-full pb-1'>
        <input placeholder='Full Name...' className=' text-sm flex-1 placeholder-gray-300 bg-transparent outline-none'/>
        <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg></span>
    </div> 
    <div className='flex border-b border-gray-400 focus-within:border-primary w-full pb-1'>
        <input placeholder='Email...' className='text-sm flex-1 placeholder-gray-300 bg-transparent outline-none'/>
        <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg></span>
    </div>
    <div className='flex border-b border-gray-400 focus-within:border-primary w-full pb-1'>
        <input placeholder='Phone Number...' className='text-sm flex-1 placeholder-gray-300 bg-transparent outline-none'/>
        <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg></span>
    </div> 
    <button className='py-1 px-5 mx-auto bg-primary text-white rounded-full'>Get Started</button>
</form>