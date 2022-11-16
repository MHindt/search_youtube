import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
//REact uses dotenv under the hood naming convention REACT_KEY_WHATEVERNAME
//can access with process.env.REACT_KEY_WHATEVERNAME
import url from '../apis/youTube';
import VideoList from './VideoList';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  onSearchSubmit = async (searchInput) => {
    console.log(searchInput);
    const response = await fetch(
      url +
        new URLSearchParams({
          q: searchInput,
        })
    );
    const data = await response.json();
    console.log(data.items);
    this.setState({ videos: data.items });
  };
  onSelectedVideo = (video) => {
    console.log('Inside of App: ', video);
    this.setState({ selectedVideo: video });
  };
  render() {
    console.log(url);
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onSelectedVideo={this.onSelectedVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
