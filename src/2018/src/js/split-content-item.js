export default class SplitContentItem {

  constructor(instance) {
    this._el = instance
    this._$el = $(this._el)
  }


  /**
   *
   * @param width
   * @param height
   */
  setSize(width, height) {
    this._$el.css({
      width: width,
      height: height
    })
  }


  /**
   *
   */
  setPosition(x, y) {
    this._$el.css({
      top: y,
      left: x
    })
  }

  setScrollPercentage(percentage_) {
    let boxHeight = this._$el.height()
    let boxChildHeight = this._$el.find('.js-split__child').height()
    let y = (boxChildHeight - boxHeight) * percentage_
    this._el.scrollTo(0, y)
  }

}
