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

document.addEventListener('DOMContentLoaded', () => {
  /**
  * IE11 detection
  */
  const isIe11browser = () => {
    return !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/))
  }

  const loadScript = (src, done) => {
    var js = document.createElement('script')
    js.src = src
    js.crossOrigin = 'anonymous'
    js.async = false
    js.onload = function () {
      done()
    }
    js.onerror = function () {
      done(new Error(`Failed to load script ${src}`))
    }
    document.head.appendChild(js)
  }
  if (isIe11browser()) {
    // if browser is IE11, first loads polyfills and then run `run()`
    console.warn('is IE11')
    const src = 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=Array.from%2CArray.prototype.forEach%2CArray.prototype.%40%40iterator'
    loadScript(src, run)
  } else {
    // if browser is not IE11, run `run()` immediately
    console.warn('not IE11')
    run()
  }
})
