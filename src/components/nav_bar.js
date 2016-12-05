import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  handleLogout(){

  }
  handleLogin(){

  }
  render() {

    return (
      <Menu>
        <Menu.Menu position='right'>
          <Menu.Item name='logout' onClick={this.handleLogout} />
          <Menu.Item name='logout' onClick={this.handleLogin} />
          <Menu.Item icon='search' />
        </Menu.Menu>
      </Menu>
    )
  }
}