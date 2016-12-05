import React, { Component } from 'react';
import { connect } from 'react-redux';
const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DIC'];

export default class ConcertCard extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const concert = this.props.concert ? this.props.concert : '';
      let day = '';
      let month = '';
      if (concert) {
        day = concert.date.split("-")[2];
        let monthIndex = concert.date.split("-")[1];
        monthIndex = Number(monthIndex) - 1;
        month = months[monthIndex];
      }
      return (
        <div className="card">
          <img src={concert.image} alt={concert.name} style={{width:'100%'}} />
          <div className="card-body">
            <div className="card-date">
              <p>{day}</p>
              <p>{month}</p>
            </div>
            <div className="card-content">
              <p>{concert.name.toUpperCase()}</p>

              <span>{concert.venue}, {concert.city}, {concert.country}</span>
            </div>

          </div>
          <button className="card-button"> Find tickets</button>
        </div>
      )
    }
  }
