import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

import { loginUser } from '../actions/index';

class Modal extends Component{
  onSubmit(props){
    this.props.loginUser(props);
    console.log('yippi hay yai!');
    document.getElementsByClassName("modal")[0].style.setProperty('display','none');
  }

  render(){
    const handleSubmit = this.props.handleSubmit;
    const email = this.props.fields.email;
    const password = this.props.fields.password;

    return(
      <div style={{display:this.props.display}} id="myModal" className="modal">
        <div className="modal-content">
          <button style={{float:'right', border:'none'}} onClick={this.props.handleDisplay}>x</button>
          <div style={{clear:'both'}}></div>
          <div className="container">

            <div className="row">
              <div className="one-half column">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <p>Log in</p>
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
              </div>
              <div className="one-half column">
                {/* <form onSubmit={this.handlerLogin.bind(this)}>
                  <p>Sign up</p>
                  <input className="u-full-width" type="text" placeholder="User name"/>
                  <input className="u-full-width" type="email" placeholder="email"/>
                  <input className="u-full-width" type="password" placeholder="password"/>
                  <button className="u-full-width" type="submit">Register</button>
                </form> */}
              </div>


            </div>
          </div>

        </div>
      </div>
    )
  }
}

function validate(value) {
  const errors = {};

  if (!value.email) {
    errors.email = 'Enter a email';
  }
  if (!value.password || value.password.length < 8) {
    errors.password = 'Password should has more than 8 chars';
  }
  return errors;
}

export default reduxForm({
  form: 'LoginForm',
  fields:['email','password'],
  validate
},null, { loginUser })(Modal);