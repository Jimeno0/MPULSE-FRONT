import React, { Component } from 'react';

export default class Modal extends Component {
  onSubmit(props) {
    this.props.loginUser(props);
    this.closeModal();
  }
  closeModal() {
    document.getElementsByClassName('modal')[0].style.setProperty('display', 'none');
  }
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close-modal-btn" onClick={this.closeModal}>
            <img src="./assets/icons/X.svg" alt="close" />
          </button>
          <div className="clearfix"></div>
          <div className="container">
            <div className="row">
              <img className="modal-logo" alt="logo" src="./assets/icons/MPULSE_logo_big.svg" />
            </div>
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
