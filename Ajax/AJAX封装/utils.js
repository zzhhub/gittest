// 工具方法

// 数据序列化成 urlencoded 格式 usernname=li&age=19
const serialize = (params) => {
    // {
    //     kay: value,
    //     key2: value2
    // }
    const result = [];
    // 解构
    for (const [key, value] of Object.entries(params)) {
        result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
    return result.join('&');
}

// 传递JSON格式的字符串
const serializeJSON = (params) => {
    return JSON.stringify(params);
}

// 给URL添加参数
const addURLData = (url, data) => {

    // url = 'www.y.com'
    // url = 'www.y.com?user=nama'
    if (!data) return '';
    const flag = url.includes('?') ? '&' : '?';
    return `${flag}${data}`

}

export { serialize, serializeJSON, addURLData }