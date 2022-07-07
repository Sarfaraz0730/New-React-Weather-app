import "../Style/SearchLocation.css";
import Search_Icon_svg from "../Assests/Search_Icon.svg.png";
import p1 from "./images/p1.webp";

import location from "../Assests/location.jpg";
import { useState } from "react";
import { useEffect } from "react";
import WeeklyForecast from "./WeeklyForecast";
import Graph from "./Graph";
import Humdity from "./Humdity";

const SearchLocation = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [icons, setIcons] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&&units=metric&appid=35dda4b74680a4f66fe72fd65ba4569d`;

    const response = await fetch(url);

    const resJson = await response.json();
    console.log("Response Current data ", resJson);

    setCity(resJson.main.temp);
    console.log("city temp", city);
    setIcons(resJson.weather[0]);
    setWind(resJson.wind);
    setHumidity(resJson.main.humidity);
    setPressure(resJson.main.pressure);

    // console.log("Current temp", resJson.main.temp);
    // console.log("city temp" ,  city.temp)
  };

  useEffect(() => {
    fetchApi();
  }, [search]);
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

      <div className="ui-fixing">
        <section>
          <div className="Daily-data">
            <div className="today-temp">
              <div>
                <h1 className="city-temp"> {city}°C </h1>
              </div>
              <div>
                <img
                  className="p1"
                  src={`https://Openweathermap.org/img/w/${icons.icon}.png`}
                  alt={p1}
                />
              </div>
            </div>
            {/* belowe div is for graph 1 */}
            <div className="graph-div">
              <Graph />
            </div>
            {/* graph div is end above 1 */}
          </div>
        </section>

        {/* belowe div is for graph 2 */}
        <section>
          <div className="Daily-data-2">
            <div className="grid-box">
              <div className="b1">
                <p className="text-design">Pressure </p> <br /> {pressure} hpa
              </div>
              <div className="b1">
                <p className="text-design">Humidity </p>
                <br /> {humidity}%
              </div>
            </div>
            <div className="sunrise-sunset">
              <div id="c11">
                <p className="text-design">Sunrise</p>
                <p>5:00 AM</p>
              </div>
              <div className="c1">
              
                <p className="text-design">Sunset</p>
              </div>
            </div>

            <div>
              <Humdity />
            </div>
          </div>
        </section>
        {/* graph div is end above 2 */}
      </div>
    </>
  );
};

export default SearchLocation;
