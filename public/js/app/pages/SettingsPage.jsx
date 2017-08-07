'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'

class SettingsPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
          <p><a href="#https://www.kth.se/social/home/subscriptions/edit?ref=pren"> Prenumerationer</a></p>
          
          <p><a href="#https://www.kth.se/social/home/calendar/settings/"> Exportera Mitt schema (t ex till mobiltelefon)</a></p>

          <p><a href="#https://www.kth.se/internt/minasidor/installningar/mail.jsp"> Vidarebefordran av e-post</a></p>

          <p><a href="#https://www.kth.se/student/minasidor/installningar/tempaddress"> Student: Tillfällig adress</a></p>

          <p><a href="#https://www.kth.se/student/minasidor/installningar/phone"> Student: Telefonnummer</a></p>

          <p><a href="#https://login.sys.kth.se/peap.html"> Trådlöst nätverk</a></p>

          <p><a href="#https://login.kth.se/changePassword.jsp"> Byt lösenord</a></p>

          <p><a href="#https://www.kth.se/social/home/../accounts/logout/"> Logga ut</a></p>

        </div>
    )
  }
}

export default SettingsPage