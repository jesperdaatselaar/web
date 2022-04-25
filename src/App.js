import Home from "./routes/Home";
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
