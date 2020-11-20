import './App.css';
import PriceTable from './components/PriceTable/PriceTable';
import Service from './components/Service/Service';
import Header from './components/Header/Header';
import Achievement from './components/Achievement/Achievement';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      
      <Header/>
      <Service/>
      <PriceTable/>
      <Achievement></Achievement>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
