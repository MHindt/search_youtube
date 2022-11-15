import React from 'react';
import Video from './Video';

const VideoList = (props) => {
    console.log(props.videos.id);
      const videos = props.videos.map((video) => {
        return <Video video={video} />
      })
       return (
        <div>
            {videos}
        </div>
       )
    
}
export default VideoList;