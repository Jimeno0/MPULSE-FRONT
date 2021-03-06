import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConcerts, setFavsAsSearch, removeArtistFromFav } from '../actions/index';

class FilterSidebar extends Component {
  handleGetArtist(target) {
    this.props.fetchConcerts(target.currentTarget.innerText);
  }
  handleGetFavConcerts() {
    const token = window.localStorage.getItem('token');
    this.props.setFavsAsSearch(token);
  }
  handleUnfollowArtist(target) {
    const token = window.localStorage.getItem('token');
    const params = {
      token,
      name: target.currentTarget.value
    };
    this.props.removeArtistFromFav(params);

    console.log('UNFOLOWIIIIIIIIN', target.currentTarget.value);
  }
  renderArtists() {
    const { userArtists } = this.props;
    if (userArtists && userArtists[0]) {
      return userArtists.map((artist) => (
        <li key={artist.name}>
          <span onClick={this.handleGetArtist.bind(this)}>
            {artist.name}
          </span>
          <button
            className="remove-artist"
            value={artist.name}
            onClick={this.handleUnfollowArtist.bind(this)}>
            <img src="../../assets/icons/delete.svg" alt="delete" />
          </button>
        </li>));
    }
      return (<li>No favourites artist yet</li>);
  }
  render() {
    return (
      <ul className="sidebar_filter">
        <li
          onClick={this.handleGetFavConcerts.bind(this)}
        >Favourite concerts</li>
        <li className="user-artist-header">Artist</li>
        <ul>
          {this.renderArtists()}
        </ul>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchConcerts, setFavsAsSearch, removeArtistFromFav }, dispatch)
);

const mapStateToProps = (state) => ({
  userArtists: state.userArtists
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
