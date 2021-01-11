import DEFAULTS from './defaults.js'
import { serialize, addURLData } from './utils.js'

class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);

        this.init();
    }

    // 初始化
    init() {

        // 创建对象 
        const xhr = new XMLHttpRequest();
        this.xhr = xhr;

        // 监听事件 
        this.bindEvents();

        // 发送请求
        this.open(this.options.method, this.url + this.addParams(), true);

        // 设置参数
        const { contentType, responseType, timeOut, withCredentials } = this.options;
        xhr.setRequestHeader('content-Type', contentType);
        xhr.responseType = responseType;
        if (timeOut > 0) {
            xhr.timeout = timeOut;
        }
        if (withCredentials) {
            xhr.withCredentials = true;
        }

        // 最终传送数据
        if (this.options.method === 'GET') {
            xhr.send();
        }


    }

    // 事件绑定
    bindEvents() {
        const xhr = this.xhr;

        const { success, httpCodeError, error, timeout, abord } = this.options;

        xhr.addEventListener("load", () => {
            if (xhr.readyState !== 4)
                return;
            if (this.ok()) {
                success(xhr.response, xhr)
            } else {
                httpCodeError(xhr.status, xhr)
            }
        });

        xhr.addEventListener("error", () => {
            error(xhr)
        });

        xhr.addEventListener("timeout", () => {
            timeout(xhr);
        });
        xhr.addEventListener("abord", () => {
            abord(xhr)
        });
    }

    // 正确返回
    ok() {
        // 返回 true or false
        const xhr = this.xhr;
        return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304
    }

    // 增加param请求头
    // '?asue=dsada&fgdfdf=dfsdfs'
    addParams() {
        const { params } = this.options;
        if (!params) return '';
        return addURLData(this.url, serialize(params))
    }

}

export default Ajax;