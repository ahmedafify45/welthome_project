import { useDispatch } from "react-redux";
import { room_list } from "../assets/images/assets";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { updateSearch } from "../reduux/searchSlice";

function BuyPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSearch({ type: "buy" }));
  }, [dispatch]);
  return (
    <div className="container !mt-[130px] min-h-screen pb-20">
      <h1 className="text-[30px] font-bold flex items-center justify-center tracking-widest">
        Buy Section
      </h1>
      <ProductList products={room_list} />
    </div>
  );
}

export default BuyPage;
