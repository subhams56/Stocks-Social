import React  from 'react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo-modified.png';
import { Link } from 'react-router-dom';

import Investments from './investments';
import Profile from './Profile';
import { Avatar } from './Avatar';



const Account = () => {
    
  const navigate = useNavigate();
  function handleLogout() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
  
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
  
    fetch("http://localhost:8000/account/logout/", {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          alert("User logged out successfully!");
          navigate("/homepage");
        } else {
          console.log(response);
          alert("Error logging out user.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error logging out user.");
      });
  }
  


 

  return (
    <div className="min-h-screen bg-customColor">
  <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
    <div className="flex items-center space-x-4 ">
    
      <div className='sm:hidden'>
        <img src={Logo} alt="Stocks Social logo" className="h-8 w-auto"/>
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Stocks Social!</h1>
      </div>

      <img src={Logo} alt="Stocks Social logo" className="h-10 w-auto border rounded-full"/>

      <div className='  hidden sm:block'>
     
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Stocks Social!</h1>
      </div>
      

    </div>

    <div className="flex items-center space-x-6">
    
      <button onClick={handleLogout}
        
        className="py-2 px-4 font-semibold rounded-lg bg-red-500 text-white hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  </nav>

  <main className="max-w-4xl mx-auto my-16 p-4">
    <div className="flex items-center justify-between flex-col sm:flex-row">
      <div >
        <h2 className="text-xl text-white font-bold text-center"> Hello Investor   ! </h2>
      <Avatar/>
        
       
        
        <div className='flex flex-wrap'>
          <Profile/>
          
        </div>
           
      </div>
          
    </div>
  </main>

  <footer className="w-full h-16 text-white bg-gray-800 fixed bottom-0">
    <div className="max-w-4xl mx-auto flex items-center justify-between h-full px-4">
      <p className="text-lg">Stocks Social</p>
      <Link to="/homepage" className="w-20 border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-center">
        Home
      </Link>
      <p className="text-gray-400 text-sm">All rights reserved. © 2023</p>
    </div>
  </footer>
</div>
  );
};

export default Account;
