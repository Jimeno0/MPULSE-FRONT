import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/index';


class LoginForm extends Component{
  onSubmit(props){
    this.props.loginUser(props);
    this.closeModal();
  }
  closeModal(){
    document.getElementsByClassName("modal")[0].style.setProperty('display','none');
  }

  render(){
    const handleSubmit = this.props.handleSubmit;
    const email = this.props.fields.email;
    const password = this.props.fields.password;

    return(

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {email.touched ? email.error : ''}
        <input className="u-full-width" type="email" placeholder="Email" {...email}  />
        {password.touched ? password.error : ''}
        <input className="u-full-width" type="password" placeholder="Password" {...password} />
        <button className="u-full-width modal-forgot-password" type="submit">Forgot password?</button>
        <button className="u-full-width modal-submit" type="submit">LOG IN</button>
      </form>

    )
  }
}

function validate(value) {
  const errors = {};

  if (!value.email) {
    errors.email = 'Enter a email';
  }
  if (!value.password || value.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  return errors;
}

export default reduxForm({
  form: 'LoginForm',
  fields:['email','password'],
  validate
},null, { loginUser })(LoginForm);