import React from 'react'
import logo from "../assets/img/logo.svg"
function NavBar() {
  return (
    <div> 
      {/* Adding a Navbar */}
      <nav className=" relative container mx-auto p-6">
        {/* flex container  */}
        <div className="flex items-center justify-between">
          {/* logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
<div className="hidden md:flex space-x-6">
<a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
  <a href="#"className="hover:text-darkGrayishBlue">Product</a>
  <a href="#"className="hover:text-darkGrayishBlue">About us</a>
  <a href="#"className="hover:text-darkGrayishBlue">Careers</a>
  <a href="#"className="hover:text-darkGrayishBlue">Community</a>

</div>

{/* Button */}
<a href="#" className="hidden md:block p-3 px-6 pt-2 baseline text-white bg-brightRed rounded-full">Get Started</a>
        </div>
  </nav>
  </div>
  )
}

export default NavBar