parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,a){return r(e)||n(e,a)||i(e,a)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}function r(e){if(Array.isArray(e))return e}function a(e){return c(e)||l(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function l(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("DOMContentLoaded",function(){var t,n=document.querySelector("thead"),r=document.querySelector("tbody"),o=!0,i='\n  <select data-qa="office" name="office">\n    <option selected disabled></option>\n    <option value="Tokyo">\n      Tokyo\n    </option>\n    <option value="Singapore">\n      Singapore\n    </option>\n    <option value="London">\n      London\n    </option>\n    <option value="New York">\n      New York\n    </option>\n    <option value="Edinburgh">\n      Edinburgh\n    </option>\n    <option value="San Francisco">\n      San Francisco\n    </option>\n  </select>\n  ',l=((t=document.createElement("form")).action="#",t.method="POST",t.classList.add("new-employee-form"),t.innerHTML='\n      <label>Name:\n        <input\n          data-qa="name"\n          name="name"\n          type="text"\n        >\n      </label>\n\n      <label>Position:\n        <input\n          data-qa="position"\n          name="position"\n          type="text"\n        >\n      </label>\n\n      <label>Office:\n        '.concat(i,'\n      </label>\n\n      <label>Age:\n        <input data-qa="age" name="age" type="number">\n      </label>\n\n      <label>Salary:\n        <input data-qa="salary" name="salary" type="number">\n      </label>\n\n      <button type="submit">Save to table</button>\n    '),document.body.append(t),t);function c(e,t,n){var r=e.firstElementChild.value,a="";s(t,r)||(u("error",t),a=n),"salary"===t&&(a="$".concat(+r.toLocaleString("en"))),a=a||r,e.textContent=a}function u(e,t){var n,r=document.createElement("div"),a={name:"Name should be equal or greater than 4 letters",age:"Age should be equal or greater than 18 and lower than 90",length:"Field should not be empty",valid:"Everything is ok"};n="success"===e?a.valid:a[t]?a[t]:a.length,r.classList.add("notification"),r.classList.add(e),r.setAttribute("data-qa","notification"),r.innerHTML='\n      <h2 class="title">\n        '.concat("success"===e?"Success":t+" Error","\n      </h2>\n      <p>").concat(n,"</p>\n    "),document.body.append(r),setTimeout(function(){r.remove()},5e3)}function s(e,t){if("name"===e&&t.length<4)return!1;if("age"===e){var n=+t;return!(n<18||n>90)}return 0!==t.length}function d(e){return a(e.firstElementChild.children).map(function(e){return e.textContent})}function f(e){return parseInt(e.replace(/\D/g,""))}n.addEventListener("click",function(e){var t,i,l,c,u=e.target.closest("th").textContent;u&&(t=r,c=u,i=d(n).indexOf(c),l=a(t.children).sort(function(e,t){var n,r,a,l=f(e.children[i].textContent)?"number":"string";return"number"===l?(n=f(e.children[i].textContent),r=f(t.children[i].textContent),a=o?n-r:r-n):(n=e.children[i].textContent,r=t.children[i].textContent,a=o?n.localeCompare(r):r.localeCompare(n)),a}),o=!o,r.innerHTML="",l.forEach(function(e){r.append(e)}))}),r.addEventListener("click",function(e){var t=e.target.closest("tr"),n=r.querySelector("tr.active");n&&n!==t&&n.classList.remove("active"),t&&t.classList.toggle("active")}),r.addEventListener("dblclick",function(e){var t,r,o,l,u=e.target.closest("td"),s=a(u.closest("tr").children).indexOf(u),f=d(n)[s].toLowerCase(),m=u.textContent;switch(!0){case"salary"===f:case"age"===f:t='<input class="cell-input" type="number">';break;case"office"===f:t=i;break;default:t='<input class="cell-input" type="text">'}u.innerHTML=t,u.firstElementChild.focus(),o=f,l=m,(r=u).firstElementChild.addEventListener("keyup",function(e){"Enter"===e.key&&c(r,o,l)}),r.firstElementChild.addEventListener("blur",function(e){c(r,o,l)})}),l.addEventListener("submit",function(t){t.preventDefault();var a,o,i,l=new FormData(t.target),c=Object.fromEntries(l.entries()),f=function(t){for(var n=0,r=Object.entries(t);n<r.length;n++){var a=e(r[n],2),o=a[0],i=a[1];if(!s(o,i))return{result:!1,inputName:o}}return{result:!0}}(c),m=f.result,p=f.inputName;m?(a=c,o=d(n),i=document.createElement("tr"),o.forEach(function(e){var t,n=document.createElement("td");switch(!0){case"salary"===e.toLowerCase():t="\n            $".concat((+a[e.toLowerCase()]).toLocaleString("en"),"\n          ");break;default:t="".concat(a[e.toLowerCase()])}n.innerHTML=t,i.append(n)}),r.append(i),t.target.reset(),u("success","")):u("error",p)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.df5b28cb.js.map