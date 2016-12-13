import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConcerts, setSearchedArtist } from '../actions/index';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  handlerSubmit(event) {
    event.preventDefault();
    const term = capitalizeFirstLetter(this.state.term);

    this.props.fetchConcerts(term);
    this.props.setSearchedArtist(term);
    this.setState({ term: '' });

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
  render() {
    return (
      <div className="search-bar">
        <div className="header-slogan">
          <p className="header-title">Lorem ipsum dolor sit amet</p>
          <p className="header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <form onSubmit={this.handlerSubmit.bind(this)}>
          <input
            type='text' placeholder='Search artist...'
            value={this.state.term}
            onChange={(event) => { this.setState({ term: event.target.value }); }}
          />
        </form>
      </div>

    );
  }
}
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchConcerts, setSearchedArtist }, dispatch
  ));

export default connect(null, mapDispatchToProps)(SearchInput);
