import React, { useState } from 'react';

import bgimage1 from '../assets/images/backgr.jpg'
const Signup = () => {
    
        const [termsAccepted, setTermsAccepted] = useState(false);
        const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
      
        const handleTermsChange = () => {
          setTermsAccepted(!termsAccepted);
        };
      
        const handleNewsletterChange = () => {
          setNewsletterSubscribed(!newsletterSubscribed);
        };
        
  return (
    <div>
       <div
          className="flex min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimage1})` }} // Arka plan resmi
        >
          {/* Solda Beyaz Arka Planlı Bölüm */}
          <div className="w-1/2 flex flex-col justify-center items-start  ml-20 bg-opacity-50">
            <h2 className="text-3xl font-bold mb-4 text-white">Already Registered?</h2>
           
            <button className="bg-black text-white py-3 rounded hover:bg-black hover:text-white transition duration-200 w-2/3">
              Sign in
            </button>
            
          </div>
    
      
    


    
          {/* Sağda Kahverengi Alan */}
          <div className="w-1/2 flex flex-col bg-opacity-50 justify-center items-center p-10 text-white space-y-4">
      <div className="w-full flex flex-col justify-center items-start p-10 bg-opacity-50">
        <h2 className="text-4xl font-bold mb-6">Create an account</h2>
        <input
          type="text"
          placeholder="Email"
          className="mb-4 p-4 border border-black  focus:outline-none focus:ring-2 focus:ring-black w-full text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-4 border border-black  focus:outline-none focus:ring-2 focus:ring-black w-full text-lg"
        />
        <input
          type="text"
          placeholder="First Name"
          className="mb-4 p-4 border border-black  focus:outline-none focus:ring-2 focus:ring-black w-full text-lg"
        />
        <input
          type="text"
          placeholder="Surname"
          className="mb-4 p-4 border border-black  focus:outline-none focus:ring-2 focus:ring-black w-full text-lg"
        />

        <div className="flex flex-col space-y-4">
          {/* Checkbox for Terms and Conditions */}
          <label className="flex items-center text-lg">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className=""
            />
            <span>I confirm that I have read the terms and conditions, agree to the privacy policy and confirm that I am 18 or over</span>
          </label>

          {/* Checkbox for Newsletter Subscription */}
          <label className="flex items-center text-lg">
            <input
              type="checkbox"
              checked={newsletterSubscribed}
              onChange={handleNewsletterChange}
              className="mr-2"
            />
            <span>Sign up to our newsletter</span>
          </label>
        </div>

        <button className="bg-white text-black py-3 border border-black hover:bg-black hover:text-white transition duration-200 w-full text-lg">
          Create account
        </button>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Signup
