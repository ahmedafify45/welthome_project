import { Link } from "react-router-dom";
import { assets } from "../assets/images/assets";

function Footer() {
  return (
    <footer className="footer !mt-20 !mb-0">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src={assets.logo} width="190" height="28" alt="wealthome" />
            </Link>
            <p className="body-medium footer-text">
              Lorem ipsum dolor sit amet consectetur. Non bibendum sit non
              congue pharetra pulvinar leo. Sed ut amet ipsum.
            </p>
          </div>

          <nav className="footer-nav" aria-labelledby="nav-label-1">
            <p className="title-small footer-list-title" id="nav-label-1">
              Quick Link
            </p>
            <ul className="footer-list">
              <li>
                <Link to="/" className="body-medium footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="body-medium footer-link">
                  Buy
                </Link>
              </li>
              <li>
                <Link to="/" className="body-medium footer-link">
                  Sell
                </Link>
              </li>
              <li>
                <Link to="/" className="body-medium footer-link">
                  Rent
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav" aria-labelledby="nav-label-2">
            <p className="title-small footer-list-title" id="nav-label-2">
              Support
            </p>
            <ul className="footer-list">
              <li>
                <Link to="/" className="body-medium footer-link">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="body-medium footer-link">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" className="body-medium footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="body-medium footer-link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav" aria-labelledby="nav-label-3">
            <p className="title-small footer-list-title" id="nav-label-3">
              Get in touch
            </p>
            <ul className="footer-list">
              <li>
                <Link
                  to="/"
                  className="body-medium footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@wealthome.com
                </Link>
              </li>
              <li>
                <address className="body-medium">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </address>
              </li>
              <li>
                <ul className="social-list">
                  <li>
                    <Link to="/">
                      <img src={assets.face_icon} alt="facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={assets.twitter_icon} alt="twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={assets.insta_icon} alt="instagram" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright body-medium">
            Copyright {new Date().getFullYear()} codewithsadee
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
