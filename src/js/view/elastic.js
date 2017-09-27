/**
 *
 */
export default class Elastic {

  /**
   *
   */
  constructor() {
    this._$elastic = $(".elastic");
    this._breakpoints = [
      {name: 'sp', width: 600},
      {name: 'tablet', width: 900},
      {name: 'pc', width: 1240},
      {name: 'pc-wide', width: 1600}
    ];

    this._current = '';

    this._interval = setInterval(() => {
      this._update();
    }, 1000 / 10);
  }

  /**
   *
   * @private
   */
  _update() {
    let size = this._$elastic.width();
    let result = "pc-wide";
    for (let i = 0; i < this._breakpoints.length; i += 1) {
      let check = this._breakpoints[i];
      if (size <= check.width) {
        result = check;
        break;
      }
    }

    if (this._current.name !== result.name) {
      this._current = result;

      this._$elastic.removeClass('is-sp').removeClass('is-tablet').removeClass('is-pc').removeClass('is-pc-wide');
      this._$elastic.addClass('is-' + this._current.name);
    }
  }

}
