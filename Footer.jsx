// Create footer page

import React from "react";
import { MdEmail } from "react-icons/md"; // Email icon
import { FaFacebook } from "react-icons/fa"; // Facebook icon
import { FaPhoneAlt } from "react-icons/fa"; // Phone icon
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-[30px] mt-[20px] bg-gray-300">
      {/* Contact Us Section */}
      <div className="flex gap-[100px] justify-center items-center">
        <div>
          {/* Contact Us Title */}
          <p className="text-[20px] pt-[20px] font-semibold">Contact Us</p>
          <div className="flex flex-col mt-[10px] gap-1">
            {/* Email Link */}
            <a href="" className="text-green-700 underline flex items-center gap-[10px]">
              <MdEmail />
              Email
            </a>
            {/* Facebook Link */}
            <a href="" className="text-green-700 underline flex items-center gap-[10px]">
              <FaFacebook />
              FaceBook
            </a>
            {/* Phone Number Link */}
            <a href="" className="text-green-700 underline flex items-center gap-[10px]">
              <FaPhoneAlt />
              Phone Number
            </a>
          </div>
        </div>

        {/* Quick links Section */}
        <div>
          <p className="text-[20px] pt-[20px] font-semibold">Quick links</p>
          <div className="flex flex-col mt-[10px] gap-1">
            {/* useful navigation links */}
            <a href="" className="text-green-700 underline">
              Places to Call Home
            </a>
            <a href="" className="text-green-700 underline">
              Real Estate Opportunities
            </a>
            <a href="" className="text-green-700 underline">
              Loan Estimator
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <p className="text-[20px] pt-[20px] font-semibold">Resources</p>
          <div className="flex flex-col mt-[10px] gap-1">
            {/* Links to guides */}
            <a href="" className="text-green-700 underline">
              Property guides
            </a>
            <a href="" className="text-green-700 underline">
              Buyer guides
            </a>
            <a href="" className="text-green-700 underline">
              Seller Guides
            </a>
          </div>
        </div>

        <div>
          <p className="text-[20px] pt-[5px] font-semibold">Join with Us!</p>
          <div className="flex flex-col mt-[10px] gap-1">
            {/* Links to guides */}
            <a href="/signup" className="text-green-700 underline">
              Sign up
            </a>
            <a href="" className="text-green-700 underline">
              Go to Top
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Information */}
      <p className="mt-[40px] text-center">
        &copy; 2024 Estate Agent. D.V.Pasandi Pabasara. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; // Export footer for reuse
