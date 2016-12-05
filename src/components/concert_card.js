import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ConcertCard extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const concert = this.props.concert ? this.props.concert : ''
      return (
        <div className="card">
          <img src={concert.image} alt={concert.name} style={{width:'100%'}} />
          <div className="card-body">
            <div class="four columns">
              <span>{concert.date}</span>
            </div>
            <div class="six columns">
              <span>{concert.name}</span>
              <span>{concert.venue},{concert.city},{concert.country}</span>
            </div>


          </div>
          <button className="card-button"> FInd tikets</button>
        </div>
      )
    }
  }
