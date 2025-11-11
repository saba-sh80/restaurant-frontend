import AboutIntro from "./AboutIntro";
import CoffeeMenu from "./CoffeeMenu";
import OurTeam from "./OurTeam";

const AboutSection = () => {
  return (
    <section className="px-6 py-16 space-y-16 dark-bg">
      <AboutIntro />
      <CoffeeMenu />
      <OurTeam />
    </section>
  );
};

export default AboutSection;
