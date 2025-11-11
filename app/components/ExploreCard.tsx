import Image from "next/image";
import Raspberry from "../../public/images/Rectangle670.png";
import Hamburger from "../../public/images/Rectangle671.png";
import Salad from "../../public/images/Rectangle672.png";
import CTAButtons from "./CTAButtons";

const foods = [
  {
    pic: Raspberry,
    food: "Raspberry French Toast",
    description: "Time: 10 - 15 Minutes | Serves: 1",
    realPrice: "$13.20",
    presentPrice: "$12.50",
  },
  {
    pic: Hamburger,
    food: "Hamburger",
    description: "Time: 20 - 25 Minutes | Serves: 3",
    realPrice: "$22.50",
    presentPrice: "$18.50",
  },
  {
    pic: Salad,
    food: "Salad",
    description: "Time: 30 - 45 Minutes | Serves: 5",
    realPrice: "$30.50",
    presentPrice: "$25.50",
  },
];

const ExploreCard = () => {
  return (
    <div className="flex flex-col justify-items-center items-center">
      <div
        className="flex flex-row justify-evenly gap-5"
        id="food-cards-container"
      >
        {foods.map((foodItem, index) => (
          <div
            key={index}
            className="w-[350px] flex flex-col items-center relative shadow-lg shadow-black/25"
            id="food-card"
          >
            <div>
              <Image src={foodItem.pic} alt="picture" />
            </div>
            <div className="rounded-3xl bg-view p-5 gap-y-3 flex flex-col">
              <p className="text-orange-500 text-2xl">{foodItem.food}</p>
              <p className="text-white">{foodItem.description}</p>
              <div className="flex flex-row gap-2">
                <p className="text-orange-500">{foodItem.presentPrice}</p>
                <p className="text-gray-400 line-through">
                  {foodItem.realPrice}
                </p>
                <CTAButtons
                  value="Order Now"
                  btnClass="bg-orange-500 hover:bg-orange-600 justify-self-start order-btn max-sm:h-12 max-sm:text-[10px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <CTAButtons
        value="More items..."
        btnClass="bg-transparent text-white border border-white hover:bg-white hover:text-black text-lg transition more-btn max-sm:w-32 max-sm:text-xs"
      />
    </div>
  );
};

export default ExploreCard;
