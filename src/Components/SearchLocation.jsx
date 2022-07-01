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


        const fetchApi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&&units=metric&appid=35dda4b74680a4f66fe72fd65ba4569d`;

          const response = await fetch(url);

          const resJson = await response.json();
          console.log("Response Current data ", resJson);

          setCity(resJson.main.temp);
          console.log("city temp", city);
          setIcons(resJson.weather[0]);
          setWind(resJson.wind);

          // console.log("Current temp", resJson.main.temp);
          // console.log("city temp" ,  city.temp)
        };

  useEffect(() => {

     fetchApi();
  }, [search])
     console.log("city temp", city);
  
  return (
    <>
      <section>
        <div className="container">
          <div className="searchDiv">
            <img className="locationIcon" src={location} alt="" />
            <input
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              id="searchLocation"
              type="text"
              name=""
              value={search}
              placeholder="Enter City Name"
            />
            <img className="searchIcon" src={Search_Icon_svg} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="Daily-data-weekly">
          <WeeklyForecast search={search} />
        </div>
      </section>

      <section>
        <div className="Daily-data">
          <div className="today-temp">
            <div>
              <h1 className="city-temp"> {city}°C </h1>
            </div>
            <div>
              {" "}
              <img
                className="p1"
                src={`https://Openweathermap.org/img/w/${icons.icon}.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Daily-data"></div>
      </section>
    </>
  );
};

export default SearchLocation;
