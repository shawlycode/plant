import React from "react";
import aloe from "../../assets/aloe.jpeg";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="leftContent">
        <p className="sub-title">100% real quality</p>
        <h1>
          Grow<span>plant</span> Today
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odio,
          rerum nulla placeat neque, temporibus sint similique provident porro
          dolor, ab qui ducimus debitis sapiente! Voluptatem ratione nemo sequi
          impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          odio, rerum nulla placeat neque, temporibus sint similique provident
          porro dolor, ab qui ducimus debitis sapiente! Voluptatem ratione nemo
          sequi impedit..
        </p>
        <div className="buttons">
          <button className="btn-buy">Buy Now</button>
          <span>
            <button className="btn-us">Contact Us</button>
          </span>
        </div>
      </div>
      <div className="rightContent">
        <img src={aloe} alt="" />
      </div>
    </div>
  );
};

export default Main;
