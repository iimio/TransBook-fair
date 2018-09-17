import SplitContentItem from "./split-content-item"

export default class SplitContent {

  constructor() {

    this._$window = $(window)

    this._$origin = $('.js-split')
    // this._items = this._duplicateContents(this._$origin.get(0), ['is-1', 'is-2', 'is-3', 'is-4'])
    this._items = this._duplicateContents(this._$origin.get(0), ['is-1', 'is-2'])
    // this._items = this._duplicateContents(this._$origin.get(0), ['is-1'])
    this._addSyncEvents()
    // this._animateInstances()
  }

  _duplicateContents(originDom, classes) {
    for (let i = 0; i < classes.length; i += 1) {
      let $newDom = $(`<div class="js-split js-split--duplicated ${classes[i]}" data-itemid="dp-${i}"></div>`)
      $newDom.append($(originDom).html())
      $('body').append($newDom)
    }

    let items = []
    let $items = $('.js-split--duplicated')
    for (let i = 0; i < $items.length; i++) {
      items.push(new SplitContentItem($items[i]))
    }
    return items
  }

  /**
   *
   * @private
   */
  _addSyncEvents() {
    this._$window.on("scroll", (e) => {
      this._doSyncScroll()
    })

  }

  _doSyncScroll() {
    let scrollTop = this._$window.scrollTop()
    let scrollPercent = scrollTop / (($('body').height() - this._$window.innerHeight()))
    for (let i = 0; i < this._items.length; i++) {
      this._items[i].setScrollPercentage(scrollPercent)
    }
  }

  _animateInstances() {
    let stage = {
      width: this._$window.innerWidth(),
      height: this._$window.innerHeight()
    }

    let xPos = [
      stage.width * 0.33333 * 0,
      stage.width * 0.33333 * 1,
      stage.width * 0.33333 * 2,
    ]

    let yPos = [
      stage.height * 0.33333 * 0,
      stage.height * 0.33333 * 1,
      stage.height * 0.33333 * 2,
    ]

    let i = 0
    for (let ix = 0; ix < 3; ix++) {
      for (let iy = 0; iy < 3; iy++) {
        let tarX = xPos[ix]
        let tarY = yPos[iy]
        this._items[i].setPosition(tarX, tarY)
        this._items[i].setSize(stage.width * 0.33333, stage.height * 0.33333)
        i += 1
      }

    }
  }


}
