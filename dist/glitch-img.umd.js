!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.glitchImg=n()}(this,function(){"use strict";function t(t,n){if(null!=t&&null!=n)if(t.complete)n(t,t.naturalWidth,t.naturalHeight);else{var e=t.src||t;if("string"!=typeof e)return;var i=new Image;i.onload=function(){n(t,i.naturalWidth,i.naturalHeight)},i.src=e}}function n(t,n){var e=Math.random()*(n||1);return Math.random()*(1-e)+t*e}var e="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",r="http://www.w3.org/2000/xmlns/";function l(t,n,e){var i=void 0!==e?document.createElementNS(e,t):document.createElement(t);if(null!=n){var r=void 0,l=void 0;for(r in n)l=n[r],Array.isArray(l)?i.setAttributeNS(l[0]||null,r,l[1]):i.setAttribute(r,l)}return i}var a=function(t){return"string"==typeof t?t.split(/\s+/):t||[]};function o(t,n){return t.classList?t.classList.contains(n):!!(t.className.indexOf(n)>-1)}function s(t,n){var e=a(n);if(t.classList)t.classList.add.apply(t.classList,e);else{for(var i=t.className,r=0;r<e.length;r++)i.indexOf(e[r])<0&&(i+=" "+e[r]);t.className=i}}function u(t,n){var e=a(n);if(t.classList)t.classList.remove.apply(t.classList,e);else{for(var i=a(t.className),r="",l=0;l<i.length;l++)e.indexOf(i[l])<0&&(r+=" "+i[l]);t.className=r.substring(1)}}function c(t){if(null==t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);return t}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l("svg",{"xmlns:xlink":[r,i],preserveAspectRatio:[null,"none"],viewBox:"0 0 "+t.width+" "+t.height,class:t.class},e),a=l("image",{"clip-path":"url(#"+t.id+")",href:[i,t.src],width:[null,"100%"],height:[null,"100%"]},e);return n.appendChild(a),n}function d(t,n){if(!t||!t.src||o(t,n.classes.image))return this.element=null;var i=n.hashId();this.element=t,this.width=t.naturalWidth||100,this.height=t.naturalHeight||100,this.defs=n,s(t,n.classes.image);var r=l("div",{class:n.classes.wrapper}),a=h({src:t.src,width:this.width,height:this.height,class:n.classes.clone,id:i});t.parentElement.insertBefore(r,t),r.appendChild(t),r.appendChild(a),this.clipPath=l("clipPath",{id:i},e),n.element.appendChild(this.clipPath),this.update()}d.prototype={destroy:function(){if(null!=this.element){u(this.element,this.defs.classes.image);var t=this.element.parentElement;t.parentElement.insertBefore(this.element,t),t.parentElement.removeChild(t),this.defs.element.removeChild(this.clipPath),this.element=null,this.clipPath=null,this.defs=null}return null},update:function(){if(null==this.element)return this;var t=.3*this.height,i=0,r=void 0,a=void 0;for(c(this.clipPath),a=document.createDocumentFragment();i<=this.height;)r=Math.round(n(.01)*t),i+=Math.round(n(.01)*t)+r,a.appendChild(l("rect",{x:[null,"0"],y:[null,i],height:[null,r],width:[null,this.width]},e));return this.clipPath.appendChild(a),this}};var f="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var p,v=(function(t){!function(n){function e(t,n){var e=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(e>>16)<<16|65535&e}function i(t,n,i,r,l,a){return e((o=e(e(n,t),e(r,a)))<<(s=l)|o>>>32-s,i);var o,s}function r(t,n,e,r,l,a,o){return i(n&e|~n&r,t,n,l,a,o)}function l(t,n,e,r,l,a,o){return i(n&r|e&~r,t,n,l,a,o)}function a(t,n,e,r,l,a,o){return i(n^e^r,t,n,l,a,o)}function o(t,n,e,r,l,a,o){return i(e^(n|~r),t,n,l,a,o)}function s(t,n){var i,s,u,c,h;t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;var d=1732584193,f=-271733879,p=-1732584194,v=271733878;for(i=0;i<t.length;i+=16)s=d,u=f,c=p,h=v,f=o(f=o(f=o(f=o(f=a(f=a(f=a(f=a(f=l(f=l(f=l(f=l(f=r(f=r(f=r(f=r(f,p=r(p,v=r(v,d=r(d,f,p,v,t[i],7,-680876936),f,p,t[i+1],12,-389564586),d,f,t[i+2],17,606105819),v,d,t[i+3],22,-1044525330),p=r(p,v=r(v,d=r(d,f,p,v,t[i+4],7,-176418897),f,p,t[i+5],12,1200080426),d,f,t[i+6],17,-1473231341),v,d,t[i+7],22,-45705983),p=r(p,v=r(v,d=r(d,f,p,v,t[i+8],7,1770035416),f,p,t[i+9],12,-1958414417),d,f,t[i+10],17,-42063),v,d,t[i+11],22,-1990404162),p=r(p,v=r(v,d=r(d,f,p,v,t[i+12],7,1804603682),f,p,t[i+13],12,-40341101),d,f,t[i+14],17,-1502002290),v,d,t[i+15],22,1236535329),p=l(p,v=l(v,d=l(d,f,p,v,t[i+1],5,-165796510),f,p,t[i+6],9,-1069501632),d,f,t[i+11],14,643717713),v,d,t[i],20,-373897302),p=l(p,v=l(v,d=l(d,f,p,v,t[i+5],5,-701558691),f,p,t[i+10],9,38016083),d,f,t[i+15],14,-660478335),v,d,t[i+4],20,-405537848),p=l(p,v=l(v,d=l(d,f,p,v,t[i+9],5,568446438),f,p,t[i+14],9,-1019803690),d,f,t[i+3],14,-187363961),v,d,t[i+8],20,1163531501),p=l(p,v=l(v,d=l(d,f,p,v,t[i+13],5,-1444681467),f,p,t[i+2],9,-51403784),d,f,t[i+7],14,1735328473),v,d,t[i+12],20,-1926607734),p=a(p,v=a(v,d=a(d,f,p,v,t[i+5],4,-378558),f,p,t[i+8],11,-2022574463),d,f,t[i+11],16,1839030562),v,d,t[i+14],23,-35309556),p=a(p,v=a(v,d=a(d,f,p,v,t[i+1],4,-1530992060),f,p,t[i+4],11,1272893353),d,f,t[i+7],16,-155497632),v,d,t[i+10],23,-1094730640),p=a(p,v=a(v,d=a(d,f,p,v,t[i+13],4,681279174),f,p,t[i],11,-358537222),d,f,t[i+3],16,-722521979),v,d,t[i+6],23,76029189),p=a(p,v=a(v,d=a(d,f,p,v,t[i+9],4,-640364487),f,p,t[i+12],11,-421815835),d,f,t[i+15],16,530742520),v,d,t[i+2],23,-995338651),p=o(p,v=o(v,d=o(d,f,p,v,t[i],6,-198630844),f,p,t[i+7],10,1126891415),d,f,t[i+14],15,-1416354905),v,d,t[i+5],21,-57434055),p=o(p,v=o(v,d=o(d,f,p,v,t[i+12],6,1700485571),f,p,t[i+3],10,-1894986606),d,f,t[i+10],15,-1051523),v,d,t[i+1],21,-2054922799),p=o(p,v=o(v,d=o(d,f,p,v,t[i+8],6,1873313359),f,p,t[i+15],10,-30611744),d,f,t[i+6],15,-1560198380),v,d,t[i+13],21,1309151649),p=o(p,v=o(v,d=o(d,f,p,v,t[i+4],6,-145523070),f,p,t[i+11],10,-1120210379),d,f,t[i+2],15,718787259),v,d,t[i+9],21,-343485551),d=e(d,s),f=e(f,u),p=e(p,c),v=e(v,h);return[d,f,p,v]}function u(t){var n,e="",i=32*t.length;for(n=0;n<i;n+=8)e+=String.fromCharCode(t[n>>5]>>>n%32&255);return e}function c(t){var n,e=[];for(e[(t.length>>2)-1]=void 0,n=0;n<e.length;n+=1)e[n]=0;var i=8*t.length;for(n=0;n<i;n+=8)e[n>>5]|=(255&t.charCodeAt(n/8))<<n%32;return e}function h(t){return u(s(c(t),8*t.length))}function d(t,n){var e,i,r=c(t),l=[],a=[];for(l[15]=a[15]=void 0,r.length>16&&(r=s(r,8*t.length)),e=0;e<16;e+=1)l[e]=909522486^r[e],a[e]=1549556828^r[e];return i=s(l.concat(c(n)),512+8*n.length),u(s(a.concat(i),640))}function f(t){var n,e,i="";for(e=0;e<t.length;e+=1)n=t.charCodeAt(e),i+="0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n);return i}function p(t){return unescape(encodeURIComponent(t))}function v(t){return h(p(t))}function g(t,n){return d(p(t),p(n))}function m(t,n,e){return n?e?g(n,t):f(g(n,t)):e?v(t):f(v(t))}t.exports?t.exports=m:n.md5=m}(f)}(p={exports:{}},p.exports),p.exports);function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return v(t,Date.now()).slice(0,n)}var m="data-glitch-img",w=function(t){return["."+t.wrapper+"{\n        position: relative;\n        overflow: hidden;\n        display: inline-block;\n        vertical-align: top;\n    }","."+t.image+"{\n        display: block;\n    }","."+t.clone+"{\n        position: absolute;\n        top: 0; left: 0;\n        width: 100%; height: 100%;\n        -webkit-transform: translate(-2%, 0);\n                transform: translate(-2%, 0);\n    }"]};function y(t){var n,e=document.createElement("style");return document.head.appendChild(e),n=e.sheet,w(t).forEach(function(t,e){n.insertRule(t,e)}),e.setAttribute(m,""),e}var C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=0,i=l("svg",{xmlns:e},e),r=l("defs",null,e);i.appendChild(r),document.body.appendChild(i);var a=y(t);return{classes:t,element:r,hashId:function(){return"gi-"+g("glitch"+n++,10)},options:function(n){if(null!=n){var e=0;Object.keys(n).forEach(function(i){t[i]&&n[i]!==t[i]&&(t[i]=n[i],e++)}),e>0&&(document.head.removeChild(a),a=y(t))}}}}({wrapper:"gi-wrapper",image:"gi-image",clone:"gi-clone"});function x(n){var e,i=[];(e=n,null==e?[]:void 0!==e.length?Array.prototype.slice.call(e):[e]).forEach(function(n){t(n,function(){return i.push(new d(n,C))})});var r={destroy:function(){return i.forEach(function(t){return t.destroy()}),i=null,null},update:function(){if(null!=i)for(var t=-1,n=i.length;++t<n;)i[t].update();return r}};return r}return x.options=C.options,x});
