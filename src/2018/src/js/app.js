import SplitContent from "./split-content";

console.log('app start! 2018');

import $ from 'jquery';
import jQuery from 'jquery';

window.$ = $;
window.jQuery = jQuery;

export default class App {

  /**
   *
   */
  constructor() {
    new SplitContent();
  }


}

$(function () {

  new App();

});
