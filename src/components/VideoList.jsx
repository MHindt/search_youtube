import React from 'react';
import Video from './Video';

const VideoList = ({ videos, onSelectedVideo }) => {
  //console.log(videos.id);
  const renderList = videos.map((video) => {
    return (
      <Video
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo}
        video={video}
      />
    );
  });
  return <div className='ui relaxed divided list'>{renderList}</div>;
};
export default VideoList;
