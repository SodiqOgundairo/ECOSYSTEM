// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between px-4 py-3 shadow-sm bg-light/30 backdrop-blur-sm fixed z-20 w-full items-center">
      <div className="flex items-center">
        <img src={logo} alt="" />
        <p className="text-xl font-bold text-theme">ECOSYSTEM</p>
      </div>
      <nav className="md:flex gap-7 hidden">
        <div className="gap-9 flex">
          <Link to="/"> Home </Link>
          <Link to="/"> About Us </Link>
          <Link to="/"> Operations </Link>
          <Link to="/"> Contact Us </Link>
        </div>

        <div>
          <Link to="/" className="px-4 py-2 bg-theme hover:bg-accent hover:shadow-md text-light rounded-lg"> Be A Unicorn Agent </Link>
        </div>
      </nav>

      <div
        className={`md:hidden ${
          isMobileMenuOpen
            ? "fixed top-0 left-0 right-0 bottom-0 flex flex-col gap-4 py-4 px-6"
            : ""
        }`}
      >
        <div  className={`backdrop-blur-sm md:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-light/30 flex flex-col gap-4 py-4 px-6 transition-all duration-200 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Operations</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/" className="px-4 py-2 bg-theme text-light rounded-lg w-auto"> Be A Unicorn Agent </Link>
        </div>
        
      </div>

      <button
        className={`md:hidden focus:outline-none flex items-center z-50 mr-3 ${isMobileMenuOpen ? '' : 'hover:text-gray-700'}`}
        onClick={toggleMobileMenu}
      >
        <MdMenu className={`w-6 h-6 mr-2 ${isMobileMenuOpen ? 'hidden' : ''}`} />
        <MdClose className={`w-6 h-6 mr-2 ${isMobileMenuOpen ? '' : 'hidden'}`} />
       
      </button>

    </header>
  );
};

export default Header;
