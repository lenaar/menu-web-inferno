'use strict'

import Component from 'inferno-component'
// import { connect } from 'inferno-mobx'

// @connect(['searchStore'])
class MenuPage extends Component {
  constructor (props) {
    super(props)
  }

  render ({ searchStore }) {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
      <div id="kth-menu-container">
        My Menu
      </div>
    )
  }
}

export default MenuPage
