import { Link } from "react-router-dom";
import headershape from "../assets/img/hero-shape.svg";
import moneyMan from "../assets/img/money-bag.jpg";
import { SiBroadcom } from "react-icons/si"; 
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import { useState } from "react";


const Main = () => {
    const [activeTab, setActiveTab] = useState("app");
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

  return (
    <div>
      <section className="hero bg-heroImg bg-no-repeat bg-cover bg-center">
        <div className="hero-text text-center rounded-lg py-[80px] md:p-[130px] ">
          <p className="text-[30px] leading-none md:text-[60px] font-bold text-accent ">
            Easy Agent Network{" "}
            <span className="md:block"> Management Services!</span>
          </p>

          <ul className="p-4 pb-8">
            <li className="text-sm md:text-lg m-2">Nigeria's number #1 agent network management company</li>
            <li className="text-sm md:text-lg m-2">Gateway to the banked and unbanked communities in Nigeria.</li>
            <li className="text-sm md:text-lg m-2">
              Patners with 80% of Nigerian licensed superagents, ptsps, MMOs and
              banks
            </li>
          </ul>

          <Link to="/" className="px-10 py-4 bg-gradient-to-r from-accent to-theme hover:bg-theme hover:shadow-lg text-light rounded-lg"> Be A Unicorn Agent </Link>
        </div>

        <div className="relative z-[999] w-full h-auto -mb-1 header-shape">
          <img src={headershape} alt="shape" />
        </div>
      </section>



      {/* WHY US */}
{/* 
// ONLY UNCOMMENT THIS TO GET A REGULAR CARD WHY US TYPE
      <section className="why-us text-center py-[100px] bg-light backdrop-blur-sm px-8">
        <p className="text-4xl font-bold text-accent">
          Why Choose Ecosystem
          <span className="text-sm block font-normal italic w-[60%] m-auto">
            Ecosystem is Nigeria's #1 agent network management company that
            serves as a gateway to the banked and unbanked communities in
            Nigeria.
          </span>
        </p>

        <div className="md:flex justify-center gap-auto m-4 block">
          <div className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light">
            <SiBroadcom className="m-auto text-4xl text-accent hover:text-light" />
            <p className="text-xl text-center">Broad Network</p>
            <p className="">
              We have business relationship with over 50 Mobile Money Operators
              and over 40 banks
            </p>
          </div>
          <div className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light">
            <MdOutlineCenterFocusStrong className="m-auto text-4xl text-accent hover:text-light" />
            <p className="text-xl text-center">Intergrity</p>
            <p className="">
            We have assisted in establishment of over 10,000 agents across the country.
            </p>
          </div>
          <div className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light">
            <MdOutlineThumbUpAlt className="m-auto text-4xl text-accent hover:text-light" />
            <p className="text-xl text-center">Efficiency</p>
            <p className="">
            We can help you establish a Mobile Money Agent within a very short period of time
            </p>
          </div>
        </div>
      </section>
       */}
      {/* END OF WHY US  */}


      {/* WHY US */}

      <section className="why-us py-[100px] bg-light">
        <p className="text-4xl font-bold text-accent px-8">
          Why Choose Ecosystem
          <span className="text-sm block font-normal italic md:w-1/3">
            Ecosystem is Nigeria's #1 agent network management company that
            serves as a gateway to the banked and unbanked communities in
            Nigeria.
          </span>
        </p>

      <div className="md:flex">

        <div className="md:flex flex-col gap-auto m-4 md:m-0 ">
          <div className="md:flex">

          <div className="shadow-lg flex flex-col justify-center text-center bg-light p-7 m-4 rounded-lg hover:bg-accent hover:text-light">
            <SiBroadcom className="m-auto text-4xl text-accent hover:text-light" />
            <p className="text-xl">Broad Network</p>
            <p className="text-center">
              We have business relationship with over 50 Mobile Money Operators
              and over 40 banks
            </p>
          </div>
          <div className="shadow-lg flex flex-col justify-center bg-light p-7 m-4 text-center rounded-lg hover:bg-accent hover:text-light">
            <MdOutlineCenterFocusStrong className="m-auto text-4xl text-accent hover:text-light" />
            <p className="text-xl">Intergrity</p>
            <p className="">
            We have assisted in establishment of over 10,000 agents across the country.
            </p>
          </div>
          </div>

          <div className="shadow-lg flex flex-col justify-center text-center bg-light p-7 m-4 rounded-lg hover:bg-accent hover:text-light">
            <MdOutlineThumbUpAlt className="m-auto text-4xl text-accent hover:text-light" />
            <p className="text-xl">Efficiency</p>
            <p className="">
            We can help you establish a Mobile Money Agent within a very short period of time
            </p>
          </div>

          </div>

          <div className="md:w-2/3">


<img src={moneyMan} alt="" />
          </div>
        </div>
      </section>
      
      {/* END OF WHY US  */}



      {/* OUR SERVICES */}
      <section className="our-services text-center py-[100px] text-light bg-accent backdrop-blur-sm px-8">
        <p className="text-4xl font-bold text-light ">
          Our Services
          <span className="text-sm block font-normal italic">
          SOME OF OUR OPERATIONS
          </span>
        </p>

        <div className="w-2/3 m-auto">
      <div className="relative right-0">
        <ul
          className={`relative flex flex-wrap p-1 list-none rounded-xl ${
            activeTab === "app" ? "bg-blue-gray-50/60" : ""
          }`}
          data-tabs="tabs"
          role="list"
        >
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === "app" ? "active bg-white" : ""
              }`}
              data-tab-target="app"
              role="tab"
              aria-selected={activeTab === "app"}
              aria-controls="app"
              onClick={() => handleTabClick("app")}
            >
              <span className="ml-1">App</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === "message" ? "active bg-white" : ""
              }`}
              data-tab-target="message"
              role="tab"
              aria-selected={activeTab === "message"}
              aria-controls="message"
              onClick={() => handleTabClick("message")}
            >
              <span className="ml-1">Messages</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                activeTab === "settings" ? "active bg-white" : ""
              }`}
              data-tab-target="settings"
              role="tab"
              aria-selected={activeTab === "settings"}
              aria-controls="settings"
              onClick={() => handleTabClick("settings")}
            >
              <span className="ml-1">Settings</span>
            </a>
          </li>
        </ul>
        <div data-tab-content="" className="p-5">
          <div className={`block opacity-100 ${activeTab === "app" ? "" : "hidden"}`} id="app" role="tabpanel">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">THIS IS PART IS UNDER CONSTRUCTION
            </p>
          </div>
          <div className={`block opacity-0 ${activeTab === "message" ? "" : "hidden"}`} id="message" role="tabpanel">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              The reading of all good books is like a conversation with the finest minds of past centuries.
            </p>
          </div>
          <div className={`block opacity-0 ${activeTab === "settings" ? "" : "hidden"}`} id="settings" role="tabpanel">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              Comparing yourself to others is the thief of joy.
            </p>
          </div>
        </div>
      </div>
    </div>
      </section>

      {/* END OF OUR SERVICES */}




      {/* ENROLL */}
      <section className="why-us text-center py-[100px] bg-light backdrop-blur-sm p-4 md:px-8">
        
        <div className="my-5">

        <p className="text-4xl font-bold text-accent">
        Enroll As A Mobile Money Unicorn Agent
          <span className="text-sm block font-normal italic w-[60%] m-auto">
          Join the largest viable agent network in Nigeria
          </span>
          <span className="text-sm block font-normal italic w-[60%] m-auto">
          Take a bold step and join one of the fastest growing industries in Nigeria.
          </span>
        </p>
        </div>

    
        <Link to="/" className="px-10 my-3 py-4 bg-gradient-to-r from-accent to-theme hover:bg-theme hover:shadow-lg text-light rounded-lg"> Register Here</Link>
       
         
      </section>
      {/* ENROLL END */}

    </div>
  );
};

export default Main;
