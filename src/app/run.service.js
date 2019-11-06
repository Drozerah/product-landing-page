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
  appService.logger(msg)
  /**
  * Materialize Components
  */
  appService.initSideNav('nav-mobile')

  /**
    * add conditionnaly FFC test script to page with search parameter
    * @{url} http://localhost:8080/?ffc_test=1
    */
  if (window.location.search === '?ffc_test=1') {
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    document.head.appendChild(scriptTag)
  }
}

export { run }
