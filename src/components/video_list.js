import React from 'react';
import VideoListItem from "./video_list_item";

const videoList = (props) => {
    const videoItem = props.videos.map((video) => {
        return (
            <VideoListItem
               onUserSelected= {props.onVideoSelect}
                key={video.etag}// etag is a unique key for each video come from youtube
                video={video} />
        );
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    );
};

export default videoList;