import { useState, useEffect } from "react";
import { assets } from "../assets/images/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoginModal } from "../reduux/authSlice";

const Navbar = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isHomePage = location.pathname === "/"; // ✅ هل نحن في الصفحة الرئيسية؟

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // ✅ عند التمرير لأكثر من 50px، يتلون
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // ✅ تحديث الحالة عند تحميل الصفحة
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // ✅ في الصفحات الأخرى، يكون دائمًا بلون الخلفية
    }
  }, [isHomePage]);

  return (
    <header
      className={`header ${isScrolled ? "active" : ""}`}
      style={{
        position: "fixed", // ✅ ثابت دائمًا في جميع الصفحات
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: isHomePage
          ? isScrolled
            ? "var(--primary-40)" // 🔹 عند التمرير يصبح بلون الخلفية
            : "transparent" // 🔹 عند البداية يكون شفافًا
          : "var(--primary-40)", // 🔹 في الصفحات الأخرى يكون له لون دائمًا
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="container">
        <Link to="/" className="logo">
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            width="190px"
            height="28px"
            alt="wealthome"
          />
        </Link>

        <nav className={`navbar ${isNavbarActive ? "active" : ""}`}>
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link label-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rent" className="navbar-link label-medium">
                Rent
              </Link>
            </li>
            <li>
              <Link to="/sell" className="navbar-link label-medium">
                Sell
              </Link>
            </li>
            <li>
              <Link to="/buy" className="navbar-link label-medium">
                Buy
              </Link>
            </li>
            <li>
              <Link to="/app" className="navbar-link label-medium">
                Application
              </Link>
            </li>
          </ul>

          <div className="navbar-wrapper">
            <Link to="/favourite" className="btn-link label-medium">
              <span className="material-symbols-rounded" aria-hidden="true">
                favorite
              </span>
            </Link>
            <button
              onClick={() => dispatch(showLoginModal())}
              className="btn btn-fill label-medium"
            >
              Get Started
            </button>
          </div>
        </nav>

        <button
          className="nav-toggle-btn icon-btn"
          onClick={() => setNavbarActive(!isNavbarActive)}
        >
          <span
            className={`material-symbols-rounded open ${
              isNavbarActive ? "hidden" : ""
            }`}
          >
            menu
          </span>
          <span
            className={`material-symbols-rounded close ${
              !isNavbarActive ? "hidden" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
