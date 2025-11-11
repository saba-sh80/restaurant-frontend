const statics = [
  {
    number: 1287,
    disciption: "VISITORS DAILY",
    orangeColor: true,
  },
  {
    number: 578,
    disciption: "DELIVERIES MONTHLY",
    orangeColor: false,
  },
  {
    number: 1440,
    disciption: "POSITIVE FEEDBACK",
    orangeColor: true,
  },
  {
    number: 40,
    disciption: "AWARDS AND HONORS",
    orangeColor: false,
  },
];

const NumberStatics = () => {
  return (
    <section className="flex flex-row max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 justify-evenly mb-12">
      {statics.map((staticItem, index) => (
        <div key={index} className="h-32 py-3 max-md:justify-self-center">
          <p className="text-2xl text-center my-2 text-white font-extrabold">{staticItem.number}<span className={`font-extrabold ${staticItem.orangeColor ? "text-orange-500" : "text-white"}`}>+</span></p>
          <p className="text-white text-[12px]">{staticItem.disciption}</p>
        </div>
      ))}
    </section>
  );
};

export default NumberStatics;
