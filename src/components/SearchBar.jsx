import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchInput: ''
    }
    onInputChange = (e) => {
       //console.log(e.target.value);
        this.setState({ searchInput: e.target.value})
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        //TODO make sure we call callback from parent component
        this.props.onFormSubmit(this.state.searchInput);
    }
    render() {
        return( <div className='search bar ui segment'>
            <form onSubmit = {this.onFormSubmit}className='ui form'>
                <div className='field'>
                <label >Video Search </label>
                </div>
                <input type='text' value={this.state.searchInput} onChange={this.onInputChange}/>
            </form>
        </div>
        )
    }
}
export default SearchBar;