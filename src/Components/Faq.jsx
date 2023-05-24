import React from 'react';
import FaqItem from './FaqItem';
import { FaqData } from './FaqData';
import Navbar from './Navbar';
import Footer from './Footer';

const Faq = () => {
  return (<>
  <Navbar/>
    
    <div className="bg-white shadow-md rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:max-w-5xl lg:mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
      <div className="flex flex-col space-y-8">
        {FaqData.map((item, index) => {
          return (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Faq;
