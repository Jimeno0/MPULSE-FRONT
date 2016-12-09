import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResultHeader extends Component {
  render() {
    console.log('artist', this.props.artistSearched);
    const { artistSearched } = this.props;
      let header = null;
    if (artistSearched) {
      header = (
        <div>
          <span>Search for {artistSearched}</span>
          <button>Follow artist</button>
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

const mapStateToProps = (state) => ({ artistSearched: state.artist });

export default connect(mapStateToProps)(SearchResultHeader);

// export default SearchResultHeader;
