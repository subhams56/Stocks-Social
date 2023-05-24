import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ReviewForm() {
  const [formData, setFormData] = useState({
    id: "",
    rating: "",
    text: "",
    description: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const url = `http://localhost:8000/stocks/${formData.id}/review-create/`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`
      },
      body: JSON.stringify({
        rating: formData.rating,
        text: formData.text,
        description: formData.description
      })
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("Review created successfully!");
      localStorage.setItem("reviewText", formData.text);
      navigate("/showReview");

    }else {
      const errorData = await response;
      alert(data);
    }
  
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // If the field is id or rating, allow only numeric input
    if (name === "id" || name === "rating") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value.replace(/[^0-9]/g, "") // Replace all non-numeric characters with empty string
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  return (<>
  <Navbar/>
  <h1 className="text-center text-4xl py-3 ">Add a Stock Review 📈 </h1>
    <form className="max-w-lg mx-auto my-8" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="id" className="text-sm font-medium text-gray-700 mb-2">Stock ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter the correct Stock ID"
          inputMode="numeric"
          className="border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="rating" className="text-sm font-medium text-gray-700 mb-2">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Enter Your Rating out of 5"
          inputMode="numeric"
          className="border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="text" className="text-sm font-medium text-gray-700 mb-2">Stock Name:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Enter The Name of the Stock"
          className="border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Your Review of the Stock"
          className="border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
      >
        Submit
      </button>
    </form>
    <Footer/>
    </>
  );
}

export default ReviewForm;
