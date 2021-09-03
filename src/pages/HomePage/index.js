import React from 'react'
import Navbar from '../../shared/navbar'
import Banner from './sections/banner'
import AboutUs from './sections/about-us'
import Service from './sections/services'
import ChooseUs from './sections/choose-us'
import SixDProcess from './sections/six-d-process'
import Testimonial from './sections/testimonial'
import ContactUs from '../../shared/contact-us'
import Footers from '../../shared/footers'
import Projects from './sections/projects'
function index() {
    return (
        <>
        <Navbar/>
        <Banner/>  
        <AboutUs/>
        <Service/>
        <Projects/>
        <ChooseUs/>
        <SixDProcess/>
        <Testimonial/>
        <ContactUs/>
        <Footers/>
        </>
    )
}

export default index
