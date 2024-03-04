import { FaRegHandshake } from "react-icons/fa6";
import { MdAppRegistration } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import signUpImage from "../assets/img/signupimage.jpg";
import { Link } from "react-router-dom";
import { AccordionCustomAnimation } from "../components/Faq";


const Agent = () => {
  return (
      <div>
        {/* HERO */}
        <section className="hero bg-agentHero bg-no-repeat bg-cover bg-bottom">
          <div className="hero-text text-center rounded-lg py-[20px] bg-theme/70">
            <div
              className="my-10 p-20 w-fit mx-auto"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="leading-none text-[40px] md:text-[60px] text-center font-bold text-light ">
                Agent Network Management
              </p>
            </div>
          </div>
        </section>

        {/* ecosystem */}

        <section className="why-us py-[70px] bg-light" data-aos="fade-up-right">
          <div className="mx-auto text-center m-3" data-aos="zoom-in-up">
            <p
              className="text-2xl md:text-4xl font-bold text-accent px-8 text-center"
              data-aos="fade-left"
            >
              Ecosystem offer programs and services that educate, orientate and
              expose agents to standard practices for better service delivery
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6" data-aos="zoom-in-down">
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-left">
            <FaRegHandshake className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Issues Resolution
                <span className="block text-base text-dark font-normal hover:text-white">
                We are always there to help in resolution of challenging POS-related issues that any of our agents might experience. We are always ready to give advice and how-to-go-about-it information even if the agent is located far away! .
                </span>
                </p>
            </div>
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-right">
            <RiUserLocationLine className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Agent Location Management
                <span className="block text-base text-dark font-normal hover:text-white">
                We assists existing and potential agents in securing strategic locations that favour and facilitate business activities
                </span>
                </p>
            </div>
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-down">
            <MdAppRegistration className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Agent Registration and Profiling
                <span className="block text-base text-dark font-normal hover:text-white">
                We profile and verify credentials and resume of potential agents before directing it to Mobile Money Operators.
We also provide potential agents with information on requirements of any Mobile Money Operator they wish to patner with.
                </span>
                </p>
            </div>
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-up">
            <FaChalkboardTeacher className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Agent Training/ Certification
                <span className="block text-base text-dark font-normal hover:text-white">
                We train agents by providing entrepreneurial trainings and get them certified with reputable institute within and outside Nigeria.
We also organize tour to create necessary exposures to working systems across the globe .
                </span>
                </p>
            </div>
          </div>

        </section>

      {/* ENROLL */}
      <section className="why-us md:flex justify-between bg-light">
 
        <div className="my-5 text-center py-[100px] bg-light backdrop-blur-sm p-4 md:px-8"  data-aos="fade-left">
          <p className="text-4xl font-bold text-accent my-8"  data-aos="flip-left">
          Be An FCMB Mobile Money Agent
           
          </p>
          <Link
            to="/agent-registration"
            className="px-10 my-3 py-4 bg-gradient-to-r from-accent to-theme hover:from-theme hover:to-accent shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-light rounded-lg"
            data-aos="zoom-in-down"  >
            {" "}
            Register Here
          </Link>
        </div>
        <img
          src={signUpImage}
          alt=""
          className="md:block hidden md:w-2/4 object-cover object-center "
          data-aos="fade-right"
        />
      </section>
      {/* ENROLL END */}

      
      {/* FAQs  */}

      <section className="achievements text-center py-[70px] bg-gradient-to-r from-theme to-accent backdrop-blur-sm px-8"  data-aos="flip-down">
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

export default Agent;
