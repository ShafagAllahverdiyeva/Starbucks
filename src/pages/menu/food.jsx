import React from "react";
import "../../styles/pages/menu/hotcoffes.scss";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { ordersec, fminus, click } from "./script";

const Food = () => {
  return (
    <div>
      <Header />
      <div className="all-products" style={{ height: "50px" }}>
        <p style={{ marginLeft: "100px", color: "rgba(0, 0, 0, 0.58)" }}>
          <Link to="/menu" style={{ color: "rgba(0, 0, 0, 0.58)" }}>
            Menu
          </Link>
          / Hot Breakfast /
          <span style={{ fontWeight: "bold", color: "black" }}>
            Bacon, Sausage & Egg Wrap
          </span>
        </p>
      </div>
      <div className="coffee_page">
        <div className="americano">
          <img
            src="https://globalassets.starbucks.com/assets/27bd607e92354742bc8cf46b23f4ce39.jpg?impolicy=1by1_medium_630"
            alt=""
          />
          <div>
            <h1 style={{ width: "400px" }}>Bacon, Sausage & Egg Wrap</h1>
            <span>640 </span>
            <span>calories</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ margin: "50px 0 0 180px", color: "rgba(0,0,0,.58)" }}>
              Select a store to view availability
            </p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                margin: "30px 150px",
              }}
            >
              <h2
                style={{
                  marginRight: "230px",
                }}
              >
                Customizations
              </h2>
              <hr
                style={{
                  width: "420px",
                  height: "4px",
                  backgroundColor: "#d4e9e2",
                  border: "none ",
                  marginTop: "20px",
                }}
              ></hr>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginRight: "150px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid rgba(0, 0, 0, 0.58)",
                  borderRadius: "10px",
                  width: "420px",
                  height: "50px",
                  margin: "20px 0",
                }}
              >
                <h6
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "100",
                    margin: "10px",
                  }}
                >
                  Add Sriracha
                </h6>
                <div style={{ display: "flex", margin: "10px 15px 0 0" }}>
                  <button
                    onClick={() => {
                      click();
                    }}
                    className="fl_btnplus"
                    style={{
                      color: "#00754a",
                      borderRadius: "10px",
                      width: "23px",
                      height: "25px",
                      border: "1px solid #00754a",
                      background: "white",
                      cursor: "pointer",
                      fontSize: "20px",
                      margin: "0 5px",
                    }}
                  >
                    +
                  </button>
                  <p className="fl_p" style={{ marginTop: "3px" }}>
                    0
                  </p>
                  <button
                    onClick={() => {
                      fminus();
                    }}
                    className="fl_btnminus"
                    style={{
                      color: "#00754a",
                      borderRadius: "10px",
                      width: "23px",
                      height: "25px",
                      border: "1px solid #00754a",
                      background: "white",
                      cursor: "pointer",
                      fontSize: "20px",
                      margin: "0 5px",
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="americano">
          <div style={{ fontSize: "15px", margin: "30px 0 ", height: "200px" }}>
            <div style={{ transform: "translate(-350px)" }}>
              <p
                style={{
                  fontSize: "17px",
                  margin: "30px 0",
                  border: "1px solid #cba258",
                  width: "100px",
                  borderRadius: "6px",
                  color: "#cba258",
                  textAlign: "center",
                }}
              >
                {" "}
                200★ item{" "}
              </p>
              <p style={{ width: "420px", color: "hsla(0,0%,100%,.7)" }}>
                Double-smoked bacon, savory pork sausage and cage-free scrambled
                eggs combined with Cheddar cheese and potatoes--all wrapped in a
                flour tortilla.
                <br />- HIGH-PROTEIN
              </p>
              <div className="sugar">
                <p style={{ fontSize: "15px", marginRight: "5px" }}>640 </p>
                <p style={{ fontSize: "15px" }}> calories, 2g sugar, 33g fat</p>
              </div>
              <div className="full">
               
                <button>Full nutrition & ingredients list</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="add_order"
          onClick={() => {
            ordersec();
          }}
        >
          Add to Order
        </button>
      </div>
      <div className="footer_of_page">
        <button> Choose a store</button>
        <button className="order">0</button>
      </div>

      <Footer />
    </div>
  );
};

export default Food;