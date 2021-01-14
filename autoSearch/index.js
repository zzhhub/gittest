import { getJSON } from '../Ajax/AJAX封装/index.js' //引入ajax请求方法

const searchInput = document.getElementById("search");
const resultList = document.getElementById("result");

let timer = null; //定时器，延缓用户输入的多次频繁请求。

// IE9开始支持
// 输入框输入事件绑定
searchInput.addEventListener("input", () => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(handleInputEvent, 300);
}, false);

// 文本全选中
searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim() !== '') {
        searchInput.select();
    }
}, false);


//处理input事件处理
function handleInputEvent() {
    if (searchInput.value.trim() !== '') {
        getResult(searchInput.value);
    } else {
        clearReault();
    }
}

// 获取格式化数据
function getResult(params) {
    const url = 'https://www.imooc.com/api/http/search/suggest?words=';
    const p = getJSON(`${url}${params}`);
    p.then(response => {
        // console.log(response);
        if (response.code === 200) {
            showResult(response.data);
        }
    }).catch(err => {
        console.log(err);
    });
}

//显示数据加载结果
function showResult(data) {
    let resultListHTML = ''
    for (const value of data) {
        resultListHTML += `<li>${value.word}</li>`;
        // console.log(value.word);
    }
    // console.log(resultListHTML);
    resultList.innerHTML = resultListHTML;
    resultList.style.display = '';
    bindListEvent();
}

// 清除列表数据
function clearReault() {
    resultList.innerHTML = '';
    resultList.style.display = 'none';
}

// 搜索列表点击选中事件
const bindListEvent = () => {
    const listDom = resultList.querySelectorAll("li");
    // console.log(listDom);
    for (const item of listDom) {
        // console.log(listDom[item]);
        item.addEventListener('click', () => {
            // console.log(listDom[item].innerHTML);
            searchInput.value = item.innerHTML;

            clearReault();
        }, false);
    }
}