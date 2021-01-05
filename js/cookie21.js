// set
const set = (name, value, { maxAge, domain, secure, expires, path } = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }
    if (expires) {
        cookieText += `; expires=${new Date(expires)}`;
    }
    if (domain) {
        cookieText += `; domain=${domain}`;
    }
    if (path) {
        cookieText += `; path=${path}`;
    }
    if (secure) {
        cookieText += `; secure`;
    }

    document.cookie = cookieText;
}


// get
const get = name => {
    name = `${encodeURIComponent(name)}`;
    const cookies = document.cookie.split("; ")
    for (let i of cookies) {
        const [cookieName, cookieText] = i.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieText);
        }
    }
    return "";
}


// remove
const remove = (name, { domain, path } = {}) => {
    set(name, '', { domain, path, maxAge: -1 })
}


export {set, get, remove }