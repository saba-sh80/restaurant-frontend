// components/Hero.tsx

import CTAButtons from "@/app/components/CTAButtons";

const Hero = () => {
  return (
    <section className="pt-8 pb-56 px-6 text-center bg-cover bg-center flex flex-col justify-center">
      <p className="text-white py-4 text-sm">HELLO, NEW TASTE!</p>
      <h1 className="max-[400px]:text-[20px] text-3xl md:text-5xl font-bold text-white py-4 drop-shadow-lg">
        RESERVE YOUR TABLE
      </h1>
      <div className="flex flex-row gap-3 mx-auto max-[500px]:flex-col max-[500px]:gap-0">
        <CTAButtons
          btnClass="text-black bg-white hover:bg-gray-200 max-[400px]:text-sm"
          value="BOOK A TABLE"
        />
        <CTAButtons
          btnClass="text-black bg-white hover:bg-gray-200 max-[400px]:text-sm"
          value="OPEN MENU"
        />
      </div>
    </section>
  );
};

export default Hero;
