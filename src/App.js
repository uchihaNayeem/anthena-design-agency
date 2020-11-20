import './App.css';

import PriceTable from './components/PriceTable/PriceTable';
import Service from './components/Service/Service';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="imageBg">
      <Navbar></Navbar>
      <Service></Service>
      <PriceTable></PriceTable>
      
      
    </div>
  );
}

export default App;
