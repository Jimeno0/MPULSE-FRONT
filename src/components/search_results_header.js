import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addArtistToFav } from '../actions/index';


class SearchResultHeader extends Component {

  handleFollowArtist(event) {
    const params = {
      token: this.props.user.token,
      artists: { name: event.target.value }
    };
    this.props.addArtistToFav(params);
  }
  renderFollowButton() {
    const alreadyFollowing = this.props.userArtists.find(artist => (
       artist.name === this.props.searchedArtist
     ));
    const btnText = alreadyFollowing ? 'unfollow artist' : 'follow artist';
    return (
      <button
        value={this.props.searchedArtist}
        onClick={this.handleFollowArtist.bind(this)}
      >{btnText}
      </button>
    );
  }
  render() {
    const { searchedArtist } = this.props;
      let header = null;
    if (searchedArtist) {
      header = (
        <div>
          <span>Search for {searchedArtist}</span>
          {this.renderFollowButton()}
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
   user: state.user,
   userArtists: state.userArtists
 });

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultHeader);

