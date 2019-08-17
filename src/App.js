import React, { Component } from 'react';
import SearchBar from "./components/search_bar"
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyCkB5QLCx7p7eNLKVUveyjXVEU4XJgkCko";


class App extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      videos: [], // array of sugested videos 
      selectedVideo: null//
    };

    // this.videoSearch("React Tutorials");
      this.videoSearch("toyor al janah");// which the first videos shown we can add any parameters you want 
  }

  videoSearch(searchTerm){
    YTSearch({key: API_KEY, term:searchTerm}, (data) => {
      // console.log(data);
        this.setState({
            videos:data,//set data array videos depends on data
            selectedVideo: data[1]//defult selected video is second video in the list of videos
      });
    });

  }

  render() { 
    return ( 
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
         videos={this.state.videos} />
      </div>//in to videolist we update videos array with new selected video by this line " videos={this.state.videos}"

     );
  }
}
 
export default App;
