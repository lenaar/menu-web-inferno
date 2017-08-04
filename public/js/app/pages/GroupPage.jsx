'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'

class GroupPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <Animated className="kth-menu-page" prefix="PageAnimation">
        <div className="kth-menu-content">
          Social groupS
        </div>
      </Animated>
    )
  }
}

export default GroupPage