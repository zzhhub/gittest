// console.log(axios);
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

// axios(url, {
//     method: 'post',
//     // 请求头信息
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     // 通过请求头携带数据
//     params: {
//         user: 'mily'
//     },
//     // 通过请求体携带数据
//     data: {
//         age: 19,
//         job: 'nurse'
//     }
// }).then(response => {
//     console.log(response);
//     console.log(response.data.data);
// }).catch(error => console.log(error))

// function getUserAccount() {
//     axios.get(url, {
//         params: {
//             name: "miky"
//         }
//     }).then(response => {
//         console.log(response);
//         console.log(response.status);
//         console.log(response.statusText);
//         console.log(response.data);
//     }).catch(error => console.log(error))
// }

// function getUserPermissions() {
//     // Content - Type: application / x - www - form - urlencoded
//     axios.post(url, 'name=miky&age=19').then(response => {
//         console.log(response);
//         console.log(response.status);
//         console.log(response.statusText);
//         console.log(response.data);
//     }).catch(error => console.log(error));
// }

// // 并发
// axios.all([getUserAccount(), getUserPermissions()])
//     .then(axios.spread(function(acct, perms) {
//         // 两个请求现在都执行完成

//     }));
//Content-Type: application/json;charset=UTF-8
// const urlJSON = 'https://www.imooc.com/api/http/json/search/suggest';
// axios.post(urlJSON, {
//     name: "miky",
//     age: 19
// }).then(response => {
//     console.log(response);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.data);
// }).catch(error => console.log(error));


//Content-Type: application/json;charset=UTF-8
// const urlJSONALL = 'https://www.imooc.com/api/http/json/search/suggest?words=js';
// axios.post(urlJSONALL, {
//     name: "miky",
//     age: 19
// }).then(response => {
//     console.log(response);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.data);
// }).catch(error => console.log(error))