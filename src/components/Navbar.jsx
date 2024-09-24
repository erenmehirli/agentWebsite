import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg w-full">
      <div className="w-full bg-black text-white text-sm p-2 text-center">
        Free Shipping on Orders Over $75
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="font-bold text-xl">
              Schakauf
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex flex-grow justify-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 w-96"
              />
              <SearchOutlinedIcon className="absolute left-2 top-2 text-gray-400" />
            </div>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex space-x-8 items-center mr-32">
            {/* "Shop" Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleSubMenu}
                className="text-black hover:text-pink-500 transition-colors duration-300 ease-in-out px-3 py-2 text-sm font-medium flex items-center"
              >
                Shop
                <KeyboardArrowDownOutlinedIcon
                  className={`ml-1 transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isSubMenuOpen && (
                <div className="absolute left-0 mt-2 rounded-lg bg-white border border-gray-200 shadow-lg z-10 transition-opacity duration-300 ease-in-out">
                  <div className="divide-y divide-gray-200 gap-6 ">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white rounded-lg">Lingerie</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white rounded-lg">Swimwear</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white rounded-lg">Accessories</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white rounded-lg">Sale</a>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-black hover:text-pink-500 transition-colors duration-300 ease-in-out px-3 py-2 text-sm font-medium">New In</a>
            <a href="#" className="text-black hover:text-pink-500 transition-colors duration-300 ease-in-out px-3 py-2 text-sm font-medium">Gifts</a>
            <a href="#" className="text-black hover:text-pink-500 transition-colors duration-300 ease-in-out px-3 py-2 text-sm font-medium">Sale</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 gap-7">
            <a href="">  <ShoppingCartOutlinedIcon className="text-black hover:text-pink-500 transition-colors duration-300 ease-in-out cursor-pointer" /></a>
          
            <a href="/login"><PersonOutlineIcon className="text-black hover:text-pink-500 cursor-pointer transition-colors duration-300 ease-in-out" /></a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              {isOpen ? (
                <CloseOutlinedIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuOutlinedIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-black hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">New In</a>
            <a href="#" className="text-black hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Gifts</a>
            <a href="#" className="text-black hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Sale</a>
            <a href="#" className="text-black hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Shop</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
