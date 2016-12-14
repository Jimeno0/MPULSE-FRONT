import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { updateUser } from '../actions/index';


class UpdateForm extends Component {
  onSubmit(props) {
    this.props.updateUser(props);
    this.closeModal();
  }
  closeModal() {
    document.getElementsByClassName('modal')[0].style.setProperty('display', 'none');
  }

  render() {
    const handleSubmit = this.props.handleSubmit;
    const name = this.props.fields.name;
    const password = this.props.fields.password;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {name.touched ? name.error : ''}
        <input className="u-full-width" type="text" placeholder="Username" {...name} />
        {password.touched ? password.error : ''}
        <input className="u-full-width" type="password" placeholder="Password" {...password} />
        <button className="u-full-width modal-submit" type="submit">Update profile</button>
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.name) {
    errors.name = 'Enter a name';
  }
  if (!value.password || value.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  return errors;
}

export default reduxForm({
    form: 'registerForm',
    fields: ['name', 'password'],
    validate
  }, null, { updateUser })(UpdateForm);
