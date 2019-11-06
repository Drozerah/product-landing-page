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
 * @param {string} string the DOM element ID corresponding to the mobile nav bar
 *
 * @returns new Sidenav instance
 *
 * @author Drozerah https://github.com/Drozerah
 */
const initSideNav = (elemId) => {
  // eslint-disable-next-line no-undef
  return M.Sidenav.init(document.getElementById(elemId))
}

export {
  logger, // dev
  initSideNav
}
