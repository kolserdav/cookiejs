**Cookie module**

Checks for cookies, assigns cookies, and updates the storage date.

_Istallation_

~$ `npm i dist-cookie`  

_Using_

```javascript
let cook = require('dist-cookie');
/**
 *Cookie processing
 * @param name = 'name'
 * @param cookie = 'cookie'
 * @param time = 1 {1 day|0.5 = 12 hours|-1 - deleted}
 * @returns {{
 * name: {
 * 	nameCookie: {
 * 		clear: string('Firstpseudoname_Lastpseudoname'), 
 *  	encode: string('encoded name')
 * 		}, 
 * 	time: Date,
 * 	newCookie: bool
 * 	}}}
 */
let cookie = cook();
```