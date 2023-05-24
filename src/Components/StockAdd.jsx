import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const StockAdd = () => {
  const [name, setName] = useState("");
  const [boughtFor, setBoughtFor] = useState("");
  const [hold, setHold] = useState(false);
  const [platform, setPlatform] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify({ name, boughtFor, hold, platform }),
    };

    fetch("http://localhost:8000/stocks/shares/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Stock added successfully:", data);
        alert("Stock added successfully!");
      })
      .catch((error) => {
        console.error("Error adding stock:", error);
        alert("Error adding stock: " + error);
      });
  };

  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 rounded-lg shadow-lg bg-white">
  <h2 className="text-xl font-bold mb-4">Add Stock</h2>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
      Name
    </label>
    <input
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter stock name"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="boughtFor">
      Bought For
    </label>
    <input
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="boughtFor"
      type="number"
      value={boughtFor}
      onChange={(e) => setBoughtFor(e.target.value)}
      placeholder="Enter buying price"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="hold">
      Hold
    </label>
    <div className="flex items-center">
      <input
        className="mr-2 leading-tight"
        id="hold"
        type="checkbox"
        checked={hold}
        onChange={(e) => setHold(e.target.checked)}
      />
      <span className="text-sm">Hold this stock</span>
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="platform">
      Platform
    </label>
    <input
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="platform"
      type="text"
      value={platform}
      onChange={(e) => setPlatform(e.target.value)}
      placeholder="Enter platform name"
      required
    />
  </div>
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
    <Link
            to="/account"
            className="mx-3 py-2 px-4 font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Go Back to Account
          </Link>
  </div>
</form>
 <Footer />
</>

  );
};

export default StockAdd;
