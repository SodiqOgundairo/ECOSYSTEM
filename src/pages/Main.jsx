import { Link } from "react-router-dom";
import headershape from "../assets/img/hero-shape.svg";
import moneyMan from "../assets/img/money-bag.jpg";
import signUpImage from "../assets/img/signupimage.jpg";
import { SiBroadcom } from "react-icons/si";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import { useState } from "react";
import { FaCheckToSlot, FaUsers } from "react-icons/fa6";
import { ImUserTie } from "react-icons/im";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { AccordionCustomAnimation } from "../components/Faq";

const Main = () => {
  const [activeTab, setActiveTab] = useState("agent");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <section className="hero bg-heroImg bg-no-repeat bg-cover bg-center">
        <div className="hero-text text-center rounded-lg py-[150px] md:p-[150px] ">
          <p
            className="text-[30px] leading-none md:text-[60px] font-bold text-accent"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Easy Agent Network{" "}
            <span className="md:block"> Management Services!</span>
          </p>

          <ul className="p-4 pb-8">
            <li className="text-sm md:text-lg m-2" data-aos="fade-down-right">
              Nigeria's number #1 agent network management company
            </li>
            <li className="text-sm md:text-lg m-2" data-aos="fade-right">
              Gateway to the banked and unbanked communities in Nigeria.
            </li>
            <li className="text-sm md:text-lg m-2" data-aos="fade-up-left">
              Patners with 80% of Nigerian licensed superagents, ptsps, MMOs and
              banks
            </li>
          </ul>

          <Link
            to="/"
            className="px-10 py-4 bg-gradient-to-r from-accent to-theme hover:from-theme hover:to-accent hover:shadow-lg text-light rounded-lg"
            data-aos="fade-up"
          >
            {" "}
            Be A Unicorn Agent{" "}
          </Link>
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
        <p className="text-4xl font-bold text-accent px-8"  data-aos="fade-left">
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
              <div className="shadow-lg flex flex-col justify-center text-center bg-light p-7 m-4 rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
               data-aos="flip-up">
                <SiBroadcom className="m-auto text-4xl text-accent hover:text-light" />
                <p className="text-xl">Broad Network</p>
                <p className="text-center">
                  We have business relationship with over 50 Mobile Money
                  Operators and over 40 banks
                </p>
              </div>
              <div className="shadow-lg flex flex-col justify-center bg-light p-7 m-4 text-center rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
               data-aos="flip-down">
                <MdOutlineCenterFocusStrong className="m-auto text-4xl text-accent hover:text-light" />
                <p className="text-xl">Intergrity</p>
                <p className="">
                  We have assisted in establishment of over 10,000 agents across
                  the country.
                </p>
              </div>
            </div>

            <div className="shadow-lg flex flex-col justify-center text-center bg-light p-7 m-4 rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
             data-aos="flip-right">
              <MdOutlineThumbUpAlt className="m-auto text-4xl text-accent hover:text-light" />
              <p className="text-xl">Efficiency</p>
              <p className="">
                We can help you establish a Mobile Money Agent within a very
                short period of time
              </p>
            </div>
          </div>

          <div className="md:w-2/3"  data-aos="zoom-in-up">
            <img src={moneyMan} alt="" />
          </div>
        </div>
      </section>

      {/* END OF WHY US  */}

      {/* OUR SERVICES */}
      <section className="our-services text-center py-[100px] bg-servicesImg bg-cover bg-center bg-no-repeat"  data-aos="zoom-in-up">
        {/* <section className="our-services text-center py-[100px] text-light bg-gradient-to-br from-theme to-accent"> */}
        <p className="text-4xl font-bold text-accent"  data-aos="fade-right">
          Our Services
          <span className="text-sm block font-normal italic"  data-aos="fade-up">
            SOME OF OUR OPERATIONS
          </span>
        </p>

        <div className="my-8 px-5"  data-aos="fade-up-right">
          <ul
            className={`relative md:flex flex-wrap bg-light/40 backdrop-blur-lg list-none shadow-sm rounded-t-xl ${
              activeTab === "agent" ? "bg-blue-gray-50/60" : ""
            }`}
            data-tabs="tabs"
            role="list"
          >
            <li className="z-30 flex-auto text-center">
              <a
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 md:rounded-lg cursor-pointer text-accent bg-inherit ${
                  activeTab === "agent" ? "active bg-theme text-light" : ""
                }`}
                data-tab-target="agent"
                role="tab"
                aria-selected={activeTab === "agent"}
                aria-controls="agent"
                onClick={() => handleTabClick("agent")}
              >
                <FaUsers className="inline" />
                <span className="ml-1"> Agent Management</span>
              </a>
            </li>
            <li className="z-30 flex-auto text-center">
              <a
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 md:rounded-lg cursor-pointer text-accent bg-inherit ${
                  activeTab === "pos" ? "active bg-theme text-light" : ""
                }`}
                data-tab-target="pos"
                role="tab"
                aria-selected={activeTab === "pos"}
                aria-controls="pos"
                onClick={() => handleTabClick("pos")}
              >
                <ImUserTie />
                <span className="ml-1">Need Ecosystem Partner POS</span>
              </a>
            </li>
            <li className="z-30 flex-auto md:text-center">
              <a
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 md:rounded-lg cursor-pointer text-accent bg-inherit ${
                  activeTab === "settings" ? "active bg-theme text-light" : ""
                }`}
                data-tab-target="settings"
                role="tab"
                aria-selected={activeTab === "settings"}
                aria-controls="settings"
                onClick={() => handleTabClick("settings")}
              >
                <FaCheckToSlot />
                <span className="ml-1">Identity Registration</span>
              </a>
            </li>
            <li className="z-30 flex-auto md:text-center">
              <a
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 md:rounded-lg cursor-pointer text-accent bg-inherit ${
                  activeTab === "pay" ? "active bg-theme text-light" : ""
                }`}
                data-tab-target="pay"
                role="tab"
                aria-selected={activeTab === "pay"}
                aria-controls="pay"
                onClick={() => handleTabClick("pay")}
              >
                <RiSecurePaymentLine />
                <span className="ml-1">Pay Point Services</span>
              </a>
            </li>
            <li className="z-30 flex-auto md:text-center">
              <a
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 md:rounded-lg cursor-pointer text-accent bg-inherit ${
                  activeTab === "loan" ? "active bg-theme text-light" : ""
                }`}
                data-tab-target="loan"
                role="tab"
                aria-selected={activeTab === "loan"}
                aria-controls="loan"
                onClick={() => handleTabClick("loan")}
              >
                <GiTakeMyMoney />
                <span className="ml-1">Agent Unicorn Microloan</span>
              </a>
            </li>
          </ul>
          <div
            data-tab-content=""
            className="p-10 bg-light/60 backdrop-blur-lg rounded-b-xl"
          >
            <div
              className={`block text-start ${
                activeTab === "agent" ? "" : "hidden"
              }`}
              id="agent"
              role="tabpanel"
            >
              <p className="text-lg font-bold text-accent leading-tight">
                Ecosystem is at the forefront of agent capacity building and
                exposure.
              </p>
              <div className="m-3">
                <p class="block text-sm font-light leading-none text-dark">
                  We believe in transforming over a million Nigeria mobile money
                  agents into certified agents!
                </p>
                <p class="block text-sm font-light mt-5 text-dark">
                  In an effort to achieve these goals...
                </p>
                <ul className="list-disc text-dark mx-5 text-sm italic">
                  <li>We provide enterpreneurial training for agents.</li>
                  <li>
                    We get agents certified in reputable instituitions within
                    and outside Nigeria.
                  </li>
                  <li>
                    We organize tours that creates necessary exposures to
                    working systems across the globe.
                  </li>
                  <li>
                    Ecosystem set-up paypoints for potential agents , train ,
                    register agents with any CBN-licensed providers and helps to
                    manage daily reconciliations.
                  </li>
                </ul>

                <Link to="/" className="font-bold text-accent italic">
                  {" "}
                  Learn More...
                </Link>
              </div>
            </div>
            <div
              className={`block text-start ${
                activeTab === "pos" ? "" : "hidden"
              }`}
              id="pos"
              role="tabpanel"
            >
              <p className="text-lg font-bold text-accent leading-tight">
                Ecosystem deploys pos terminals to Agents through her agent
                networks across Nigeria.
              </p>
              <p className="text-lg font-bold text-dark leading-tight">
                Our pos activity rate is about 95% due to our 24hrs agent
                support and reconciliation services.
              </p>
              <div className="m-3">
                <p class="block text-sm font-light mt-5 text-dark">
                  This makes Ecosystem the number one choice for POS Agents. Get
                  Ecosytem Partner Pos and enjoy the following benefits:
                </p>
                <ul className="list-disc text-dark mx-5 text-sm italic">
                  <li>Instant settlements & Low charges.</li>
                  <li>Commission for high performance.</li>
                  <li>Good network & Instant attention to issues</li>
                  <li>Float & Loan</li>
                </ul>

                <Link to="/" className="font-bold text-accent italic">
                  {" "}
                  Learn More...
                </Link>
              </div>
            </div>
            <div
              className={`block text-start ${
                activeTab === "settings" ? "" : "hidden"
              }`}
              id="settings"
              role="tabpanel"
            >
              <p className="text-lg font-bold text-accent leading-tight">
                Ecosystem is one of the top aggregators for BVN , NIN , house
                enumerations etc
              </p>
              <div className="m-3">
                <ul className="list-disc text-dark mx-5 text-sm">
                  <li>
                    We mobilize agents and create enrollment centres across
                    Nigeria.
                  </li>
                  <li>
                    We also create awareness concerning new goverment policies
                    regarding NIN and BVN.
                  </li>
                </ul>

                <p className="text-sm font-bold text-dark leading-tight">
                  To get your NIN registration done without hassle...
                  <Link to="/" className="font-bold text-accent italic">
                    {" "}
                    Book Now...
                  </Link>
                </p>
              </div>
            </div>
            <div
              className={`block text-start ${
                activeTab === "pay" ? "" : "hidden"
              }`}
              id="pay"
              role="tabpanel"
            >
              <p className="text-lg font-bold text-accent leading-tight">
                We continuously establish access points for cash deposits and
                cash withdrawals especially at rural, semi urban & generally
                unbanked areas.
              </p>
              <div className="m-3">
                <p class="block text-base font-light leading-none text-dark">
                  Leveraging on our wide coverage and rural presence in Nigeria,
                  Ecosystem works with government agencies in disbursements of
                  social packages, soft loans, micro credits ( by private
                  lenders ) and collections ( informal revenues ,loan repayments
                  etc)
                </p>

                <Link to="/" className="font-bold text-accent italic">
                  {" "}
                  Learn More...
                </Link>
              </div>{" "}
            </div>
            <div
              className={`block text-start ${
                activeTab === "loan" ? "" : "hidden"
              }`}
              id="loan"
              role="tabpanel"
            >
              <p className="text-lg font-bold text-accent leading-tight">
                Ecosystem Provide Micro Loan Strictly For Unicorn Agent For
                Working Capital And This is Done Within:
              </p>
              <div className="m-3">
                <ul className="list-disc text-dark mx-5 text-sm">
                  <li>Application-disbursement in 24hrs</li>
                  <li>Monthly Repayment in 24hrs</li>
                  <li>Competitive rate (Discount for early repayment)</li>
                  <li>
                    Amount depends on agent bank account analysis (Up to 5
                    million)
                  </li>
                  <li>No collateral</li>
                </ul>

                <Link to="/" className="font-bold text-accent italic">
                  {" "}
                  Apply Now...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* END OF OUR SERVICES */}

      {/* ENROLL */}
      <section className="why-us md:flex justify-between bg-light">
        <img
          src={signUpImage}
          alt=""
          className="md:block hidden md:w-2/4 object-cover object-center "
          data-aos="fade-right"
        />
        <div className="my-5 text-center py-[100px] bg-light backdrop-blur-sm p-4 md:px-8"  data-aos="fade-left">
          <p className="text-4xl font-bold text-accent my-8"  data-aos="flip-left">
            Enroll As A Mobile Money Unicorn Agent
            <span className="text-sm block font-normal italic w-[60%] m-auto"  data-aos="zoom-in-up">
              Join the largest viable agent network in Nigeria
            </span>
            <span className="text-sm block font-normal italic w-[60%] m-auto"  data-aos="zoom-in-up">
              Take a bold step and join one of the fastest growing industries in
              Nigeria.
            </span>
          </p>
          <Link
            to="/"
            className="px-10 my-3 py-4 bg-gradient-to-r from-accent to-theme hover:from-theme hover:to-accent hover:shadow-lg text-light rounded-lg"
            data-aos="zoom-in-down"  >
            {" "}
            Register Here
          </Link>
        </div>
      </section>
      {/* ENROLL END */}

      {/* OUR ACHIEVEMENTS  */}

      <section className="achievements text-center py-[100px] bg-light backdrop-blur-sm px-8"  data-aos="zoom-in-down">
        <p className="text-4xl font-bold text-accent"  data-aos="zoom-in-up">
          Our Achievements So Far
          <span className="text-sm block font-normal italic w-[60%] m-auto"  data-aos="zoom-in-up">
            OUR ACHIEVEMENTS
          </span>
        </p>

        <div className="md:flex justify-center gap-auto m-4 block" >
          <div className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light" data-aos="flip-right">
            <p className="text-base text-center text-gray-500">
              Annual Cash-In Value
            </p>
            <p className="">18,500,000,000</p>
          </div>
          <div className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light" data-aos="zoom-out-right">
            <p className="text-base text-center text-gray-500">
              Annual Cash-Out Value
            </p>
            <p className="">24,000,000,000</p>
          </div>
          <div className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light" data-aos="zoom-out-left">
            <p className="text-base text-center text-gray-500">Agents Set-Up</p>
            <p className="">over 5,000</p>
          </div>
          <div className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light" data-aos="zoom-in-right">
            <p className="text-base text-center text-gray-500">
              {" "}
              Financial Access Points
            </p>
            <p className="">over 10,000</p>
          </div>
        </div>
      </section>

      {/* END OF OUR ACHIEVEMENTS  */}

      {/* FAQs  */}

      <section className="achievements text-center py-[100px] bg-gradient-to-r from-theme to-accent backdrop-blur-sm px-8"  data-aos="flip-down">
        <p className="text-4xl font-bold text-light my-10"  data-aos="fade-down">
          FAQs
          <span className="text-sm block font-normal italic text-light w-[60%] m-auto"  data-aos="zoom-in-up">
            YOU'VE GOT QUESTIONS? <br /> WE'VE GOT ANSWERS!
          </span>
        </p>

        <AccordionCustomAnimation />
      </section>

      {/* END OF FAQs  */}
    </div>
  );
};

export default Main;
