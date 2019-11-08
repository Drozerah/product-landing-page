/**
 * MODULES
 */
import * as appService from './utils/app.service.js'
/**
 * Files (webpack importation)
 */
import '../../favicon.png' // import favicon file
import '../../seo/robots.txt' // import robots.txt file
import '../../seo/humans.txt' // import humans.txt file
/**
 * Run the application
 */
const run = () => {
  const msg = 'Hello from app.service.js!'
  appService.logger(msg) // dev
  /**
  * add conditionnaly FFC test script to page with search parameter
  * @{url} http://localhost:8080/?ffc_test=1
  */
  if (window.location.search === '?ffc_test=1') {
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    document.head.appendChild(scriptTag)
  }
  /**
  * Materialize Components
  */
  /* MOBILE NAVIGATION */
  // Get #nav-mobile element
  const navMobile = document.getElementById('nav-mobile')
  // Init Sidenav
  appService.initSideNav(navMobile)
  // Close Sidenav event listener
  navMobile.addEventListener('click', evt => {
    // eslint-disable-next-line no-undef
    if (evt.target.className === 'nav-link') M.Sidenav.getInstance(navMobile).close()
    return false
  })
}

export { run }
