// js-window-cover


export default class PseudoCover {
  constructor(el) {
    this._$el = $(el)
    this._$stage = $(this._$el.parents('.js-split--duplicated'))

    this._update()

  }

  _update(){
    this._resize()
    window.requestAnimationFrame(()=>{
      this._update()
    });
  }

  _resize() {
    this._$el.css({
      width: this._$stage.width() + 'px',
      height: this._$stage.height() + 'px',
    })
  }
}
