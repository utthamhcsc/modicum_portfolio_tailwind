import React from 'react'
import { Images } from '../../../assets'
import './banner.css'
function index() {
    return (
        <div className='relative h-96 bg-cover bg-center banner' style={{'--bgImage':`url('${Images.homeBanner}')`}}>
            <div className='text-9xl font-mono font-bold h-full w-full grid items-center text-center text-gray-200 opacity-10 tracking-widest'>
PORTFOLIO
            </div>
            <div className='tracking-wider text-center space-y-2 absolute top-1/2 max-w-md text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
<h2 className='text-4xl font-semibold'>Our Projects</h2>
<p className='text-gray-300'>The development team of Modicum is equipped with proper human resources specialized in different system development tasks.</p>
            </div>    
        </div>
    )
}

export default index
