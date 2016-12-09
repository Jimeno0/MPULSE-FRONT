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
    console.log('artist', this.props.artistSearched);
    const { artistSearched } = this.props;
      let header = null;
    if (artistSearched) {
      header = (
        <div>
          <span>Search for {artistSearched}</span>
          <button
            value={artistSearched}
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
   artistSearched: state.artist,
   user: state.user
 });

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultHeader);

