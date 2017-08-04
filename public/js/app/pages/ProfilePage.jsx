'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'

class ProfilePage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div className="kth-menu-content">
        ProfilePage
      </div>
    )
  }
}

export default ProfilePage
