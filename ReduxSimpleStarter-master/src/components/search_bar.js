import React, {Component} from 'react';

//ES6 Class Base Component
//SearchBar Gets functionality from React.Component class
class SearchBar extends Component {
  //Similar to oop where classes have a constructor that
  //intializes values to variables
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  //Every class must have a render function
  //input is now a controlled component
  render() {
    return (
    <div className="search-bar">
      <input
       value={this.state.term}
       onChange ={event => this.onInputChange(event.target.value)} />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//Functional Component
/*const SearchBar = () => {
  return <input />;
};*/

//when importing search_bar we get the SearchBar component
export default SearchBar;
