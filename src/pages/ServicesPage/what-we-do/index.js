import React from 'react'
import RightComponent from './RightComponent'
import {Images} from '../../../assets/index'
function index() {
    const data=[
        {
        title:'Web Development',
        image:Images.web,
        data:`In today’s world of technology, it is essential for every business to 
        have a website. A website acts as an excellent online marketing 
        tool and platform for your business. It allows customers to learn 
        about the type of products/services your business has to offer 
        and how. We are an IT company based in Bangalore offering 
        high-quality website development services to help your 
        business go digital. We collaborate with you to understand your 
        brand, goals and the requirements of your company before 
        developing your website.
        <br/>
        <br/>
        We have successfully completed several website development 
        projects for businesses in India, UK and Russia. We use popular 
        platforms, keeping up with latest technologies and best 
        practices to deliver high-class results. Our website development 
        services span across all genres like e-commerce, small business 
        websites, large business websites, brand websites, mobile 
        websites, and portals.
        <br/>
        <br/>
        Furthermore, to render the best solution for our clients, we 
        provide post-implementation support once the website is up 
        and running.`,
       
    },
    {
        title:'Mobile Application Development',
        image:Images.web1,
        data:`The mobile revolution is a game changer for many industries. It has opened up several new opportunities and ushered ease of doing business. In fact, embracing a mobile-first approach has benefited organizations by reducing wastage, increasing efficiency, and reducing lead time.
        <br/><br/>
        We have skilled, innovative & experienced iOS application developers who work towards developing apps that can deliver the desired results. We ensure maximum user engagement and customer satisfaction. Our team of experts make use of technologies such as React JS, React Native, Ionic, Java and Node JS to ensure powerful apps to help your enterprise establish a connection with customers.
        <br/><br/>
        We develop iOS and Android apps with varying levels of complexities for all possible domains; Business and Entertainment, Educational, Social Networking, Health, Travel and others. We utilize agile methodology to craft and customize an iOS and Android app totally based on your
        requirements and needs.`,
       
    },
    {
        title:`ERP Softwares and
        Application Development`,
        image:Images.web2,
        data:`  Modicum Technologies Pvt Ltd is an all-rounder adaptive 
        software company that provides an on premise solution to the 
        enterprises. The software offers customizable and fully featured 
        modules to various industries. It will handle all the major and 
        minor business aspects for you.
        <br/><br/>
        It offers different affordable license pricing based on users and 
        features. It is known to provide fast and detailed results to make 
        your business manageable and productive.
        <br/>
        <br/>
        <b>Main Features:</b>
        <br/>
        1. Hospital, Clinic and Lab Management System<br/>
        2. Inventory<br/>
        3. Purchasing<br/>
        4. Quality Management Solutions<br/>
        5. CRM`,
        
    },
    { title:`Custom Software
    Development Services`,
        image:Images.web3,
        data:`Existing market competition requires a company to create
        one-of-a-kind software intended to meet their customers’ 
        unique demands. Off-the-shelf software available is generally 
        designed for the mass public as a solution to the many different 
        needs of its users. These, however, may not fit-in exactly with 
        your existing system and processes and may cause delays due 
        to training requirements involved. This situation calls for unique 
        custom software development, keeping in mind each 
        company’s infrastructure, branding, implementation, and core 
        business processes.
        <br/><br/>
        We make every effort possible to understand your business. We 
        construct a detailed blueprint of the custom software you need 
        and design the best & most-suited solutions for your business. 
        We maintain a holistic balance between customization and 
        user-friendliness. Rigorous testing and post-implementation 
        support is part of our package to ensure that your custom 
        software development requirements are fully met. We can 
        design, develop, integrate and test custom software across 
        multiple systems and platforms.
        <br/><br/>
        We create secure and effective solutions that are a snug fit to 
        your existing systems and processes, so that you spend less time 
        in the orientation and more time in the upward movement. 
        With our comprehensive custom software development 
        solutions, you can do away with any secondary applications for 
        various micro processes.`,
    },
    {
        title:'Hospital Management System',
        image:Images.web4,
        data:`Modicum is a hospital management software with an 
        integrated information system design to manage the 
        administrative, financial, and clinical aspects of a hospital.
        
        This encompasses paper-based information processing as well 
        as the data processing system. Managing patient flow effectively 
        is a real-time requirement. We have made this tricky process 
        simple.
        
        Reduces waiting time and enhances patient care by providing 
        staff with accurate and timely patient information. All-in-one 
        hospital or clinic management system that comes with 
        integrated modules such as Appointment, Billing, OPD, IPD, 
        Inventory, Pharmacy, Laboratory, Radiology, etc. modules.`,
    },
    {
        title:`Artificial Intelligence
        Machine learning`,
        image:Images.web4,
        data:`Take your business to the next level with intelligence on 
        historical & real-time data.
        <br/><br/>
        The world is getting smarter, and automation has grasped all 
        the attention. AI and ML are the critical aspects of making your 
        application work smarter and faster. Every enterprise is investing 
        in this to get accurate and better results. It facilitates data which 
        can be easily later studied for a better future. Both AI and ML are 
        disciplines of Data Science. Both artificial intelligence and 
        machine learning go hand in hand.
        <br/><br/>
        We can predict business problems before they happen with 
        Artificial Intelligence services & Machine Learning services.`
    },
    {
        title:'Cloud Data Solutions',
        image:Images.homeBanner,
        data:` <b style={{textAlign:'center'}}>What is Cloud – based solution..??</b>
        <br/>
A cloud solution is virtual infrastructure to provide remote 
working access to software, applications, server and data center 
through the internet connection. Using the cloud support, 
business organizations do not require to invest a hefty amount 
on, in house computing infrastructure and applications. Also 
cloud storage keeps the large pile of your company data and 
files within easy reach from any location.
<br/>
<br/>
<b>Our cloud consulting ensures Continuity Of business</b>
<br/>
As a cloud consultant, we make every possible effort to help you 
continue your business operations at such a crucial juncture. 
Here, we deal in offering cloud solution service that helps 
companies carry on the working procedures despite being in 
self-isolated condition. Rely on the service to encourage a new 
way of working remotely and let the communication, 
engagement, and business purpose still operational.
`,
    },
    {
        title:'IOT Solutions',
        image:Images.homeBanner,
        data:`The Internet of Everything (IoT) has the potential to disrupt every 
        business domain by offering advanced ways to connect, 
        collaborate, and automate. Modicum Technologies Pvt Ltd strives 
        to be your modern-day technology partner by offering advanced 
        technological solutions in IoT. IoT creates an interconnected 
        network across home/organization/factory, combining various 
        devices and platforms to automate the processes, thereby 
        reducing time and money.
        <br/><br/>
        Modicum’s modern, smart, and adaptable IoT solutions help you 
        achieve high performance, increased connectivity, operational 
        efficiency, and security. Our versatile and multi-faceted 
        development experience in cloud, analytics, and sensor 
        technologies make it easy for us to develop customized, scalable, 
        and connected IoT ecosystem.
        <br/><br/>
        We build, deploy and maintain comprehensive Internet of Things 
        solutions that accelerate the speed of real-time data transfer, 
        reduce errors, eliminate manual tasks, automate redundant 
        processes, and ensure accurate, apt, data-driven flow across the 
        organization.`,
    }
    
    
    ]
    return (
        <div className='mt-12 text-center w-4/5 mx-auto'>

            <div className='border-2 border-black py-3 inline-block px-7 font-bold'>What We Do</div>
           

                {data.map((item,index)=> <div key={'ser'+index} className='grid grid-cols-1 lg:grid-cols-2 items-stretch'><RightComponent  index={index} {...item}/>
                </div>
                )}
       
        </div>
    )
}





export default index
