!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,(function(t){return e[t]}).bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",(function(){"interactive"===document.readyState&&e.call()})):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},,function(e,t,o){(function(t){var o;o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o(5))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n},,,,,,function(e,t,o){e.exports=o(12)},function(e,t,o){"use strict";o.r(t);var n=o(2),i=o.n(n),a=o(4),r=o(13);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=a.window.jarallax;if(a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=s,this},void 0!==a.jQuery){var u=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);var t=r.default.apply(a.window,e);return"object"!==l(t)?t:this};u.constructor=r.default.constructor;var p=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=u,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=p,this}}i()((function(){Object(r.default)(document.querySelectorAll("[data-jarallax]"))}))},function(e,t,o){"use strict";o.r(t);var n=o(2),i=o.n(n),a=o(14),r=o.n(a),l=o(4);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u,p,c=-1<navigator.userAgent.indexOf("MSIE ")||-1<navigator.userAgent.indexOf("Trident/")||-1<navigator.userAgent.indexOf("Edge/"),d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),m=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),o=0;o<e.length;o++)if(t&&void 0!==t.style[e[o]])return e[o];return!1}();function y(){p=d?(!u&&document.body&&((u=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(u)),(u?u.clientHeight:0)||l.window.innerHeight||document.documentElement.clientHeight):l.window.innerHeight||document.documentElement.clientHeight}y(),l.window.addEventListener("resize",y),l.window.addEventListener("orientationchange",y),l.window.addEventListener("load",y),i()((function(){y()}));var f=[];function v(){f.length&&(f.forEach((function(e,t){var o=e.instance,n=e.oldData,i=o.$item.getBoundingClientRect(),a={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:l.window.innerWidth,wndH:p},r=!n||n.wndW!==a.wndW||n.wndH!==a.wndH||n.width!==a.width||n.height!==a.height,s=r||!n||n.top!==a.top||n.bottom!==a.bottom;f[t].oldData=a,r&&o.onResize(),s&&o.onScroll()})),r()(v))}function g(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":s(HTMLElement))?e instanceof HTMLElement:e&&"object"===s(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var o,n=t,i=Array.prototype.slice.call(arguments,2),a=e.length,r=0;r<a;r++)if("object"===s(n)||void 0===n?e[r].jarallax||(e[r].jarallax=new b(e[r],n)):e[r].jarallax&&(o=e[r].jarallax[n].apply(e[r].jarallax,i)),void 0!==o)return o;return e}var h=0,b=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;n.instanceID=h++,n.$item=t,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var i=n.$item.dataset||{},a={};if(Object.keys(i).forEach((function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(a[t]=i[e])})),n.options=n.extend({},n.defaults,a,o),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach((function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)})),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp){var r=n.options.disableParallax;n.options.disableParallax=function(){return r.test(navigator.userAgent)}}if("function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp){var l=n.options.disableVideo;n.options.disableVideo=function(){return l.test(navigator.userAgent)}}"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});var u=n.options.elementInViewport;u&&"object"===s(u)&&void 0!==u.length&&(u=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var o=[],n=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(o.push(r.value),1!==o.length);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return o}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(u)[0]),u instanceof Element||(u=null),n.options.elementInViewport=u,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}return function(e,t,o){t&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t)}(e,[{key:"css",value:function(e,t){return"string"==typeof t?l.window.getComputedStyle(e).getPropertyValue(t):(t.transform&&m&&(t[m]=t.transform),Object.keys(t).forEach((function(o){e.style[o]=t[o]})),e)}},{key:"extend",value:function(e){var t=arguments;return e=e||{},Object.keys(arguments).forEach((function(o){t[o]&&Object.keys(t[o]).forEach((function(n){e[n]=t[o][n]}))})),e}},{key:"getWindowData",value:function(){return{width:l.window.innerWidth||document.documentElement.clientWidth,height:p,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!(!e.image.$item&&(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return m&&!this.options.disableParallax()}},{key:"init",value:function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},o={};if(!e.options.keepImg){var n=e.$item.getAttribute("style");if(n&&e.$item.setAttribute("data-jarallax-original-styles",n),e.image.useImgTag){var i=e.image.$item.getAttribute("style");i&&e.image.$item.setAttribute("data-jarallax-original-styles",i)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),c&&e.css(e.image.$container,{opacity:.9999}),e.image.$container.setAttribute("id","jarallax-container-".concat(e.instanceID)),e.$item.appendChild(e.image.$container),e.image.useImgTag?o=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":"object-fit: ".concat(e.options.imgSize,"; object-position: ").concat(e.options.imgPosition,";"),"max-width":"none"},t,o):(e.image.$item=document.createElement("div"),e.image.src&&(o=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":e.image.bgImage||'url("'.concat(e.image.src,'")')},t,o))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position){var a=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(e.$item).filter((function(e){var t=l.window.getComputedStyle(e),o=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return o&&"none"!==o||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}));e.image.position=a.length?"absolute":"fixed"}o.position=e.image.position,e.css(e.image.$item,o),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}},{key:"addToParallaxList",value:function(){f.push({instance:this}),1===f.length&&v()}},{key:"removeFromParallaxList",value:function(){var e=this;f.forEach((function(t,o){t.instance.instanceID===e.instanceID&&f.splice(o,1)}))}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){var o=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),o?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),o=t.width,n=t.height;e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));var i="#jarallax-container-".concat(e.instanceID," {\n           clip: rect(0 ").concat(o,"px ").concat(n,"px 0);\n           clip: rect(0, ").concat(o,"px, ").concat(n,"px, 0);\n        }");e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i}}},{key:"coverImage",value:function(){var e,t=this,o=t.image.$container.getBoundingClientRect(),n=o.height,i=t.options.speed,a="scroll"===t.options.type||"scroll-opacity"===t.options.type,r=0,l=n;return a&&(i<0?(r=i*Math.max(n,p),p<n&&(r-=i*(n-p))):r=i*(n+p),1<i?l=Math.abs(r-p):i<0?l=r/i+Math.abs(r):l+=(p-n)*(1-i),r/=2),t.parallaxScrollDistance=r,e=a?(p-l)/2:(n-l)/2,t.css(t.image.$item,{height:"".concat(l,"px"),marginTop:"".concat(e,"px"),left:"fixed"===t.image.position?"".concat(o.left,"px"):"0",width:"".concat(o.width,"px")}),t.options.onCoverImage&&t.options.onCoverImage.call(t),{image:{height:l,marginTop:e},container:o}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this,o=t.$item.getBoundingClientRect(),n=o.top,i=o.height,a={},r=o;if(t.options.elementInViewport&&(r=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=r.bottom&&0<=r.right&&r.top<=p&&r.left<=l.window.innerWidth,e||t.isElementInViewport){var s=Math.max(0,n),u=Math.max(0,i+n),c=Math.max(0,-n),d=Math.max(0,n+i-p),m=Math.max(0,i-(n+i-p)),y=Math.max(0,-n+p-i),f=1-2*(p-n)/(p+i),v=1;if(i<p?v=1-(c||d)/i:u<=p?v=u/p:m<=p&&(v=m/p),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(a.transform="translate3d(0,0,0)",a.opacity=v),"scale"===t.options.type||"scale-opacity"===t.options.type){var g=1;t.options.speed<0?g-=t.options.speed*v:g+=t.options.speed*(1-v),a.transform="scale(".concat(g,") translate3d(0,0,0)")}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var h=t.parallaxScrollDistance*f;"absolute"===t.image.position&&(h-=n),a.transform="translate3d(0,".concat(h,"px,0)")}t.css(t.image.$item,a),t.options.onScroll&&t.options.onScroll.call(t,{section:o,beforeTop:s,beforeTopEnd:u,afterTop:c,beforeBottom:d,beforeBottomEnd:m,afterBottom:y,visiblePercent:v,fromViewportCenter:f})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),e}();g.constructor=b,t.default=g},function(e,t,o){var n=o(15),i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(e){var t=+new Date,o=Math.max(0,16-(t-a)),n=setTimeout(e,o);return a=t,n},a=+new Date,r=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(i=i.bind(n),r=r.bind(n)),(e.exports=i).cancel=r},function(e,t,o){(function(t){var o;o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o(5))}]),function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,(function(t){return e[t]}).bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";o.r(t);var n=o(2),i=o.n(n),a=o(3);Object(a.default)(),i()((function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-element]"))}))},function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",(function(){"interactive"===document.readyState&&e.call()})):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return a}));var n=o(4),i=o.n(n);function a(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i.a.jarallax;if(void 0!==e){var t=e.constructor;["initImg","canInitParallax","init","destroy","clipContainer","coverImage","isVisible","onScroll","onResize"].forEach((function(e){var o=t.prototype[e];t.prototype[e]=function(){var t=this,n=arguments||[];if("initImg"===e&&null!==t.$item.getAttribute("data-jarallax-element")&&(t.options.type="element",t.pureOptions.speed=t.$item.getAttribute("data-jarallax-element")||t.pureOptions.speed),"element"!==t.options.type)return o.apply(t,n);switch(t.pureOptions.threshold=t.$item.getAttribute("data-threshold")||"",e){case"init":var i=t.pureOptions.speed.split(" ");t.options.speed=t.pureOptions.speed||0,t.options.speedY=i[0]?parseFloat(i[0]):0,t.options.speedX=i[1]?parseFloat(i[1]):0;var a=t.pureOptions.threshold.split(" ");t.options.thresholdY=a[0]?parseFloat(a[0]):null,t.options.thresholdX=a[1]?parseFloat(a[1]):null,o.apply(t,n);var r=t.$item.getAttribute("data-jarallax-original-styles");return r&&t.$item.setAttribute("style",r),!0;case"onResize":var l=t.css(t.$item,"transform");t.css(t.$item,{transform:""});var s=t.$item.getBoundingClientRect();t.itemData={width:s.width,height:s.height,y:s.top+t.getWindowData().y,x:s.left},t.css(t.$item,{transform:l});break;case"onScroll":var u=t.getWindowData(),p=(u.y+u.height/2-t.itemData.y-t.itemData.height/2)/(u.height/2),c=p*t.options.speedY,d=p*t.options.speedX,m=c,y=d;null!==t.options.thresholdY&&c>t.options.thresholdY&&(m=0),null!==t.options.thresholdX&&d>t.options.thresholdX&&(y=0),t.css(t.$item,{transform:"translate3d(".concat(y,"px,").concat(m,"px,0)")});break;case"initImg":case"isVisible":case"clipContainer":case"coverImage":return!0}return o.apply(t,n)}}))}}},function(e,t,o){(function(t){var o;o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o(5))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n}]),function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,(function(t){return e[t]}).bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",(function(){"interactive"===document.readyState&&e.call()})):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},,function(e,t,o){(function(t){var o;o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o(5))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n},function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";o.r(t);var n=o(8),i=o.n(n),a=o(4),r=o.n(a),l=o(2),s=o.n(l),u=o(10);r.a.VideoWorker=r.a.VideoWorker||i.a,Object(u.default)(),s()((function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-video]"))}))},function(e,t,o){e.exports=o(9)},function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){this._done=[],this._fail=[]}o.r(t),o.d(t,"default",(function(){return d})),i.prototype={execute:function(e,t){var o=e.length;for(t=Array.prototype.slice.call(t);o--;)e[o].apply(null,t)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(e){this._done.push(e)},fail:function(e){this._fail.push(e)}};var a=0,r=0,l=0,s=0,u=0,p=new i,c=new i,d=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;n.url=t,n.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},n.options=n.extend({},n.options_default,o),n.videoID=n.parseURL(t),n.videoID&&(n.ID=a++,n.loadAPI(),n.init())}return function(e,t,o){t&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t)}(e,[{key:"extend",value:function(e){var t=arguments;return e=e||{},Object.keys(arguments).forEach((function(o){t[o]&&Object.keys(t[o]).forEach((function(n){e[n]=t[o][n]}))})),e}},{key:"parseURL",value:function(e){var t,o,n,i,a,r=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],l=!(!(o=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!o[3])&&o[3],s=(n=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),i={},a=0,n.forEach((function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(i["ogv"===t[1]?"ogg":t[1]]=t[2],a=1)})),!!a&&i);return r?(this.type="youtube",r):l?(this.type="vimeo",l):!!s&&(this.type="local",s)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(e,t){var o=this;this.userEventsList&&this.userEventsList[e]&&(t?this.userEventsList[e].forEach((function(n,i){n===t&&(o.userEventsList[e][i]=!1)})):delete this.userEventsList[e])}},{key:"fire",value:function(e){var t=this,o=[].slice.call(arguments,1);this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach((function(e){e&&e.apply(t,o)}))}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then((function(e){e&&t.player.play()}))),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.pauseVideo&&YT.PlayerState.PLAYING===e.player.getPlayerState()&&e.player.pauseVideo(),"vimeo"===e.type&&e.player.getPaused().then((function(t){t||e.player.pause()})),"local"===e.type&&(e.player.paused||e.player.pause()))}},{key:"mute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}},{key:"unmute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}},{key:"setVolume",value:function(e){var t=0<arguments.length&&void 0!==e&&e,o=this;o.player&&t&&("youtube"===o.type&&o.player.setVolume&&o.player.setVolume(t),"vimeo"===o.type&&o.player.setVolume&&o.player.setVolume(t),"local"===o.type&&(o.$video.volume=t/100))}},{key:"getVolume",value:function(e){var t=this;t.player?("youtube"===t.type&&t.player.getVolume&&e(t.player.getVolume()),"vimeo"===t.type&&t.player.getVolume&&t.player.getVolume().then((function(t){e(t)})),"local"===t.type&&e(100*t.$video.volume)):e(!1)}},{key:"getMuted",value:function(e){var t=this;t.player?("youtube"===t.type&&t.player.isMuted&&e(t.player.isMuted()),"vimeo"===t.type&&t.player.getVolume&&t.player.getVolume().then((function(t){e(!!t)})),"local"===t.type&&e(t.$video.muted)):e(null)}},{key:"getImageURL",value:function(e){var t=this;if(t.videoImage)e(t.videoImage);else{if("youtube"===t.type){var o=["maxresdefault","sddefault","hqdefault","0"],n=0,i=new Image;i.onload=function(){120!==(this.naturalWidth||this.width)||n===o.length-1?(t.videoImage="https://img.youtube.com/vi/".concat(t.videoID,"/").concat(o[n],".jpg"),e(t.videoImage)):(n++,this.src="https://img.youtube.com/vi/".concat(t.videoID,"/").concat(o[n],".jpg"))},i.src="https://img.youtube.com/vi/".concat(t.videoID,"/").concat(o[n],".jpg")}if("vimeo"===t.type){var a=new XMLHttpRequest;a.open("GET","https://vimeo.com/api/v2/video/".concat(t.videoID,".json"),!0),a.onreadystatechange=function(){if(4===this.readyState&&200<=this.status&&this.status<400){var o=JSON.parse(this.responseText);t.videoImage=o[0].thumbnail_large,e(t.videoImage)}},a.send(),a=null}}}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(e){var t=this;t.$video?e(t.$video):t.onAPIready((function(){var o,n;if(t.$video||((o=document.createElement("div")).style.display="none"),"youtube"===t.type){var i,a;t.playerOptions={},t.playerOptions.videoId=t.videoID,t.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},t.options.showContols||(t.playerOptions.playerVars.iv_load_policy=3,t.playerOptions.playerVars.modestbranding=1,t.playerOptions.playerVars.controls=0,t.playerOptions.playerVars.showinfo=0,t.playerOptions.playerVars.disablekb=1),t.playerOptions.events={onReady:function(e){t.options.mute?e.target.mute():t.options.volume&&e.target.setVolume(t.options.volume),t.options.autoplay&&t.play(t.options.startTime),t.fire("ready",e),t.options.loop&&!t.options.endTime&&(t.options.endTime=t.player.getDuration()-.1),setInterval((function(){t.getVolume((function(o){t.options.volume!==o&&(t.options.volume=o,t.fire("volumechange",e))}))}),150)},onStateChange:function(e){t.options.loop&&e.data===YT.PlayerState.ENDED&&t.play(t.options.startTime),i||e.data!==YT.PlayerState.PLAYING||(i=1,t.fire("started",e)),e.data===YT.PlayerState.PLAYING&&t.fire("play",e),e.data===YT.PlayerState.PAUSED&&t.fire("pause",e),e.data===YT.PlayerState.ENDED&&t.fire("ended",e),e.data===YT.PlayerState.PLAYING?a=setInterval((function(){t.fire("timeupdate",e),t.options.endTime&&t.player.getCurrentTime()>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),150):clearInterval(a)}};var r=!t.$video;if(r){var l=document.createElement("div");l.setAttribute("id",t.playerID),o.appendChild(l),document.body.appendChild(o)}t.player=t.player||new window.YT.Player(t.playerID,t.playerOptions),r&&(t.$video=document.getElementById(t.playerID),t.videoWidth=parseInt(t.$video.getAttribute("width"),10)||1280,t.videoHeight=parseInt(t.$video.getAttribute("height"),10)||720)}if("vimeo"===t.type){if(t.playerOptions={id:t.videoID,autopause:0,transparent:0,autoplay:t.options.autoplay?1:0,loop:t.options.loop?1:0,muted:t.options.mute?1:0},t.options.volume&&(t.playerOptions.volume=t.options.volume),t.options.showContols||(t.playerOptions.badge=0,t.playerOptions.byline=0,t.playerOptions.portrait=0,t.playerOptions.title=0),!t.$video){var s="";Object.keys(t.playerOptions).forEach((function(e){""!==s&&(s+="&"),s+="".concat(e,"=").concat(encodeURIComponent(t.playerOptions[e]))})),t.$video=document.createElement("iframe"),t.$video.setAttribute("id",t.playerID),t.$video.setAttribute("src","https://player.vimeo.com/video/".concat(t.videoID,"?").concat(s)),t.$video.setAttribute("frameborder","0"),t.$video.setAttribute("mozallowfullscreen",""),t.$video.setAttribute("allowfullscreen",""),o.appendChild(t.$video),document.body.appendChild(o)}var u;t.player=t.player||new Vimeo.Player(t.$video,t.playerOptions),t.options.startTime&&t.options.autoplay&&t.player.setCurrentTime(t.options.startTime),t.player.getVideoWidth().then((function(e){t.videoWidth=e||1280})),t.player.getVideoHeight().then((function(e){t.videoHeight=e||720})),t.player.on("timeupdate",(function(e){u||(t.fire("started",e),u=1),t.fire("timeupdate",e),t.options.endTime&&t.options.endTime&&e.seconds>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())})),t.player.on("play",(function(e){t.fire("play",e),t.options.startTime&&0===e.seconds&&t.play(t.options.startTime)})),t.player.on("pause",(function(e){t.fire("pause",e)})),t.player.on("ended",(function(e){t.fire("ended",e)})),t.player.on("loaded",(function(e){t.fire("ready",e)})),t.player.on("volumechange",(function(e){t.fire("volumechange",e)}))}"local"===t.type&&(t.$video||(t.$video=document.createElement("video"),t.options.showContols&&(t.$video.controls=!0),t.options.mute?t.$video.muted=!0:t.$video.volume&&(t.$video.volume=t.options.volume/100),t.options.loop&&(t.$video.loop=!0),t.$video.setAttribute("playsinline",""),t.$video.setAttribute("webkit-playsinline",""),t.$video.setAttribute("id",t.playerID),o.appendChild(t.$video),document.body.appendChild(o),Object.keys(t.videoID).forEach((function(e){!function(e,t,o){var n=document.createElement("source");n.src=t,n.type=o,e.appendChild(n)}(t.$video,t.videoID[e],"video/".concat(e))}))),t.player=t.player||t.$video,t.player.addEventListener("playing",(function(e){n||t.fire("started",e),n=1})),t.player.addEventListener("timeupdate",(function(e){t.fire("timeupdate",e),t.options.endTime&&t.options.endTime&&this.currentTime>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())})),t.player.addEventListener("play",(function(e){t.fire("play",e)})),t.player.addEventListener("pause",(function(e){t.fire("pause",e)})),t.player.addEventListener("ended",(function(e){t.fire("ended",e)})),t.player.addEventListener("loadedmetadata",(function(){t.videoWidth=this.videoWidth||1280,t.videoHeight=this.videoHeight||720,t.fire("ready"),t.options.autoplay&&t.play(t.options.startTime)})),t.player.addEventListener("volumechange",(function(e){t.getVolume((function(e){t.options.volume=e})),t.fire("volumechange",e)}))),e(t.$video)}))}},{key:"init",value:function(){this.playerID="VideoWorker-".concat(this.ID)}},{key:"loadAPI",value:function(){if(!r||!l){var e="";if("youtube"!==this.type||r||(r=1,e="https://www.youtube.com/iframe_api"),"vimeo"!==this.type||l||(l=1,e="https://player.vimeo.com/api/player.js"),e){var t=document.createElement("script"),o=document.getElementsByTagName("head")[0];t.src=e,o.appendChild(t),t=o=null}}}},{key:"onAPIready",value:function(e){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||s?"object"===("undefined"==typeof YT?"undefined":n(YT))&&1===YT.loaded?e():p.done((function(){e()})):(s=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,p.resolve("done"),e()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||u)"undefined"!=typeof Vimeo?e():c.done((function(){e()}));else{u=1;var t=setInterval((function(){"undefined"!=typeof Vimeo&&(clearInterval(t),c.resolve("done"),e())}),20)}"local"===this.type&&e()}}]),e}()},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return l}));var n=o(8),i=o.n(n),a=o(4),r=o.n(a);function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r.a.jarallax;if(void 0!==e){var t=e.constructor,o=t.prototype.onScroll;t.prototype.onScroll=function(){var e=this;o.apply(e),e.isVideoInserted||!e.video||e.options.videoLazyLoading&&!e.isElementInViewport||e.options.disableVideo()||(e.isVideoInserted=!0,e.video.getVideo((function(t){var o=t.parentNode;e.css(t,{position:e.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),e.$video=t,e.image.$container.appendChild(t),o.parentNode.removeChild(o)})))};var n=t.prototype.coverImage;t.prototype.coverImage=function(){var e=this,t=n.apply(e),o=!!e.image.$item&&e.image.$item.nodeName;if(t&&e.video&&o&&("IFRAME"===o||"VIDEO"===o)){var i=t.image.height,a=i*e.image.width/e.image.height,r=(t.container.width-a)/2,l=t.image.marginTop;t.container.width>a&&(i=(a=t.container.width)*e.image.height/e.image.width,r=0,l+=(t.image.height-i)/2),"IFRAME"===o&&(i+=400,l-=200),e.css(e.$video,{width:"".concat(a,"px"),marginLeft:"".concat(r,"px"),height:"".concat(i,"px"),marginTop:"".concat(l,"px")})}return t};var a=t.prototype.initImg;t.prototype.initImg=function(){var e=this,t=a.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t};var l=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){var e=this,t=l.apply(e);if(!e.options.videoSrc)return t;var o=new i.a(e.options.videoSrc,{autoplay:!0,loop:e.options.videoLoop,showContols:!1,startTime:e.options.videoStartTime||0,endTime:e.options.videoEndTime||0,mute:e.options.videoVolume?0:1,volume:e.options.videoVolume||0});if(o.isValid())if(t){if(o.on("ready",(function(){if(e.options.videoPlayOnlyVisible){var t=e.onScroll;e.onScroll=function(){t.apply(e),!e.options.videoLoop&&(e.options.videoLoop||e.videoEnded)||(e.isVisible()?o.play():o.pause())}}else o.play()})),o.on("started",(function(){e.image.$default_item=e.image.$item,e.image.$item=e.$video,e.image.width=e.video.videoWidth||1280,e.image.height=e.video.videoHeight||720,e.coverImage(),e.clipContainer(),e.onScroll(),e.image.$default_item&&(e.image.$default_item.style.display="none")})),o.on("ended",(function(){e.videoEnded=!0,e.options.videoLoop||e.image.$default_item&&(e.image.$item=e.image.$default_item,e.image.$item.style.display="block",e.coverImage(),e.clipContainer(),e.onScroll())})),e.video=o,!e.defaultInitImgResult)return e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"===o.type||(o.getImageURL((function(t){e.image.bgImage='url("'.concat(t,'")'),e.init()})),!1)}else e.defaultInitImgResult||o.getImageURL((function(t){var o=e.$item.getAttribute("style");o&&e.$item.setAttribute("data-jarallax-original-styles",o),e.css(e.$item,{"background-image":'url("'.concat(t,'")'),"background-position":"center","background-size":"cover"})}));return t};var s=t.prototype.destroy;t.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),s.apply(e)}}}}]);