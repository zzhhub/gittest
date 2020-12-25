import BaseSlider from './BaseSlider.js'

let timer = ""; // 计数器

class ArrowSlider extends BaseSlider {
    constructor(el, options) {
        super(el, options);

        // this.mouseEvent();
    }


    // 同名覆盖， 图片一开始是没有自动轮播的，鼠标移出图片区域时，才开启自动轮播；鼠标移入图片区域，停止自动轮播。 
    mouseEvent() {
        console.log(this, "ArrowSlider");
        this.slider.addEventListener("mouseover", () => {
            super.stop();
        });
        this.slider.addEventListener("mouseout", () => {
            timer = setInterval(() => {
                super.mytimer();
            }, 1000);
        });
    }
}

export default ArrowSlider;