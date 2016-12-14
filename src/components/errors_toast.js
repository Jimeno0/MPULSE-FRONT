import React, { Component } from 'react';
import { connect } from 'react-redux';

 class ErrorsToast extends Component {

  render() {
    let error;
    let errorClass = 'toast';
    if (this.props.error) {
      error = this.props.error.error;
      errorClass = 'toast show';
      setTimeout(() => {
        document.querySelector('.toast').className = 'toast';
      }, 3000);
    }
    return (
      <div className={errorClass} >
        <p>Error: {error}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.Errors
});

export default connect(mapStateToProps)(ErrorsToast);
