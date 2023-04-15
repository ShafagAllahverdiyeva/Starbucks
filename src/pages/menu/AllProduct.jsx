import React from "react";
import "../../styles/pages/menu/allproduct.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const AllProduct = () => {
  return (
    <div>
      <div className="all-productss">
        <div className="container">
          <div className="all-product-left">
            <div className="drinks">
              <h3>Drinks</h3>
              <ul>
                <li>
                  
                  <Link
                    to="./hotcoffees"
                    style={{ color: "rgba(0, 0, 0, 0.58)" }}
                  >
                    Hot Coffees
                  </Link>
                </li>

                <li>Hot Teas</li>
                <li>Hot Drinks</li>
                <li>Frappuccino® Blended Beverages</li>
                <li>Cold Coffees</li>
                <li>Iced Teas</li>
                <li>Cold Drinks</li>
              </ul>
            </div>
            <div className="food">
              <h3>Food</h3>
              <ul>
                <li>
                  
                  <Link to="./food" style={{ color: "rgba(0, 0, 0, 0.58)" }}>
                    Hot Breakfast
                  </Link>
                </li>
                <li>Bakery</li>
                <li>Lunch</li>
                <li>Snacks & Sweets</li>
                <li>Oatmeal & Yogurt</li>
              </ul>
            </div>
            <div className="home_coffee">
              <h3>At Home Coffee</h3>
              <ul>
                <li>Whole Bean</li>
                <li>VIA® Instant</li>
              </ul>
            </div>
            <div className="merch">
              <h3>Merchandise</h3>
              <ul>
                <li>Cold Cups</li>
                <li>Tumblers</li>
                <li>Mugs</li>
                <li>Water Bottles</li>
                <li>Other</li>
              </ul>
            </div>
            <div className="gift">
              <h3>Gift Cards</h3>
              <ul>
                <li>Happy Birthday</li>
                <li>Thank You</li>
                <li>Traditional</li>
              </ul>
            </div>
          </div>

          <div className="all-product-rihgt">
            <h1>Menu</h1>
            <div className="all-product-category">
              <h2>Drinks</h2>
              <hr aria-hidden="true" class="sb-rule sb-rule--thin pb5"></hr>
              <div className="hot-cofee">
                <ul>
                  <li>
                    <Link to="./hotcoffees" className="links">
                      
                      <img
                        src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"
                        alt=""
                      />
                      <span style={{ color: "black" }}>Hot Coffees</span>
                    </Link>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288"
                      alt=""
                    />
                    <span>Hot Teas</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span>Hot Drinks</span>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/06cfd44aac9f4b488495e0f7da404825.jpg?impolicy=1by1_tight_288"
                      alt=""
                      style={{ marginLeft: "15px" }}
                    />
                    <span>Frappuccino® Blended Beverages</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/21f012c25a714d81b211a19094fb90cc.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span>Cold Coffees</span>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/0f3e19ad457f4b9f9fb5afde29d0c7cf.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span> Iced Teas </span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/1fbfdef2d1814c86ae271460a5b85f93.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span>Cold Drinks</span>
                  </li>
                </ul>
              </div>
              <h2>Food</h2>
              <hr aria-hidden="true" class="sb-rule sb-rule--thin pb5"></hr>
              <div className="hot-cofee">
                <ul>
                  <li>
                    <Link to={"./food"}>
                      <img
                        src="https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg?impolicy=1by1_wide_1242"
                        alt=""
                      />
                      <span style={{ color: "black" }}>Hot BreakFast</span>
                    </Link>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span>Bakery</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span> Lunch</span>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/374230e32c03466e9f1696551d843f3b.jpg?impolicy=1by1_wide_1242"
                      alt=""
                      style={{ marginLeft: "70px" }}
                    />
                    <span>Snacks & Sweets</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/3e10e6d4c9cb412b9f37d421c0376465.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span>Oatmeal & Yogurt</span>
                  </li>
                </ul>
              </div>
              <h2>At Home Coffee</h2>
              <hr aria-hidden="true" class="sb-rule sb-rule--thin pb5"></hr>
              <div className="hot-cofee">
                <ul>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/69b578aa962c40f98d88d9d521c5410c.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span> Whole Bean</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/27d30b52d95948fc81141af6bb91a108.jpg?impolicy=1by1_wide_1242"
                      alt=""
                    />
                    <span>VIA® Instant</span>
                  </li>
                </ul>
              </div>
              <h2>Merchandise</h2>
              <hr aria-hidden="true" class="sb-rule sb-rule--thin pb5"></hr>
              <div className="hot-cofee">
                <ul>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/96d448445d914c819ccc47f0dc36af71.jpg?impolicy=1by1_tight_288"
                      alt=""
                    />
                    <span>Cold Cups</span>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/66bd9f5281e0459985882a1de2f7a195.jpg?impolicy=1by1_tight_288"
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                    <span>Tumblers</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/240ba4012d1447779f329e349720f374.jpg?impolicy=1by1_tight_288"
                      alt=""
                    />
                    <span>Mugs</span>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/cbae1e06960c4bf2be4669ff9d1c68a9.jpg?impolicy=1by1_tight_288"
                      alt=""
                      style={{ marginLeft: "65px" }}
                    />
                    <span>Water Bottles</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/5814e3b108464af6bf3352e87576206b.jpg?impolicy=1by1_tight_288"
                      alt=""
                    />
                    <span>Other</span>
                  </li>
                </ul>
              </div>
              <h2>Gift Card</h2>
              <hr aria-hidden="true" class="sb-rule sb-rule--thin pb5"></hr>
              <div className="hot-cofee">
                <ul>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/834dfe8a5d1e4980b87636f4ff62f83a.jpg?impolicy=1by1_tight_288"
                      alt=""
                    />
                    <span>Happy Birthday</span>
                  </li>
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/21ee04ff3a5340979275e3b9ffd2824d.jpg?impolicy=1by1_tight_288"
                      alt=""
                    />
                    <span>Thank You</span>
                  </li>
                  <br />
                  <li>
                    <img
                      src="https://globalassets.starbucks.com/assets/9e2617bd4b0744cb940c67b3fad9ca35.jpg?impolicy=1by1_tight_288"
                      alt=""
                    />
                    <span>Traditional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProduct;