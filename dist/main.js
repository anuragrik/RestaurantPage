(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),i=t.n(a),o=t(645),r=t.n(o),c=t(667),d=t.n(c),l=new URL(t(975),t.b),s=r()(i()),p=d()(l);s.push([e.id,`body{\n    padding: 0px;\n    margin: 0px;\n    background-color: #475569;\n}\n\n*{\n    box-sizing: border-box;\n}\n\n.headerBlock{\n    background-color: #94a3b8;\n    height: 150px;\n    font-size: 30px;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    letter-spacing: 1px;\n    font-style: italic;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tabs{\n    background-color: #94a3b8;\n    height: 60px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\nbutton{\n    background-color: #94a3b8;\n    height: 50px;\n    width: 120px;\n    font-size: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\nbutton:hover{\n    background-color: #94a3b8;\n    opacity: 0.8;\n    text-decoration: underline;\n}\n.tabItem{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 70px;\n}\n.homeBlock{\n    display: none;\n    position: relative;\n    height: 90vh;\n    width: 100vh;\n    flex-direction: column;\n    align-items: center;\n    background-color:white;\n    padding: 30px;\n    padding-top: 100px;\n    opacity: 1;\n}\n.homeBlock::before {    \n    content: "";\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.75;\n}\n.restaurantDesc{\n    position: relative;\n    text-align: center;\n    opacity: 1;\n    font-size: 20px;\n    line-height: 40px;\n    font-family:Georgia, 'Times New Roman', Times, serif;\n    letter-spacing: 1px;\n    font-weight: bold;\n}\n.menu.item{\n    height: 200px;\n    width: 300px;\n    border: 1px solid white;\n}\n.menu.item:hover{\n    background-color: white;\n    opacity: 0.8;\n}\n\n.menuBlock{\n    display: none;\n    grid-template: 1fr 1fr/1fr 1fr;\n    gap: 2em;\n    background-color: rgba(0, 0, 0, 0.3);\n    padding: 40px;\n    color: antiquewhite;\n    font-size: 10px;\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: none;\n    text-decoration: none;\n}\n.menuItemOne, .menuItemTwo, .menuItemThree, .menuItemFour{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n.itemHead{\n    font-size: 30px;\n    font-weight: bold;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n.contact.image{\n    height: 300px;\n    width: 600px;\n}\n\n.icon{\n    height: 40px;\n    width: 40px;\n}\n\n.phoneBlock, .addressBlock{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.contactBlock{\n    display: none;\n    flex-direction: column;\n    gap: 2em;\n    background-color: rgba(0, 0, 0, 0.3);\n    padding: 30px;\n    color: antiquewhite;\n    font-size: 20px;\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: none;\n    text-decoration: none;\n}`,""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&r[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},r=[],c=0;c<e.length;c++){var d=e[c],l=a.base?d[0]+a.base:d[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=i(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var c=t(o[r]);n[c].references--}for(var d=a(e,i),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},975:(e,n,t)=>{e.exports=t.p+"cb64abba50e013f6ed09.jpg"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{t(975);const e=t.p+"e069702ee61f599a0887.jpg",n=t.p+"b4534323ad839e8de43c.jpg",a=t.p+"7d4c845e185bdcb529c6.jpg",i=t.p+"2b19b109ca03d99b6460.jpeg",o=t.p+"742f42ebe9cc8e309dc8.jpg",r=t.p+"8540cfb435ff1f4634fa.png",c=t.p+"fd2b751132efa05d07a4.png";var d=t(379),l=t.n(d),s=t(795),p=t.n(s),u=t(569),m=t.n(u),f=t(565),h=t.n(f),g=t(216),b=t.n(g),v=t(589),x=t.n(v),y=t(426),C={};C.styleTagTransform=x(),C.setAttributes=h(),C.insert=m().bind(null,"head"),C.domAPI=p(),C.insertStyleElement=b(),l()(y.Z,C),y.Z&&y.Z.locals&&y.Z.locals;let E=function(){let e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("headerBlock"),e.appendChild(n);let t=document.createElement("h2");n.appendChild(t),t.innerText="Ichiraku Ramen\n一楽ラーメン";let a=document.createElement("div");a.classList.add("tabs"),e.appendChild(a);let i=document.createElement("button");i.innerText="Home";let o=document.createElement("button");o.innerText="Menu";let r=document.createElement("button");i.classList.add("home","tab"),o.classList.add("menu","tab"),r.classList.add("contact","tab"),r.innerText="Contact",a.appendChild(i),a.appendChild(o),a.appendChild(r);let c=document.createElement("div");return c.classList.add("tabItem"),e.appendChild(c),function(e){let n=document.createElement("div");n.classList.add("homeBlock"),e.appendChild(n);let t=document.createElement("div");t.classList.add("restaurantDesc"),t.innerText="This is the Seventh Hokage's favourite restaurant\nServing since the Third Ninja War",n.appendChild(t)}(c),c}(),T=document.querySelectorAll(".tab");console.log(T);let k=document.querySelector(".homeBlock");k.style.display="flex",function(t){let o=document.createElement("div");o.classList.add("menuBlock"),t.appendChild(o);let r=document.createElement("div");r.classList.add("menuItemOne"),o.appendChild(r);let c=document.createElement("img");c.setAttribute("src",e),c.classList.add("menu","item");let d=document.createElement("div");d.classList.add("itemHead"),d.innerText="Naruto's Ramen";let l=document.createElement("div");l.innerText="Ramen, Pork, Tuna flakes, Sardines, Beef",r.appendChild(c),r.appendChild(d),r.appendChild(l);let s=document.createElement("div");s.classList.add("menuItemTwo"),o.appendChild(s);let p=document.createElement("img");p.setAttribute("src",n),p.classList.add("menu","item");let u=document.createElement("div");u.classList.add("itemHead"),u.innerText="Kakashi's Fish";let m=document.createElement("div");m.innerText="Salmon, Tomatoes, Olives, Capers, Paprika",s.appendChild(p),s.appendChild(u),s.appendChild(m);let f=document.createElement("div");f.classList.add("menuItemThree"),o.appendChild(f);let h=document.createElement("img");h.setAttribute("src",a),h.classList.add("menu","item");let g=document.createElement("div");g.classList.add("itemHead"),g.innerText="Tobi's Dango";let b=document.createElement("div");b.innerText="Rice flour, Soy sauce, Red bean, Sugar",f.appendChild(h),f.appendChild(g),f.appendChild(b);let v=document.createElement("div");v.classList.add("menuItemFour"),o.appendChild(v);let x=document.createElement("img");x.setAttribute("src",i),x.classList.add("menu","item");let y=document.createElement("div");y.classList.add("itemHead"),y.innerText="Itachi's Meal";let C=document.createElement("div");C.innerText="Crab, Chicken, Lobster, Rice, Fish",v.appendChild(x),v.appendChild(y),v.appendChild(C)}(E),function(e){let n=document.createElement("div");n.classList.add("contactBlock"),e.appendChild(n);let t=document.createElement("div");t.classList.add("phoneBlock"),n.appendChild(t);let a=document.createElement("div"),i=document.createElement("img");i.setAttribute("src",r),i.setAttribute("href","https://icons8.com/icon/47813/phone"),i.classList.add("icon"),a.innerText="123 456 789",t.appendChild(i),t.appendChild(a);let d=document.createElement("div");d.classList.add("addressBlock"),n.appendChild(d);let l=document.createElement("div"),s=document.createElement("img");s.setAttribute("src",c),s.classList.add("icon"),s.setAttribute("href","https://icons8.com/icon/53430/address"),l.innerText="Village Hidden In The Leaves, Konoha",d.appendChild(s),d.appendChild(l);let p=document.createElement("img");p.setAttribute("src",o),p.classList.add("contact","img"),n.appendChild(p)}(E);let L=document.querySelector(".menuBlock"),w=document.querySelector(".contactBlock");T.forEach((e=>e.addEventListener("click",(function(){"Home"==e.textContent?(k.style.display="flex",w.style.display="none",L.style.display="none"):"Menu"==e.textContent?(k.style.display="none",w.style.display="none",L.style.display="grid"):(k.style.display="none",w.style.display="flex",L.style.display="none")}))))})()})();