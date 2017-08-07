'use strict'

import Component from 'inferno-component'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import Badge from 'inferno-bootstrap/lib/Badge.jsx'
import { Link } from 'inferno-router'
import classnames from 'classnames'
import { Animated, CrossFade } from 'inferno-animation'

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
        <Nav className="main-m">
          <NavItem>
            <Link to='/menu/profile'>Lena</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/schedule'>Schema</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/course'>Kurser&Program</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/group'>Grupper</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/services'>Studieadministrationn</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/mail'>Mail</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/notices'> <Badge pill color="danger">10</Badge>   Noticer</Link>
          </NavItem>
          <NavItem>
            <Link to='/menu/settings'>Inställningar</Link>
          </NavItem>
        </Nav>
        {this.props.children && <Animated prefix="PageAnimation" id="kth-menu-page-container">
          <CrossFade className="kth-menu-page" prefix="MenuCrossFade--Animation">
            {this.props.children}
          </CrossFade>
        </Animated>}
      </div>
    )
  }
}

export default MainMenu
