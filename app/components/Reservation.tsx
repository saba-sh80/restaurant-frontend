import CTAButtons from "./CTAButtons";

const Reservation = () => {
  return (
    <section className="flex flex-col pt-10 items-center lg:flex-row lg:justify-evenly lg:gap-x-44 bg-cover bg-center text-white reservation-section h-[550px]">
      <div className="w-[400px] h-52 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <div className="my-5">
          <p className="text-white text-sm text-shadow-zinc-900 text-shadow-2xs">
            RESERVATION
          </p>
          <p className="text-amber-600 -mt-4 max-lg:text-center">________</p>
        </div>
        <h1 className="text-4xl text-shadow-zinc-900 text-shadow-2xs">
          Working Hours
        </h1>
        <div className="flex flex-row gap-3 max-[500px]:flex-col max-[500px]:gap-0">
          <CTAButtons
            btnClass="bg-orange-600 hover:bg-orange-700 max-[400px]:text-[10px]"
            value="BOOK A TABLE"
          />
          <CTAButtons
            btnClass="bg-transparent hover:bg-white hover:text-gray-800 text-shadow-zinc-900 text-shadow-2xs max-[400px]:text-[10px]"
            value="CANTACT US"
          />
        </div>
      </div>
      <div className="w-10/12 lg:w-[350px] h-92 flex flex-col justify-center items-center my-14 lg:my-0 gap-5 dark-bg">
        <div>
          <h4>Sunday to Tuesday</h4>
          <p>09:00 AM - 10.00 PM</p>
        </div>
        <div>
          <h4>Friday to Saturday</h4>
          <p>09:00 AM - 10.00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
