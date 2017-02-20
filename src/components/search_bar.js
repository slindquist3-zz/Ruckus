import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

  }

  render() {
    return  (
      <div className = "search-bar">Search
        <input value = {this.state.term} onClick={event => this.handleSubmit(event.target.value)}/>
        <input type="submit"/>
      </div>
      );
    }

    handleSubmit(term) {
      this.setState({term});
    }
  }
