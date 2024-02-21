import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/img/logo.png";

const Footers = () => {
  return (
    <footer className="bg-accent text-light md:flex md:justify-between  p-7">
      <div className="brand flex flex-col m-4 md:m-0">
        <img src={logo} alt="EcoLogo" className="w-[50%]" />
        <div className="social-media flex justify-start items-center gap-6 text-[20px]">
          <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-theme"><MdOutlineFacebook /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-theme"><FaXTwitter /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-theme"><IoLogoLinkedin /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-theme"><AiFillInstagram /></a>
        </div>
      </div>

      <div className="useful-links m-4 md:m-0">
        <p className="text-2xl text-theme font-bold">Useful Links</p>
        <ul className="text-white list-disc ">
          <li className="hover:list-none hover:text-theme"> Home </li>
          <li className="hover:list-none hover:text-theme"> About Us </li> 
          <li className="hover:list-none hover:text-theme">Contact </li>
          <li className="hover:list-none hover:text-theme">Locate Us</li>
          <li className="hover:list-none hover:text-theme">Be a Unicorn Agent</li>
        </ul>
      </div>

      <div className="our-services m-4 md:m-0">
        <p className="text-2xl text-theme font-bold">Our Services</p>
        <ul className="text-white list-disc ">
          <li className="hover:list-none hover:text-theme"> Agent Management Network </li>
          <li className="hover:list-none hover:text-theme"> POS Deployment</li> 
          <li className="hover:list-none hover:text-theme"> Pay Point </li>
          <li className="hover:list-none hover:text-theme">Locate Us</li>
          <li className="hover:list-none hover:text-theme">Be a Unicorn Agent</li>
          <li className="hover:list-none hover:text-theme">NIN Registration </li>
        </ul>
      </div>

      <div className="Contact Detiails m-4 md:m-0">
        <p className="text-2xl text-theme font-bold">Contact Us</p>
        <address className="text-white">72 Remilekun Building Adekunle Fajuyi Road <br /> Dugbe, Ibadan, Nigeria</address>
        <p className="text-white font-bold">Phone <a href="tel:+2348113953620" className="font-normal hover:text-theme"> 08113953620</a>, <a href="tel:+2349062385049" className="font-normal hover:text-theme">09062385049</a> </p>
        <p className="text-white font-bold">Email <a href="mailto:ecosyste@ecosystem.ng" className="font-normal hover:text-theme"> ecosyste@ecosystem.ng</a></p>
      </div>
    </footer>
  );
};

export default Footers;
