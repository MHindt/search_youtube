import React from 'react';
import SearchBar from './SearchBar';
//REact uses dotenv under the hood naming convention REACT_KEY_WHATEVERNAME 
//can access with process.env.REACT_KEY_WHATEVERNAME 
import url from '../apis/youTube';
import VideoList from './VideoList';

class App extends React.Component {
    state = {
        videos: []
    }
    onSearchSubmit = async (searchInput) => {
        console.log(searchInput);
      const response = await fetch(url  + new URLSearchParams({
        q: searchInput
      }))
      const data = await response.json();
      console.log(data.items);
      this.setState({ videos: data.items })
    }
 render() {
    console.log(url);
    return <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        <VideoList videos={this.state.videos}/>
    </div>
 }
}
export default App;