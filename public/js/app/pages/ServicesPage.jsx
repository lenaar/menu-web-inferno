'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import Col from 'inferno-bootstrap/lib/Col.jsx'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink.jsx'

class ServicesPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
            <Container id="study-admin">
              <Row>
                <Col className="header3">
                  <h3>Mina studier</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Nav vertical>
                    <NavItem>
                      <NavLink href="#">Studieöversikt</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Resultat</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Registreringar</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Tentamen</NavLink>
                      <NavLink href="#" className="sub-nav">Kommande tentamen</NavLink>
                      <NavLink href="#" className="sub-nav">Inscannade tentor</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Kommande kurser</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Intyg</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Examensansökan</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col>
                  <Nav vertical>
                    <NavItem>
                      <NavLink href="#">Bibliotek</NavLink>
                      <NavLink href="#" className="sub-nav">Grupprum</NavLink>
                      <NavLink href="#" className="sub-nav">Arlig bibliometrisk uppföljning</NavLink>
                      <NavLink href="#" className="sub-nav">Artiklar och böcker</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Lediga datorer i Datorsalarna</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#">Forskarstudier</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">UG-grupper</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </Container>
        </div>
    )
  }
}

export default ServicesPage