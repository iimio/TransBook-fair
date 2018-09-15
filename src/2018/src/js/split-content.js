export default class SplitContent {

  constructor() {
    this._$origin = $('.js-split');
    this._$origin.remove();
    this._duplicateContents(this._$origin.get(0), ['is-a', 'is-b', 'is-c', 'is-d']);
  }

  _duplicateContents(originDom, classes) {
    let result = "";

    for (let i = 0; i < classes.length; i += 1) {
      let $newDom = $(`<div class="js-split ${classes[i]}"></div>`);
      $newDom.append($(originDom).html());
      // $newDom.addClass(classes[i]);
      $('body').append($newDom);
    }

    console.log('result', result);
    return result;
  }


}
