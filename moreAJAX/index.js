import { getJSON } from '../Ajax/AJAX封装/index.js';

const loadingPage = document.getElementById("loading-page");
const ad = document.getElementById("ad");
const menu = document.getElementById("menu");

const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';
const adURL = 'https://www.imooc.com/api/mall-PC/index/ad';

const p = getJSON(menuURL).then(response => {
    // console.log(response);
    // console.log(response.data.length);
    // {key: "hot", title: "热门出发地", subTitles: ["北京", "上海", "广深", "西南", "东北"]}

    let html = '';

    if (response.code == 200 && response.data.length > 0) {

        // data-done="done"
        for (const item of response.data) {
            html += `<li class="menu-item" data-key="${item.key}">
            <span>${item.title}</span>
            <div class="menu-content">
                <p><img class="menu-loading" src="./images/loading.gif" alt="加载中" /></p>
            </div>
        </li>`
        }
    }

    menu.innerHTML = html;

}).then(response => {
    const items = menu.querySelectorAll('.menu-item');

    for (const item of items) {
        item.addEventListener("mouseenter", () => {
            // console.log(item.getAttribute('data-done'));
            // 获取值
            // console.log(item.dataset.key);

            // 无需请求-数据已经加载
            if (item.dataset.done === 'done') return;

            getJSON(`${menuURL}/${item.dataset.key}`).then(response => {
                console.log(response);

                // 子元素存在，父级添加data-done属性
                item.dataset.done = 'done';

                const secondDom = item.querySelector('.menu-content');

                // [{
                //     title: "内地热门城市",
                //     cities: [
                //         { text: "墨尔本", link: "https://www.imooc.com" },
                //     ]
                // }]
                let html = ''
                if (response.code == 200 && response.data.length > 0) {
                    for (const item of response.data) {
                        html += `<p>${item.title}</p>`;
                        if (item.cities && item.cities.length > 0) {
                            html += `<div class="side">`;
                            for (const cite of item.cities) {
                                html += `<a href="${cite.link}" target="_blank">${cite.text}</a>`;
                            }
                            html += `</div>`;
                        }
                    }
                }
                secondDom.innerHTML = html;

            }).catch(err => console.log(err))

        }, false)
    }
}).catch(err => {
    console.log(err)
});

const p2 = getJSON(adURL).then(response => {
    let html = '';
    console.log(response);
    // [{url: "http://alimc.img.imooc.com/class/muyun/mall-PC/advertisement/small01.png"}]
    for (const item of response.data) {
        html += `<img src="${item.url}">`
    }
    ad.innerHTML = html;

}).catch(err => console.log(err));


// 并发执行-Promise.all
// Promise的所有都正确返回，才执行
Promise.all([p, p2]).then(() => {
    // loadingPage.style.display = 'none';
    // IE10支持
    loadingPage.classList.add('none');
}).catch(err => {
    // 移除
    loadingPage.classList.remove('none');
    console.log(err);
});

// Promise.all(p1,p2)  //都成功才成功

// Promise.race(p1,p2)  //第一个成功，则成功  第一个失败，则失败

// Promise.allSettled(p1,p2) //与传入的Promise状态无关  永远成功  会记录下各个Promise的结果

// Promise.all([1, 2, 3]).then(datas => console.log(datas))
// Promise.all(new Set([1, 2, 3 ,1])).then(datas => console.log(datas))

// Promise.all([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
// ]).then(datas => console.log(datas));