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
// const isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/))
// if (isIE11) {
//   /* add polyfills */
//   // Symbol
//   // Symbol.asyncIterator
//   // Symbol.iterator
//   // Array.from
//   // Array.prototype.forEach
//   // MutationObserver
//   // Array.prototype.%40%40iterator
//   const scriptTag = document.createElement('script')
//   scriptTag.crossOrigin = 'anonymous'
//   scriptTag.src = 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=Array.from%2CArray.prototype.forEach%2CSymbol%2CSymbol.iterator%2CSymbol.asyncIterator%2CMutationObserver%2CArray.prototype.%40%40iterator'
//   scriptTag.async = false
//   document.head.appendChild(scriptTag)
//   document.addEventListener('DOMContentLoaded', () => {
//     // Run the application
//     run()
//   })
// } else {
// }
// document.addEventListener('DOMContentLoaded', () => {
//   // Run the application
//   run()
// })
document.addEventListener('DOMContentLoaded', () => {
  function browserSupportsAllFeatures () {
    return window.document.Symbol
  }

  function loadScript (src, done) {
    var js = document.createElement('script')
    js.src = src
    js.onload = function () {
      done()
    }
    js.onerror = function () {
      done(new Error('Failed to load script ' + src))
    }
    document.head.appendChild(js)
  }

  if (browserSupportsAllFeatures()) {
  // Browsers that support all features run `run()` immediately.
    run()
  } else {
  // All other browsers loads polyfills and then run `run()`.
    const src = 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=Array.from%2CArray.prototype.forEach%2CSymbol%2CSymbol.iterator%2CSymbol.asyncIterator%2CMutationObserver%2CArray.prototype.%40%40iterator'
    loadScript(src, run)
  }
})
