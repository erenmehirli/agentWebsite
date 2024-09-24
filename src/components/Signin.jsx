import React from 'react';
import bgimage1 from '../assets/images/img4.jpg'


const Signin = () => {
    return (
        <div
          className="flex min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimage1})` }} // Arka plan resmi
        >
          {/* Solda Beyaz Arka Planlı Bölüm */}
          <div className="w-1/2 flex flex-col justify-center items-start p-10 ml-20 bg-opacity-50">
            <h2 className="text-3xl font-bold mb-4 text-white">Sign in</h2>
            <input
              type="text"
              placeholder="Email"
              className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 w-2/3"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 w-2/3"
            />
            <button className="bg-white text-black py-3 rounded hover:bg-black hover:text-white transition duration-200 w-2/3">
              Sign in
            </button>
            <a href="#" className="mt-2 text-white flex items-center hover:underline">Forgot Password?</a>
          </div>
    
          {/* Ortada Çizgi */}
          <div className="w-0.5 h-40 bg-white mx-auto my-auto"></div> {/* İnce ve kısa çizgi */}
    
          {/* Sağda Kahverengi Alan */}
          <div className="w-1/2 flex flex-col bg-opacity-50 justify-center items-center p-10 text-white space-y-2">
            <h2 className="text-3xl font-bold mb-4">Create Account</h2>
            <p className="mb-2">Creating an account is easy. Just fill in the form and enjoy the benefits of having an account:</p>
            <p className="mb-2">– Save items in your Wishlist</p>
            <p className="mb-2">– Personalised recommendations</p>
            <button className="bg-black text-white py-3 rounded hover:bg-white hover:text-black transition duration-200 w-2/4">
              Create Account
            </button>
          </div>
        </div>
      );
}

export default Signin;
