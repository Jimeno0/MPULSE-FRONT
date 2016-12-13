import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToFav } from '../actions/index';


const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DIC'];

class ConcertCard extends Component {
  addToFav() {
    const params = {
      token: this.props.user.token,
      concert: this.props.concert,
    };
    this.props.addToFav(params);
  }
  
  renderFavButton() {
    const match = this.props.userFavs.find(fav => fav.concert_id === this.props.concert.concert_id);
    const src = match ? '../../assets/icons/HEARTBEAT.svg' : '../../assets/icons/heartbeat_empty.svg';
    return (
      <img
        onClick={this.addToFav.bind(this)}
        className="card-like"
        alt="like"
        src={src}
      />
    );
  }
  render() {
    const concert = this.props.concert ? this.props.concert : '';
    let day = '';
    let month = '';
    if (concert) {
      day = concert.date.split('-')[2];
      let monthIndex = concert.date.split('-')[1];
      monthIndex = Number(monthIndex) - 1;
      month = months[monthIndex];
    }
    return (
      <div className="card">
        <div className="card-img-container">
          <img className="card-image" src={concert.image} alt={concert.name} />
          {this.renderFavButton()}

        </div>
        <div className="card-body">
          <div className="card-date">
            <p>{day}</p>
            <p>{month}</p>
          </div>
          <div className="card-content">
            <p>{concert.name.toUpperCase().substring(0, 20)}</p>
            <span>
              {`${concert.venue}, ${concert.city}, ${concert.country}`}
            </span>
          </div>

        </div>
        <button className="card-button"> Find tickets</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
   user: state.user,
   userFavs: state.userFavs
 });

const mapDispatchToProps = (dispatch) => (bindActionCreators({ addToFav }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ConcertCard);
