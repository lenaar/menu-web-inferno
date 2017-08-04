'use strict'

import Component from 'inferno-component'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink.jsx'
import { Link } from 'inferno-router'

class MainMenu extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div id='kth-menu-container'>
        <Nav>
          <NavItem>
            <Link to='/menu/profile'>Profile</Link>
          </NavItem>
          <NavItem>
            <NavLink href='#schema'>Schedule</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#course'>Course</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#program'>Program</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#group'>Group</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Services</NavLink>
          </NavItem>
        </Nav>
        <div id="kth-menu-page">{this.props.children}</div>
      </div>
    )
  }
}

export default MainMenu
