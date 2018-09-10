console.log('app start!');

import $ from 'jquery';
import jQuery from 'jquery';
import Elastic from './view/elastic';

window.$ = $;
window.jQuery = jQuery;

export default class App {

  /**
   *
   */
  constructor() {
    new Elastic();
  }


}

$(function () {

  new App();

});
