import BaseSlider from './BaseSlider.js'
import { keyMove } from './keyboards.js'

class Slider extends BaseSlider {
    constructor(el, options) {
        super(el, options);
        this._bindEvent();
    }

    _bindEvent() {
        keyMove(this)
    }
}

export default Slider;