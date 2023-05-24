import React from 'react';
import Subham from "../assets/subhamimg.png";
import Dewangan from "../assets/dewanganimg.png";
import Utkarsh from "../assets/utkarshimg.png";
import Logo from "../assets/logo.jpg";
import Footer from './Footer';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';




const AboutUs = () => {
  return (<>
  <Navbar/>
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-4xl font-bold mb-8">About Us</h1>
      <div className="flex items-center justify-center flex-shrink-0 text-white mb-4">
        <img className="h-16 w-16 rounded-full mx-2" src={Logo} alt="Logo" />
        <span className="font-montserrat font-semibold text-3xl tracking-tight">Stocks Social.</span>
      </div>
      <p className="text-gray-300 max-w-prose mx-auto text-center mb-8">
        We are a team of three developers passionate about stocks and investing. Our goal is to provide a unique social media platform for stock market investors, allowing them to connect with each other and share their investment experiences.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img  src={Subham} alt="Subham Saha" className="rounded-full m-2 h-[80px] w-[80px] border-2 border-white object-cover object-center" />
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-2">Subham Saha</h2>
            <p className="text-gray-300 text-sm mb-2">subhams56.ss@gmail.com</p>
            <a href="https://github.com/subhams56" className="text-green-500 text-sm hover:text-green-400">GitHub</a>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img  src={Utkarsh} alt="Utkarsh Pandey" className="rounded-full m-2 h-[80px] w-[80px] border-2 border-white object-cover object-center" />
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-2">Utkarsh Pandey</h2>
            <p className="text-gray-300 text-sm mb-2">utkarsh@example.com</p>
            <a href="https://github.com/utkarsh0702" className="text-green-500 text-sm hover:text-green-400">GitHub</a>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img  src={Dewangan} alt="Dewangan Roy" className="rounded-full m-2 h-[80px] w-[80px] border-2 border-white object-cover object-center" />
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-2">Dewangan Roy</h2>
            <p className="text-gray-300 text-sm mb-2">dewangan@example.com</p>
            <a href="https://github.com/dewangan" className="text-green-500 text-sm hover:text-green-400">GitHub</a>
          </div>
        </div>
      </div>
      
      
    </div>
    <Footer/>
    </>
  );
  
};


export default AboutUs;
