import { ajax, get, getJSON, post } from './index.js'

const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
// const url = 'https://www.dimooc.com/api/http/search/suggest?words=js';
// const url = './index.html';
// const url = '../index1.html';

// const xhr = ajax(url, {
//     method: "post",
//     responseType: 'json',
//     contentType: 'application/json',
//     params: { user: "mini" },
//     // timeOut: 10,
//     // withCredentials: true,
//     data: {
//         age: 19
//     },
//     success(response, result) {
//         console.log("success:", response, result);
//     },
//     httpCodeError(status, result) {
//         console.log("http code status:", status, result);
//     },
//     error(err) {
//         console.log("error:", err);
//     },
//     timeout(result) {
//         console.log("timeout:", result);
//     },
//     abort(result) {
//         console.log("abort:", result);
//     }
// });
// xhr.abort();

// const gets = get(url, {
//     responseType: 'json',
//     params: { user: "mini" },
//     success(response, result) {
//         console.log("success:", response, result);
//     },
//     httpCodeError(status, result) {
//         console.log("http code status:", status, result);
//     },
//     error(err) {
//         console.log("error:", err);
//     },
//     timeout(result) {
//         console.log("timeout:", result);
//     },
//     abort(result) {
//         console.log("abort:", result);
//     }
// })

// const posts = post(url, {
//     responseType: 'json',
//     data: { user: "mini" },
//     success(response, result) {
//         console.log("success:", response, result);
//     },
//     httpCodeError(status, result) {
//         console.log("http code status:", status, result);
//     },
//     error(err) {
//         console.log("error:", err);
//     },
//     timeout(result) {
//         console.log("timeout:", result);
//     },
//     abort(result) {
//         console.log("abort:", result);
//     }
// })

// const getJSONs = getJSON(url, {
//     params: { user: "mini" },
//     success(response, result) {
//         console.log("success:", response, result);
//     },
//     httpCodeError(status, result) {
//         console.log("http code status:", status, result);
//     },
//     error(err) {
//         console.log("error:", err);
//     },
//     timeout(result) {
//         console.log("timeout:", result);
//     },
//     abort(result) {
//         console.log("abort:", result);
//     }
// });


// promise封装的调用
// ajax, get, getJSON, post

const gjp = post(url, {
    // method: 'post',
    params: { user: 'kiki' },
    data: { age: 19 },
    // timeOut: 10
});
const { ERROR_HTTP_CODE, ERROR_REQUEST_CODE, ERROR_TIMEOUT_CODE } = gjp;

gjp.then(resolve => console.log(resolve)).catch(
    // reject => console.log(reject);
    reject => {

        switch (reject.type) {
            case ERROR_HTTP_CODE:
                console.log(reject.text);
                break;
            case ERROR_REQUEST_CODE:
                console.log(reject.text);
                break;
            case ERROR_TIMEOUT_CODE:
                console.log(reject.text);
                break;
            default:
                break;
        }

    }
)