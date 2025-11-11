// components/CTAButtons.tsx
interface TypeOfCTAButton {
  value: string;
  btnClass: string;
}

const CTAButtons = ({ value, btnClass }: TypeOfCTAButton) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        className={`${btnClass} text-shadow-2xs cursor-pointer px-6 py-3 rounded-md transition`}
      >
        {value}
      </button>
    </div>
  );
};

export default CTAButtons;
