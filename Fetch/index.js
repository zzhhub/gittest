console.log(fetch);

const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

// fetch(url).then(response => {

//     // body: (...)  结果返回，只能读取一次  
//     // bodyUsed: true
//     // headers: Headers {}
//     // ok: true 表示可以读取数据
//     // redirected: false
//     // status: 200
//     // statusText: "OK"
//     // type: "cors"
//     // url: "https://www.imooc.com/api/http/search/suggest?words=js"
//     // __proto__: Response
//     console.log(response);
//     if (response.ok) {
//         // console.log(response.body);
//         // console.log(response.json());
//         return response.json();
//         // return response.text();
//     } else {
//         console.log(`HTTP CODE ERROR 状态码：${response.status}`);
//     }
// }).then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// })

// FormData
// const fd = new FormData();
// fd.append('user', 'LILY');
// fetch(url, {
//     method: 'POST',
//     body: fd
// }).then(response => {
//     console.log(response);
// }).catch(error => console.log(error))


// 'Content-Type', 'application/x-www-form-urlencoded'
fetch(url, {
    method: 'POST', //请求方式
    body: 'user=LILY&age=30', //携带请求体
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }, //请求数据格式
    mode: 'cors', //跨域
    credentials: 'include' //携带Cookie
}).then(response => {
    console.log(response);
}).catch(error => console.log(error))

// 'Content-Type', 'application/json'
// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({ user: 'miky' }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(response => {
//     console.log(response);
// }).catch(error => console.log(error))