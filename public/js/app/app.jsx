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
import SchedulePage from './pages/SchedulePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import MainMenu from './widgets/MainMenu.jsx'
import CoursePage from './pages/CoursePage.jsx'
import ProgramPage from './pages/ProgramPage.jsx'
import GrourpPage from './pages/GroupPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

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
          <Route path="/schedule" component={ SchedulePage} />
          <Route path="/course" component={ CoursePage }/>
          <Route path="/program" component={ ProgramPage }/>
          <Route path="/group" component={ GrourpPage }/>
          <Route path="/services" component={ ServicesPage }/>
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