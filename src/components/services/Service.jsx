import React from "react";
import "./service.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney, GiPriceTag } from "react-icons/gi";

const Service = () => {
  return (
    <div className="service">
      <h1>Services</h1>
      <h2>what we offer</h2>
      <div className="services">
        <div className="shipping">
          <div className="icon">
            <TbTruckDelivery size={40} />
          </div>
          <h4>Free Shipping</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            provident quo? Perferendis veniam nulla rerum dolores est
            voluptatibus eaque culpa ex provident iusto fugit, unde doloribus
            vero tenetur expedita atque.
          </p>
        </div>
        <div className="shipping">
          <div className="icon">
            <GiTakeMyMoney size={40} />
          </div>
          <h4>Easy Refund</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            provident quo? Perferendis veniam nulla rerum dolores est
            voluptatibus eaque culpa ex provident iusto fugit, unde doloribus
            vero tenetur expedita atque.
          </p>
        </div>
        <div className="shipping">
          <div className="icon">
            <GiPriceTag size={40} />
          </div>
          <h4>Easy Discount</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            provident quo? Perferendis veniam nulla rerum dolores est
            voluptatibus eaque culpa ex provident iusto fugit, unde doloribus
            vero tenetur expedita atque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
