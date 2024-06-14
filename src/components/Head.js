import React, { useEffect, useState } from "react";
import logo from "../assets/thlogo.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);

  useEffect(() => {

    const timer = setTimeout(()=> getSearchSuggestions(), 200);
    return ()=>{
        clearTimeout(timer);
    }
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
    console.log("API call- " + searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  };

  const dispatch = useDispatch();

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
      <div className="flex col-span-10 items-center ">
        <input
          className="w-1/2 rounded-l-3xl h-3/4 px-2 border"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="px-3 bg-gray-200 p-3 rounded-r-3xl">Search</button>
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
