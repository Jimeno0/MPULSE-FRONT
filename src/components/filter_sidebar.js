import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConcerts, fetchFavs } from '../actions/index';

class FilterSidebar extends Component {
  handleGetArtist(target) {
    this.props.fetchConcerts(target.currentTarget.innerText);
  }
  handleGetFavConcerts() {
    const token = window.localStorage.getItem('token');
    this.props.fetchFavs(token);
  }
  renderArtists() {
    const { userArtists } = this.props;
    if (userArtists && userArtists[0]) {
      return userArtists.map((artist) => (
        <li
          key={artist.name}
          onClick={this.handleGetArtist.bind(this)}
        >{artist.name}</li>));
    }
      return (<li>No favourites artist yet</li>);
  }
  render() {
    return (
      <ul>
        <li
          onClick={this.handleGetFavConcerts.bind(this)}
        >Favourite concerts</li>
        <li>Artist</li>
        <ul>
          {this.renderArtists()}
        </ul>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchConcerts, fetchFavs }, dispatch)
);

const mapStateToProps = (state) => ({
  userArtists: state.userArtists
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
