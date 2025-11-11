import Image from "next/image";
import Bank from "../../public/icons/Ic_Outline-Food-Bank.png";
import Group from "../../public/icons/Group.png";
import FluentEmojiCook from "../../public/icons/Fluent-Emoji-High-Contrast-Cook.png";

const features = [
  {
    icon: Bank,
    title: "MENU FOR EVERY TASTE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis eget sit et scelerisque vestibulum. Urna faucibus amet massa lacus lorem.",
  },
  {
    icon: Group,
    title: "ALWAYS QUALITY BEANS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis eget sit et scelerisque vestibulum. Urna faucibus amet massa lacus lorem.",
  },
  {
    icon: FluentEmojiCook,
    title: "EXPERIENCED BARISTA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis eget sit et scelerisque vestibulum. Urna faucibus amet massa lacus lorem.",
  },
];

const WhyChooseUs1 = () => {
  return (
    <section className="text-white px-6 pb-15 text-center">
      <div className="mb-8">
        <p className="text-white">Features</p>
        <p className="text-amber-600 -mt-4">____</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Why people choose us?</h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-300">
          Lorem ipsum dolor sit amet consectetur. Felis eget sit et scelerisque
          vestibulum. Urna faucibus amet massa lacus lorem.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg shadow-black/25 bg-explain-card"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs1;
