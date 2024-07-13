import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import WatchPage from './WatchPage';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
    localStorage.setItem('videoData', JSON.stringify(json.items));
  };

  
  return (
    <div className='flex flex-wrap'>
    {videos.map(video=> (
      <Link key={video.id} to= {"/watch?v="+video.id}  info={video}>
      <VideoCard  info={video}/>
      {/* localStorage.setItem('videoData', JSON.stringify(video)); */}
      </Link> 
      ))}
    
    </div>
  )
}

export default VideoContainer
