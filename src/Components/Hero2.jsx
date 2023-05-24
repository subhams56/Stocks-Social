import React from "react";
import vector from "../assets/vector.jpg";
import vector2 from "../assets/vector2.jpg";
import { Link } from "react-router-dom";

function Hero2() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 flex flex-col md:flex-row md:items-center">
          <div className="md:w-2/3 md:pr-12">
            <h2 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
              Invest smarter with our <span className='text-blue-300'>Machine Learning-powered</span> stock predictor
            </h2>
            <p className="mt-6 text-xl font-mono text-gray-900 max-w-3xl">
              Our platform provides an innovative way for stock market investors
              to manage and track their investments while socializing with other
              investors. But what sets us apart is our powerful stock predictor,
              based on advanced Machine Learning algorithms, that provides
              accurate insights into future stock prices, helping you make
              informed investment decisions.
            </p>
            
            <div className="mt-12">
            <Link to="/predictor" href="#" className="bg-indigo-500 hover:bg-indigo-600 py-4 px-8 text-lg font-medium text-white rounded-lg">Try Now</Link>
          </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <img className="h-64 w-64 md:h-96 md:w-96" src={vector2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
