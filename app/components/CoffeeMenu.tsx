import Image from "next/image";
import Reactangle678 from "../../public/images/Rectangle678.png";
const CoffeeMenu = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center px-8">
      <div>
        <Image
          src={Reactangle678}
          alt="Chef Plating Dish"
          width={600}
          height={400}
          className="rounded-md object-cover w-full h-auto"
        />
      </div>
      <div className="lg:ml-10">
        <h1 className="text-sm text-orange-500 font-semibold">COFFEE MENU</h1>
        <h2 className="text-3xl font-bold mt-2 text-white">
          Quality Kava Beans
        </h2>
        <p className="mt-4 text-white">
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
          Facilisis eget est a semper enim. Turpis aliquet ut ac donec ut.
          Sagittis vestibulum ut quis non massa metus.
        </p>
        <button className="mt-6 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default CoffeeMenu;
