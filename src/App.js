
import './App.css';
import Basic from './components/Basic'
import Stock from './components/Stock';
import Map from './components/Map'
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App">
      <Basic/>
     <br/>
     <Stock/> 
     <br/>
     <Map/>
     <br/>
     <PieChart/>
     <br/>
    </div>
  );
}

export default App;
