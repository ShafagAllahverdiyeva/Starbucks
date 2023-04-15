import React from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import "../../styles/pages/home.scss";

const Featured = () => {
  return (
    <div>
      <Header />
      <div className="section-one">
        <div className="container">
          <p
            style={{
              textAlign: "center",
              fontSize: "50px",
              letterSpacing: "2px",
              fontWeight: "bold",
              color: "#1e3932",
              marginBottom: "40px",
            }}
          >
            Cue spring mood
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "658px", backgroundColor: "#ffc519" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83122.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#ffc519",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}
              >
                <h2 style={{ margin: "25px 0", color: "#1e3932" }}>
                  New Cinnamon Caramel Cream Nitro Cold Brew
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  Velvety Nitro Cold Brew, now with cinnamon and caramel notes
                  and silky cold foam.
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
            <div style={{ width: "658px", backgroundColor: "#ffc519" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83123.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#ffc519",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}>
                <h2 style={{ margin: "25px 0", color: "#1e3932" }}>
                  Vanilla Sweet Cream Nitro Cold Brew
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  Vanilla-flavored sweet cream adds the finishing touch to our
                  Nitro Cold Brew.
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "658px", backgroundColor: "#a0c292" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83126.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#a0c292",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}
              >
                <h2 style={{ marginBottom: "25px", color: "#1e3932" }}>
                  Paradise Drink Starbucks Refreshers® Beverage
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  A tropical blend of real pineapple pieces, passionfruit
                  accents and coconutmilk.
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
            <div style={{ width: "658px", backgroundColor: "#a0c292" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83127.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#a0c292",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}
              >
                <h2 style={{ marginBottom: "25px", color: "#1e3932" }}>
                  Pink Drink Starbucks Refreshers® Beverage
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  Flavors of passionfruit and açaí, real strawberry pieces and
                  coconutmilk come together
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "658px", backgroundColor: "#f6bfd9" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83128.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#f6bfd9",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}
              >
                <h2 style={{ margin: "25px 0", color: "#1e3932" }}>
                  Brown Sugar Oatmilk Shaken Espresso
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  Starbucks® Blonde espresso is hand-shaken with brown sugar and
                  cinnamon notes and then finished with oatmilk.
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
            <div style={{ width: "658px", backgroundColor: "#f6bfd9" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83129.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#f6bfd9",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}
              >
                <h2 style={{ margin: "25px 0", color: "#1e3932" }}>
                  Toasted Vanilla Oatmilk Shaken Espresso
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  A hand-shaken combination of Starbucks® Blonde espresso and
                  caramelized vanilla accents, topped with a splash of oatmilk.
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div style={{ width: "658px", backgroundColor: "#d4e9e2" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83132.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#d4e9e2",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}
              >
                <h2 style={{ margin: "25px 0", color: "#1e3932" }}>
                  Bacon, Gouda & Egg Sandwich
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  Applewood-smoked bacon, a Parmesan frittata and aged Gouda on
                  an artisan roll.
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
            <div style={{ width: "658px", backgroundColor: "#d4e9e2" }}>
              <img
                style={{ width: "658px" }}
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83133.jpg"
                alt=""
              />
              <div
                style={{
                  backgroundColor: "#d4e9e2",
                  textAlign: "center",
                  padding: "0 50px 32px 50px",
                }}
              >
                <h2 style={{ margin: "25px 0", color: "#1e3932" }}>
                  Bacon, Sausage & Egg Wrap
                </h2>
                <p
                  style={{
                    marginBottom: "25px",
                    color: "#1e3932",
                    fontSize: "19px",
                  }}
                >
                  Double-smoked bacon, pork sausage, cage-free eggs, Cheddar and
                  potatoes in a flour tortilla.
                </p>
                <button
                  className="order-now"
                  style={{
                    background: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "30px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "90px",
                    height: "40px",
                  }}
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Featured;