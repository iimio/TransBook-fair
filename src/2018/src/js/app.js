import SplitContent from "./split-content"

console.log('App start: TB2018')

import $ from 'jquery'
import jQuery from 'jquery'
import PseudoResponsive from "./pseudo-responsive"
import bowser from 'bowser'

window.$ = $
window.jQuery = jQuery

export default class App {

  /**
   *
   */
  constructor() {
    this._$body = $('body')

    // 各リンクにクラスをつける
    this._setMarksOnLinks()

    let browser = bowser.getParser(window.navigator.userAgent)

    if( browser.getBrowserName() =="Internet Explorer"){
      $('body').addClass('is-ie')
      return;
    }

    // 画面を分割する
    new SplitContent()

    let covers = document.querySelectorAll('.js-split--duplicated .js-pseudo-cover')
    for (let i = 0; i < covers.length; i += 1) {
      new PseudoResponsive(covers[i])
    }

    //syncLinkAction
    this._syncLinksAction()
  }


  _setMarksOnLinks() {
    let linkTags = $('a')
    let count = 0
    for (let i = 0; i < linkTags.length; i += 1) {
      let linkId = 'app-link-' + count
      linkTags[i].classList.add(linkId)
      linkTags[i].dataset.linkId = linkId
      count += 1
    }
  }

  _syncLinksAction() {
    let linkTags = $('a')
    for (let i = 0; i < linkTags.length; i += 1) {
      let $item = $(linkTags[i])
      $item.on('mouseenter', (e) => {
        let selector = '.' + e.currentTarget.dataset.linkId
        $(selector).addClass('is-mouseover')
      })

      $item.on('mouseleave', (e) => {
        let selector = '.' + e.currentTarget.dataset.linkId
        $(selector).removeClass('is-mouseover')
      })
    }
  }
}

$(function () {
  window.app = new App()
})

window.initMap = function () {
  if (!window.app) {
    setTimeout(() => {
      window.initMap()
    }, 1000)
    return false
  }

  let pointTam = {lat: 35.6954747, lng: 139.7632313}
  let contentString = '<div class="gmp-info"><p class="gmp-info__text">〒101-0052<br/>東京都千代田区神田小川町3-28-9<br/>三東ビル1F </p><p class="gmp-info__text"><a href="https://goo.gl/maps/Nu7WpQCdS2U2" target="_blank" class="gmp-info__link">大きな地図でみる</a></p></div>'

  let mapAreas = document.getElementsByClassName('js-gmap-area')
  let maps = []
  for (let i = 0; i < mapAreas.length; i += 1) {
    let map = new google.maps.Map(mapAreas[i], {
      zoom: 17,
      center: pointTam,
      scrollwheel: false,
      zoomControl: false,
      mapTypeControl: false,
      disableDoubleClickZoom: true,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    })

    let marker = new google.maps.Marker({
      position: pointTam,
      map: map
    })

    marker.addListener('click', function () {
      window.open().location.href = 'https://goo.gl/maps/Nu7WpQCdS2U2'
    })

    maps.push(map)
    map.addListener("drag", () => {
      for (let i = 0; i < maps.length; i += 1) {
        if (map !== maps[i]) {
          maps[i].setCenter(map.center)
        }
      }
    })
  }
}
