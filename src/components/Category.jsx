/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { category_list } from "../assets/images/assets";

const Category = ({ setCategory, selectedCategory, onCategoryClick }) => {
  // استخدام useMemo لتخزين قائمة الفئات فقط عند التحميل الأول
  const categories = useMemo(() => category_list, []);

  // تخزين صور الفئات باستخدام useMemo
  const categoryImages = useMemo(() => {
    return categories.map((item) => ({
      id: item.category_name,
      image: item.category_image,
    }));
  }, [categories]);

  return (
    <section className="!pt-5">
      <div className="container">
        <h2 className="!font-semibold !text-[30px] !pb-5 flex items-center justify-center !my-10">
          Best home in your city
        </h2>

        <div className="!flex !items-center !justify-between text-center !my-5 !mx-0 !gap-8 !overflow-x-scroll scrollbar">
          {categories.map((item, index) => {
            const isActive = selectedCategory === item.category_name;

            const categoryImage = categoryImages.find(
              (image) => image.id === item.category_name
            );

            return (
              <div
                key={index}
                onClick={() => {
                  const newCategory =
                    selectedCategory === item.category_name
                      ? "All"
                      : item.category_name;
                  setCategory(newCategory);
                  onCategoryClick(newCategory);
                }}
                className="!cursor-pointer !text-center !my-5"
              >
                <img
                  className={`!w-[7.5vw] !min-w-[80px] !rounded-[50%] !transition-all !duration-100 !ease-in-out ${
                    isActive
                      ? "!border-[4px] !border-solid !border-[#1755b2] !p-1 !shadow-lg"
                      : ""
                  }`}
                  src={categoryImage?.image}
                  alt={item.category_name}
                />
                <p
                  className={`!text-gray-500 !mt-3 !cursor-pointer ${
                    isActive ? "!font-bold !text-[#1755b2]" : ""
                  }`}
                >
                  {item.category_name}
                </p>
              </div>
            );
          })}
        </div>

        <hr className="!my-2 !h-[2px] !bg-gray-300 !border-none" />
      </div>
    </section>
  );
};

export default Category;
