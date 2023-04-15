import React from "react";
import "../styles/components/footer.scss";
import Spotify, {
  FacebookIcon,
  Instagram,
  TwitterIcon,
  YoutubeIcon,
} from "../Svg/footericons.jsx/spotify";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="about-as">
              <ul className="first_about">
                <h4>About Us</h4>

                <li> Our Company</li>
                <li>Our Coffee</li>
                <li>Stories and News</li>
                <li>Starbucks Archive</li>
                <li>Investor Relations</li>
                <li>Customer Service</li>
              </ul>
            </div>
            <div className="careers">
              <ul className="first_about">
                <h4 className="career">Careers</h4>

                <li>Culture and Values</li>
                <li>Inclusion,Diversity, and Equity</li>
                <li> College Achievement Plan </li>
                <li> Alummi Community </li>
                <li> U.S.Careers </li>
                <li> International Careers </li>
              </ul>
            </div>
            {/* social impact */}
            <div className="social-impact">
              <ul className="first_about">
                <h4>Social Impact</h4>

                <li> People </li>
                <li> Planet </li>
                <li> Environmental and Social Impact Reporting </li>
              </ul>
            </div>
            {/* For Business Partners */}
            <div className="for-business">
              <ul className="first_about">
                <h4>For Business Partners</h4>
                <li> Landlord Support Center </li>
                <li> Suppliers </li>
                <li> Corporate Gift Card Sales </li>
                <li> Office and Foodservice Coffee </li>
              </ul>
            </div>
            {/* Order and Pickup */}
            <div className="order-and">
              <ul className="first_about">
                <h4 className="pick">Order and Pickup</h4>

                <li> Order on the App </li>
                <li> Order on the Web </li>
                <li> Delivery </li>
                <li> Order and Pickup Options </li>
                <li> Explore and Find Coffee for Home </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <hr aria-hidden="true" class="sb-rule py5"></hr>
          <div className="footer-icon">
            <ul>
              <li>
                <Spotify />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </div>
          <div className="footer-son">
            <ul>
              <li> Responsibility |</li>
              <li> Web Accessibility | </li>
              <li> Privacy Policy | </li>
              <li> Terms of Use | </li>
              <li> Cookie Preferences </li>
            </ul>
            <p
              style={{
                color: "rgba(0,0,0,.58)",
                marginLeft: "120px",
              }}
            >
              © 2023 Starbucks Coffee Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;