import Image from "next/image";
import GoldQuoteLine from "../../public/icons/Gold-Clarity-Block-Quote-Line.png";
import GoldStars from "../../public/icons/Gold-Frame261.png";
import RoseGoldQuoteLine from "../../public/icons/RoseGold-Clarity-Block-Quote-Line.png";
import RoseGoldStars from "../../public/icons/RoseGold-Frame261.png";
import PinkQuoteLine from "../../public/icons//Pink-Clarity-Block-Quote-Line.png";
import PinkStars from "../../public/icons/Pink-Frame261.png";

const points = [
  {
    name: "John",
    point:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus doloribus, sed quod reprehenderit animi repellendus aliquid. Expedita modi, perferendis accusamus unde alias sint doloribus asperioressuscipit natus ab, magnam at ducimus architecto provident nesciunt!",
    job: "Business Man",
    quoteIcon: GoldQuoteLine,
    starsIcon: GoldStars,
  },
  {
    name: "Niky",
    point:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus doloribus, sed quod reprehenderit animi repellendus aliquid. Expedita modi, perferendis accusamus unde alias sint doloribus asperioressuscipit natus ab, magnam at ducimus architecto provident nesciunt!",
    job: "IT Manager",
    quoteIcon: RoseGoldQuoteLine,
    starsIcon: RoseGoldStars,
  },
  {
    name: "Sam",
    point:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus doloribus, sed quod reprehenderit animi repellendus aliquid. Expedita modi, perferendis accusamus unde alias sint doloribus asperioressuscipit natus ab, magnam at ducimus architecto provident nesciunt!",
    job: "Nurse",
    quoteIcon: PinkQuoteLine,
    starsIcon: PinkStars,
  },
  {
    name: "Lana",
    point:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus doloribus, sed quod reprehenderit animi repellendus aliquid. Expedita modi, perferendis accusamus unde alias sint doloribus asperioressuscipit natus ab, magnam at ducimus architecto provident nesciunt!",
    job: "Engineer",
    quoteIcon: GoldQuoteLine,
    starsIcon: GoldStars,
  },
];

const Views = () => {
  return (
    <section className="flex justify-center items-center">
      <div
        className="grid grid-cols-2 gap-y-14 gap-x-4 justify-items-center items-center py-15"
        id="view-cards-container"
      >
        {points.map((point, index) => (
          <div
            key={index}
            className="w-[350px] flex flex-col justify-center items-center relative"
          >
            <div className="w-[50px] rounded-4xl bg-view absolute -top-[35px] left-1/2 -translate-x-1/2 shadow-lg shadow-black/25">
              <Image src={point.quoteIcon} alt="Quote Line" />
            </div>
            <div className="rounded-3xl bg-view p-5 gap-y-3 flex flex-col justify-center items-center shadow-lg shadow-black/25" id="view-cards">
              <p className="text-gray-400 text-center">{point.point}</p>
              <div>
                <Image src={point.starsIcon} alt="Stars" />
              </div>
              <p className="text-white">{point.name}</p>
              <p className="text-xs text-gray-400">{point.job}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Views;
