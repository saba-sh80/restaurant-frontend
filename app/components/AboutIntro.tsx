import Image from "next/image";
import Reactangle679 from "../../public/images/Rectangle679.png";
const AboutIntro = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center px-8">
      <div>
        <h1 className="text-sm text-orange-500 font-semibold">ABOUT US</h1>
        <h2 className="text-3xl font-bold mt-2 text-white">
          We Invite You to Visit Our Coffee House
        </h2>
        <p className="mt-4 text-white">
          Lorem ipsum dolor sit amet consectetur. Dui velit vitae nunc varius.
          Facilisis eget est semper eu enim. Turpis aliquet orci et a donec. Sit
          sagittis vestibulum ut quis non massa donec.
        </p>
        <button className="mt-6 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
          READ MORE
        </button>
      </div>
      <div>
        <Image
          src={Reactangle679}
          alt="Smiling Chef"
          width={600}
          height={400}
          className="rounded-md object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutIntro;
