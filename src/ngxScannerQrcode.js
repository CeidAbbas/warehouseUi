var zbarWasm=function(t){"use strict";
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))}function n(t){var e=t.default;if("function"==typeof e){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})})),n}var r={exports:{}};const i=n(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));function o(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,s=function(t){return a.exec(t).slice(1)};function u(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var r=n>=0?arguments[n]:"/";if("string"!=typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(t=r+"/"+t,e="/"===r.charAt(0))}return(e?"/":"")+(t=o(d(t.split("/"),(function(t){return!!t})),!e).join("/"))||"."}function c(t){var e=f(t),n="/"===y(t,-1);return(t=o(d(t.split("/"),(function(t){return!!t})),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t}function f(t){return"/"===t.charAt(0)}function l(){var t=Array.prototype.slice.call(arguments,0);return c(d(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function _(t,e){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=u(t).substr(1),e=u(e).substr(1);for(var r=n(t.split("/")),i=n(e.split("/")),o=Math.min(r.length,i.length),a=o,s=0;s<o;s++)if(r[s]!==i[s]){a=s;break}var c=[];for(s=a;s<r.length;s++)c.push("..");return(c=c.concat(i.slice(a))).join("/")}function A(t){var e=s(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."}function h(t,e){var n=s(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}function p(t){return s(t)[3]}const m={extname:p,basename:h,dirname:A,sep:"/",delimiter:":",relative:_,join:l,isAbsolute:f,normalize:c,resolve:u};function d(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}var y="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)};const R=n(Object.freeze(Object.defineProperty({__proto__:null,resolve:u,normalize:c,isAbsolute:f,join:l,relative:_,sep:"/",delimiter:":",dirname:A,basename:h,extname:p,default:m},Symbol.toStringTag,{value:"Module"})));!function(t,e){var n,r=(n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(n=n||__filename),function(t){var e,r,o=t||{},a=void 0!==o?o:{};a.ready=new Promise((function(t,n){e=t,r=n}));var s,u,c,f=Object.assign({},a),l="object"==typeof window,_="function"==typeof importScripts,A="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,h="";if(A){var p=i,m=R;h=_?m.dirname(h)+"/":__dirname+"/",s=(t,e)=>(t=U(t)?new URL(t):m.normalize(t),p.readFileSync(t,e?void 0:"utf8")),c=t=>{var e=s(t,!0);return e.buffer||(e=new Uint8Array(e)),e},u=(t,e,n)=>{t=U(t)?new URL(t):m.normalize(t),p.readFile(t,(function(t,r){t?n(t):e(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof G))throw t})),process.on("unhandledRejection",(function(t){throw t})),a.inspect=function(){return"[Emscripten Module object]"}}else(l||_)&&(_?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),n&&(h=n),h=0!==h.indexOf("blob:")?h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1):"",s=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},_&&(c=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),u=(t,e,n)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?e(r.response):n()},r.onerror=n,r.send(null)});var d,y,g=a.print||console.log.bind(console),B=a.printErr||console.warn.bind(console);Object.assign(a,f),f=null,a.arguments&&a.arguments,a.thisProgram&&a.thisProgram,a.quit&&a.quit,a.wasmBinary&&(d=a.wasmBinary),a.noExitRuntime,"object"!=typeof WebAssembly&&D("no native wasm support detected");var v,E,Z=!1,b="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(){var t=y.buffer;a.HEAP8=new Int8Array(t),a.HEAP16=new Int16Array(t),a.HEAP32=new Int32Array(t),a.HEAPU8=v=new Uint8Array(t),a.HEAPU16=new Uint16Array(t),a.HEAPU32=E=new Uint32Array(t),a.HEAPF32=new Float32Array(t),a.HEAPF64=new Float64Array(t)}a.INITIAL_MEMORY;var S,w,C=[],N=[],T=[],P=0,O=null;function D(t){a.onAbort&&a.onAbort(t),B(t="Aborted("+t+")"),Z=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw r(e),e}function F(t){return t.startsWith("data:application/octet-stream;base64,")}function U(t){return t.startsWith("file://")}function H(t){try{if(t==S&&d)return new Uint8Array(d);if(c)return c(t);throw"both async and sync fetching of the wasm failed"}catch(t){D(t)}}function G(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function M(t){for(;t.length>0;)t.shift()(a)}function x(t){var e=y.buffer;try{return y.grow(t-e.byteLength+65535>>>16),I(),1}catch(t){}}F(S="zbar.wasm")||(w=S,S=a.locateFile?a.locateFile(w,h):h+w);var j=[null,[],[]];function L(t,e){var n=j[t];0===e||10===e?((1===t?g:B)(function(t,e,n){for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.buffer&&b)return b.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}(n,0)),n.length=0):n.push(e)}var k,W={d:function(){return!0},e:function(){return Date.now()},c:function(t){var e,n,r=v.length,i=2147483648;if((t>>>=0)>i)return!1;for(var o=1;o<=4;o*=2){var a=r*(1+.2/o);if(a=Math.min(a,t+100663296),x(Math.min(i,(e=Math.max(t,a))+((n=65536)-e%n)%n)))return!0}return!1},f:function(t){return 52},b:function(t,e,n,r,i){return 70},a:function(t,e,n,r){for(var i=0,o=0;o<n;o++){var a=E[e>>2],s=E[e+4>>2];e+=8;for(var u=0;u<s;u++)L(t,v[a+u]);i+=s}return E[r>>2]=i,0}};function Y(t){function n(){k||(k=!0,a.calledRun=!0,Z||(M(N),e(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)t=a.postRun.shift(),T.unshift(t);var t;M(T)}()))}P>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)t=a.preRun.shift(),C.unshift(t);var t;M(C)}(),P>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),n()}),1)):n()))}if(function(){var t={a:W};function e(t,e){var n,r=t.exports;a.asm=r,y=a.asm.g,I(),a.asm.s,n=a.asm.h,N.unshift(n),function(t){if(P--,a.monitorRunDependencies&&a.monitorRunDependencies(P),0==P&&O){var e=O;O=null,e()}}()}function n(t){e(t.instance)}function i(e){return function(){if(!d&&(l||_)){if("function"==typeof fetch&&!U(S))return fetch(S,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+S+"'";return t.arrayBuffer()})).catch((function(){return H(S)}));if(u)return new Promise((function(t,e){u(S,(function(e){t(new Uint8Array(e))}),e)}))}return Promise.resolve().then((function(){return H(S)}))}().then((function(e){return WebAssembly.instantiate(e,t)})).then((function(t){return t})).then(e,(function(t){B("failed to asynchronously prepare wasm: "+t),D(t)}))}if(P++,a.monitorRunDependencies&&a.monitorRunDependencies(P),a.instantiateWasm)try{return a.instantiateWasm(t,e)}catch(t){B("Module.instantiateWasm callback failed with error: "+t),r(t)}(d||"function"!=typeof WebAssembly.instantiateStreaming||F(S)||U(S)||A||"function"!=typeof fetch?i(n):fetch(S,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(n,(function(t){return B("wasm streaming compile failed: "+t),B("falling back to ArrayBuffer instantiation"),i(n)}))}))).catch(r)}(),a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.h).apply(null,arguments)},a._ImageScanner_create=function(){return(a._ImageScanner_create=a.asm.i).apply(null,arguments)},a._ImageScanner_destory=function(){return(a._ImageScanner_destory=a.asm.j).apply(null,arguments)},a._ImageScanner_set_config=function(){return(a._ImageScanner_set_config=a.asm.k).apply(null,arguments)},a._ImageScanner_enable_cache=function(){return(a._ImageScanner_enable_cache=a.asm.l).apply(null,arguments)},a._ImageScanner_recycle_image=function(){return(a._ImageScanner_recycle_image=a.asm.m).apply(null,arguments)},a._ImageScanner_get_results=function(){return(a._ImageScanner_get_results=a.asm.n).apply(null,arguments)},a._ImageScanner_scan=function(){return(a._ImageScanner_scan=a.asm.o).apply(null,arguments)},a._Image_create=function(){return(a._Image_create=a.asm.p).apply(null,arguments)},a._Image_destory=function(){return(a._Image_destory=a.asm.q).apply(null,arguments)},a._Image_get_symbols=function(){return(a._Image_get_symbols=a.asm.r).apply(null,arguments)},a._free=function(){return(a._free=a.asm.t).apply(null,arguments)},a._malloc=function(){return(a._malloc=a.asm.u).apply(null,arguments)},O=function t(){k||Y(),k||(O=t)},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Y(),o.ready});t.exports=r}(r);const g=r.exports;let B;const v=e(void 0,void 0,void 0,(function*(){if(B=yield g(),!B)throw Error("WASM was not loaded");return B})),E=()=>e(void 0,void 0,void 0,(function*(){return yield v}));var Z,b,I;t.ZBarSymbolType=void 0,(Z=t.ZBarSymbolType||(t.ZBarSymbolType={}))[Z.ZBAR_NONE=0]="ZBAR_NONE",Z[Z.ZBAR_PARTIAL=1]="ZBAR_PARTIAL",Z[Z.ZBAR_EAN2=2]="ZBAR_EAN2",Z[Z.ZBAR_EAN5=5]="ZBAR_EAN5",Z[Z.ZBAR_EAN8=8]="ZBAR_EAN8",Z[Z.ZBAR_UPCE=9]="ZBAR_UPCE",Z[Z.ZBAR_ISBN10=10]="ZBAR_ISBN10",Z[Z.ZBAR_UPCA=12]="ZBAR_UPCA",Z[Z.ZBAR_EAN13=13]="ZBAR_EAN13",Z[Z.ZBAR_ISBN13=14]="ZBAR_ISBN13",Z[Z.ZBAR_COMPOSITE=15]="ZBAR_COMPOSITE",Z[Z.ZBAR_I25=25]="ZBAR_I25",Z[Z.ZBAR_DATABAR=34]="ZBAR_DATABAR",Z[Z.ZBAR_DATABAR_EXP=35]="ZBAR_DATABAR_EXP",Z[Z.ZBAR_CODABAR=38]="ZBAR_CODABAR",Z[Z.ZBAR_CODE39=39]="ZBAR_CODE39",Z[Z.ZBAR_PDF417=57]="ZBAR_PDF417",Z[Z.ZBAR_QRCODE=64]="ZBAR_QRCODE",Z[Z.ZBAR_SQCODE=80]="ZBAR_SQCODE",Z[Z.ZBAR_CODE93=93]="ZBAR_CODE93",Z[Z.ZBAR_CODE128=128]="ZBAR_CODE128",Z[Z.ZBAR_SYMBOL=255]="ZBAR_SYMBOL",Z[Z.ZBAR_ADDON2=512]="ZBAR_ADDON2",Z[Z.ZBAR_ADDON5=1280]="ZBAR_ADDON5",Z[Z.ZBAR_ADDON=1792]="ZBAR_ADDON",t.ZBarConfigType=void 0,(b=t.ZBarConfigType||(t.ZBarConfigType={}))[b.ZBAR_CFG_ENABLE=0]="ZBAR_CFG_ENABLE",b[b.ZBAR_CFG_ADD_CHECK=1]="ZBAR_CFG_ADD_CHECK",b[b.ZBAR_CFG_EMIT_CHECK=2]="ZBAR_CFG_EMIT_CHECK",b[b.ZBAR_CFG_ASCII=3]="ZBAR_CFG_ASCII",b[b.ZBAR_CFG_BINARY=4]="ZBAR_CFG_BINARY",b[b.ZBAR_CFG_NUM=5]="ZBAR_CFG_NUM",b[b.ZBAR_CFG_MIN_LEN=32]="ZBAR_CFG_MIN_LEN",b[b.ZBAR_CFG_MAX_LEN=33]="ZBAR_CFG_MAX_LEN",b[b.ZBAR_CFG_UNCERTAINTY=64]="ZBAR_CFG_UNCERTAINTY",b[b.ZBAR_CFG_POSITION=128]="ZBAR_CFG_POSITION",b[b.ZBAR_CFG_TEST_INVERTED=129]="ZBAR_CFG_TEST_INVERTED",b[b.ZBAR_CFG_X_DENSITY=256]="ZBAR_CFG_X_DENSITY",b[b.ZBAR_CFG_Y_DENSITY=257]="ZBAR_CFG_Y_DENSITY",t.ZBarOrientation=void 0,(I=t.ZBarOrientation||(t.ZBarOrientation={}))[I.ZBAR_ORIENT_UNKNOWN=-1]="ZBAR_ORIENT_UNKNOWN",I[I.ZBAR_ORIENT_UP=0]="ZBAR_ORIENT_UP",I[I.ZBAR_ORIENT_RIGHT=1]="ZBAR_ORIENT_RIGHT",I[I.ZBAR_ORIENT_DOWN=2]="ZBAR_ORIENT_DOWN",I[I.ZBAR_ORIENT_LEFT=3]="ZBAR_ORIENT_LEFT";class S{constructor(t,e){this.ptr=t,this.inst=e}checkAlive(){if(!this.ptr)throw Error("Call after destroyed")}getPointer(){return this.checkAlive(),this.ptr}}class w{constructor(t,e){this.ptr=t,this.ptr32=t>>2,this.buf=e,this.HEAP8=new Int8Array(e),this.HEAPU32=new Uint32Array(e),this.HEAP32=new Int32Array(e)}}class C extends w{get type(){return this.HEAPU32[this.ptr32]}get data(){const t=this.HEAPU32[this.ptr32+4],e=this.HEAPU32[this.ptr32+5];return Int8Array.from(this.HEAP8.subarray(e,e+t))}get points(){const t=this.HEAPU32[this.ptr32+7],e=this.HEAPU32[this.ptr32+8]>>2,n=[];for(let r=0;r<t;++r){const t=this.HEAP32[e+2*r],i=this.HEAP32[e+2*r+1];n.push({x:t,y:i})}return n}get orientation(){return this.HEAP32[this.ptr32+9]}get next(){const t=this.HEAPU32[this.ptr32+11];return t?new C(t,this.buf):null}get time(){return this.HEAPU32[this.ptr32+13]}get cacheCount(){return this.HEAP32[this.ptr32+14]}get quality(){return this.HEAP32[this.ptr32+15]}}class N extends w{get head(){const t=this.HEAPU32[this.ptr32+2];return t?new C(t,this.buf):null}}class T{constructor(e){this.type=e.type,this.typeName=t.ZBarSymbolType[this.type],this.data=e.data,this.points=e.points,this.orientation=e.orientation,this.time=e.time,this.cacheCount=e.cacheCount,this.quality=e.quality}static createSymbolsFromPtr(t,e){if(0==t)return[];let n=new N(t,e).head;const r=[];for(;null!==n;)r.push(new T(n)),n=n.next;return r}decode(t){return new TextDecoder(t).decode(this.data)}}class P extends S{static createFromGrayBuffer(t,n,r,i=0){return e(this,void 0,void 0,(function*(){const e=yield E(),o=new Uint8Array(r),a=t*n;if(a!==o.byteLength)throw Error("dataBuf does not match width and height");const s=e._malloc(a);e.HEAPU8.set(o,s);return new this(e._Image_create(t,n,808466521,s,a,i),e)}))}static createFromRGBABuffer(t,n,r,i=0){return e(this,void 0,void 0,(function*(){const e=yield E(),o=new Uint8Array(r),a=t*n;if(4*a!==o.byteLength)throw Error("dataBuf does not match width and height");const s=e._malloc(a),u=s+a,c=e.HEAPU8;for(let t=s,e=0;t<u;t++,e+=4)c[t]=19595*o[e]+38469*o[e+1]+7472*o[e+2]>>16;return new this(e._Image_create(t,n,808466521,s,a,i),e)}))}destroy(){this.checkAlive(),this.inst._Image_destory(this.ptr),this.ptr=0}getSymbols(){this.checkAlive();const t=this.inst._Image_get_symbols(this.ptr);return T.createSymbolsFromPtr(t,this.inst.HEAPU8.buffer)}}class O extends S{static create(){return e(this,void 0,void 0,(function*(){const t=yield E();return new this(t._ImageScanner_create(),t)}))}destroy(){this.checkAlive(),this.inst._ImageScanner_destory(this.ptr),this.ptr=0}setConfig(t,e,n){return this.checkAlive(),this.inst._ImageScanner_set_config(this.ptr,t,e,n)}enableCache(t=!0){this.checkAlive(),this.inst._ImageScanner_enable_cache(this.ptr,t)}recycleImage(t){this.checkAlive(),this.inst._ImageScanner_recycle_image(this.ptr,t.getPointer())}getResults(){this.checkAlive();const t=this.inst._ImageScanner_get_results(this.ptr);return T.createSymbolsFromPtr(t,this.inst.HEAPU8.buffer)}scan(t){return this.checkAlive(),this.inst._ImageScanner_scan(this.ptr,t.getPointer())}}const D=O.create(),F=(t,n)=>e(void 0,void 0,void 0,(function*(){void 0===n&&(n=yield D);const e=n.scan(t);if(e<0)throw Error("Scan Failed");return 0===e?[]:t.getSymbols()})),U=(t,n,r,i)=>e(void 0,void 0,void 0,(function*(){const e=yield P.createFromRGBABuffer(n,r,t),o=yield F(e,i);return e.destroy(),o}));return t.ZBarImage=P,t.ZBarScanner=O,t.ZBarSymbol=T,t.getDefaultScanner=()=>e(void 0,void 0,void 0,(function*(){return yield D})),t.getInstance=E,t.scanGrayBuffer=(t,n,r,i)=>e(void 0,void 0,void 0,(function*(){const e=yield P.createFromGrayBuffer(n,r,t),o=yield F(e,i);return e.destroy(),o})),t.scanImageData=(t,n)=>e(void 0,void 0,void 0,(function*(){return yield U(t.data.buffer,t.width,t.height,n)})),t.scanRGBABuffer=U,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),t}({});
//# sourceMappingURL=index.js.map