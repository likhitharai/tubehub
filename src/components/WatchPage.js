import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchBody from "./WatchBody";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      {/* Below div is for the video */}
      <div className="px-12 py-5">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
      {/* <WatchBody/> */}
    </div>
    
  );
};

export default WatchPage;
