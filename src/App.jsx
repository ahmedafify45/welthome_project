import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Favourite from "./pages/Favourite";
import { room_list } from "./assets/images/assets"; // ✅ استيراد المنتجات من الملف
import RentPage from "./pages/RentPage";
import SellPage from "./pages/SellPage";
import BuyPage from "./pages/BuyPage";
import Footer from "./components/Footer";

import RecuriterLogin from "./components/RecuiterLogin";
import { useSelector } from "react-redux";
import AppDownload from "./pages/AppDownload";

function App() {
  const showRecruiterLogin = useSelector(
    (state) => state.auth.showRecruiterLogin
  );
  return (
    <div>
      {showRecruiterLogin && <RecuriterLogin />}
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="favourite"
            element={<Favourite allProducts={room_list} />}
          />
          <Route path="rent" element={<RentPage />} />
          <Route path="sell" element={<SellPage />} />
          <Route path="buy" element={<BuyPage />} />
          <Route path="app" element={<AppDownload />} />
          <Route path="login" element={<RecuriterLogin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
