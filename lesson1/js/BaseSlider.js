const DEFAULTS = {
    // 初始索引
    initialIndex: 0,
    // 是否自动滚动，默认为false
    autoComplate: false
};

const ELEMENT_NODE = 1;
const PICACTIVECLASS = 'slider-item-active';
const DOTACTIVECLASS = 'active';
let timer = ""; // 计数器
let dotFlag = false; //小圆点/切换选项卡未被点击 默认：false
let arrowFlag = false; //小圆点/切换选项卡未被点击 默认：false


class BaseSlider {
    constructor(el, options) {
        console.log(options)

        if (el.nodeType !== ELEMENT_NODE)
            throw new Error('实例化的时候，请传入 DOM 元素！');

        // 实际参数
        this.options = {
            ...DEFAULTS,
            ...options
        };

        const slider = el;
        const sliderContent = slider.querySelector('.slider-content');
        const sliderItems = sliderContent.querySelectorAll('.slider-item');

        const sliderDots = slider.querySelector('.pagination');
        const dotItems = sliderDots.querySelectorAll('span');

        const arrowContent = slider.querySelector('.arrow');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');

        // 添加到 this 上，为了在方法中使用
        this.slider = slider;
        this.sliderContent = sliderContent;
        this.sliderItems = sliderItems;

        this.sliderDots = sliderDots;
        this.dotItems = dotItems;

        if (arrowContent !== null) {
            this.arrowContent = arrowContent;
        }

        if (prevBtn !== null) {
            this.prevBtn = prevBtn;
        }

        if (nextBtn !== null) {
            this.nextBtn = nextBtn;
        }

        this.minIndex = 0;
        this.maxIndex = sliderItems.length - 1;
        this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

        this.init();
    }


    // 获取修正后的索引值
    // 随心所欲，不逾矩
    getCorrectedIndex(index) {
        if (index < this.minIndex) return this.maxIndex;
        if (index > this.maxIndex) return this.minIndex;
        return index;
    }

    // 初始化
    init() {
        if (this.options.autoComplate === true) {
            timer = setInterval(() => {
                this.mytimer();
            }, 1000);
        } else {
            this.to(this.currIndex);
        }

        this.mouseEvent();
        this.dotMove();
        if (this.arrowContent !== null && this.arrowContent !== undefined)
            this.arrowDisplay();
    }

    // 计时器
    mytimer() {
        this.currIndex = this.getCorrectedIndex(this.currIndex);
        // console.log(this.currIndex);
        this.to(this.currIndex);
        this.currIndex++;
    }

    // 移动
    move(index) {
        for (let i = 0; i < this.sliderItems.length; i++) {
            this.sliderItems[i].classList.remove(PICACTIVECLASS)
        }
        this.sliderItems[index].classList.add(PICACTIVECLASS)

        for (let i = 0; i < this.dotItems.length; i++) {
            this.dotItems[i].className = ''
        }
        this.dotItems[index].className = DOTACTIVECLASS;
    }

    // 切换到 index 索引对应的幻灯片
    to(index) {

        if (dotFlag === true) {
            this.move(index);
            dotFlag = false;
        } else if (arrowFlag === true) {
            index = this.getCorrectedIndex(index);
            if (this.currIndex === index) return;
            console.log(index);
            this.currIndex = index;
            this.move(index);
            arrowFlag = false;
        } else {
            // console.log(this.currIndex);
            this.move(this.currIndex);
        }
    }

    // 切换上一张
    prev() {
        // console.log(this.currIndex - 1);
        this.to(this.currIndex - 1);
    }

    // 切换下一张
    next() {
        // console.log(this.currIndex + 1);
        this.to(this.currIndex + 1);
    }

    // 停止轮播
    stop() {
        clearInterval(timer);
    }

    // 鼠标移入暂停滚动，移出继续滚动
    mouseEvent() {
        if (this.options.autoComplate === true) {
            this.slider.addEventListener("mouseover", () => {
                this.stop();
            });
            this.slider.addEventListener("mouseout", () => {
                timer = setInterval(() => {
                    this.mytimer();
                }, 1000);
            });
        }
    }

    // 小圆点点击轮播事件
    dotMove() {
        for (let i = 0; i < this.dotItems.length; i++) {
            this.dotItems[i].addEventListener("click", () => {
                dotFlag = true;
                this.currIndex = i;
                console.log("点击" + i, this.currIndex);
                if (this.options.autoComplate === true)
                    this.stop();
                this.to(i);
            });
        }
    }

    // 左右按钮显示与隐藏
    arrowDisplay() {
        this.slider.addEventListener("mouseover", () => {
            this.arrowContent.classList.add("active");

        });
        this.slider.addEventListener("mouseout", () => {
            this.arrowContent.classList.remove("active");
        });
        this.leftMove();
        this.rightMove();
    }

    // 左箭头按钮切换
    leftMove() {
        this.prevBtn.addEventListener("click", () => {
            arrowFlag = true
            this.prev()
        })
    }

    // 右箭头按钮切换
    rightMove() {
        this.nextBtn.addEventListener("click", () => {
            arrowFlag = true
            this.next()
        })
    }

}

export default BaseSlider;