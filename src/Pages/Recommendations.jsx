import { useState } from 'react';
import { Link } from 'react-router-dom';
import vectorimg from "../assets/vectorimg.jpg";
import Navbar from "../Components/Navbar";


function Recommendations() {
  const [symbol, setSymbol] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('companySymbol', symbol);
    setSubmitted(true);
  }

  return (<>
  <Navbar/>
    <div className="bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-12">
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Company Details
          </h1>
          <p className="text-gray-500 mt-1">
            Enter company details below to get recommendations and quotations of the stocks.
          </p>
        </div>
        <div className="hidden lg:block">
          <img src={vectorimg} alt="" className=" m-4 w-60 h-60 rounded-full border border-black" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <label className="block font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g. TESLA"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block font-medium text-gray-700 mb-2">
              Company Symbol
            </label>
            <input
              type="text"
              placeholder="e.g. TSLA"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Company Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-gray-500 mb-2">Company Name:</p>
              <p className="font-medium">{name}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-gray-500 mb-2">Company Symbol:</p>
              <p className="font-medium">{symbol}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <p className="text-gray-500 mr-2">Are you sure you want to get recommendations for this?</p>
            <Link
              to="/quotations"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              Get Quotations
            </Link>
          </div>
        </div>
      )}
    </div>
  </div>
  </>
  
  );
}

export default Recommendations;
