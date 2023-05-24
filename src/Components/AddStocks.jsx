import { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function AddStocks() {
  const [name, setName] = useState('');
  const [boughtFor, setBoughtFor] = useState(0);
  const [hold, setHold] = useState(false);
  const [platform, setPlatform] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `token` + localStorage.getItem('token') };
    const body = JSON.stringify({ name, boughtFor, hold, platform});
    try {
      const response = await fetch('http://localhost:8000/stocks/shares/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body,
      });
      if (!response.ok) {
        throw new Error('Failed to add stock');
      }
      alert('Stock added successfully');
      console.log(response.json());
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (<>
  <Navbar/>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
  <div className="flex flex-wrap mb-6">
    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 mr-4">
      Name:
    </label>
    <input
      type="text"
      id="name"
      placeholder='eg. TESLA'
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="flex flex-wrap mb-6">
    <label htmlFor="boughtFor"  className="block text-gray-700 text-sm font-bold mb-2 mr-4">
      Bought For:
    </label>
    <input
      type="number"
      id="boughtFor"
      value={boughtFor}
     
      onChange={(e) => setBoughtFor(Number(e.target.value))}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="flex flex-wrap mb-6">
    <label htmlFor="hold" className="block text-gray-700 text-sm font-bold mb-2 mr-4">
      Hold:
    </label>
    <input
      type="checkbox"
      id="hold"
      checked={hold}
      onChange={(e) => setHold(e.target.checked)}
      className="mt-2 mr-2 leading-tight"
    />
    <label htmlFor="hold" className="block text-gray-700 text-sm font-bold mb-2">
      Yes, I want to hold
    </label>
  </div>
  <div className="flex flex-wrap mb-6">
    <label htmlFor="platform"  className="block text-gray-700 text-sm font-bold mb-2 mr-4">
      Platform:
    </label>
    <input
      type="text"
      id="platform"
      placeholder='eg. www.tesla.co.in'
      value={platform}
      onChange={(e) => setPlatform(e.target.value)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="flex flex-wrap mb-6">
    <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2 mr-4">
      Rating:
    </label>
    <input
      type="number"
      id="rating"
      value={rating}
      onChange={(e) => setRating(Number(e.target.value))}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="flex justify-center">
    <button
      type="submit"
      className="py-2 px-4 m-4 font-semibold  rounded-lg bg-gray-800 text-white hover:bg-gray-700"
    >
      Add Stock
    </button>
    <Link
            to="/account"
            className="py-2 px-4 m-4 font-semibold  rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Go to Account
          </Link>
    
  </div>
  
</form>

</>

  );
}

export default AddStocks;