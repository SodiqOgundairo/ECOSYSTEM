import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footers = () => {
  const date = new Date();

  return (
    <footer className="m-auto">
      <section className="text-accent bg-blue-50 md:flex md:justify-between  p-7">
        <div className="brand flex flex-col m-4 md:m-0">
          <img src={logo} alt="EcoLogo" className="w-[50%]" />
          <div className="social-media flex justify-start items-center gap-6 text-[20px]">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme"
            >
              <MdOutlineFacebook />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme"
            >
              <FaXTwitter />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <div className="useful-links m-4 md:m-0">
          <p className="text-2xl text-theme font-bold">Useful Links</p>
          <ul className="text-accent list-disc ">
            <li className="hover:list-none hover:text-theme"> Home </li>
            <li className="hover:list-none hover:text-theme"> <Link to="/about"> About Us </Link> </li>
            <li className="hover:list-none hover:text-theme">Contact </li>
            <li className="hover:list-none hover:text-theme">Locate Us</li>
            <li className="hover:list-none hover:text-theme">
              Be a Ecosystem Agent
            </li>
          </ul>
        </div>

        <div className="our-services m-4 md:m-0">
          <p className="text-2xl text-theme font-bold">Our Services</p>
          <ul className="text-accent list-disc ">
            <li className="hover:list-none hover:text-theme">
              {" "}
              Agent Management Network{" "}
            </li>
            <li className="hover:list-none hover:text-theme">
              {" "}
              POS Deployment
            </li>
            <li className="hover:list-none hover:text-theme"> Pay Point </li>
            <li className="hover:list-none hover:text-theme">Locate Us</li>
            <li className="hover:list-none hover:text-theme">
              Be a Ecosystem Agent
            </li>
            <li className="hover:list-none hover:text-theme">
              <Link to="/nin-registration"> NIN Registration</Link>
            </li>
          </ul>
        </div>

        <div className="Contact Detiails m-4 md:m-0">
          <p className="text-2xl text-theme font-bold">Contact Us</p>
          <address className="text-accent">
          5 lumen city estate wuye FCT ABUJA.
          </address>
          <address className="text-accent">
            72 Remilekun Building Adekunle Fajuyi Road <br /> Dugbe, Ibadan,
            Nigeria
          </address>
          <p className="text-accent font-bold">
            Phone{" "}
            <a
              href="tel:+2349014825833"
              className="font-normal hover:text-theme"
            >
              {" "}
              09014825833
            </a>
           
          </p>
          <p className="text-accent font-bold">
            Email{" "}
            <a
              href="mailto:ecosyste@ecosystem.ng"
              className="font-normal hover:text-theme"
            >
              {" "}
              ecosyste@ecosystem.ng
            </a>
          </p>
        </div>
      </section>
      <div className="bg-accent text-light md:flex justify-center align-middle gap-9 p-4">
        <p className="">© Copyright Ecosystem. All Rights Reserved {date.getFullYear()} </p>
        <p className="text-light">Designed with ❤️ by <a href="http://x.com/yemi_ogundairo" className="text-theme underline hover:text-light" target="_blank" rel="noopener noreferrer">gr8QM</a> </p>
      </div>
    </footer>
  );
};

export default Footers;
