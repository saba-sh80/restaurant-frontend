"use client";
import Image from "next/image";
import Logo from "../../public/logo/logo.png";
import { useState } from "react";

const list = ["Home", "Menu", "Order", "Blog", "Contact", "Shop"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-4">
      <div className="text-xl font-bold">
        <Image src={Logo} alt="logo" width={170} height={170} className="max-sm:w-[85px] max-sm:h-20"/>
      </div>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col absolute top-20 right-3 z-50 bg-black text-white py-4 rounded-md lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0 lg:gap-x-10`}
      >
        {list.map((item) => (
          <li key={item} className="cursor-pointer py-2 lg:py-0 max-lg:hover:bg-white max-lg:hover:text-black max-lg:w-28 text-center transition">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-row gap-5 transition-all">
        <button className="bg-orange-600 text-white max-[450px]:text-[11px] max-[450px]:p-2 sm:text-sm px-3 py-2 rounded-md hover:bg-orange-700 transition cursor-pointer">
          RESERVATION
        </button>
        <span
          className="lg:hidden w-9 h-9 cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            className="w-9 h-9"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 18L20 18"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M4 12L20 12"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M4 6L20 6"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
