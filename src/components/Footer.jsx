import React, { useState } from 'react';
import germanyFlag from '../assets/images/germanyflag.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import visa from '../assets/images/visa.jpg';
import troy from '../assets/images/troy.jpg';
import mastercard from '../assets/images/mastercard.jpg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const toggleCompanyMenu = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  const toggleHelpMenu = () => {
    setIsHelpOpen(!isHelpOpen);
  };


  return (

    <footer className=" border-t border-gray-300 text-black py-10" style={{backgroundColor: '#FEEDE8'}}>
      <div className="container mx-auto grid grid-cols-3 gap-8">
        
        {/* Sol Bölüm */}
        <div>
          <h4 className="font-bold text-xl mb-4 ">Talk to an Agent</h4>
         
          <a href="#" className="text-sm border p-2 rounded ml-3">Email <MailOutlineIcon className="w-3 h-3 " /></a>
        </div>

        {/* Orta Bölüm */}
        <div>
          <h4 className="mb-4 text-xl font-bold">Find us on</h4>
          <div className=" space-x-4 cursor-pointer">
  <FacebookIcon className="h-6 w-6" />
  <XIcon className="h-6 w-6" />
  <InstagramIcon className="h-6 w-6" />
  <PinterestIcon className="h-6 w-6" />
</div>

         
        </div>

        {/* Sağ Bölüm - Newsletter */}
        <div>
  <h2 className="text-xl font-bold mb-4">Newsletter</h2>
  <p className="text-black mb-6 max-w-2xl">
    By entering your email address, you're accepting our privacy policy and are confirming that you are 18 or over.
  </p>
  <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4 ml-16">
    <div className="relative w-full md:w-auto">
      <label className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
        Your email<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        className="w-full md:w-auto px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-gray-300"
        style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
      />
    </div>
    <button className="w-full md:w-auto border bg-black text-white px-6 py-2 hover:bg-white hover:border-black hover:text-black transition duration-300">
      Sign Up
    </button>
  </div>
</div>

      </div>
      <br />

      {/* Alt Bölüm - Shipping & Extra Links */}
      <div className="container mx-auto grid grid-cols-3 gap-8 mt-8 space-y-4">
        <div>
          <h4 className="font-bold text-xl mb-4">Shipping to:</h4>
          <button className="flex ml-52 text-sm space-x-4 border p-2 rounded"><span>GBP</span>
            <img src={germanyFlag} alt="Germany Flag" className="w-5 h-5" />
            
          </button>
        </div>

      
        
      {/* Our Company Bölümü */}
      <div className="">
        <a href="#" onClick={toggleCompanyMenu}>
          {isCompanyOpen ? '-' : '+'} Our Company
        </a>
        {isCompanyOpen && (
          <div className="mt-2 text-gray-700 text-center">
            <p>About us</p>
            <p>Contact us</p>
            <p>Careers</p>
            <p>Privacy policy</p>
          </div>
        )}
      </div>

      {/* Help & Advice Bölümü */}
      <div className="">
        <a href="#" onClick={toggleHelpMenu}>
          {isHelpOpen ? '-' : '+'} Help & Advice
        </a>
        {isHelpOpen && (
          <div className="mt-2 text-gray-700">
            <p>Customer Care</p>
            <p>FAQs</p>
            <p>Size Guide</p>
            <p>Care Guide</p>
          </div>
        )}
      </div>
    </div>

    

      {/* En Alt - Copyright ve Ödeme İkonları */}
      <div className="mt-10 border-t border-gray-300 pt-5">
        <div className="container mx-auto flex justify-between items-center">
          <p className='ml-6'>&copy; Agent Provocateur 2024</p>
          <div>
            <div className='grid grid-cols-3 gap-5 cursor-pointer'>
              <img src={visa} alt="Visa" className="w-10 h-8" />
              <img src={troy} alt="Troy" className="w-10 h-6" />
              <img src={mastercard} alt="Mastercard" className="w-10 h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
