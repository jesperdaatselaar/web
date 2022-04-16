import Nav from "./components/Nav";
import Header from "./components/Header";
import TextSection from "./components/TextSection";
import GearSection from "./components/GearSection";
import WorkSection from "./components/WorkSection";
import RowSection from "./components/RowSection";
import Footer from "./components/Footer"
import Contact from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Header />
        <TextSection/>
        <RowSection />
        <GearSection />
        <WorkSection />
        <Contact />
      </div>
          <Footer />
    </div>
  );
}

export default App;
