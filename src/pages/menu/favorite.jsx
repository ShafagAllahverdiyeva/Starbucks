import React from "react";
import "../../styles/pages/menu/hotcoffes.scss";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "../../styles/pages/menu/previous.scss";

const Favorite = () => {
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
            <Link to="/menu/previous">
              <li style={{ color: "black" }} className="third_li">
                
                Previous Orders
              </li>
            </Link>
            <li className="fourth_pre_li">Favorite Products</li>
          </ul>
        </div>
        <div style={{ margin: "50px 0 0 150px" }}>
          <h2>Favorite Products</h2>
          <img
            style={{ width: "200px", margin: "20px 0" }}
            src="https://www.starbucks.com/weblx/images/fav-tapes.png"
            alt=""
          />
          <h2 style={{ width: "250px", fontWeight: "200" }}>
            Save your favorite mixes
          </h2>
          <p
            style={{
              fontSize: "20px",
              width: "330px",
              marginTop: "20px",
              color: "rgba(0,0,0,.58)",
            }}
          >
            Use the heart to save customizations. Your favorites will appear
            here to order again.
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

export default Favorite;