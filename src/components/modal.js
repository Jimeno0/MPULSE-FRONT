import React, { Component } from 'react';
import LoginForm from './login_form';
import RegisterForm from './register_form';

class Modal extends Component{
  onSubmit(props){
    this.props.loginUser(props);
    console.log('yippi hay yai!');
    this.closeModal();
  }
  closeModal(){
    document.getElementsByClassName("modal")[0].style.setProperty('display','none');
  }
  render(){
    return(
      <div className="modal">
        <div className="modal-content">
          <button className="close-modal-btn" onClick={this.closeModal}>
            <img src="./assets/icons/X.svg" alt="close"></img>
          </button>
          <div className="clearfix"></div>
          <div className="container">
            <div className="row">
              <img className="modal-logo" alt="logo" src="./assets/icons/MPULSE_logo_big.svg"/>
              <div className="one-half column">
              </div>
            </div>
            <div className="row">
              <div className="one-half column">
                <LoginForm />
              </div>
              <div className="one-half column">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Modal;