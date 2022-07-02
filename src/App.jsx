import './App.css';
import SearchLocation from './Components/SearchLocation';
import GeoLocationOfUser from './Components/GeoLocationOfUser';




function App() {
  const location =GeoLocationOfUser()
  return (
    <div className="App">
      <SearchLocation />
  
    
   
    </div>
  );
}

export default App;
