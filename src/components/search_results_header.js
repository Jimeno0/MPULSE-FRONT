import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addArtistToFav, removeArtistFromFav } from '../actions/index';


class SearchResultHeader extends Component {

  followArtist(event) {
    const params = {
      token: this.props.user.token,
      artists: { name: event.target.value }
    };
    this.props.addArtistToFav(params);
    console.log('following!!');
  }
  unfollowArtist(event) {
    const params = {
      token: this.props.user.token,
      name: event.target.value
    };
    this.props.removeArtistFromFav(params);
  }

  renderFollowButton() {
    const alreadyFollowing = this.props.userArtists.find(artist => (
       artist.name === this.props.searchedArtist
     ));
    const btnText = alreadyFollowing ? 'unfollow artist' : 'follow artist';
    const handler = alreadyFollowing ? this.unfollowArtist.bind(this) : this.followArtist.bind(this);

    return (
      <button
        value={this.props.searchedArtist}
        onClick={handler}
      >{btnText}
      </button>
    );
  }

  render() {
    const { searchedArtist, searchConcerts } = this.props;
      let header = null;

      if (searchConcerts.length === 0 && !searchedArtist) {
        header = '';
      } else if (searchConcerts.length === 0 && searchedArtist) {
        header = (
          <div className="row search-result-header">
            <span>No concerts for {searchedArtist}</span>
          </div>
        );
      } else if (searchConcerts && searchedArtist) {
        header = (
            <div className="row search-result-header">
              <span>Search for {searchedArtist}</span>
              {this.renderFollowButton()}
            </div>
          );
      }
    return (
      <div >
        { header }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ addArtistToFav, removeArtistFromFav }, dispatch)
);

const mapStateToProps = (state) => ({
   searchedArtist: state.searchedArtist,
   searchConcerts: state.searchConcerts,
   user: state.user,
   userArtists: state.userArtists
 });

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultHeader);

