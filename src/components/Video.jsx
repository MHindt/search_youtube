import React from 'react';
import './Video.css';

const Video = ({ video, onSelectedVideo }) => {
  return (
    <div onClick={() => onSelectedVideo(video)} className='video item'>
      <img
        alt={video.snippet.title}
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default Video;
