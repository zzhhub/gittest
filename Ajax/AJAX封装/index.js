import Ajax from './Ajax.js'

// ajax对象
const ajax = (url, options) => {
    return new Ajax(url, options).getXHR();
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