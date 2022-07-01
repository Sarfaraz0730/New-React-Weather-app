import "../Style/SearchLocation.css";
import Search_Icon_svg from "../Assests/Search_Icon.svg.png";
import location from "../Assests/location.jpg"
const SearchLocation = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="searchDiv">
           <img className="locationIcon"  src= {location} alt="" />
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
    </>
  );
};

export default SearchLocation;
