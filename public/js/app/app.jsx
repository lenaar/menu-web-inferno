import Inferno from 'inferno'
// import { Provider } from 'inferno-mobx'

import { globalRegistry, createUtility } from 'component-registry'
import { Router, Route } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'
import i18n from '../../../i18n'

// Register translation utility for forms
// import { ITranslationUtil } from 'inferno-formlib/dist/interfaces'
/*
createUtility({
  implements: ITranslationUtil,
  message: i18n.message.bind(i18n)
}).registerWith(globalRegistry) 
*/

// Register widgets
// import 'inferno-formlib/dist/widgets/FormRow'

// Import stores
// import searchStore from './stores/searchStore'

// Import pages
import ProfilePage from './pages/ProfilePage.jsx'
import MainMenu from './widgets/MainMenu.jsx'

// Set up all the search entities
// require('./entities')


function routeFactory (initialPath) {
  let browserHistory
  if (typeof window !== 'undefined') {
    browserHistory = createBrowserHistory()
  } else {
    browserHistory = createMemoryHistory({ initialEntries: [ initialPath ] })
  }

  return (
      <Router history={ browserHistory }>
        <Route path="/menu" component={ MainMenu } >
          <Route path="/profile" component={ ProfilePage } />
        </Route>
      </Router>

  )
}

if (typeof window !== 'undefined') {
    const appRoutes = routeFactory()
    try {
      require('inferno-devtools')
    } catch (e) {
      console.log("Couldn't load inferno devtools")
    }
    Inferno.render(appRoutes, document.getElementById('kth-menu'))
}

export default routeFactory