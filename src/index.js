import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import Map from './components/map'

const GOOGLE_MAPS_API_KEY = "AIzaSyAlx2vCl94PBu-kH44i1EnxkDmbPcIzgQg"
const TWITTER_API_KEY = ""


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      term: ""
    };

  }

  twitterAPICall(TWITTER_API_KEY, term) {
      this.setState({
        videos: videos,
        coordinates: ""//parsed results from Twitter API CALL
      })
  }


  render() {
      return (
        <div>
          <SearchBar />
          <Map coordinates={this.state.coordinates}/>
        </div>
      );
    }
  }

ReactDOM.render(<App/>, document.querySelector('.container'))
