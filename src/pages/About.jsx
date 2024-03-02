import { Link } from "react-router-dom";
import about from "../assets/img/about.jpg";
const About = () => {
  return (
    <div>
      {/* HERO */}
      <section className="hero bg-aboutHero bg-no-repeat bg-cover bg-center">
        <div className="hero-text text-center rounded-lg py-[20px] bg-theme/70">
          <div
            className="my-10 p-20 w-fit mx-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="leading-none text-[60px] font-bold text-light ">
              About Us
            </p>
          </div>
        </div>
      </section>

      {/* ecosystem */}

      <section className="why-us py-[70px] bg-light">
        <div className="mx-auto text-center m-3">
          <p
            className="text-2xl md:text-4xl font-bold text-accent px-8 text-center"
            data-aos="fade-left"
          >
            ECOSYSTEM is Nigeria’s number #1 agent network management company
            that serves as a gateway to the banked and unbanked communities in
            Nigeria.
            <span className="text-sm block font-normal italic">
              We partner with over 80% of Nigerian licensed super agents, ptsp,
              MMOs and banks in order to deliver efficient services in the area
              of…
            </span>
          </p>
        </div>

        <div className="md:flex justify-center gap-6 items-center">
          <div className="md:w-[30%]" data-aos="zoom-in-up">
            <img src={about} alt="" className="md:w-fit" />
          </div>
          <div className="md:flex flex-col gap-4 justify-between">
            <div
              className="m-4 md:m-0 shadow-lg flex flex-col justify-center text-center bg-light p-7 rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
              data-aos="flip-up"
            >
              <p className="text-xl">Agents management and Exchange program.</p>
            </div>
            <div
              className="m-4 md:m-0 shadow-lg flex flex-col justify-center text-center bg-light p-7 rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
              data-aos="flip-up"
            >
              <p className="text-xl">Payment platform pilots & roll out.</p>
            </div>
            <div
              className="m-4 md:m-0 shadow-lg flex flex-col justify-center text-center bg-light p-7 rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
              data-aos="flip-up"
            >
              <p className="text-xl">POS deployment and management.</p>
            </div>
            <div
              className="m-4 md:m-0 shadow-lg flex flex-col justify-center text-center bg-light p-7 rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
              data-aos="flip-up"
            >
              <p className="text-xl">Identity registration</p>
            </div>
            <div
              className="m-4 md:m-0 shadow-lg flex flex-col justify-center text-center bg-light p-7 rounded-lg hover:bg-gradient-to-br hover:from-accent hover:to-theme hover:text-light"
              data-aos="flip-up"
            >
              <p className="text-xl">Collection and Disbursement of Cash.</p>
            </div>
          </div>
        </div>
        <p className="text-center font-light m-5 md:text-2xl text-lg text-accent italic">
          Ecosystem provides a meeting point for all financial and non-financial
          service providers and the end users!
        </p>
      </section>


            {/* OUR ACHIEVEMENTS  */}

            <section className="achievements text-center py-[70px] bg-gradient-to-br from-accent to-theme backdrop-blur-sm px-8"  data-aos="zoom-in-down">
        <p className="text-4xl font-bold text-light"  data-aos="zoom-in-up">
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
    </div>
  );
};

export default About;
