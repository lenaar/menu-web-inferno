'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import Col from 'inferno-bootstrap/lib/Col.jsx'
import Alert from 'inferno-bootstrap/lib/Alert.jsx'
import Button from 'inferno-bootstrap/lib/Button.jsx'
import ButtonGroup from 'inferno-bootstrap/lib/ButtonGroup.jsx'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink.jsx'

import { Filter, FilterItem } from '../widgets/Filter.jsx'

class CoursePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filterValue: undefined
    }

    this.didFilter = this.didFilter.bind(this)
  }

  didFilter (val) {
    console.log('Did select: ', val)
    this.setState({
      filterValue: (val !== this.state.filterValue ? val : undefined)
    })
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
            <Container id="courses-program">
              <Row className="notice">
                <Col xs="4" className="progress-section">
                  <ButtonGroup>
                    <Button color="primary">50 Hp</Button>
                    <Button>Studieresultat</Button>
                  </ButtonGroup>
                </Col>
                <Col className="alert-section">
                  <Alert color="warning">
                    Regisrering öppen
                  </Alert>
                </Col>
              </Row>
            </Container>

              <Container>
                <Row>
                  <Col xs="3" className="programs">
                    <h3>Mina program</h3>
                    <h4> Civilingenjörsutbildning i datateknik(CDATE, 300hp)</h4>
                    <Nav vertical className="white-m">
                      <NavItem>
                        <NavLink href="#http://localdev.kth.se:8000/social/program/cdate/">Programinformation</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </Container>
              
              <Container>
                <Row>
                  <Col className="courses">
                    <h3>Mina kurser</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Filter onChange={this.didFilter} value={this.state.filterValue}>
                      <FilterItem value="comming">Kommande</FilterItem>
                      <FilterItem value="current">Aktuella</FilterItem>
                      <FilterItem value="unfinished">Oavslutade</FilterItem>
                      <FilterItem value="finished">Avslutade</FilterItem>
                    </Filter>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <h4>Algebra och geometri (SF1624)</h4>
                  <Nav vertical className="white-m">
                    <NavItem>
                      <NavLink href="#http://localdev.kth.se:8000/social/course/SF1624/">Kursinformation</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2340">HT179</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2339">HT173</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2341">HT176</NavLink>
                    </NavItem>
                  </Nav>
                  <h4>Den hållbara ingenjören i trådlösa system (EQ2220)</h4>
                  <Nav vertical className="white-m">
                    <NavItem>
                      <NavLink href="#http://localdev.kth.se:8000/social/course/EQ2220/">Kursinformation</NavLink>
                    </NavItem>
                  </Nav>
                  <h4>Ledarskap för säkerhet i kärnteknisk verksamhet (SH2610)</h4>
                  <Nav vertical className="white-m">
                    <NavItem>
                      <NavLink href="#http://localdev.kth.se:8000/social/course/SH2610/">Kursinformation</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2792">HT171 (ej publicerad)</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2791">HT172 (ej publicerad)</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/302">HT162 (ej publicerad)</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              <Col className="courses">

                  <h4>Lärande och undervisning i högre utbildning (LH231V)</h4>
                  <Nav vertical className="white-m">
                    <NavItem>
                      <NavLink href="#http://localdev.kth.se:8000/social/course/LH231V/">Kursinformation</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2340">HT171</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2339">HT161</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#https://kth.test.instructure.com/courses/2341">HT162</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </Container>
        </div>
    )
  }
}

export default CoursePage
