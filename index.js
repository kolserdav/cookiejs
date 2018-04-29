/**
 * Connecting default name generator
 * @type {fu}
 */
let fullName = require('pseudo-name');

/**
 * Export module
 * @type {setCookie}
 */
module.exports = setCookie;

/**
 *Cookie processing
 * @param name
 * @param cookie
 * @param time
 * @returns {{name: {nameCookie: {clear: string, encode: string}, time: Date, newCookie: bool}}}
 */

function setCookie(name = 'name', cookie = 'cookie', time = 1){

    time = time*(1000*60*60*24);
    name = (name === '')? 'name' : name;

    let nameCookie = name + "=",
        date = new Date(new Date().getTime() + time),
        newCookie;
    let doubleCookie = document.cookie.indexOf(name+'=') + 1;
    if (!doubleCookie) {
        newCookie = true;
        cookie = (cookie === 'cookie' || cookie === '')? btoa(fullName()) : cookie;
        document.cookie = nameCookie + cookie + "; " + "expires=" + date.toUTCString();
    }
    else {
        newCookie = false;
        cookie = (document.cookie.match(/\w*=\w*/))[0].replace((name+'='), '');
        document.cookie = nameCookie + cookie + "; " + "expires=" + date.toUTCString();
    }
    let cookieClear = atob(cookie);
    return JSON.stringify({
        name : {
            cookie : name,
            "nameCookie" : {
                "clear": cookieClear,
                "encode": cookie
            },
            "time": date,
            "newCookie" : newCookie
        }
    });

}