import { useDispatch } from "react-redux";
import { room_list } from "../assets/images/assets";
import ProductList from "../components/ProductList";
import { updateSearch } from "../reduux/searchSlice";
import { useEffect } from "react";

function RentPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearch({ type: "rent" })); // ✅ ضبط الفلترة على "rent"
  }, [dispatch]);

  return (
    <div className="container !mt-[130px] min-h-screen pb-20">
      <h1 className="text-[25px] font-bold flex items-center justify-center tracking-widest">
        Rent Section
      </h1>
      <ProductList products={room_list} />
    </div>
  );
}

export default RentPage;
