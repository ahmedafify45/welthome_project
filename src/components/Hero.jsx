import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { updateSearch } from "../reduux/searchSlice";
import { assets } from "../assets/images/assets";

function Hero() {
  const dispatch = useDispatch();

  // تحديث Redux عند إرسال الفورم
  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchData = {
      type: formData.get("want-to"),
      propertyType: formData.get("property-type"),
      location: formData.get("location").trim(), // إزالة الفراغات
    };

    dispatch(updateSearch(searchData));
  };

  // تخزين صورة الهيدر في الذاكرة لتجنب إعادة تحميلها
  const headerImage = useMemo(() => assets.header_img, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="headline-large hero-title">
            Find a place where you can be yourself.
          </h1>
          <form onSubmit={handleSearch} className="search-bar">
            {/* نوع العملية */}
            <label className="search-item">
              <span className="label-medium label">Want to</span>
              <select name="want-to" className="search-item-field body-medium">
                <option value="any">Any</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </label>

            {/* نوع العقار */}
            <label className="search-item">
              <span className="label-medium label">Property type</span>
              <select
                name="property-type"
                className="search-item-field body-medium"
              >
                <option value="any">Any</option>
                <option value="houses">Houses</option>
                <option value="apartments">Apartments</option>
                <option value="villa">Villa</option>
                <option value="townhome">Townhome</option>
                <option value="bungalow">Bungalow</option>
                <option value="loft">Loft</option>
              </select>
            </label>

            {/* البحث بالموقع */}
            <label className="search-item">
              <span className="label-medium label">Location / Category</span>
              <input
                type="text"
                name="location"
                placeholder="Street, City, Zip, Category..."
                className="search-item-field body-medium"
              />
            </label>

            <button type="submit" className="search-btn">
              <span className="material-symbols-rounded">search</span>
              <span className="label-medium">Search</span>
            </button>
          </form>
        </div>
        <img src={headerImage} alt="Header" className="hero-banner" />
      </div>
    </section>
  );
}

export default Hero;
