import React from 'react';
import './Video.css';

const Video = ({ video,  onSelectedVideo }) => {
  return (
    <div onClick= {() => onSelectedVideo(video)}className='video item'>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default Video;
