import { ajax, get, getJSON, post } from './index.js'

const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
// const url = 'https://www.dimooc.com/api/http/search/suggest?words=js';
// const url = '../index.html';
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