import { getJSON } from './ajax/index.js'

// https://www.imooc.com/api/mall-PC/index/menu/hot
const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';

const menu = document.getElementById("menu");

getJSON(menuURL)
    .then(response => {
        // console.log(response);

        // {key: "hot", title: "热门出发地", subTitles: ["北京", "上海", "广深", "西南", "东北"]}

        if (response.code == 200 && response.data.length > 0) {
            let html = '';

            for (const item of response.data) {
                // data-done="done"
                html += `<li class="menu-item" data-key="${item.key}" >
                            <span>${item.title}</span>
                            <div class="menu-content">
                                <p><img class="menu-loading" src="./images/loading.gif" alt="加载中" /></p>
                            </div>
                        </li>`;
            }

            menu.innerHTML = html;
        }
    })
    .then(_response => {
        const items = menu.querySelectorAll(".menu-item");
        for (const item of items) {
            item.addEventListener("mouseenter", () => {

                // console.log(item.dataset.key);

                if (item.dataset.done === "done") return;

                getJSON(`${menuURL}/${item.dataset.key}`)
                    .then(response => {
                        // console.log(response);
                        item.dataset.done = 'done';

                        const menuContent = item.querySelector(".menu-content");
                        if (response.code == 200 && response.data.length > 0) {
                            let html = '';
                            // [{
                            //     cities: [
                            //         { text: "三亚", link: "https://www.imooc.com" },
                            //         { text: "东北雪乡", link: "https://www.imooc.com" }
                            //     ],
                            //     title: "内地热门城市"
                            // }]

                            for (const itemin of response.data) {
                                html += `<p>${itemin.title}</p>`;
                                if (itemin.cities.length > 0) {
                                    html += `<div class="menu-link">`;
                                    for (const iterator of itemin.cities) {
                                        html += `<a target="_blank" href="${iterator.link}">${iterator.text}</a>`
                                    }
                                    html += `</div>`;
                                }

                            }

                            menuContent.innerHTML = html;
                        }
                    })
                    .catch(err => console.log(err))

            }, false);
        }
    })
    .catch(err => console.log(err))