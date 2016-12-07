import React, {Component} from 'react';

class Modal extends Component{
  render(){
    return(
      <div style={{display:this.props.display}} id="myModal" className="modal">
        <div className="modal-content">
          <button style={{float:'right', border:'none'}} onClick={this.props.handleDisplay}>x</button>
          <div style={{clear:'both'}}></div>
          <div className="container">

            <div className="row">
              <div className="one-half column">
                <form>
                  <p>Log in</p>
                  <input className="u-full-width" type="email" placeholder="email"/>
                  <input className="u-full-width" type="text" placeholder="password"/>
                  <button className="u-full-width" type="submit">Log in</button>
                </form>
              </div>
              <div className="one-half column">
                <form>
                  <p>Sign up</p>
                  <input className="u-full-width" type="text" placeholder="User name"/>
                  <input className="u-full-width" type="email" placeholder="email"/>
                  <input className="u-full-width" type="text" placeholder="password"/>
                  <button className="u-full-width" type="submit">Register</button>
                </form>
              </div>


            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Modal;