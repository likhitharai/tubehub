import React, { useEffect, useState } from "react";
import logo from "../assets/thlogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchQuery);

const searchCache = useSelector((store)=> store.search);
const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //Make an API call on every key press, but if the diff between 2 keypress is <200ms decline the API call
  /**
   * key - i
   * -render the component
   * -useEffect()
   * start timer - make api call after 200ms
   *
   * key - ip
   * -destroy the component (useEffect return method)
   * -re-render the component
   * -useEffect()
   * start timer - make api call after 200ms
   *
   * If 200ms passes, then the api  will be called
   *
   */

  const getSearchSuggestions = async () => {
    console.log("API call- " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);


    //Update cache

    dispatch(cacheResults({
      [searchQuery]: json[1]
    })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg rounded-md">
      <div className="flex col-span-1">
        <img
          className="w-12 h-14 p-2 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="Hamburger-menu"
        />
        <img className="w-30 h-16 p-2 mx-2" src={logo} alt="Logo" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 rounded-l-full p-2  border border-gray-400"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-3 bg-gray-200 p-3 rounded-r-3xl">Search</button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 rounded-lg"
                >
                  {s}
                </li>
              ))}

              {/* <li className= "py-2 px-3 shadow-sm hover: bg-gray-100">Iphone pro</li>
            <li className= "py-2 px-3 shadow-sm hover: bg-gray-100">Iphone max</li>
            <li className= "py-2 px-3 shadow-sm hover: bg-gray-100">Iphone </li> */}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1">
        <img
          className="w-16 h-16 p-2  justify-end"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
