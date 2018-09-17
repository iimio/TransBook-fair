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

window.initMap = function () {


  let pointTam = {lat: 35.6954747, lng: 139.7632313}
  let contentString = '<div class="gmp-info"><p class="gmp-info__text">〒101-0052<br/>東京都千代田区神田小川町3-28-9<br/>三東ビル1F </p><p class="gmp-info__text"><a href="https://goo.gl/maps/Nu7WpQCdS2U2" target="_blank" class="gmp-info__link">大きな地図でみる</a></p></div>'

  let mapAreas = document.getElementsByClassName('js-gmap-area')

  for (let i = 0; i < mapAreas.length; i += 1) {
    let map = new google.maps.Map(mapAreas[i], {
      zoom: 17,
      center: pointTam,
      scrollwheel: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    })
    let marker = new google.maps.Marker({
      position: pointTam,
      map: map
    })
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    })
    infowindow.open(map, marker)
  }

}
