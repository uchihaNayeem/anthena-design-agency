import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import PriceTable from './components/PriceTable/PriceTable';
import Service from './components/Service/Service';
import RunningProject from './components/RuningProject/RunningProject';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header/>
          <Service></Service>
          <RunningProject />
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
