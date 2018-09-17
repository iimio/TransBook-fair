import SplitContent from "./split-content"

console.log('app start! 2018')

import $ from 'jquery'
import jQuery from 'jquery'
import PseudoResponsive from "./pseudo-responsive"

window.$ = $
window.jQuery = jQuery

export default class App {

  /**
   *
   */
  constructor() {
    new SplitContent()

    let covers = document.querySelectorAll('.js-split--duplicated .js-pseudo-cover')
    for (let i = 0; i < covers.length; i += 1) {
      new PseudoResponsive(covers[i])
    }

  }


}

$(function () {

  new App()

})
