import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConcerts, setFavsAsSearch } from '../actions/index';

class FilterSidebar extends Component {
  handleGetArtist(target) {
    this.props.fetchConcerts(target.currentTarget.innerText);
  }
  handleGetFavConcerts() {
    const token = window.localStorage.getItem('token');
    this.props.setFavsAsSearch(token);
  }
  handleUnfollowArtist(target) {
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
          <button value={artist.name} onClick={this.handleUnfollowArtist.bind(this)}>
            Delete
          </button>
        </li>));
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
  bindActionCreators({ fetchConcerts, setFavsAsSearch }, dispatch)
);

const mapStateToProps = (state) => ({
  userArtists: state.userArtists
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
