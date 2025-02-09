/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList"; // استيراد نفس الكومبوننت

const Favourite = ({ allProducts }) => {
  const favourites = useSelector((state) => state.favourites.favourites); // جلب الـ favourites من Redux

  useEffect(() => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة عند تحميل المكون
  }, []);

  // تصفية المنتجات التي تم وضعها في المفضلة
  const favouriteProducts = allProducts
    ? allProducts.filter((product) => favourites.includes(product._id))
    : [];

  return (
    <div className="!mt-[120px] container min-h-screen pb-20">
      <p className="flex items-center justify-center font-semibold text-[25px]">
        My Favourite Section ❤️
      </p>

      {favouriteProducts.length > 0 ? (
        <ProductList products={favouriteProducts} selectedCategory="All" />
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No favourite products yet!
        </p>
      )}
    </div>
  );
};

export default Favourite;
