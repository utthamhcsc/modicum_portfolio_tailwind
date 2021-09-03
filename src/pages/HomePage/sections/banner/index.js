import React from "react";
import { Images } from "../../../../assets";
import Button from "../../../../shared/buttons/Button";
import "./Banner.css";
function Banner() {
  const heading = [
    {
      title1: "We Built Softwares",
      title2: "Innovative | Top Quality | On Time",
    },
    {
      title1: "  We Deliver Unique Creative Design",
      title2: " Think | Design | Execute",
    },
    {
      title1: "   We Create Custom Application ",
      title2: "  Analyze|Code|Develop",
    },
  ];

  const [index, setIndex] = React.useState(0);
  const nextItem = React.useCallback(() => {
    if (index < heading.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  }, [index, heading?.length]);
  const previousItem = React.useCallback(() => {
    if (index >0) {
      setIndex((index) => index - 1);
    } else {
      setIndex(heading.length - 1);
      
    }
  }, [index, heading?.length]);
  // React.useEffect(() => {
  //   setTimeout(nextItem, 8000);
  // }, [index, nextItem]);
  const getTitle = () => {
    return (
      <>
        <h1 className="font-medium  text-4xl  mt-10  pt-11">
          {heading[index]?.title1}
        </h1>
        <h1 className="font-extrabold text-5xl mb-11 ">
          {heading[index]?.title2}
        </h1>
      </>
    );
  };
  const getSubtitle = () => {
    return (
      <h5 className="font-bold text-2xl pt-3">
        Would you like to start a project with us?
      </h5>
    );
  };
  const getdesc = () => {
    return (
      <div className="w-1/2 mx-auto mt-2 text-xs  mb-3">
        Modicum is focusing exclusively in high quality and cost-effective
        software development and implementation services.
      </div>
    );
  };

  const getStarted=()=>{
      return <div className=' flex justify-center space-x-3 mb-12 text-xs'>
            <div className='flex items-center rounded-sm text-white bg-white bg-opacity-50 hover:bg-white group hover:text-gray-900 focus-within:bg-white  focus-within:text-gray-600' style={{maxWidth:'200px'}}>
                <input placeholder='UserName... ' className=' pr-3 h-full bg-transparent  p-2 w-full outline-none placeholder-white hover:placeholder-gray-700  focus:placeholder-gray-700'/>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>   
            </div>   
            <div className='flex items-center rounded-sm text-white bg-white bg-opacity-50 hover:bg-white hover:text-gray-900 focus-within:bg-white  focus-within:text-gray-600' style={{maxWidth:'200px'}}>
                <input placeholder='Email/Phone... ' className=' pr-3 h-full bg-transparent  p-2 w-full outline-none placeholder-white hover:placeholder-gray-700   focus:placeholder-gray-700'/>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>  
            </div> 
            <Button className='rounded-sm uppercase font-normal '><span className=' block h-full w-full transform  hover:scale-110'>Get Started</span></Button> 
      </div>
  }

  return (
   
      
    <div
      className="banner pt-6 pb-3 text-white text-center  w-screen bg-red-200 "
      style={{ "--bgImage": `url('${Images.homeBanner}')` }}
    >
       <div className='flex items-center justify-around'>
      <div className='pl-8 cursor-pointer' onClick={previousItem}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
</svg>
      </div>
      <div className='flex-1'>
      {getTitle()}
      <div className='h-1 w-full'/>
      {getSubtitle()}
      {getdesc()}
      <div className='h-3 w-full'/>
      {getStarted()}
      <div className='flex justify-center rounded-sm space-x-2 w-full '>
        <div className={`h-1 w-8  rounded-sm bg-white ${index===0 ? 'opacity-100':'opacity-10'}`}/>
        <div className={`h-1 w-8  rounded-sm  bg-white ${index===1 ? 'opacity-100':'opacity-10'}`}/>
        <div className={`h-1 w-8  rounded-sm bg-white ${index===2 ? 'opacity-100':'opacity-10'}`}/>
      </div> 
      </div>
      <div className='pr-8 cursor-pointer' onClick={nextItem}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
    </div>
    
    </div> 
    </div>
    
  );
}

export default Banner;
