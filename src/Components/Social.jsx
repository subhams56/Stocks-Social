import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';
import { MdAccountCircle, MdForum } from 'react-icons/md';

function Social() {
  return (
    <div className="bg-blue-100 p-8">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-nunito  mb-4">Connect with Investors</h2>
        <p className="text-gray-500 text-lg font-roboto font-bold">
          Our social investment platform lets you connect with other investors, see their investments and portfolios, and interact with each other.
        </p>
        <p className="text-gray-500 text-lg">
          Bored with ordinary social investment apps? <span className='font-roboto font-bold text-blue-600'>Try Stocks Social and see the difference!</span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
  <div className="text-center">
    <div className="mb-2">
      <FaFacebook size={40} color="#3b5998" />
    </div>
    <p className="font-bold text-blue-900 ">Facebook</p>
    <p className="text-gray-500">Connect with other investors on Facebook</p>
  </div>
  <div className="text-center">
    <div className="mb-2">
      <FaTwitter size={40} color="#1DA1F2" />
    </div>
    <p className="font-bold  text-blue-900">Twitter</p>
    <p className="text-gray-500">Stay updated with the latest trends and news</p>
  </div>
  <div className="text-center">
    <div className="mb-2">
      <FaLinkedin size={40} color="#0e76a8" />
    </div>
    <p className="font-bold text-blue-900 ">LinkedIn</p>
    <p className="text-gray-500">Network with like-minded investors and professionals</p>
  </div>
  <div className="text-center">
    <div className="mb-2">
      <FaInstagram size={40} color="#C13584" />
    </div>
    <p className="font-bold text-blue-900 ">Instagram</p>
    <p className="text-gray-500">Follow your favorite investors and stay inspired</p>
  </div>
</div>






      <div className="max-w-6xl mx-auto flex justify-between mt-8">
        <div className="text-center">
          <div className="mb-2">
            <RiStockFill size={40} color="#2b5d5c" />
          </div>
          <p className="font-bold">Investment Tracker</p>
          <p className="text-gray-500">Track your investments and see how you're doing</p>
        </div>
        <div className="text-center">
          <div className="mb-2">
            <MdAccountCircle size={40} color="#6e9ecf" />
          </div>
          <p className="font-bold">Profile</p>
          <p className="text-gray-500">Create your profile and connect with other investors</p>
        </div>
        <div className="text-center">
          <div className="mb-2">
            <MdForum size={40} color="#8e6246" />
          </div>
          <p className="font-bold">Forums</p>
          <p className="text-gray-500">Join the Forums and discuss investment strategies and opportunities with other investors.</p>
        </div>
      </div>
    </div>
  );
}

export default Social;

