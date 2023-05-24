import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PricingCard = ({ title, price, features, buttonText, buttonLink, isPopular }) => {
  return (<>
 
  
    <div className="relative flex flex-col items-center justify-center px-6 py-8 border-2 border-gray-200 rounded-lg shadow-md">
      {isPopular && (
        <div className="absolute top-0 right-0 flex items-center justify-center w-16 h-16 -mt-6 -mr-6 text-sm font-medium text-white bg-green-500 rounded-full">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">{price}</p>
      <ul className="mt-6 mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-start">
            <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <a href={buttonLink} className="px-6 py-2 text-lg font-bold text-white bg-green-500 rounded-full">
        {buttonText}
      </a>
    </div>
    
    </>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: 'Free',
      price: '₹0',
      features: ['Access to basic features', 'Limited stock predictions', 'Limited social features'],
      buttonText: 'Sign up for free',
      buttonLink: '#',
      isPopular: false,
    },
    {
      title: 'Prime',
      price: '₹ 299/mo',
      features: ['Access to all features', 'Advanced stock predictions', 'Unlimited social features'],
      buttonText: 'Get started',
      buttonLink: '#',
      isPopular: true,
    },
    {
      title: 'Deluxe',
      price: '₹599/mo',
      features: ['Access to all features', 'Customizable stock predictions', 'Premium social features'],
      buttonText: 'Get started',
      buttonLink: '#',
      isPopular: false,
    },
  ];

  return (<>
  <Navbar/>
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800">Pricing Plans</h2>
        <p className="mt-4 mb-12 text-lg text-center text-gray-500">Choose the plan that's right for you</p>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Pricing;
