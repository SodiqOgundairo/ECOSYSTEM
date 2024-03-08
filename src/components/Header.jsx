
// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOperationsDropdownOpen, setIsOperationsDropdownOpen] = useState(false); // State for dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleOperationsDropdown = () => {
    setIsOperationsDropdownOpen(!isOperationsDropdownOpen); // Toggle dropdown state
  };

  
  // Handle click outside of dropdown to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOperationsDropdownOpen && !event.target.closest(".operations-dropdown")) { // Check if clicked outside dropdown
        setIsOperationsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside); // Add event listener

    return () => document.removeEventListener("click", handleClickOutside); // Remove event listener on cleanup
  }, [isOperationsDropdownOpen]); // Re-run effect when isOperationsDropdownOpen changes


  return (
    <header className="flex justify-between px-4 py-3 shadow-sm bg-light/30 backdrop-blur-lg fixed z-20 w-full items-center">
      <div className="flex items-center">
        <img src={logo} alt="" />
        <p className="text-xl font-bold text-theme">ECOSYSTEM</p>
      </div>
      <nav className="md:flex gap-7 hidden">
        <div className="gap-9 flex">
          <Link to="/"> Home </Link>
          <Link to="/about"> About Us </Link>       
          <div className="relative">
            <p onMouseOver={toggleOperationsDropdown} >
              Operations <AiOutlineDown className="ml-2 inline cursor-pointer" />
            </p>
            {isOperationsDropdownOpen && ( // Conditionally render dropdown content
              <ul className="absolute top-full left-0 bg-light w-[250px] rounded-lg shadow-md px-4 py-4 z-50 flex flex-col gap-4">
                <li>
                  <Link to="/nin-registration" className="hover:text-theme my-3">NIN Registration</Link>
                </li>
                <li>
                  <Link to="/agent-network-mgt"className="hover:text-theme my-3">Agent Network </Link>
                </li>
                <li>
                  <Link to="/pay-point"className="hover:text-theme my-3">Pay Point </Link>
                </li>
                <li>
                  <Link to="/pos-distribution"className="hover:text-theme my-3">POS Deployment </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/contact-us"> Contact Us </Link>
        </div>

        <div>
          <Link to="/be-a-unicorn-agent" className="text-white bg-gradient-to-br from-accent to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"> Be A Ecosystem Agent </Link>
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
          <Link to="/about"> About Us </Link><div className="relative w-full">
            <Link to="/" onClick={toggleOperationsDropdown}>
              Operations <AiOutlineDown className="ml-2 inline" />
            </Link>
            {isOperationsDropdownOpen && ( // Conditionally render dropdown content
              <ul className="absolute top-full left-0 bg-white rounded-lg shadow-md px-2 py-4 w-full ">
                <li>
                  <Link to="/nin-registration">NIN Registration</Link>
                </li>
                <li>
                  <Link to="/agent-network-mgt">Agent Network</Link>
                <li>
                  <Link to="/pay-point"className="hover:text-theme my-3">Pay Point </Link>
                </li>
                <li>
                <Link to="/pos-distribution"className="hover:text-theme my-3">POS Deployment </Link>
                </li>
                </li>
              </ul>
            )}
          </div>
          <Link to="/contact-us">Contact Us</Link>

          <Link to="/be-a-unicorn-agent" className="px-4 py-2 bg-theme text-light rounded-lg w-auto shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"> Be A Ecosystem Agent </Link>
        </div>
        
      </div>

      <button
  className={`md:hidden focus:outline-none flex items-center z-50 mr-3 ${isMobileMenuOpen ? '' : 'hover:text-gray-700'}`}
  onClick={toggleMobileMenu}
  style={{ opacity: isMobileMenuOpen ? 1 : 0 }} // Set initial opacity based on state
>
  <MdMenu className={`w-6 h-6 mr-2 ${isMobileMenuOpen ? 'hidden' : ''}`} />
  <MdClose className={`w-6 h-6 mr-2 ${isMobileMenuOpen ? '' : 'hidden'}`} />
</button>


    </header>
  );
};

export default Header;
