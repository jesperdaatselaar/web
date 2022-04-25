import Header from "../components/Header";
import TextSection from "../components/TextSection";
import GearSection from "../components/GearSection";
import WorkSection from "../components/WorkSection";
import RowSection from "../components/RowSection";
import Contact from "../components/ContactSection";

function Home() {
  return (
    <div className="container">
      <Header />
      <TextSection />
      <RowSection />
      <GearSection />
      <WorkSection />
      <Contact />
    </div>
  );
}

export default Home;
