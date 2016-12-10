import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserArtist } from '../actions/index';

class FilterSidebar extends Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    this.props.fetchUserArtist(token);
  }
  componentDidUpdate() {
    const artists = this.props.userArtists;
    console.log('artists on update', artists);
  }
  render() {
    return (
      <ul>
        <li>Favourite concerts</li>
        <li>Artist</li>
        <ul>
          <li>Bonobo</li>
          <li>Claptone</li>
          <li>Moderat</li>
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
