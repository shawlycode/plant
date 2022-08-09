import React from "react";
import { HiMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import "./header.css";
const header = () => {
  return (
    <div>
      <div className="topbar">
        <div className="left">
          <HiMail size={20} />
          <span className="mail">plantgrow@gmail.com</span>
        </div>
        <div className="right">
          <IoCallOutline size={20} />
          <span className="phone">+233 20-123-4567</span>
        </div>
      </div>
      <div className="nav">
        <div className="logo">
          <p>
            Grow<span>plant</span>
          </p>
        </div>
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li className="active">Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
      <div className="circle">
        <div></div>
      </div>
    </div>
  );
};

export default header;
