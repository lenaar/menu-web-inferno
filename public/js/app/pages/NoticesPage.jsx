'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Badge from 'inferno-bootstrap/lib/Badge.jsx'


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
          <h4>Att göra</h4>
          <p>2017-08-20 - 2017-09-05 | <a href="#register">Du har registreringar att göra. Registrering är oppen</a></p>
          <h4>Information markerad som viktig eller brådskande</h4>
          <h4>Deadlines</h4>
          <h4><a href="#schema">Mitt schema </a><Badge pill color="primary">10</Badge></h4>
            <hr />
          <h4>Händelsesr</h4>
          <p>8 juni 18:22 | Algebra och geometri: Inlägg <a href="#comment">"Hej! Jag har hittat felating engelsk terminologi ..."</a> har kommenterats av Rasmus Kaj</p>
          <p>15 juni 15:13 | Feedback från användare: Inlägg <a href="#comment">"Just nu arbetar vi med att byta server för detta ..."</a> har kommenterats av Rasmus Kaj </p>
        </div>
    )
  }
}

export default NoticesPage