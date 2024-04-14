document.querySelector('#loginForm').addEventListener('submit', () => {
    setCookie('user', document.querySelector('#uname').value, '/')
    setCookie('pass', document.querySelector('#pwd').value, '/')
})

if(!getCookie('user')||!getCookie('pass')) if(location.href != 'https://localhost:5500/index.html/') location.replace('https://localhost:5500/index.html/')

// Cookies setting and getting functions

function setCookie(name, value, path, options = {}) {
    options = {
        path: path,
        ...options
    }; if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    } let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue
        }
    }
  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}