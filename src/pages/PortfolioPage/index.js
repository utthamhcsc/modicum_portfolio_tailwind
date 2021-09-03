import React from 'react'
import NavBar from '../../shared/navbar'
import Banner from './banner'
import Footer from '../../shared/footers'
import ContactUs from '../../shared/contact-us'
import Projects from './projects'
function index() {
    return (
        <>
        <NavBar/>
         <Banner/>   
        <Projects/>
        <ContactUs/>
        <Footer/>  

        </>
    )
}

export default index
