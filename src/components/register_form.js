import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { registerUser } from '../actions/index';


class RegisterForm extends Component {
  onSubmit(props) {
    this.props.registerUser(props);
    this.closeModal();
  }
  closeModal() {
    document.getElementsByClassName('modal')[0].style.setProperty('display', 'none');
  }

  render() {
    const handleSubmit = this.props.handleSubmit;

    const name = this.props.fields.name;
    const email = this.props.fields.email;
    const password = this.props.fields.password;

    return (

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {name.touched ? name.error : ''}
        <input className="u-full-width" type="text" placeholder="Username" {...name} />

        {email.touched ? email.error : ''}
        <input className="u-full-width" type="email" placeholder="Email" {...email} />
        {password.touched ? password.error : ''}

        <input className="u-full-width" type="password" placeholder="Password" {...password} />

        <button className="u-full-width modal-submit" type="submit">SIGN UP</button>
      </form>

    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.name) {
    errors.name = 'Enter a name';
  }
  if (!value.email) {
    errors.email = 'Enter a email';
  }
  if (!value.password || value.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  return errors;
}

export default reduxForm({
    form: 'registerForm',
    fields: ['name', 'email', 'password'],
    validate
  }, null, { registerUser })(RegisterForm);
