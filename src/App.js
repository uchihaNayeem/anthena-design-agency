import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import PriceTable from './components/PriceTable/PriceTable';
import Service from './components/Service/Service';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar></Navbar>
          <Service></Service>
          <PriceTable></PriceTable>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
