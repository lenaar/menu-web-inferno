'use strict'

import Component from 'inferno-component'

class ProgramPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div className="kth-menu-content">
        PROGRAMS
      </div>
    )
  }
}

export default ProgramPage