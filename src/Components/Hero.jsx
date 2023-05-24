import React from 'react';
import backgroundImage from '../Assets/bg3.jpg';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative bg-customColor">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-customColor opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Discover new <span className='text-blue-200'>stocks </span>and <span className='text-blue-200'>connect</span>  with other investors.</h1>
        <p className="font-mono mt-6 text-xl text-blue-200 max-w-3xl ">Join Stocks Social to explore new investment opportunities, track your portfolio, and learn from other investors.</p>
        <Typed className='md:text-3xl sm:text-2xl text-lg font-bold text-white'
          strings={['"Easy"', '"Fast"','"Reliable"', '"Transparent"', '"User Friendly"']}
          typeSpeed={120} backSpeed={140} loop
        />
        <div className='flex'>
          <div className="mt-12">
            <Link to="/signup" href="#" className="bg-indigo-500 hover:bg-indigo-600 py-4 px-8 text-lg font-medium text-white rounded-lg">Get started</Link>
          </div>
          <div className="mt-12 ml-10">
            <Link to="/signin" className="bg-indigo-500 hover:bg-indigo-600 py-4 px-8 text-lg font-medium text-white rounded-lg">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
