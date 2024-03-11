import { MdGroups2, MdMonitor, MdSupportAgent } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { Link } from "react-router-dom";
import signUpImage from "../assets/img/signupimage.jpg";
import posKiosk from "../assets/img/posKiosk.jpg";
import posMachine from "../assets/img/posMachine.jpg";


const POS = () => {
  return (
    <div>
      {/* HERO */}
      <section className="hero bg-posHero bg-no-repeat bg-cover bg-center">
        <div className="hero-text text-center rounded-lg py-[20px] bg-theme/70">
          <div
            className="my-10 p-20 w-fit mx-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="leading-none text-[40px] md:text-[60px] text-center font-bold text-light ">
              POS Distribution
            </p>
          </div>
        </div>
      </section>

      {/* ecosystem */}

      <section className="posImage md:grid md:grid-cols-4 place-content-center items-center">
        <img src={posKiosk} alt="Ecokiosk" data-aos="fade-up-left"/>
        <img src={posMachine} alt="Ecokiosk" data-aos="fade-up"/>
      </section>

      <section className="why-us py-[70px] bg-light" data-aos="fade-up-right">
        <div className="mx-auto text-center m-3" data-aos="zoom-in-up">
          <p
            className="text-2xl md:text-4xl font-bold text-accent px-8 text-center"
            data-aos="fade-left"
          >
            Ecosystem is at the service of several Mobile Money Operators to
            ensure smooth relationships between them and their Mobile Money
            Agents!
          </p>
        </div>

        <div className="mx-auto text-center m-3" data-aos="zoom-in-up">
          <img src="" alt="" />
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6"
          data-aos="zoom-in-down"
        >
          <div
            className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg"
            data-aos="zoom-in-left"
          >
            <MdGroups2 className="text-4xl m-0" />
            <p className="text-2xl  font-bold">
              Aggregators
              <span className="block text-base text-dark font-normal hover:text-white">
                We serve as aggregators between over 90% of Mobile Money
                Operators in Nigeria, acting as ambassadors of the companies and
                also as solicitors for mobile money agents.
              </span>
            </p>
          </div>
          <div
            className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg"
            data-aos="zoom-in-right"
          >
            <VscFeedback className="text-4xl m-0" />
            <p className="text-2xl  font-bold">
              Feedback
              <span className="block text-base text-dark font-normal hover:text-white">
                We provide accurate and up-to-date feedback to Mobile Money
                Operators on the activities of their terminals at various
                centers across the country
              </span>
            </p>
          </div>
          <div
            className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg"
            data-aos="zoom-in-down"
          >
            <MdSupportAgent className="text-4xl m-0" />
            <p className="text-2xl  font-bold">
              Support And Reconciliation
              <span className="block text-base text-dark font-normal hover:text-white">
                We provide adequate and necessary support to agents that we
                represent. We disseminate information coming from mobile money
                operators to all their agents. We also assist in dispute
                resolutions and other form of difficulty that arise in line of
                operation.
              </span>
            </p>
          </div>
          <div
            className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg"
            data-aos="zoom-in-up"
          >
            <MdMonitor className="text-4xl m-0" />
            <p className="text-2xl  font-bold">
              Monitoring
              <span className="block text-base text-dark font-normal hover:text-white">
                We assists Mobile Money Operators in monitoring the activities
                of their terminals We also follow-up agents when irregular
                activities are detected.
              </span>
            </p>
          </div>
        </div>
      </section>



      {/* ENROLL */}
      <section className="why-us md:flex justify-between bg-gradient-to-r from-accent to-theme hover:from-theme hover:to-accent text-light">
        <img
          src={signUpImage}
          alt=""
          className="md:block hidden md:w-2/4 object-cover object-center "
          data-aos="fade-right"
        />
        <div className="my-5 text-center py-[100px]backdrop-blur-sm p-4 md:px-8 "  data-aos="fade-left">
          <p className="text-4xl font-bold my-8"  data-aos="flip-left">
            Enroll As A Mobile Money Ecosystem Agent
            <span className="text-sm block font-normal italic w-[60%] m-auto"  data-aos="zoom-in-up">
              Join the largest viable agent network in Nigeria
            </span>
            <span className="text-sm block font-normal italic w-[60%] m-auto"  data-aos="zoom-in-up">
              Take a bold step and join one of the fastest growing industries in
              Nigeria.
            </span>
          </p>
          <Link
            to="/be-a-unicorn-agent"
            className="px-10 my-3 py-4 bg-gradient-to-r from-accent to-theme hover:from-theme hover:to-accent shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-light rounded-lg"
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

    </div>
  );
};

export default POS;
