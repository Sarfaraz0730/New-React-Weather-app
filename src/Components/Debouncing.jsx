import { useState, useCallback } from "react";
import "./Debouncing.css";

const Debouncing = () => {
  const [search, setSearch] = useState([]);
  d = new Date();
  localTime = d.getTime();
  localOffset = d.getTimezoneOffset() * 60000;
  utc = localTime + localOffset;
  var atlanta = utc + 1000 * -14400;
  nd = new Date(atlanta);

  const debounce = (func) => {
    let timer;

    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChnage = (event) => {
    const { value } = event.target;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&&units=metric&appid=35dda4b74680a4f66fe72fd65ba4569d`
    )
      .then((res) => res.json())
      .then((json) => setSearch(json.name));
  };

  const optimiseVersion = useCallback(debounce(handleChnage));

  return (
    <div>
      <input
        className="debounceInput-Search"
        type="text"
        name=""
        id=""
        placeholder="Enter City Name..."
        onChange={handleChnage}
      />

      {search?.length > 0 && (
        <div className="autocomplete">
          {search?.map((e, i) => (
            <div key={i} className="autocompleteItem">
              <span>{e.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Debouncing;
