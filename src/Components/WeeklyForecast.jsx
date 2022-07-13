import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./WeeklyForecast.css";
import p1 from "../Components/images/p1.webp";
import shiny from "../Components/images/shiny.png";
import Graph from "./Graph";
const WeeklyForecast = (search) => {
  const [week, setWeek] = useState([]);
  const [day1, setDay1] = useState([]);
  const [day2, setDay2] = useState([]);
  const [day3, setDay3] = useState([]);
  const [day4, setDay4] = useState([]);
  const [day5, setDay5] = useState([]);
  const [day6, setDay6] = useState([]);
  const [search1, setSearch1] = useState("Delhi");

  const [icons, setIcons] = useState("");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search.search}&cnt=7&&units=metric&appid=35dda4b74680a4f66fe72fd65ba4569d`;

    const fetchAPI = async () => {
      const response = await fetch(url);

      const res = await response.json();
    
      setWeek(res.list[0].main);
      setDay1(res.list[1].main);
      setDay2(res.list[2].main);
      setDay3(res.list[3].main);
      setDay4(res.list[4].main);
      setDay5(res.list[5].main);
      setDay6(res.list[6].main);

      // console.log("timezone",res.city.timezone)
    };

    console.log("day1", day1.temp);
    
    fetchAPI();
  }, [search]);


  return (
    <div className="abc">
      <div className="weekly-forecast">
        <div className="hover1">
          <h5>Mon</h5>
          <p className="font-size-temp">
            {week.temp_max} ° {"  " + "    "} {week.temp_min} °{" "}
          </p>
          <img className="icons-week" src={p1} alt="" />
        </div>

        <div className="hover1">
          {" "}
          <h5>Tue </h5>{" "}
          <p className="font-size-temp">
            {day1.temp_max} ° {"  " + "    "} {day1.temp_min} °{" "}
          </p>{" "}
          <img className="icons-week" src={p1} alt="" />{" "}
        </div>
        <div className="hover1">
          {" "}
          <h5>Wed</h5>{" "}
          <p className="font-size-temp">
            {day2.temp_max} ° {day2.temp_min} °{" "}
          </p>{" "}
          <img className="icons-week" src={shiny} alt="" />{" "}
        </div>
        <div className="hover1">
          <h5>Thru</h5>{" "}
          <p className="font-size-temp">
            {day3.temp_max} ° {day3.temp_min} °
          </p>
          <img className="icons-week" src={p1} alt="" />
        </div>
        <div className="hover1">
          <h5>Fri</h5>
          <p className="font-size-temp">
            {day4.temp_max} ° {day4.temp_min} °
          </p>
          <img className="icons-week" src={shiny} alt="" />
        </div>
        <div className="hover1">
          <h5>Sat</h5>
          <p className="font-size-temp">
            {day5.temp_max} ° {day5.temp_min} °
          </p>
          <img className="icons-week" src={p1} alt="" />
        </div>
        <div className="hover1">
          <h5>Sun</h5>
          <p className="font-size-temp">
            {day6.temp_max} ° {day6.temp_min} °
          </p>
          <img className="icons-week" src={shiny} alt="" />
        </div>

        <div className="hover1">
          <h5>Mon</h5>
          <p className="font-size-temp">
            {day5.temp_max} ° {day5.temp_min} °
          </p>
          <img className="icons-week" src={p1} alt="" />
          {/* <Graph props= { obj} /> */}
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
