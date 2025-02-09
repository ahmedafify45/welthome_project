import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoginModal } from "../reduux/authSlice";
import { assets } from "../assets/images/assets";
import { motion } from "framer-motion"; // ✅ استيراد framer-motion

const RecuriterLogin = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // ✅ المودال يبدأ صغيرًا مع شفافية
      animate={{ opacity: 1, scale: 1 }} // ✅ يظهر بتدريج وتكبير
      exit={{ opacity: 0, scale: 0.8 }} // ✅ يختفي بنفس الطريقة عند الإغلاق
      transition={{ duration: 0.3, ease: "easeOut" }} // ✅ سرعة التأثير
      className="absolute !top-0 !left-0 !right-0 !bottom-0 !z-10 !backdrop-blur-sm !bg-black/30 !flex !justify-center !items-center"
    >
      <motion.form
        initial={{ y: -50, opacity: 0 }} // ✅ يتحرك للأسفل عند الظهور
        animate={{ y: 0, opacity: 1 }} // ✅ يتحرك تدريجيًا إلى وضعه الطبيعي
        exit={{ y: -50, opacity: 0 }} // ✅ يتحرك للأعلى عند الإغلاق
        transition={{ duration: 0.3, ease: "easeOut" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (state === "Sign Up" && !isTextDataSubmited) {
            setIsTextDataSubmited(true);
          }
        }}
        className="relative !bg-white !min-w-[300px] min-h-[300px] flex flex-col gap-2 !p-10 !rounded-xl !text-slate-500"
      >
        <h1 className="!text-center !text-2xl !text-neutral-700 !font-medium">
          Recruiter {state}
        </h1>
        <p className="!text-sm">Welcome back! Please sign in to continue</p>

        {state === "Sign Up" && isTextDataSubmited ? (
          <div className="!flex !items-center !gap-4 !my-10">
            <label htmlFor="image">
              <img
                className="!w-16 !rounded-full"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
              />
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>
            <p>
              Upload Company <br /> Logo
            </p>
          </div>
        ) : (
          <>
            {state !== "Login" && (
              <div className="!border !px-4 !py-2 !flex !items-center !gap-2 !rounded-full !mt-5">
                <img src={assets.person_icon} alt="person_icon" />
                <input
                  className="!outline-none !text-sm h-[25px]"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Company Name"
                  required
                  value={name}
                />
              </div>
            )}

            <div className="!border !px-4 !py-2 !flex !items-center !gap-2 !rounded-full !mt-5">
              <img src={assets.email_icon} alt="email_icon" />
              <input
                className="!outline-none !text-sm h-[25px]"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Id"
                required
                value={email}
              />
            </div>

            <div className="!border !px-4 !py-2 !flex !items-center !gap-2 !rounded-full !mt-5">
              <img src={assets.lock_icon} alt="lock_icon" />
              <input
                className="!outline-none !text-sm h-[25px]"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                value={password}
              />
            </div>
          </>
        )}

        {state === "Login" && (
          <p className="!text-sm !text-blue-600 !mt-4 !cursor-pointer">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="!bg-blue-600 !w-full !text-white !py-2 !rounded-full !mt-4"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmited
            ? "Create Account"
            : "Next"}
        </button>

        {state === "Login" ? (
          <p className="!mt-5 !text-center">
            Don&lsquo;t have an account?{" "}
            <span
              className="!text-blue-600 !cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="!mt-5 !text-center" onClick={() => setState("Login")}>
            Already have an account?{" "}
            <span className="!text-blue-600 !cursor-pointer">Login</span>
          </p>
        )}

        {/* ✅ زر الإغلاق مع Framer Motion */}
        <motion.img
          onClick={() => dispatch(hideLoginModal())}
          className="!absolute !top-5 !right-5 !cursor-pointer"
          src={assets.cross_icon}
          alt="close"
          whileHover={{ scale: 1.1 }} // ✅ يكبر عند تمرير الفأرة
          whileTap={{ scale: 0.9 }} // ✅ يتقلص عند الضغط
        />
      </motion.form>
    </motion.div>
  );
};

export default RecuriterLogin;
