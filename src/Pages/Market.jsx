import { useState } from 'react';
import { Link } from 'react-router-dom';
import marketimg from "../assets/marketimg.jpg";
import { Avatar2 } from '../Components/Avatar2';
import Navbar from "../Components/Navbar";



function Market() {
  const [symbol, setSymbol] = useState('');
  const [name, setName] = useState('');
  const [companyInfo, setCompanyInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=4CWJHIYKYIHCBNAS`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        setCompanyInfo(data);
        setError(null);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error occurred while fetching the data. Please try again later.');
        setCompanyInfo(null);
      });
  }

  return (<>
  <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold text-gray-900">
            📈 Market Hub 🆙
            </h1>
            <p className="text-gray-500 m-2 pb-2">
            Get your stock Information & Company details here!
            </p>
            
            <Avatar2/>

            
          </div>
          <div className="hidden lg:block">
            <img src={marketimg} alt="" className="w-60 h-60 rounded-full border border-black" />
          </div>
        </div>
        <h2 className='my-3'> Type the Name and the Symbol of the Company who's stock information you want to see and click submit.</h2>
        <p className='text-sm text-gray-500'> Dont know Company Name & Symbol ? <span className=" underline"><a href="https://stockanalysis.com/stocks/" target="_blank">Click Here!</a>
</span> </p>
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
        {error && <p className="text-red-500 mb-8">{error}</p>}
        {companyInfo && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500 mb-2">Symbol:</p>
                <p className="font-medium">{companyInfo.Symbol}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500 mb-2">AssetType:</p>
                <p className="font-medium">{companyInfo.AssetType}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500 mb-2">Name:</p>
                <p className="font-medium">{companyInfo.Name}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500 mb-2">Description:</p>
                <p className="font-medium">{companyInfo.Description}</p>
</div>
<div className="bg-white shadow rounded-lg p-4">
<p className="text-gray-500 mb-2">Exchange:</p>
<p className="font-medium">{companyInfo.Exchange}</p>
</div>
<div className="bg-white shadow rounded-lg p-4">
<p className="text-gray-500 mb-2">Sector:</p>
<p className="font-medium">{companyInfo.Sector}</p>
</div>
<div className="bg-white shadow rounded-lg p-4">
<p className="text-gray-500 mb-2">Country:</p>
<p className="font-medium">{companyInfo.Country}</p>
</div>
<div className="bg-white shadow rounded-lg p-4">
<p className="text-gray-500 mb-2">Currency:</p>
<p className="font-medium">{companyInfo.Currency}</p>
</div>
<div className="bg-white shadow rounded-lg p-4">
<p className="text-gray-500 mb-2">Address:</p>
<p className="font-medium">{companyInfo.Address}</p>
</div>
</div>
</div>
)}
<div className="flex justify-center">
<Link
       to="/recommendations"
       className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
     >
Get Stock Quotations & Market Recommendations
</Link>
</div>
</div>

  </div>
  </>
);
}

export default Market;
