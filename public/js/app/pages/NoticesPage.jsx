'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Badge from 'inferno-bootstrap/lib/Badge.jsx'
import Card from 'inferno-bootstrap/lib/Card/Card.jsx'
import CardBlock from 'inferno-bootstrap/lib/Card/CardBlock.jsx'
import CardHeader from 'inferno-bootstrap/lib/Card/CardHeader.jsx'

class NoticesPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
            <Badge pill color="danger">10</Badge>
            <hr />
          <h3>Mina notifieringar</h3>
          <Card className="notices">
            <CardHeader>Att göra</CardHeader>
            <CardBlock>
              <p>2017-08-20 - 2017-09-05 | <a href="#register">Du har registreringar att göra. Registrering är oppen</a></p>
            </CardBlock>
          </Card>
          <Card className="notices">
            <CardHeader>Information markerad som viktig eller brådskande</CardHeader>
            <CardBlock>
              <p>2017-08-20 - 2017-09-05 | <a href="#register">Du har registreringar att göra. Registrering är oppen</a></p>
            </CardBlock>
          </Card>
          <Card className="notices">
            <CardHeader>Deadlines</CardHeader>
            <CardBlock>
              <p>2017-08-20 - 2017-09-05 | <a href="#register">Du har registreringar att göra. Registrering är oppen</a></p>
            </CardBlock>
          </Card>
          <h4><a href="#schema">Mitt schema </a><Badge pill color="primary">10</Badge></h4>
            <hr />

          <Card className="notices">
            <CardHeader>Händelser</CardHeader>
            <CardBlock>
              <p>8 juni 18:22 | Algebra och geometri: Inlägg <a href="#comment">"Hej! Jag har hittat felating engelsk terminologi ..."</a> har kommenterats av Rasmus Kaj</p>
              <p>15 juni 15:13 | Feedback från användare: Inlägg <a href="#comment">"Just nu arbetar vi med att byta server för detta ..."</a> har kommenterats av Rasmus Kaj </p>
            </CardBlock>
          </Card>
        </div>
    )
  }
}

export default NoticesPage