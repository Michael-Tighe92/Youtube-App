//importing libaries
//importing the libary react and assigning it into the
//variable React
import React, {Component} from 'react';

//importing the libary react-dom and assigning it into the
//variable ReactDOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'

//importing search_bar to SearchBar variable. Must have a
//folder/file refrence since we created the search_bar file
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//Youtube API key
const API_KEY = 'AIzaSyB3sZxkqs8vjHxGXWrAV4A_T9qa26ffDys';


//Always have one component per file
//Create a new component. This component should produce
//some HTML

//Function
/*const App = function() {
  return <div>Hi!</div>;
}*/

//ES6 Syntax
//Functonal base component which is used to take in
//some infomation and displaying JSX (It's also legal to
//have a class base component within a functional base component)
//Changed from functional base to class base
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
         videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it
//on the page (in the DOM)

//<App /> is a jsx tag and as long as there is nothing
//inside the tag then <App /> is legal

//This will create an instance of App and pass
//it to ReactDOM.render

//document.querySelector('.container') creates a refrence
//to container so that the App component can render to it.
ReactDOM.render(<App />, document.querySelector('.container'));
