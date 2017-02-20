import React, { Component } from 'react'

export default class Map extends Component {

  constructor(props) {
    super(props);

    this.state = { coordinates: this.props.coordinates };

  }

  render() {
    return  (
      <div>
        I'm the map!
      </div>

      );
    }
  }
