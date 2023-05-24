import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Investments() {
  const [stocks, setStocks] = useState([]);
  const userId = localStorage.getItem('userid');

  useEffect(() => {
    async function fetchStocks() {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8000/stocks/${userId}/list2/`, {
        headers:{
          'Authorization':`token ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      setStocks(data.results);
    }

    fetchStocks();
  }, [userId]);

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <div className=' flex justify-between py-3'>
        <h1 className="text-xl font-bold mb-4">Your Stocks</h1>
        <Link
  to="/deletestock"
  target="_blank"
  rel="noopener noreferrer"
  className="items-center mx-3 py-2 px-4 font-semibold rounded-lg bg-red-500 text-white hover:bg-gray-700"
>
  Delete a Stock
</Link>
        <Link
            to="/account"
            className=" items-center mx-3 py-2 px-4 font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Go Back to Account
          </Link>
          
          </div>
        
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Stock ID</th>
                <th className="px-4 py-2">Platform</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Bought For</th>
                <th className="px-4 py-2">Hold</th>
                <th className="px-4 py-2">User</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.id}>
                  <td className="border px-4 py-2">{stock.id}</td>
                  <td className="border px-4 py-2">{stock.platform}</td>
                  <td className="border px-4 py-2">{stock.name}</td>
                  <td className="border px-4 py-2">{stock.boughtFor}</td>
                  <td className="border px-4 py-2">{stock.hold ? 'Yes' : 'No'}</td>
                  <td className="border px-4 py-2">{stock.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      
    </div>
   
    <Footer />
    </>
  );
}

export default Investments;
