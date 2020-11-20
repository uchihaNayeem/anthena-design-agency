import "./App.css";
import PriceTable from "./components/PriceTable/PriceTable";
import Service from "./components/Service/Service";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Achievement from "./components/achievement/Achievement";

function App() {
  return (
    <div className="imageBg">
      <Navbar></Navbar>
      <Achievement />
      <PriceTable></PriceTable>
      <Service></Service>
      <Footer />
    </div>
  );
}

export default App;
