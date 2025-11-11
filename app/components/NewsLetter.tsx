import CTAButtons from "./CTAButtons";

const NewsLetter = () => {
  return (
    <section className="flex items-center justify-center h-[500px] bg-center bg-cover bg-no-repeat bg-newsLetter">
      <div className="w-[889px] max-lg:w-2/3 flex flex-col items-start justify-start gap-6">
        <div className="flex flex-col items-start">
          <p className="max-md:text-xs text-sm text-white text-shadow-zinc-900 text-shadow-2xs">
            NEWS LETTER
          </p>
          <p className="text-amber-600 -mt-4">______</p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <h1 className="text-3xl text-white">Subscribe Our Newsletter</h1>
          <p className="text-gray-500 w-fit max-lg:text-sm max-sm:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            facilis pariatur eaque, reiciendis assumenda asperiores est eligendi
            minima, amet laudantium quod, unde beatae? Minus, illum.
          </p>
        </div>
        <div className="flex flex-row max-lg:flex-col items-center justify-center gap-5">
          <input
            type="text"
            placeholder="Type here"
            className="w-100 h-12 max-sm:w-60 bg-gray-900 placeholder-gray-400 rounded-md max-[400px]:-ml-3 placeholder:ml-5"
          />
          <CTAButtons
            value="subscribe"
            btnClass=" bg-orange-500 hover:bg-orange-600 border-md -mt-6 p-0"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
