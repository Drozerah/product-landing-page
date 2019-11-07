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

document.addEventListener('DOMContentLoaded', () => {
  run() // Run the application
})
