(()=>{"use strict";var e={595:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body{background-color:#000}h1{color:#1694ce;text-align:center;font-size:60px;font-family:garamond}p,ol{color:#fff;font-family:verdana;text-align:justify}figure{text-align:center;color:#fff}img{padding:1px;border:1px solid #0a68ff;background-color:lime}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:h(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var a=m++;n=f||(f=s(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=i(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=n.p+"11e22b24292272e28061ffb4656cea65.png";var t=n(379),r=n.n(t),o=n(595);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const a=document.createElement("div"),i=document.createElement("figure"),c=document.createElement("img");c.src=e,c.alt="Park",i.appendChild(c);const s=document.createElement("figcaption");s.textContent="Parque en Cambridge",i.appendChild(s),a.appendChild(i);const u=document.createElement("h1");u.innerText="Paseo en el Parque",a.appendChild(u);const l=document.createElement("p");l.innerText='Con nuestra persona guia fuimos a un parque un poco lejos del colegio donde asistiamos. Era un clima raro, porque estaba fuerte el sol pero a su vez habia frio por el fuerte viento que habia. Con mi pareja llevabamos nuestra propia refaccion pero preferimos comprar comida, dado a que los emparedados no se miraban muy apetitodos. Lo que hicimos con ellos es que se lo dimos por pedasos a unas palomas que estaban cerca de un lugar verde pero por pedazos. Vimos uns gansos y patos coloridos pero no podiamos acercarnos mucho a ellos dado a que habia una cerca y una senal que decia "prohibido pasar".',a.appendChild(l);const d=document.createElement("audio");d.src="../%23Sound/Palomas.mp3",d.controls=!0,d.autoplay=!0,a.appendChild(d);const p=document.createElement("footer"),f=document.createElement("p");f.innerText="Author: Jose Gutierrez     ";const m=document.createElement("a");m.href="mailto:gut19111@uvg.edu.gt",m.innerText="gut19111@uvg.edu.gt",f.appendChild(m);const h=document.createElement("a");h.href="../Page1/0-HomePage.html",h.innerText="    Pagina de Inicio",f.appendChild(h),p.appendChild(f),a.appendChild(p),document.getElementById("body_4").appendChild(a)})()})();