import Reservation from "./Reservation";
import WhyChooseUs1 from "./WhyChooseUs1";
import WhyChooseUs2 from "./WhyChooseUs2";
import Views from "./Views";
import NumberStatics from "./NumberStatics";
import InstallApp from "./InstallApp";
const Features = () => {
  return (
    <div className="dark-bg">
      <WhyChooseUs1 />
      <Reservation />
      <WhyChooseUs2 />
      <Views />
      <NumberStatics/>
      <InstallApp/>
    </div>
  );
};

export default Features;
