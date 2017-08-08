'use strict'

import Component from 'inferno-component'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import Badge from 'inferno-bootstrap/lib/Badge.jsx'
import { Link } from 'inferno-router'
import classnames from 'classnames'
import { Animated, CrossFade } from 'inferno-animation'

function MenuLink ({href, title}) {
  return (
    <NavItem>
      <Link className="nav-link" to={href}>{title}</Link>
    </NavItem>
  )
}
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
          <MenuLink href="/menu/profile" title="Lena" />
          <MenuLink href="/menu/schedule" title="Schema" />
          <MenuLink href="/menu/course" title="Kurser&Program" />
          <MenuLink href="/menu/group" title="Grupper" />
          <MenuLink href="/menu/services" title="Studieadministrationn" />
          <MenuLink href="/menu/mail" title="Mail" />
          <MenuLink href="/menu/notices" title="Noticer" /> 
          <MenuLink href="/menu/settings" title="Inställningar" />
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
