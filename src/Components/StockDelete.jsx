import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const StockDelete = () => {
  const [name, setName] = useState("");
  const [stockId, setStockId] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/stocks/${stockId}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        alert(`Stock ${name} deleted successfully`);
        navigate("/investments");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="bg-blue-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6">Delete Stock</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold  text-gray-700">
              Name of the Stock:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Stock Name eg. Tata Motors"
              onChange={(e) => setName(e.target.value)}
              className="mt-1 px-3 py-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="stockId" className="block text-lg font-bold  text-gray-700">
              Stock ID:
            </label>
            <input
              type="number"
              id="stockId"
              value={stockId}
              placeholder="Please enter the correct stock ID "
              onChange={(e) => setStockId(e.target.value)}
              className="mt-1 px-3 py-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="block text-lg font-bold  text-gray-700">
              Reason for deleting (Optional):
            </label>
            <input
              type="text"
              id="reason"
              placeholder="Why are you deleting this stock ?"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 px-3 py-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Delete Stock
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default StockDelete;
