import React from "react";
import { Images } from "../../../../assets";

function index() {
  return (
    <section id="service" className="mt-16 w-4/5  mx-auto text-center">
      <div className="relative  mb-6">
        <h1 className="text-9xl tracking-wide font-black  text-gray-100 uppercase text-center">
          Choose Us
        </h1>
        <div className=" absolute  top-0 text-center w-full">
          <h1 className="text-6xl w-full font-black text-gray-900  text-center ">
            Why Choose Us
          </h1>
          <h4 className="text-2xl w-full text-gray-800  text-center ">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits.
          </h4>
        </div>
      </div>
      <div className="pt-6">
        <div className=" grid grid-cols-12 gap-5 items-stretch">
          <div className="col-span-4">
            <img
            alt=''
              src={Images.homeBanner}
              className="h-full w-full rounded-md shadow-2xl"
            />
          </div>
          <div className="col-span-8 grid grid-cols-2 gap-5">
            <ChooseCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>}
              title="User Friendly Experience"
              details="We deliver a website which is compactable to all kind devices with a smooth browser experience. Our web developer main focus is on client success through the user, search engine friendly."
            />
            <ChooseCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>}
              title="Affordable Pricing"
              details="We provide cost-effective solutions to our clients based on business requirements and budget.Our focus is to build a long term relationship with the client who year after year put their trust with us."
            />
            <ChooseCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>}
              title="Promote Brand Awareness"
              details="Modicum ensures that your brands meet all the mobility specifications. The android or iOS mobile application that we design will correctly fit any business model."
            />
            <ChooseCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>}
              title="In Time Delivery"
              details="Our highly skilled designers and developers have experience in latest technologies who can understand the client requirements and deliver the services within the deadline."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;

const ChooseCard = ({icon, title, details }) => (
  <div className="p-3 group rounded-sm shadow-md w-full space-y-1 transition-all hover:bg-primary hover:text-white flex flex-col justify-center">
    <div className="text-primary group-hover:text-white">
     {icon}
    </div>
    <div className="text-md  font-semibold">{title}</div>
    <div className="text-xs text-gray-400 group-hover:text-white">
      {details}
    </div>
  </div>
);
