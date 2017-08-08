'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import { SubjectLink} from '../widgets/SubMenuLayout.jsx'


class SettingsPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
          <Container>
            <Nav vertical>
              <SubjectLink href="#https://www.kth.se/social/home/subscriptions/edit?ref=pren">Prenumerationer </SubjectLink>
              <SubjectLink href="#https://www.kth.se/social/home/calendar/settings/"> Exportera Mitt schema (t ex till mobiltelefon</SubjectLink>
              <SubjectLink href="#https://www.kth.se/internt/minasidor/installningar/mail.jsp"> Vidarebefordran av e-post</SubjectLink>
              <SubjectLink href="#https://www.kth.se/student/minasidor/installningar/tempaddress"> Student: Tillfällig adress</SubjectLink>
              <SubjectLink href="#https://www.kth.se/student/minasidor/installningar/phone">Student: Telefonnummer </SubjectLink>
              <SubjectLink href="#https://login.sys.kth.se/peap.html">Trådlöst nätverk </SubjectLink>
              <SubjectLink href="#https://login.kth.se/changePassword.jsp"> Byt lösenord</SubjectLink>
              <SubjectLink href="#https://www.kth.se/social/home/../accounts/logout/"> Logga ut</SubjectLink>
          </Nav>
        </Container>
      </div>
    )
  }
}

export default SettingsPage