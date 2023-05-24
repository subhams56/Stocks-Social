import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-gray-200">
      <div className="flex justify-between items-center py-4 cursor-pointer" onClick={toggleAccordion}>
        <h3 className="text-lg font-medium text-gray-700">{question}</h3>
        <svg className={`transform duration-200 ${isOpen ? 'rotate-180' : ''} h-5 w-5`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
      </div>
      {isOpen && (
        <div className="py-2">
          <p className="text-base text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
