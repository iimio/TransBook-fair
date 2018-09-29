// js-window-cover


export default class PseudoResponsive {
  constructor(el) {
    this._$el = $(el)
    this._$stage = $(this._$el.parents('.js-split--duplicated'))
    this._$window = $(window)
    this._stageSize = {
      width: 0,
      height: 0
    }


    this._update()
  }

  _update() {
    this._resize()
    window.requestAnimationFrame(() => {
      this._update()
    })
  }


  _resize() {

    this._stageSize = {
      width: this._$stage.width(),
      height: this._$stage.height(),
    }

    this._$el.css({
      width: this._stageSize.width + 'px',
      height: this._stageSize.height + 'px',
    })
  }
}
