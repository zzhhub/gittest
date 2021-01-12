import DEFAULTS from './defaults.js'
import { serialize, serializeJSON, addURLData } from './utils.js'
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED, CONTENT_TYPE_JSON } from './constants.js'

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
        xhr.open(this.options.method, this.url + this.addParams(), true);

        // 设置参数
        // 请求响应数据传递类型
        this.setResponseType();
        // 超时时间
        this.settimeOut();
        // 是否携带cookie缓存-默认不携带
        this.setCredentials();

        // 最终传送数据
        this.sendData();

    }

    // 事件绑定
    bindEvents() {
        const xhr = this.xhr;

        const { success, httpCodeError, error, timeout, abort } = this.options;

        xhr.addEventListener("load", () => {
            if (xhr.readyState !== 4)
                return;
            if (this.ok()) {
                success(xhr.response, xhr);
            } else {
                httpCodeError(xhr.status, xhr);
            }
        }, false);

        xhr.addEventListener("error", () => {
            error(xhr);
        }, false);

        xhr.addEventListener("timeout", () => {
            timeout(xhr);
        }, false);
        xhr.addEventListener("abort", () => {
            abort(xhr);
        }, false);
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

    // 请求发送数据传递
    setRequestHeader(contentType = this.options.contentType) {
        const xhr = this.xhr;
        if (!contentType) return;
        xhr.setRequestHeader('Content-Type', contentType);
    }


    // 请求响应数据传递
    setResponseType() {
        const { responseType } = this.options;
        const xhr = this.xhr;
        xhr.responseType = responseType;
    }

    // 超时时间
    settimeOut() {
        const { timeOut } = this.options;
        const xhr = this.xhr;
        if (timeOut > 0) {
            xhr.timeout = timeOut;
        }
    }

    // 缓存cookie携带
    setCredentials() {
        const { withCredentials } = this.options;
        const xhr = this.xhr;
        if (withCredentials) {
            xhr.withCredentials = true;
        }
    }

    // 发送数据封装
    sendData() {
        const { data } = this.options;
        const xhr = this.xhr;
        if (!this.isSendData()) {
            return xhr.send(null);
        }

        // 封装数据
        let resultData = null;
        if (this.isFormDaTa()) {
            // form表单传递
            resultData = data;
        } else if (this.isFormEncoded()) {
            // 请求发送数据form-urlencoded传递类型
            this.setRequestHeader(CONTENT_TYPE_FORM_URLENCODED);
            resultData = serialize(data);
        } else if (this.isJSONData()) {
            // 请求发送数据JSON传递类型
            this.setRequestHeader(CONTENT_TYPE_JSON);
            resultData = serializeJSON(data);
        } else {
            // 其他格式数据
            this.setRequestHeader();
            resultData = data
        }

        // 发送数据
        xhr.send(resultData);
    }

    // 是否发送数据
    isSendData() {
        const { method, data } = this.options;
        // null
        if (!data) return false;
        // GET类型
        if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false;
        return true;
    }

    // 是否是FormData数据类型：原生form表单提交数据类型
    isFormDaTa() {
        const { data } = this.options;
        return data instanceof FormData;
    }

    // 名值对形式数据类型:application/x-www-form-urlencoded
    isFormEncoded() {
        const { contentType } = this.options;
        return contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED);
    }

    // json格式数据
    isJSONData() {
        const { contentType } = this.options;
        return contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
    }

    // 获取xhr对象
    getXHR() {
        return this.xhr;
    }
}

export default Ajax;