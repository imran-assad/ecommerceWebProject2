import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isVisible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className=" py-5 flex items-center justify-between font-medium">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-36" />
      </Link>

      {/* menu bar code starts from here */}
      <ul className="hidden sm:flex gap-5 text-md text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1  ">
          <p className="">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col gap-1 ">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>
        <NavLink to="contact" className="flex flex-col gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>
      </ul>
      {/* menu bar code ends from here */}
      <div className="flex items-center gap-5">
        <NavLink to="/collection">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
          />
        </NavLink>
        {/* profile-icon code */}
        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          {/* dropdown menu code here */}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
          {/* dropdown menu code ends here */}
        </div>
        {/* Profile icon code ends here */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        {/* Navbar for mobile menu starts from here */}
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          className="w-5 sm:hidden cursor-pointer"
          alt=""
        />
        {/* sidebar menu for small screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            isVisible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => {
                setVisible(false);
              }}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img src={assets.dropdown_icon} className="h-4 rotate-180" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => {
                setVisible(false);
              }}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
