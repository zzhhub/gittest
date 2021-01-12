// 默认参数
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from './constants.js'

const DEFAULTS = {
    method: HTTP_GET, // 请求方式
    params: null, // param 请求头携带的参数
    data: null, // data 请求体携带的参数
    contentType: CONTENT_TYPE_FORM_URLENCODED, //请求体格式
    responseType: '', //返回数据默认text 与response共用
    timeOut: 0, //超时时间0
    withCredentials: false, //默认不带cookie

    // 方法
    success() {},

    httpCodeError() {},

    error() {},

    timeout() {},

    abort() {}
}

export default DEFAULTS;