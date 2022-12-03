import React from "react";
import "./Style/Second.scss";
import b1 from "./Assets/b1.jpg";
import b2 from "./Assets/b2.jpg";
import b3 from "./Assets/b3.jpg";
import b4 from "./Assets/b4.jpg";
import b5 from "./Assets/b5.jpg";
import b6 from "./Assets/b6.jpg";

const Second = () => {
  return (
    <div>
      <section className="Second-section">
        <div className="second-container">
          <div className="card">
            <img src={b1} alt="" />
            <p>Big Boy Spicy</p>
            <button>Order</button>
          </div>
          <div className="card">
            <img src={b2} alt="" />
            <p>Big Boy Spicy</p>
            <button>Order</button>
          </div>
          <div className="card">
            <img src={b3} alt="" />
            <p>Big Boy Spicy</p>
            <button>Order</button>
          </div>
          <div className="card">
            <img src={b4} alt="" />
            <p>Big Boy Spicy</p>
            <button>Order</button>
          </div>
          <div className="card">
            <img src={b5} alt="" />
            <p>Big Boy Spicy</p>
            <button>Order</button>
          </div>
          <div className="card">
            <img src={b6} alt="" />
            <p>Big Boy Spicy</p>
            <button>Order</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Second;
