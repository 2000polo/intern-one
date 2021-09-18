import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Section from "./Components/Section1/Section";
import Structure from "./Components/Structure/Structure";
import './App.css';
import Icons from "./Components/Icons/Icon";
import Delightsec from "./Components/Delightsec/Delightsec";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Structure />
      <Icons />
      <Delightsec />
      <Footer />
    </div>
  );
}

export default App;
