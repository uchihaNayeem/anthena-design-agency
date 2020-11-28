import "./App.css";
import PriceTable from "./components/PriceTable/PriceTable";
import Service from "./components/Service/Service";
import Header from "./components/Header/Header";
import Achievement from "./components/Achievement/Achievement";
import Footer from "./components/Footer/Footer";
import RunningProject from "./components/RuningProject/RunningProject";

function App() {
  return (
    <div>
      <Header />
      <Service />
      <RunningProject></RunningProject>
      <Achievement></Achievement>
      <PriceTable />
      <Footer></Footer>
    </div>
  );
}

export default App;
