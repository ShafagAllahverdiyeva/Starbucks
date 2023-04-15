import React from "react";
import "../../styles/pages/menu/hotcoffes.scss";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "../../styles/pages/menu/previous.scss";

const Previous = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="all-products">
          <ul>
            <Link to="/menu">
              <li className="first_l" style={{ color: "black" }}>
                All products
              </li>
            </Link>
            <Link to="/menu/featured">
              <li className="sec_li" style={{ color: "black" }}>
                Featured
              </li>
            </Link>
            <li className="third_pre_li"> Previous Orders</li>
            <Link to="/menu/favorite">
              <li style={{ color: "black" }} className="fourth_li">
                Favorite Products
              </li>
            </Link>
          </ul>
        </div>
        <div style={{ margin: "50px 0 0 150px" }}>
          <h2>Previous Orders</h2>
          <img
            src="https://www.starbucks.com/weblx/images/moon-phases.gif"
            alt=""
          />
          <h2 style={{ width: "250px", fontWeight: "200" }}>
            When history repeats itself
          </h2>
          <p
            style={{
              fontSize: "20px",
              width: "330px",
              marginTop: "20px",
              color: "rgba(0,0,0,.58)",
            }}
          >
            Previous orders will appear here to quickly order again.
          </p>
          <div
            className="header-right"
            style={{
              marginTop: "30px",
            }}
          >
            <ul>
              <li>
                
                <Link to="/sign-in">
                  <Button className="sign-in" text="Sign-in" />
                </Link>
              </li>
              <li>
                <Button className="join-now" text="Join now" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_of_page">
          <button>Choose a store</button>
          <button className="order">0</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Previous;