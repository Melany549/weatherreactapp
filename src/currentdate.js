import React, { Component } from 'react';

class CurrentDate extends Component {
  render() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', options);
    const timeString = date.toLocaleTimeString('en-US');

    return (
      <p> {dateString}, {timeString}</p>
    );
  }
}

export default CurrentDate;