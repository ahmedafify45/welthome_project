import { assets } from "../assets/images/assets";

function AppDownload() {
  return (
    <section className="h-[100vh] !mt-[130px]">
      <div className="container flex flex-col items-center justify-center text-center">
        <img
          className="w-[800px] !mb-20 rounded-4xl border !p-5 border-gray-300 shadow-xl"
          src={assets.about_Image}
          alt=""
        />
        <p className="!font-bold !text-[30px] !mb-20">
          DownLoad Application Now
        </p>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <img className="w-[150px]" src={assets.app_store} alt="app store" />
          <img className="w-[150px]" src={assets.play_store} alt="play store" />
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
