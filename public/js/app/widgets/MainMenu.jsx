'use strict'

import Component from 'inferno-component'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import { Link } from 'inferno-router'
import classnames from 'classnames'

class MainMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false
    }
  }

  componentDidMount () {
    this.setState({
      active: true
    })
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div id='kth-menu-container' className={classnames(!this.state.active && 'InfernoAnimation--noAnim')}>
        <Nav>
          <NavItem>
            <Link to='/menu/profile'>Profile</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/schedule'>Schedule</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/course'>Course</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/program'>Program</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/group'>Group</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/services'>Services</Link>
          </NavItem>
        </Nav>
        <div id="kth-menu-page-container">{this.props.children}</div>
      </div>
    )
  }
}

export default MainMenu
