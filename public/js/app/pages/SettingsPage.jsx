'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink.jsx'

class SettingsPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
          <Container id="settings-m">
            <Nav vertical>
              <NavItem>
                <NavLink href="#https://www.kth.se/social/home/subscriptions/edit?ref=pren">Prenumerationer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#https://www.kth.se/social/home/calendar/settings/">Exportera Mitt schema (t ex till mobiltelefon)</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#https://www.kth.se/internt/minasidor/installningar/mail.jsp">Vidarebefordran av e-post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#https://www.kth.se/student/minasidor/installningar/tempaddress">Student: Tillfällig adress</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#https://www.kth.se/student/minasidor/installningar/phone">Student: Telefonnummer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#https://login.sys.kth.se/peap.html">Trådlöst nätverk</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#https://login.kth.se/changePassword.jsp">Byt lösenord</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#https://www.kth.se/social/home/../accounts/logout/">Logga ut</NavLink>
              </NavItem>
          </Nav>
        </Container>
      </div>
    )
  }
}

export default SettingsPage