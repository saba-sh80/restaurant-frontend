import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Features from "./components/Features";
import Explore from "./components/Explore";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-url bg-cover bg-center w-full h-screen">
          <Navbar />
          <Hero />
        </div>
        <AboutSection />
        <Features />
        <Explore />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
