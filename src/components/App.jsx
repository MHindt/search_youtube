import React from 'react';
import SearchBar from './SearchBar';
//REact uses dotenv under the hood naming convention REACT_KEY_WHATEVERNAME 
//can access with process.env.REACT_KEY_WHATEVERNAME 
import url from '../apis/youTube';

class App extends React.Component {
    
    onSearchSubmit = async (searchInput) => {
        console.log(searchInput);
      const response = await fetch(url  + new URLSearchParams({
        q: searchInput
      }))
      const data = await response.json();
      console.log(data);
    }
 render() {
    console.log(url);
    return <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
    </div>
 }
}
export default App;