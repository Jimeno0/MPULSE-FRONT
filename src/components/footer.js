import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span> Designed by </span>
        <a className="footer-link" href="https://dribbble.com/artinveins">Laura Amber</a>
        <span>, developed by </span>
        <a className="footer-link" href="https://github.com/Jimeno0/">jimeno0</a>
      </div>
    );
  }
}
