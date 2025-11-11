import Image from "next/image";
import Logo from "../../public/logo/logo.png";
import Facebook from "../../public/icons/facebook.png";
import Twitter from "../../public/icons/Twitter.png";
import Instagram from "../../public/icons/Instagram.png";
import LinkedIn from "../../public/icons/linkedin.png";
import CTAButtons from "./CTAButtons";

const Footer = () => {
  return (
    <footer className="bg-footer px-6 py-12 md:px-16 md:py-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-evenly gap-10">
        {/* Logo + Description + Social */}
        <div className="flex flex-col gap-5 w-full max-w-md lg:max-w-[200px] items-center lg:items-start">
          <div className="w-[135px] h-[90px]">
            <Image src={Logo} alt="logo" />
          </div>
          <p className="text-gray-400 hidden lg:block max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            placeat repellendus dolorum nihil...
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com">
              <Image
                src={Facebook}
                alt="facebook"
                className="w-[35px] h-[35px]"
              />
            </a>
            <a href="https://www.twitter.com">
              <Image
                src={Twitter}
                alt="twitter"
                className="w-[35px] h-[35px]"
              />
            </a>
            <a href="https://www.instagram.com">
              <Image
                src={Instagram}
                alt="instagram"
                className="w-[35px] h-[35px]"
              />
            </a>
            <a href="https://www.linkedin.com">
              <Image
                src={LinkedIn}
                alt="linkedin"
                className="w-[35px] h-[35px]"
              />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-10 w-full text-class">
          {/* Opening Hours */}
          <div className="hidden md:flex flex-col gap-3">
            <p className="text-white font-bold">Opening Restaurant</p>
            <p className="text-gray-400">Sa - We: 09:00am - 10:00pm</p>
            <p className="text-gray-400">Thu - We: 09:00am - 10:00pm</p>
            <p className="text-gray-400">Friday Closed</p>
          </div>

          {/* User Links */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="text-white font-bold">User Links</p>
            <ul className="flex flex-col gap-2 text-gray-400 max-md:ml-10">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Order Delivery</a>
              </li>
              <li>
                <a href="#">Payment & Tax</a>
              </li>
              <li>
                <a href="#">Terms of Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div
            className="lg:flex-col lg:flex gap-5 max-w-[300px] hidden"
            id="contact-us"
          >
            <p className="text-white font-bold">Contact Us</p>
            <p className="text-gray-400">
              p543 Country Club Ave, NC 27587, London, UK +1257 6541120
            </p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-2 bg-white rounded-md pb-4">
              <CTAButtons
                value="Email"
                btnClass="bg-transparent border border-black text-black px-4 py-2 rounded-md"
              />
              <CTAButtons
                value="Subscribe"
                btnClass="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
