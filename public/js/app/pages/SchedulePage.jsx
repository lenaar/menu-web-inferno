'use strict'

import Component from 'inferno-component'

class SchedulePage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div className="kth-menu-content">
        <h2>SchedulePage</h2>
        <p>And some more cool stuff...</p>
      </div>
    )
  }
}

export default SchedulePage
