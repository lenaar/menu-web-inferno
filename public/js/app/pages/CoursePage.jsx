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

import { Filter, FilterHeader, FilterItem } from '../widgets/Filter.jsx'

function Notices ({ status, points }) {
  return (
    <Container id="courses-program">
      <Row className="notice">
        <Col xs="4" className="progress-section">
          <ButtonGroup>
            <Button color="primary">{ points + 'Hp'}</Button>
            <Button>Studieresultat</Button>
          </ButtonGroup>
        </Col>
        <Col className="alert-section">
          <Alert color="warning">
            {status === 'open' ? 'Registrering öppen' : 'Registrering stängd'}
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

function SubjectLink ({href, children}) {
  return (
    <NavItem>
      <NavLink href={href}>{children}</NavLink>
    </NavItem>
  )
}

function Subject ({title, children}) {
  return (
    <div>
      <h4>{title}</h4>
      <Nav  vertical className="white-m">
        {children}
      </Nav>
    </div>
  )
}

function SubSection ({children}) {
  return (
    <Row>
      <Col>
        {children}  
      </Col>
    </Row>
  )
}

function SectionHeader ({title}) {
  return (
    <Row>
      <Col>
        <h3>{title}</h3>  
      </Col>
    </Row>
  )
}

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
            <Notices status="open" points={50} />

              <Container className="programs">
                <SectionHeader title="Mina program"/>

                <SubSection>
                    <Subject title="Civilingenjörsutbildning i datateknik(CDATE, 300hp)">
                      <SubjectLink href="http://localdev.kth.se:8000/social/program/cdate/">Programinformation</SubjectLink>
                    </Subject>
                </SubSection>
              </Container>
              
              <Container className="courses">
                <SectionHeader title="Mina kurser"/>
                <SubSection>
                    <Filter onChange={this.didFilter} value={this.state.filterValue}>
                      <FilterHeader>Filtrera:</FilterHeader>
                      <FilterItem value="comming">Kommande</FilterItem>
                      <FilterItem value="current">Aktuella</FilterItem>
                      <FilterItem value="unfinished">Oavslutade</FilterItem>
                      <FilterItem value="finished">Avslutade</FilterItem>
                    </Filter>
                </SubSection>
              <Row>
                <Col>
                <SubSection>
                    <Subject title="Algebra och geometri (SF1624)">
                      <SubjectLink href="http://localdev.kth.se:8000/social/course/SF1624/">Kursinformation</SubjectLink>
                      <SubjectLink href="https://kth.test.instructure.com/courses/2340">HT179</SubjectLink>
                      <SubjectLink href="https://kth.test.instructure.com/courses/2339">HT173</SubjectLink>
                      <SubjectLink href="https://kth.test.instructure.com/courses/2341">HT176</SubjectLink>
                    </Subject>
                    
                    <Subject title="Den hållbara ingenjören i trådlösa system (EQ2220)">
                      <SubjectLink href="http://localdev.kth.se:8000/social/course/EQ2220/">Kursinformation</SubjectLink>
                    </Subject>

                    <Subject title="Ledarskap för säkerhet i kärnteknisk verksamhet (SH2610)">
                      <SubjectLink href="http://localdev.kth.se:8000/social/course/SH2610/">Kursinformation</SubjectLink>
                      <SubjectLink href="https://kth.test.instructure.com/courses/2792">HT171 (ej publicerad)</SubjectLink>
                      <SubjectLink href="https://kth.test.instructure.com/courses/2791">HT172 (ej publicerad)</SubjectLink>
                      <SubjectLink href="https://kth.test.instructure.com/courses/302">HT162 (ej publicerad)</SubjectLink>
                    </Subject>
                </SubSection>
              </Col>
              <Col>
                <SubSection>
                  <Subject title="Lärande och undervisning i högre utbildning (LH231V)">
                    <SubjectLink href="http://localdev.kth.se:8000/social/course/LH231V/">Kursinformation</SubjectLink>
                    <SubjectLink href="https://kth.test.instructure.com/courses/2340">HT171</SubjectLink>
                    <SubjectLink href="https://kth.test.instructure.com/courses/2339">HT161</SubjectLink>
                    <SubjectLink href="https://kth.test.instructure.com/courses/2341">HT162</SubjectLink>
                  </Subject>
              </SubSection>
            </Col>
            </Row>
            </Container>
        </div>
    )
  }
}

export default CoursePage
