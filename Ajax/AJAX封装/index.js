import Ajax from './Ajax.js'
import { ERROR_HTTP_CODE, ERROR_HTTP_CODE_TEXT, ERROR_REQUEST_CODE, ERROR_REQUEST_CODE_TEXT, ERROR_TIMEOUT_CODE, ERROR_TIMEOUT_CODE_TEXT } from './constants.js'

// ajax对象
const ajax = (url, options) => {
    // return new Ajax(url, options).getXHR();
    let xhr = "";
    const p = new Promise((resolve, reject) => {
        xhr = new Ajax(url, {
            ...options,
            ... {

                success(response) {
                        // 成功返回
                        resolve(response);
                    },

                    httpCodeError(status) {
                        reject({
                            type: ERROR_HTTP_CODE,
                            text: `${ERROR_HTTP_CODE_TEXT} ${status}`
                        })
                    },

                    error() {
                        reject({
                            type: ERROR_REQUEST_CODE,
                            text: `${ERROR_REQUEST_CODE_TEXT}`
                        })
                    },

                    timeout() {
                        reject({
                            type: ERROR_TIMEOUT_CODE,
                            text: `${ERROR_TIMEOUT_CODE_TEXT}`
                        })
                    },
            }
        }).getXHR();
    });

    p.xhr = xhr;
    p.ERROR_HTTP_CODE = ERROR_HTTP_CODE;
    p.ERROR_REQUEST_CODE = ERROR_REQUEST_CODE;
    p.ERROR_TIMEOUT_CODE = ERROR_TIMEOUT_CODE;

    return p;


}

// get
const get = (url, options) => {
    return ajax(url, {...options, method: "GET" });
}

// post
const post = (url, options) => {
    return ajax(url, {...options, method: "POST" });
}

// getJSON
const getJSON = (url, options) => {
    return ajax(url, {...options, method: "GET", responseType: 'json' });
}

export { ajax, get, getJSON, post }