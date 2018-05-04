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
    let fullCookie = searchName(name);
    if (!fullCookie) {
        newCookie = true;
        cookie = (cookie === 'cookie' || cookie === '')? btoa(fullName()) : cookie;
        document.cookie = nameCookie + cookie + ";" + "expires=" + date.toUTCString();
    }
    else {
        newCookie = false;
        document.cookie = fullCookie.replace(/\s*/g, '')+ ";" + "expires=" + date.toUTCString();
    }
    let cookieClear = (cookie === 'cookie' || cookie === '')? atob(cookie) : cookie;
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
    function searchName(name, trim = null) {
        let cookie = (trim !== null)? trim : document.cookie;
        if (cookie) {
            if (cookie.indexOf(name) === -1) {
                return false;
            }
            else {

                let trimGet = cookie.match(/\w+=\w+={0,4};*?/)[0];
                if (trimGet.indexOf(name) + 1) {
                    return trimGet.replace(';', '');

                }
                else {
                    trim = cookie.replace(trimGet, '');
                    return searchName(name, trim)
                }

            }
        }
        else {
            return false;
        }
    }

}
