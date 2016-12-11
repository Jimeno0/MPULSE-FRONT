import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addArtistToFav } from '../actions/index';


class SearchResultHeader extends Component {

  handleFollowArtist(event) {
    console.log(event.target.value);
    const params = {
      token: this.props.user.token,
      artists: { name: event.target.value }
    };
    this.props.addArtistToFav(params);
  }

  render() {
    console.log('artist', this.props.searchedArtist);
    const { searchedArtist } = this.props;
      let header = null;
    if (searchedArtist) {
      header = (
        <div>
          <span>Search for {searchedArtist}</span>
          <button
            value={searchedArtist}
            onClick={this.handleFollowArtist.bind(this)}
          >Follow artist</button>
        </div>
      );
    } else {
      header = (<span>Search Results</span>);
    }

    return (
      <div className="row search-result-header">
        { header }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({ addArtistToFav }, dispatch));

const mapStateToProps = (state) => ({
   searchedArtist: state.searchedArtist,
   user: state.user
 });

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultHeader);

