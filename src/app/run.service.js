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
    scriptTag.async = false
    scriptTag.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    document.head.appendChild(scriptTag)
  }
  /**
  * Materialize Components
  */
  // Set .home-link links href attribute
  appService.setHomeLinks(window.location.origin)
  // Set default active links behaviour
  appService.activeLinks(window.location.hash)
  /* NAVIGATION */
  // Get #nav-on-med-and-up and manage active links according to a given hash
  document.getElementById('nav-on-med-and-up').addEventListener('click', evt => {
    if (evt.target.className.split(' ')[0] === 'nav-link') appService.activeLinks(evt.target.hash)
  })
  /* MOBILE NAVIGATION */
  // Get #nav-mobile element
  const navMobile = document.getElementById('nav-mobile')
  // Init Sidenav
  appService.initSideNav(navMobile)
  // eslint-disable-next-line no-undef
  // M.Sidenav.getInstance(navMobile).open() // ~~ DEBUG
  // Close Sidenav event listener
  navMobile.addEventListener('click', evt => {
    if (evt.target.className.split(' ')[0] === 'nav-link') {
      // Manage active links according to a given hash
      appService.activeLinks(evt.target.hash)
      // eslint-disable-next-line no-undef
      return M.Sidenav.getInstance(navMobile).close()
    }
  })
}

export { run }
