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

console.log('app started!')

document.addEventListener('DOMContentLoaded', () => {
  run() // Run the application
})
