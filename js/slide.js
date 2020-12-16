import BaseSlider from './base.js'

class Slider extends BaseSlider {
    constructor(el, options, leftbtn, rightbtn) {
            super(el, options);
            this._bindEvent();
            this.btnleftMove(leftbtn)
            this.btnrightMove(rightbtn)
            this.toggleShow(el, leftbtn, rightbtn)
        }
        // 事件绑定
    _bindEvent() {
        document.addEventListener("keyup", ev => {
            // 左键
            if (ev.keyCode === 37) {
                this.prev()
            }
            // 右键
            if (ev.keyCode === 39) {
                this.next()
            }
        })
    }

    btnleftMove(ele) {
        ele.addEventListener("click", () => {
            this.prev()
        })
    }
    btnrightMove(ele) {
        ele.addEventListener("click", () => {
            this.next()
        })
    }
    toggleShow(el, leftbtn, rightbtn) {
        el.addEventListener("mouseover", () => {
            leftbtn.style.display = "block"
            rightbtn.style.display = "block"
        })
        el.addEventListener("mouseleave", () => {
                leftbtn.style.display = "none"
                rightbtn.style.display = "none"
            })
            // 解决按钮闪烁问题
        leftbtn.addEventListener("mouseenter", () => {
            leftbtn.style.display = "block"
            rightbtn.style.display = "block"
        })
        rightbtn.addEventListener("mouseenter", () => {
            leftbtn.style.display = "block"
            rightbtn.style.display = "block"
        })
    }

}

export default Slider;