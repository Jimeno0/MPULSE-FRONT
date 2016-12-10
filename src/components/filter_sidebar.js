import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserArtist } from '../actions/index';

class FilterSidebar extends Component {
  componentDidUpdate() {
    const user = this.props.user;
    console.log(user);
    this.props.fetchUserArtist(user.token);
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

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);
// export default FilterSidebar;
