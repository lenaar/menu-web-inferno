'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import Col from 'inferno-bootstrap/lib/Col.jsx'
import Progress from 'inferno-bootstrap/lib/Progress.jsx'

import Alert from 'inferno-bootstrap/lib/Alert.jsx'
import Button from 'inferno-bootstrap/lib/Button.jsx'
import ButtonGroup from 'inferno-bootstrap/lib/ButtonGroup.jsx'

import { Filter, FilterHeader, FilterItem } from '../widgets/Filter.jsx'
import { SubjectLink, SectionHeader, SubjectNav, CourseNav, CourseMaterialLink} from '../widgets/SubMenuLayout.jsx'


//card imports
import Card from 'inferno-bootstrap/lib/Card/Card.jsx'
import CardBlock from 'inferno-bootstrap/lib/Card/CardBlock.jsx'

function ProgramProgress ({points}) {
    return (
      <Col xs="5" className="progress-section">
        <div className="text-center"><a href="#result">{points + 'Hp'} Studieresultat</a></div>
        <Progress value={points} color="success"/>
      </Col>
    )
}

function Notices ({ status, points }) {
  return (
    <Container id="courses-program">
      <Row className="notice">
        <Col className="alert-section">
          <Alert color="warning" onClose role="alert">
            <span class="message">
              {status === 'open' ? 'Registrering öppen' : 'Registrering stängd'}
            </span>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

function ContainerRow ({className, children}){
  return (
    <Container className={className}>
      <Row>
        {children}
      </Row>
    </Container>
  )
}

function ProgramBase ({title, href}) {
  return(
  <Card>
    <CardBlock className="program-card">
      <SubjectNav title={title}>
        <SubjectLink href={href}>Programinformation</SubjectLink>
      </SubjectNav>
    </CardBlock>
  </Card>
  )
}

function CourseBase ({title, href, icon, children}) {
  return(
    <Card>
      <CardBlock>
        <CourseNav title={title} icon={icon}>
          <SubjectLink  href={href}>Kursinformation</SubjectLink>
          {children} 
        </CourseNav>
      </CardBlock>
    </Card>
  )
}

function CourseSection({filter}) { //current, finished, unfinished, coming courses
  return (
    <Row>
      <Col>
        <CourseBase title="Algebra och geometri (SF1624)" href="http://localdev.kth.se:8000/social/course/EQ2220/" icon="course-pie-grey-50">
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2340">HT179</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2339">HT173</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2341">HT176</CourseMaterialLink>
        </CourseBase>

        <CourseBase title="Den hållbara ingenjören i trådlösa system (EQ2220)" href="http://localdev.kth.se:8000/social/course/EQ2220/" icon="course-pie-grey-25">
        </CourseBase>

        <CourseBase title="Ledarskap för säkerhet i kärnteknisk verksamhet (SH2610)" href="http://localdev.kth.se:8000/social/course/SH2610/" icon="course-pie-grey-75">
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2792">HT171 (ej publicerad)</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2791">HT172 (ej publicerad)</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/302">HT162 (ej publicerad)</CourseMaterialLink>
        </CourseBase>
      </Col>
      <Col>
        <CourseBase title="Lärande och undervisning i högre utbildning (LH231V)" href="http://localdev.kth.se:8000/social/course/LH231V/" icon="course-pie-grey-75">
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2340">HT171</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2339">HT161</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2341">HT162</CourseMaterialLink>
        </CourseBase> 
        <CourseBase title="Algebra och geometri (SF1624)" href="http://localdev.kth.se:8000/social/course/EQ2220/" icon="course-pie-grey-50">
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2340">HT179</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2339">HT173</CourseMaterialLink>
          <CourseMaterialLink href="https://kth.test.instructure.com/courses/2341">HT176</CourseMaterialLink>
        </CourseBase>
        <CourseBase title="Den hållbara ingenjören i trådlösa system (EQ2220)" href="http://localdev.kth.se:8000/social/course/EQ2220/" icon="course-pie-grey-25">
        </CourseBase>
      </Col>
    </Row>
  )
}

function CourseFilter({userType, didFilter, state}) { //todo: depends on teacher, student, superuser
  return (
      <Row>
        <Col>
        <Filter onChange={didFilter} value={state}>
          <FilterItem value="comming">Kommande</FilterItem>
          <FilterItem value="current">Aktuella</FilterItem>
          <FilterItem value="unfinished">Oavslutade</FilterItem>
          <FilterItem value="finished">Avslutade</FilterItem>
        </Filter>
        </Col>
      </Row>
  )
}

function ProgramContainer () {
  return (
  <Container className="programs">
    <SectionHeader title="Mina program">
      <ProgramProgress points={50} />
    </SectionHeader>
    <ProgramBase title="Civilingenjörsutbildning i datateknik(CDATE, 300hp)" href="http://localdev.kth.se:8000/social/program/cdate/"/>
  </Container>)
}

function CourseContainer ({didFilter, state, userType}) {
  return (
    <Container className="courses" >
      <SectionHeader title="Mina kurser" />
      <CourseFilter userType={userType} didFilter={didFilter} state={state}/> 
      <CourseSection filter="current"/>
    </Container>
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
        <Notices status="open"/>

        <ProgramContainer />
        
        <CourseContainer didFilter={this.didFilter} state={this.state.filterValue} userType="student" />
      </div>
    )
  }
}

export default CoursePage
