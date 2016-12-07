import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { registerUser } from '../actions/index';


class RegisterForm extends Component{
  onSubmit(props){
    this.props.registerUser(props);
    this.closeModal();
  }
  closeModal(){
    document.getElementsByClassName("modal")[0].style.setProperty('display','none');
  }

  render(){
    const handleSubmit = this.props.handleSubmit;

    const username = this.props.fields.username;
    const email = this.props.fields.email;
    const password = this.props.fields.password;

    return(

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <p>Sign up</p>
        <input className="u-full-width" type="text" placeholder="user name" {...username}  />
        <div>
          {username.touched ? username.error : ''}
        </div>
        <input className="u-full-width" type="email" placeholder="email" {...email}  />
        <div>
          {email.touched ? email.error : ''}
        </div>
        <input className="u-full-width" type="password" placeholder="password" {...password} />
        <div>
          {password.touched ? password.error : ''}
        </div>
        <button className="u-full-width" type="submit">Log in</button>
      </form>

    )
  }
}

function validate(value) {
  const errors = {};
  if (!value.username) {
    errors.username = 'Enter a username';
  }
  if (!value.email) {
    errors.email = 'Enter a email';
  }
  if (!value.password || value.password.length < 8) {
    errors.password = 'Password should has more than 8 chars';
  }
  return errors;
}

export default reduxForm({
  form: 'registerForm',
  fields:['username','email','password'],
  validate
},null, { registerUser })(RegisterForm);