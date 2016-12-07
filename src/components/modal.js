import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

import { loginUser } from '../actions/index';

class Modal extends Component{

  handlerLogin(event){
    event.preventDefault();
    console.log(event);

  this.props.handleDisplay(event);
  }

  handlerRegister(event){
    event.preventDefault(event);
    console.log(event);

  this.props.handleDisplay(event);
  }

  render(){
    const handleSubmit = this.props.handleSubmit;
    const email = this.props.fields.email;
    const password = this.props.fields.password;
    console.log(email);

    return(
      <div style={{display:this.props.display}} id="myModal" className="modal">
        <div className="modal-content">
          <button style={{float:'right', border:'none'}} onClick={this.props.handleDisplay}>x</button>
          <div style={{clear:'both'}}></div>
          <div className="container">

            <div className="row">
              <div className="one-half column">
                <form onSubmit={handleSubmit(this.props.loginUser)}>
                  <p>Log in</p>
                  <input className="u-full-width" type="email" placeholder="email" {...email}  />
                  <input className="u-full-width" type="password" placeholder="password" {...password} />
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

export default reduxForm({
  form: 'LoginForm',
  fields:['email','password']
},null, { loginUser })(Modal);