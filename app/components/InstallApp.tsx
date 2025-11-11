import Image from "next/image";
import GooglPlayIcon from "../../public/icons/Google-Play-Icon.png";
import AppleIcon from "../../public/icons/Ic-Sharp-Apple.png";
import PhonePage1 from "../../public/images/Phone-Page1.png";
import PhonePage2 from "../../public/images/Phone-Page2.png";

const InstallApp = () => {
  return (
    <section className="flex flex-row justify-evenly items-center bg-install bg-center bg-cover bg-no-repeat h-[400px]">
      {/* سمت چپ: متن و دکمه‌ها */}
      <div className="max-w-sm flex flex-col gap-10">
        <div className="flex justify-center items-center">
          <p className="text-4xl font-bold text-white max-sm:text-xl max-[400px]:text-sm max-[400px]:text-center">
          Simple Way To Order Your Foods
        </p>
        </div>
        <div className="flex gap-4 max-md:flex-col max-md:justify-center max-md:items-center">
          <button className="flex items-center max-md:w-[200px] max-sm:w-[150px] gap-2 bg-white hover:bg-gray-200 cursor-pointer text-black px-4 py-2 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-110">
            <Image
              src={GooglPlayIcon}
              alt="Google Play Icon"
              width={25}
              height={25}
              className="object-contain"
            />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] max-sm:hidden">GET IT ON</span>
              <span className="text-lg max-sm:text-sm font-semibold">Google Play</span>
            </div>
          </button>
          <button className="flex items-center max-md:w-[200px] max-sm:w-[150px] gap-2 bg-white hover:bg-gray-200 cursor-pointer text-black px-4 py-2 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-110">
            <Image
              src={AppleIcon}
              alt="Apple Icon"
              width={30}
              height={30}
              className="object-contain"
            />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] max-sm:hidden">GET IT ON</span>
              <span className="text-lg max-sm:text-sm font-semibold">Apple Store</span>
            </div>
          </button>
        </div>
      </div>


      <div className="flex justify-start max-lg:hidden -translate-y-4">
        {/* تصویر سمت چپ - بالاتر */}
        <div className="relative w-[250px] aspect-[9/16] -translate-y-6">
          <Image
            src={PhonePage1}
            alt="PhonePage1"
            fill
            className="object-contain"
          />
        </div>

        {/* تصویر سمت راست - پایین‌تر */}
        <div className="relative w-[250px] aspect-[9/16] translate-y-14">
          <Image
            src={PhonePage2}
            alt="PhonePage2"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default InstallApp;

