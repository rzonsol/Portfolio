!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nconsole.log(`Run 🏃‍♂️🏃‍♂️`);\n\nfetch('https://api.github.com/users/rzonsol/repos?sort=updated&per_page=4')\n\t.then(resp => resp.json())\n\t.then(resp => {\n\t\tconsole.log('Data download!!!');\n\t\tconsole.table(resp);\n\t})\n\t.catch(errors => {\n\t\tconsole.log(errors);\n\t});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc29sZS5sb2coYFJ1biDwn4+D4oCN4pmC77iP8J+Pg+KAjeKZgu+4j2ApO1xuXG5mZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9yem9uc29sL3JlcG9zP3NvcnQ9dXBkYXRlZCZwZXJfcGFnZT00Jylcblx0LnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcblx0LnRoZW4ocmVzcCA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ0RhdGEgZG93bmxvYWQhISEnKTtcblx0XHRjb25zb2xlLnRhYmxlKHJlc3ApO1xuXHR9KVxuXHQuY2F0Y2goZXJyb3JzID0+IHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcnMpO1xuXHR9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);