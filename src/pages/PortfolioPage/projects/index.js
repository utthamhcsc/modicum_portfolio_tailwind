import React from 'react'
import Categories from './Categories'
import ProjectList from './ProjectList'
function index() {
    return (
        <div className='w-4/5 mx-auto mt-5'>
            <h2 className='text-3xl font-bold'>Our Projects</h2>
            <Categories/>
            <ProjectList/>
            
        </div>
    )
}

export default index
