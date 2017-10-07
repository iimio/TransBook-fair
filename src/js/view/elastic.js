/**
 *
 */
export default class Elastic {

  /**
   *
   */
  constructor() {
    this._$elastic = $(".elastic");
    this._$button = $('.js-play-elastic a');

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


    this._playState = '-webkit-animation-play-state';
    this._$button.on('click', () => {
      this._$elastic.css(this._playState, function (i, v) {
        return v === 'paused' ? 'running' : 'paused';
      });
      this._updateState();
    });
    this._updateState();
  }

  _updateState() {
    let currentState = this._$elastic.css(this._playState);
    $('body').toggleClass('paused', currentState === 'paused');
    this._$button.text((currentState === 'running') ? 'Pause' : 'Play');

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
