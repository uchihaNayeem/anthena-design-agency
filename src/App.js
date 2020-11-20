import "./App.css";
import PriceTable from "./components/PriceTable/PriceTable";
import Service from "./components/Service/Service";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="imageBg">
      <Navbar></Navbar>
      <PriceTable></PriceTable>
      <Service></Service>
      <Footer />
    </div>
  );
}

export default App;
