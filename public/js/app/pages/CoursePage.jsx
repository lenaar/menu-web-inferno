'use strict'

import Component from 'inferno-component'

class CoursePage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div className="kth-menu-content">
        Course page
      </div>
    )
  }
}

export default CoursePage
