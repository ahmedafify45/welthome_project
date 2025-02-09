/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { toggleFavourite } from "../reduux/favouriteSlice";

const ProductList = ({ products, selectedCategory = "All" }) => {
  const { type, propertyType, location } = useSelector((state) => state.search);
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);

  // تصفية المنتجات بناءً على البحث
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      const productAddress = product.location?.toLowerCase() || "";
      const searchLocation = location.trim().toLowerCase();
      const isMatching =
        searchLocation === "" || productAddress.includes(searchLocation);

      return (
        (selectedCategory === "All" ||
          product.category?.toLowerCase() === selectedCategory.toLowerCase()) &&
        (type === "any" ||
          product.type?.toLowerCase() === type.toLowerCase()) &&
        (propertyType === "any" ||
          product.propertyType?.toLowerCase() === propertyType.toLowerCase()) &&
        isMatching
      );
    });
  }, [products, selectedCategory, type, propertyType, location]);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => setAnimation(false), 1000);
  }, [selectedCategory]);

  // تأثير التمرير التدريجي لكل بطاقة
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="property-list !mt-20"
      aria-labelledby="property-label"
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="!m-auto grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-[20px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isFavourite = favourites.includes(product._id);

              return (
                <motion.div
                  key={product._id}
                  className="card max-w-[350px] border border-gray-200 rounded-lg shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="card-banner">
                    <figure className="img-holder">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        width="100%"
                        height="auto"
                        className="img-cover rounded-t-lg"
                      />
                    </figure>
                    <span className="badge label-medium">New</span>
                    <button
                      className={`icon-btn fav-btn transition-colors duration-300 ${
                        isFavourite ? "active" : ""
                      }`}
                      aria-label="add to favorite"
                      onClick={() => dispatch(toggleFavourite(product._id))}
                    >
                      <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                        style={{
                          fontVariationSettings: isFavourite
                            ? '"FILL" 1'
                            : '"FILL" 0',
                          color: isFavourite ? "red" : "gray",
                        }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="card-content p-4">
                    <span className="title-large font-bold text-lg">
                      ${product.price}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold">
                      <a
                        href="#"
                        className="title-small card-title hover:underline"
                      >
                        {product.name}
                      </a>
                    </h3>

                    <address className="body-medium card-text text-gray-500">
                      {product.description}
                    </address>

                    <div className="card-meta-list flex gap-4 mt-3">
                      <div className="meta-item flex items-center gap-1">
                        <span className="material-symbols-rounded">bed</span>
                        <span className="meta-text label-medium">
                          {product.bed} Bed
                        </span>
                      </div>
                      <div className="meta-item flex items-center gap-1">
                        <span className="material-symbols-rounded">
                          bathtub
                        </span>
                        <span className="meta-text">{product.bath} Bath</span>
                      </div>
                      <div className="meta-item flex items-center gap-1">
                        <span className="material-symbols-rounded">
                          straighten
                        </span>
                        <span className="meta-text label-medium">
                          {product.sqft} sqft
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductList;
