import { RiSafe2Line } from "react-icons/ri";
import { AccordionCustomAnimation } from "../components/Faq";
import { GiCash, GiPayMoney } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";

const Paypoint = () => {
    return (
        <div>
        {/* HERO */}
        <section className="hero bg-payHero bg-no-repeat bg-cover bg-center">
          <div className="hero-text text-center rounded-lg py-[20px] bg-theme/70">
            <div
              className="my-10 p-20 w-fit mx-auto"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="leading-none text-[40px] md:text-[60px] text-center font-bold text-light ">
                Pay Point
              </p>
            </div>
          </div>
        </section>

        {/* ecosystem */}

        <section className="why-us py-[70px] bg-light" data-aos="fade-up-right">
          {/* <div className="mx-auto text-center m-3" data-aos="zoom-in-up">
            <p
              className="text-2xl md:text-4xl font-bold text-accent px-8 text-center"
              data-aos="fade-left"
            >
             Ecosystem offer programs and services that educate, orientate and expose agents to standard practices for better service delivery
            </p>
          </div> */}

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6" data-aos="zoom-in-down">
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-left">
            <GiPayMoney className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Disbursment
                <span className="block text-base text-dark font-normal hover:text-white">
                Leveraging on our wide coverage and rural presence in Nigeria, Ecosystem works with government agencies in disbursements of social packages, soft loans, micro credits ( by private lenders )
                </span>
                </p>
            </div>
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-right">
            <RiSafe2Line className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Collections
                <span className="block text-base text-dark font-normal hover:text-white">
                We also assist goverment and other agencies and organization in collection of informal revenues ,loan repayments etc
                </span>
                </p>
            </div>
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-down">
            <BsCashCoin className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Cash In-Cash Out
                <span className="block text-base text-dark font-normal hover:text-white">
                We continuously establish access points for cash deposits and cash withdrawals especially at rural, semi urban & generally unbanked areas.
If you find yourself at any of these financially excluded areas , search for Ecosystem and get your payment needs solved!</span>
                </p>
            </div>
            <div className="flex flex-col bg-light shadow-lg shadow-gray-300 text-accent hover:bg-theme hover:text-light p-9 rounded-lg" data-aos="zoom-in-up">
            <GiCash className="text-4xl m-0" />
                <p className="text-2xl  font-bold">
                Thrift Contributions/Cooperative Management
                <span className="block text-base text-dark font-normal hover:text-white">
                Thrift contributions/cooperative management involves groups of people coming together to contribute an agreed amout of money that would be rotated amongst members of the group for a period of time. .
We coordinate these programs among interested individuals by getting them together to a unanimous agreement and administration of the collections. </span>
                </p>
            </div>
          </div>

        </section>


      
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
    )
}

export default Paypoint