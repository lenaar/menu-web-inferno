'use strict'

import Component from 'inferno-component'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import Col from 'inferno-bootstrap/lib/Col.jsx'
import ListGroup from 'inferno-bootstrap/lib/List/ListGroup.jsx'
import ListGroupItem from 'inferno-bootstrap/lib/List/ListGroupItem.jsx'
import ListGroupItemHeading from 'inferno-bootstrap/lib/List/ListGroupItemHeading.jsx'
import ListGroupItemText from 'inferno-bootstrap/lib/List/ListGroupItemText.jsx'


class SchedulePage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div className="kth-menu-content">
         <Container>
              <Row>
                <Col xs="4">
                <ListGroupItemHeading><h3>Måndag 14 augusti</h3></ListGroupItemHeading>

                <ListGroup className="event-card">
                  <ListGroupItem>08:00-10:00 <i className="icon-calendar"></i></ListGroupItem>
                  <ListGroupItem><a href="#https://www.kth.se/social/program/cmast/event/111818-2/">Upprop</a></ListGroupItem>
                  <ListGroupItem>Plats: <a href="#https://www.kth.se/places/room/id/31e731ab-b185-46b4-b0d3-bd2408563a3e">F1</a> | <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">F2</a></ListGroupItem>
                  <ListGroupItem><a href="#https://www.kth.se/social/program/cmast/">Civilingenjörsutbildning i maskinteknik (CMAST, 300 hp)</a></ListGroupItem>
                </ListGroup>
                <ListGroup className="event-card">
                  <ListGroupItem key="1">08:00-10:00 <i className="icon-calendar"></i></ListGroupItem>
                  <ListGroupItem key="2"><a href="#https://www.kth.se/social/program/cmast/event/111818-2/">Förelasning</a></ListGroupItem>
                  <ListGroupItem key="3">Plats: <a href="#https://www.kth.se/places/room/id/31e731ab-b185-46b4-b0d3-bd2408563a3e">F1</a> | 
                    <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">F2</a> |
                    <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">Guld </a></ListGroupItem>
                  <ListGroupItem key="4"><a href="#https://www.kth.se/social/program/cmast/">Civilingenjörsutbildning i maskinteknik (CMAST, 300 hp)</a></ListGroupItem>
                </ListGroup>
                </Col>
                <Col xs="4">
                <ListGroupItemHeading><h3> Tisdag 15 augusti</h3></ListGroupItemHeading>

                  <ListGroup className="event-card">
                    <ListGroupItem>08:00-10:00 <i className="icon-calendar"></i></ListGroupItem>
                    <ListGroupItem><a href="#https://www.kth.se/social/program/cmast/event/111818-2/">Lab</a></ListGroupItem>
                    <ListGroupItem>Plats: <a href="#https://www.kth.se/places/room/id/31e731ab-b185-46b4-b0d3-bd2408563a3e">F1</a> |
                    <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">F2</a>|
                    <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">Q2</a>|
                    <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">Q31</a>|
                    <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">...</a></ListGroupItem>
                    <ListGroupItem><a href="#https://www.kth.se/social/program/cmast/">Civilingenjörsutbildning i maskinteknik (CMAST, 300 hp)</a></ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
      </div>
    )
  }
}

export default SchedulePage
