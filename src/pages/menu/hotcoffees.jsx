import React from "react";
import "../../styles/pages/menu/hotcoffes.scss";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import {
  changeColor,
  fminus,
  changetallColor,
  clicktop,
  minustop,
  clicktea,
  minustea,
  orders,
  changegrandeColor,
  changeventiColor,
  click,
} from "./script";

const Hotcoffees = () => {
  return (
    <div>
      <Header />
      <div className="all-products" style={{ height: "50px" }}>
        <p style={{ marginLeft: "100px", color: "rgba(0, 0, 0, 0.58)" }}>
          <Link to="/menu" style={{ color: "rgba(0, 0, 0, 0.58)" }}>
            Menu
          </Link>{" "}
          / Hot Coffees /{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>
            Caffè Americano
          </span>
        </p>
      </div>
      <div className="coffee_page">
        <div className="americano">
          <img
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
            alt=""
          />
          <div>
            <h1>Caffè Americano</h1>
            <span className="calories">5 </span>
            <span>calories</span>
          </div>
        </div>
        <div className="choose">
          <div>
            <h2>Size options</h2>
            <hr
              style={{
                width: "420px",
                height: "4px",
                backgroundColor: "#d4e9e2",
                border: "none ",
              }}
            ></hr>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20px",
                marginLeft: "20px",
                width: "350px",
              }}
            >
              <div>
                <input
                  className="shortphoto"
                  type="image"
                  src="https://www.starbucks.com/app-assets/06ea008c02e29bbc7f8f9885c1f400f2.svg"
                  alt=""
                  onClick={() => {
                    changeColor();
                  }}
                  style={{
                    border: "2px solid #006241",
                    backgroundColor: "#d4e9e2",
                    borderRadius: "30px",
                  }}
                />
                <h4>Short</h4>
                <p>8 fl oz</p>
              </div>
              <div>
                <input
                  className="tallphoto"
                  type="image"
                  src="https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg"
                  alt=""
                  onClick={() => {
                    changetallColor();
                  }}
                  style={{ border: "none", backgroundColor: "white" }}
                />
                <h4>Tall</h4>
                <p>12 fl oz</p>
              </div>
              <div>
                <input
                  className="grandephoto"
                  type="image"
                  src="https://www.starbucks.com/app-assets/f1c3892d2d28cade899a1b6bd4ca5684.svg"
                  alt=""
                  onClick={() => {
                    changegrandeColor();
                  }}
                  style={{ border: "none", backgroundColor: "white" }}
                />
                <h4>Grande</h4>
                <p>16 fl oz</p>
              </div>
              <div>
                <input
                  className="ventiphoto"
                  type="image"
                  src="https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f09a631489b294.svg"
                  alt=""
                  onClick={() => {
                    changeventiColor();
                  }}
                  style={{ border: "none", backgroundColor: "white" }}
                />
                <h4>Venti</h4>
                <p>20 fl oz</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Customizations</h2>
            <hr
              style={{
                width: "420px",
                height: "4px",
                backgroundColor: "#d4e9e2",
                border: "none ",
              }}
            ></hr>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.58)",
                borderRadius: "10px",
                margin: "30px 0",
              }}
            >
              <h2 style={{ color: "rgba(0, 0, 0, 0.58)", fontSize: "20px" }}>
                Flavors
              </h2>
              <div style={{ display: "flex", margin: "20px 20px 0 0" }}>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.58)",
                borderRadius: "10px",
                margin: "30px 0",
              }}
            >
              <h2 style={{ color: "rgba(0, 0, 0, 0.58)", fontSize: "20px" }}>
                Toppings
              </h2>
              <div style={{ display: "flex", margin: "20px 20px 0 0" }}>
                <button
                  className="top_btnplus"
                  onClick={() => {
                    clicktop();
                  }}
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
                <p className="top_p" style={{ marginTop: "3px" }}>
                  0
                </p>
                <button
                  className="top_btnminus"
                  onClick={() => {
                    minustop();
                  }}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.58)",
                borderRadius: "10px",
                margin: "30px 0",
              }}
            >
              <h2 style={{ color: "rgba(0, 0, 0, 0.58)", fontSize: "20px" }}>
                Tea
              </h2>
              <div style={{ display: "flex", margin: "20px 20px 0 0" }}>
                <button
                  className="tea_btnplus"
                  onClick={() => {
                    clicktea();
                  }}
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
                <p className="tea_p" style={{ marginTop: "3px" }}>
                  0
                </p>
                <button
                  className="tea_btnminus"
                  onClick={() => {
                    minustea();
                  }}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.58)",
                borderRadius: "10px",
                margin: "30px 0",
              }}
            >
              <h2 style={{ color: "rgba(0, 0, 0, 0.58)", fontSize: "20px" }}>
                Sweeteners
              </h2>
              <div style={{ display: "flex", margin: "20px 20px 0 0" }}>
                <button
                  className="sweet_btnplus"
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
                <p className="sweet_p" style={{ marginTop: "3px" }}>
                  0
                </p>
                <button
                  className="sweet_btnminus"
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.58)",
                borderRadius: "10px",
                margin: "30px 0",
              }}
            >
              <h2 style={{ color: "rgba(0, 0, 0, 0.58)", fontSize: "20px" }}>
                Water
              </h2>
              <div style={{ display: "flex", margin: "20px 20px 0 0" }}>
                <button
                  className="water_btnplus"
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
                <p className="water_p" style={{ marginTop: "3px" }}>
                  0
                </p>
                <button
                  className="water_btnminus"
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.58)",
                borderRadius: "10px",
                margin: "30px 0",
              }}
            >
              <h2 style={{ color: "rgba(0, 0, 0, 0.58)", fontSize: "20px" }}>
                4 Shots
                <br />
                Signature Espresso Roast
              </h2>
              <div style={{ display: "flex", margin: "20px 20px 0 0" }}>
                <button
                  className="four_btnplus"
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
                <p className="four_p" style={{ marginTop: "3px" }}>
                  0
                </p>
                <button
                  className="four_btnminus"
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.58)",
                borderRadius: "10px",
                margin: "30px 0",
              }}
            >
              <h2 style={{ color: "rgba(0, 0, 0, 0.58)", fontSize: "20px" }}>
                Cup options
              </h2>
              <div style={{ display: "flex", margin: "20px 20px 0 0" }}>
                <button
                  className="cup_btnplus"
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
                <p className="cup_p" style={{ marginTop: "3px" }}>
                  0
                </p>
                <button
                  className="cup_btnminus"
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
                Espresso shots topped with hot water create a light layer of
                crema culminating in this wonderfully rich cup with depth and
                nuance.
              </p>
              <div className="sugar">
                <p
                  className="calories"
                  style={{ fontSize: "15px", marginRight: "5px" }}
                >
                  15{" "}
                </p>
                <p style={{ fontSize: "15px" }}> calories, 0g sugar, 0g fat</p>
              </div>
              <div className="full">
                {" "}
                <button>Full nutrition & ingredients list</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="add_order"
          onClick={() => {
            orders();
          }}
        >
          Add to Order
        </button>
      </div>
      <div className="footer_of_page">
        <button>Choose a store</button>
        <button className="order">0</button>
      </div>

      <Footer />
    </div>
  );
};

export default Hotcoffees;