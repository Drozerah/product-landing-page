/**
 * STYLES
 */
import './main.scss'
/**
 * MODULES
 */
import { run } from './app/run.service'
/**
* IMAGES
*/
import './img/logo.png'
import './img/undraw_create.svg'
import './img/undraw_design_process.svg'
import './img/undraw_control_panel.svg'
import './img/undraw_customer_survey.svg'

console.log('app started!')

/**
* IE11 detection
*/
const isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/))
if (isIE11) {
  /* add polyfills */
  // Symbol
  // Symbol.asyncIterator
  // Array.from
  // Array.prototype.forEach
  const scriptTag = document.createElement('script')
  scriptTag.crossOrigin = 'anonymous'
  scriptTag.src = 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=Array.from%2CArray.prototype.forEach%2CSymbol%2CSymbol.iterator'
  scriptTag.async = false
  document.head.appendChild(scriptTag)
  document.addEventListener('DOMContentLoaded', () => {
    // Run the application
    run()
  })
} else {
}
document.addEventListener('DOMContentLoaded', () => {
  // Run the application
  run()
})
