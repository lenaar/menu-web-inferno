'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import Col from 'inferno-bootstrap/lib/Col.jsx'

class CoursePage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
            <Container className="columns courses">
              <Row>
                <Col><h3>Mina kurser</h3></Col>
              </Row>
              <Row className="filter">
                <Col ><a href="#">Favoriter </a> </Col>
                <Col >| <a href="#">Alla prenumerationer</a></Col>
              </Row>
              <Row>
                <Col xs="6">COURSE 1</Col>
                <Col xs="6">COURSE 2</Col>
              </Row>
            </Container>
        </div>
    )
  }
}

export default CoursePage
