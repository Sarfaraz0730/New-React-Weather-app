import "../Style/SearchLocation.css";
import Search_Icon_svg from "../Assests/Search_Icon.svg.png";

import location from "../Assests/location.jpg"
import { useState } from "react";
import { useEffect } from "react";
import WeeklyForecast from "./WeeklyForecast";

const SearchLocation = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [icons, setIcons] = useState("");
  const [wind, setWind] = useState("");


  useEffect(() => {
     const fetchApi = async () => {
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&&units=metric&appid=35dda4b74680a4f66fe72fd65ba4569d`;

       const response = await fetch(url);

       const resJson = await response.json();
       console.log("resjson", resJson);

       setCity(resJson.main);
       setIcons(resJson.weather[0]);
       setWind(resJson.wind);

       console.log("Current temp",resJson.main.temp)
     };

     fetchApi();
   },[search])
  
  return (
    <>
      <section>
        <div className="container">
          <div className="searchDiv">
            <img className="locationIcon" src={location} alt="" />
            <input
              id="searchLocation"
              type="text"
              name=""
              placeholder="Enter City Name"
            />
            <img className="searchIcon" src={Search_Icon_svg} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="Daily-data">
          <WeeklyForecast search={ search} />
        </div>
      </section>

      <section>
        <div className="Daily-data">
  
        </div>
      </section>
    </>
  );
};

export default SearchLocation;
