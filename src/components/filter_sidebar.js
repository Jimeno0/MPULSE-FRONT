import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterSidebar extends Component {
  componentWillMount() {
    const user = this.props.user;
    console.log('User: ', user );
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

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(FilterSidebar);
// export default FilterSidebar;
