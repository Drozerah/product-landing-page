/**
 * Return the given string into the JS console
 *
 * @param  {string} string
 * @returns console.log(string)
 *
 */
const logger = string => console.log(`${string}`)

/**
 * Materialize Components Initialization
 */

/**
 * Materialize Sidenav Initialization
 *
 * - Initialize all Materialize <select></select> elements
 *
 * @doc https://materializecss.com/sidenav.html
 *
 * @param {object} object DOM element corresponding to the mobile nav bar
 *
 * @returns new Sidenav instance
 *
 * @author Drozerah https://github.com/Drozerah
 */
const initSideNav = (elem) => {
  // eslint-disable-next-line no-undef
  return M.Sidenav.init(elem)
}
/**
 * Add or remove a class name accordind to a given string as hash
 *
 * @param  {string} string that correspond to the given hash
 *
 * @author Drozerah https://github.com/Drozerah
 */
const activeLinks = (hash) => {
  // working with all .nav-link
  const links = [...document.querySelectorAll('.nav-link')]
  const className = 'active-nav-link'
  links.forEach(link => link.hash === hash ? link.classList.add(className) : link.classList.remove(className))
}

export {
  logger, // dev
  initSideNav,
  activeLinks
}
