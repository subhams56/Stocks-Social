import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-customColor text-white">
      <div className="container mx-auto py-8 flex flex-wrap">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4 ml-6">Stocks Social.</h2>
          <p className="mb-4 ml-6 text-xs font-nunito">
            Stocks Social is a social media platform for investors and traders. Our goal is to help people make better investment decisions and connect with others in the investment community. By joining our platform, you can stay up-to-date with the latest market news and trends, and engage with other investors to share insights and strategies. With your support, we can work towards creating a world where everyone has access to the information and resources they need to make informed investment decisions. Thank you for being a part of the Stocks Social community!
          </p>
          <div className="flex ml-6">
            <a href="#" className="text-3xl mr-4"><FaFacebook /></a>
            <a href="#" className="text-3xl mr-4"><FaTwitter /></a>
            <a href="#" className="text-3xl"><FaInstagram /></a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <h3 className="text-xl font-bold mb-4 ml-6 ">Quick Links</h3>
          <ul className="text-gray-500 ml-6 font-nunito">
            <li className="mb-2 hover:text-white"><Link to="/homepage" >
            Home
          </Link></li>
            <li className="mb-2 hover:text-white"><Link to="/services" >
            Services
          </Link></li>
            <li className="mb-2 hover:text-white"><Link to="/aboutus" >
            About
          </Link></li>
            <li className="mb-2 hover:text-white"><Link to="/pricing" >
            Pricing
          </Link></li>
            <li className="mb-2 hover:text-white"><Link to="/faq" >
            FAQ
          </Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <h3 className="text-xl font-bold mb-4 ml-6">Contact Us</h3>
          <p className="mb-2 ml-6"><span className="text-gray-500 font-nunito">Address:</span> Lorem Ipsum it is as of now</p>
          <p className="mb-2 ml-6"><span className="text-gray-500 font-nunito">Phone:</span> (123) 456-7890</p>
          <p className="mb-2 ml-6"><span className="text-gray-500 font-nunito">Email:</span> stockssocial@company.com</p>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} Stocks Social . All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
