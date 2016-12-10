import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserArtist } from '../actions/index';

class FilterSidebar extends Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    this.props.fetchUserArtist(token);
  }
  renderArtists() {
    const { userArtists } = this.props;
    console.log(userArtists);
    if (userArtists && userArtists[0]) {
      return userArtists.map((artist) => (<li key={artist.name}>{artist.name}</li>));
    }
      return (<li>No favourites artist yet</li>);
  }
  render() {
    return (
      <ul>
        <li>Favourite concerts</li>
        <li>Artist</li>
        <ul>
          {this.renderArtists()}
        </ul>
      </ul>

    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({ fetchUserArtist }, dispatch));

const mapStateToProps = (state) => ({
  userArtists: state.userArtists
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
