'use strict'

import Component from 'inferno-component'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import Col from 'inferno-bootstrap/lib/Col.jsx'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink.jsx'

class SchedulePage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div className="kth-menu-content">
         <Container id="schedule-m">
              <Row>
                <Col xs="4">
                  <h3>Måndag 14 augusti</h3>
                  <dl>
                    <dt>Tid: 08:00-10:00</dt>
                    <dd><a href="#https://www.kth.se/social/program/cmast/event/111818-2/">Upprop</a></dd>
                    <dd>Plats: <a href="#https://www.kth.se/places/room/id/31e731ab-b185-46b4-b0d3-bd2408563a3e">F1</a>, <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">F2</a></dd>
                    <dd><a href="#https://www.kth.se/social/program/cmast/">Civilingenjörsutbildning i maskinteknik (CMAST, 300 hp)</a></dd>
                  </dl>
                  <dl>
                   <dt>Tid: 08:00-10:00</dt>
                    <dd>Omtenta</dd>
                    <dd>Plats: <a href="#https://www.kth.se/places/room/id/31e731ab-b185-46b4-b0d3-bd2408563a3e">F1</a>, <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">F2</a></dd>
                    <dd><a href="#https://www.kth.se/social/program/cmast/">Civilingenjörsutbildning i maskinteknik (CMAST, 300 hp)</a></dd>
                  </dl>
                </Col>
                <Col xs="4">
                  <h3> Tisdag 15 augusti</h3>
                  <dl>
                    <dt>Tid: 08:00-10:00</dt>
                    <dd>Omtenta</dd>
                    <dd>Plats: <a href="#https://www.kth.se/places/room/id/31e731ab-b185-46b4-b0d3-bd2408563a3e">F1</a>, <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">F2</a></dd>
                    <dd><a href="#https://www.kth.se/social/program/cmast/">Civilingenjörsutbildning i maskinteknik (CMAST, 300 hp)</a></dd>
                  </dl>
                  <dl>
                    <dt>Tid: 08:00-10:00</dt>
                    <dd>Omtenta</dd>
                    <dd>Plats: <a href="#https://www.kth.se/places/room/id/31e731ab-b185-46b4-b0d3-bd2408563a3e">F1</a>, <a href="#https://www.kth.se/places/room/id/5dc45052-b5ce-4e6c-9ca6-7e22f9eee538">F2</a></dd>
                    <dd><a href="#https://www.kth.se/social/program/cmast/">Civilingenjörsutbildning i maskinteknik (CMAST, 300 hp)</a></dd>
                  </dl>
                </Col>
              </Row>
            </Container>
      </div>
    )
  }
}

export default SchedulePage
