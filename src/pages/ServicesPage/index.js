import React from 'react'
import NavBar from '../../shared/navbar'
import Banner from './banner'
import Technologies from './technologies'
import WhatWeDo from './what-we-do'
import Footer from '../../shared/footers'
import ContactUs from '../../shared/contact-us'
function index() {
    return (
        <>
        <NavBar/>
         <Banner/>   
        <Technologies/> 
        <WhatWeDo/> 
        <ContactUs/>
        <Footer/>  

        </>
    )
}

export default index
