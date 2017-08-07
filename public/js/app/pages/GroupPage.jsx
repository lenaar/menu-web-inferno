'use strict'

import Component from 'inferno-component'

class GroupPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div className="kth-menu-content">
        <h2>Social group</h2>
      </div>
    )
  }
}

export default GroupPage