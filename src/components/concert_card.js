import React, { Component } from 'react';
import { Dimmer, Image,Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

export default  class ConcertCard extends Component {
    constructor(props){
      super(props);
      this.state = {active: false};
      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);
    }
    handleShow(){
      this.setState({ active: true })
    }
    handleHide(){
      this.setState({ active: false })
    }
    render() {
      const concert = this.props.concert ? this.props.concert : ''
      const { active } = this.state
      const content = (
        <div>
          <span>Icono</span>
        </div>
      )

      return (
        <div>
          <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            src={concert.image}
          />
          <div>
            <span>{concert.date}</span>
            <span>{concert.name}</span>
            <span>{concert.venue},{concert.city},{concert.country}</span>
            <Button >Bottom</Button>
          </div>

        </div>
      )
    }
  }
