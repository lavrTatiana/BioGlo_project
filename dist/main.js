!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t){e.forEach((function(e){e.addEventListener("click",(function(){t.style.display="block"}))})),t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"))||(t.style.display="none")}))},c=function(e){var t=document.querySelector(".loadingio-spinner-spinner-ivatvn3eux");t.style.display="none",e.noValidate=!0,e.querySelectorAll("input").forEach((function(e){"phone-user"===e.className&&e.addEventListener("keypress",(function(e){/[\+\d]/.test(e.key)||e.preventDefault()})),"Ваше имя"===e.placeholder&&e.addEventListener("keypress",(function(e){/[А-Яа-яЁё\s]/.test(e.key)||e.preventDefault()}))})),e.addEventListener("click",(function(t){t.target.classList.contains("popup-close")?(t.preventDefault(),e.noValidate=!0):e.noValidate=!1})),e.addEventListener("submit",(function(c){c.preventDefault();var r=document.createElement("div");r.style.cssText="font-size: 1.5rem; color: blue;",e.appendChild(r),r.appendChild(t),t.style.display="block",t.style.margin="auto";var l=new FormData(e),i={};l.forEach((function(e,t){i[t]=e})),n(i).then((function(e){if(200!==e.status)throw new Error("Status network is not 200");r.removeChild(t),r.textContent="Ваша заявка отправлена! Мы скоро с Вами свяжемся!",setTimeout((function(){r.remove()}),5e3)})).catch((function(e){r.removeChild(t),r.textContent="Что-то пошло не так",setTimeout((function(){r.remove()}),5e3),console.error(e)})),o(e)}));var n=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},o=function(e){e.querySelectorAll("input").forEach((function(e){e.value=""}))}},r=function(){var e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup-call"),n=document.querySelector(".form-call");o(e,t),c(n)},l=function(){var e=document.querySelector(".main-form");c(e)},i=function(){var e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".shadow-block"),n=document.querySelectorAll(".discount-btn"),c=document.querySelector(".popup-discount");e.addEventListener("click",(function(){t.forEach((function(e){e.parentNode.classList.contains("hidden","visible-sm-block")&&e.parentNode.classList.remove("hidden","visible-sm-block")})),e.style.display="none"})),o(n,c)},u=function(e,t,n){e.addEventListener("click",(function(e){t.forEach((function(e){e.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))}))}));var o=e.target;(o=o.closest(".panel-heading"))&&t.forEach((function(e,t){e===o&&function(e){for(var t=0;t<n.length;t++)e===t?n[t].classList.add("in"):n[t].classList.remove("in")}(t)}))}))},a=function(){var e=document.getElementById("accordion"),t=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".panel-collapse"),c=document.querySelectorAll(".onoffswitch-checkbox"),r=document.querySelectorAll(".form-control"),l=document.getElementById("calc-result"),i=n[3].querySelector("input"),a=n[3].querySelectorAll(".button"),s=document.querySelector(".popup-discount"),d=document.getElementById("name_11"),p=document.getElementById("phone_11");u(e,t,n),o(a,s),n.forEach((function(e,t){e.querySelector(".button").addEventListener("click",(function(e){e.preventDefault();var o=e.target;(o=o.closest(".button"))&&t<n.length-1&&(n[t].classList.remove("in"),n[t+1].classList.add("in"))}))})),i.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/\D/g,"")}));var f=function(){var e=1e4,t=1,n=1,o=0,l=document.querySelector(".second-type");return c[0].checked?(e=1e4,r[0].options[1].selected&&(t=1.2),r[1].options[1].selected&&(n=1.3),r[1].options[2].selected&&(n=1.5),l.classList.add("hidden-sec-type")):(e=15e3,r[0].options[1].selected&&(t=1.2),r[2].options[1].selected&&(t+=.2),r[1].options[1].selected&&(n=1.3),r[1].options[2].selected&&(n=1.5),r[3].options[1].selected&&(n+=.3),r[3].options[2].selected&&(n+=.5),l.classList.remove("hidden-sec-type")),c[1].checked&&(l.classList.add("hidden-sec-type"),o=c[0].checked?1e3:2e3),e*t*n+o},v=new FormData;v={},e.addEventListener("change",(function(){l.value=f(),c[0].checked?(v.typeSept="1",v.diam1="1.4",v.countRing="1",r[0].options[1].selected&&(v.diam1="2"),r[1].options[1].selected&&(v.countRing="2"),r[1].options[2].selected&&(v.countRing="3")):(v.typeSept="2",v.diam1="1.4",v.diam2="1.4",v.countRing1="1",v.countRing2="1",r[0].options[1].selected&&(v.diam1="2"),r[2].options[1].selected&&(v.diam2="2"),r[1].options[1].selected&&(v.countRing1="2"),r[1].options[2].selected&&(v.countRing1="3"),r[3].options[1].selected&&(v.countRing2="2"),r[3].options[2].selected&&(v.countRing2="3")),c[1].checked?v.bottom="yes":v.bottom="no",v.distance="".concat(i.value),v.calcResult="".concat(l.value)})),c[1].checked=!1,l.value=f();var y=document.querySelector(".discount"),m=document.querySelector(".loadingio-spinner-spinner-ivatvn3eux");m.style.display="none",y.noValidate=!0,y.querySelectorAll("input").forEach((function(e){"Ваше имя"===e.placeholder&&e.addEventListener("keypress",(function(e){/[А-Яа-яЁё\s]/.test(e.key)||e.preventDefault()}))})),y.addEventListener("click",(function(e){e.target.classList.contains("popup-close")?(e.preventDefault(),y.noValidate=!0):y.noValidate=!1})),y.addEventListener("submit",(function(e){e.preventDefault(),e.stopPropagation();var t=document.createElement("div");t.style.cssText="font-size: 1.5rem; color: blue;",y.appendChild(t),t.appendChild(m),m.style.display="block",m.style.margin="auto",v.userName="".concat(d.value),v.userPhone="".concat(p.value),h(v).then((function(e){if(200!==e.status)throw new Error("Status network is not 200");t.removeChild(m),t.textContent="Ваша заявка отправлена! Мы скоро с Вами свяжемся!",setTimeout((function(){t.remove()}),5e3)})).catch((function(e){t.removeChild(m),t.textContent="Что-то пошло не так",setTimeout((function(){t.remove()}),5e3),console.error(e)})),g(y)}));var h=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},g=function(e){e.querySelectorAll("input").forEach((function(e){e.value=""}))}},s=function(){var e=document.getElementById("accordion-two"),t=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".panel-collapse");u(e,t,n)},d=function(){var e=document.querySelectorAll(".check-btn"),t=document.querySelector(".popup-check"),n=document.querySelector(".form-check");o(e,t),c(n)},p=function(){var e=document.querySelector(".director-form").querySelector("input"),t=document.querySelector(".consultation-btn"),n=document.querySelector(".popup-consultation"),o=n.querySelector(".capture-form"),r=document.querySelector(".form-consultation"),l=document.createElement("input");l.setAttribute("name","user-message"),t.setAttribute("type","button"),t.addEventListener("click",(function(){l.value=e.value,e.value="",l.style.display="none",o.prepend(l),n.style.display="block",n.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?n.style.display="none":(t=t.closest(".popup-content"))||(n.style.display="none")}))})),c(r)};var f=function(){var e=document.querySelector(".capture-form-1");c(e)};(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function o(e){var n=e.keyCode,o=t,c=o.replace(/\D/g,""),r=this.value.replace(/\D/g,""),l=0,i=o.replace(/[_\d]/g,(function(e){return l<r.length?r.charAt(l++)||c.charAt(l):e}));-1!==(l=i.indexOf("_"))&&(i=i.slice(0,l));var u=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(u=new RegExp("^"+u+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=i),"blur"==e.type&&this.value.length<5&&(this.value="")}n.forEach((function(e){e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)}))})(".phone-user"),r(),i(),a(),l(),f(),s(),d(),p()}]);