parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"E0wg":[function(require,module,exports) {
function e(e,o){return r(e)||n(e,o)||i(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}function r(e){if(Array.isArray(e))return e}function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw u}}}}function i(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=d();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==m(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=0)}([function(t,n,r){"use strict";r.r(n);var i,u=function(){function e(t,n,r,o){y(this,e),this.templateElement=document.getElementById(t),this.hostElement=document.getElementById(n);var i=document.importNode(this.templateElement.content,!0);this.element=i.firstElementChild,o&&(this.element.id=o),this.attach(r)}return v(e,[{key:"attach",value:function(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}]),e}();function l(e){var t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<e.max),t}function s(e,t,n){var r=n.value;return{configurable:!0,get:function(){return r.bind(this)}}}!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(i||(i={}));var f=function e(t,n,r,o,i){y(this,e),this.id=t,this.title=n,this.description=r,this.people=o,this.status=i},d=function(e){a(n,function(){function e(){y(this,e);this.listeners=[]}v(e,[{key:"addListener",value:function e(t){this.listeners.push(t)}}]);return e}());var t=c(n);function n(){var e;return y(this,n),(e=t.call(this)).projects=[],e}return v(n,[{key:"addProject",value:function(e,t,n){var r=new f(Math.random().toString(),e,t,n,i.Active);this.projects.push(r),this.updateListeners()}},{key:"moveProject",value:function(e,t){var n=this.projects.find(function(t){return t.id===e});n&&n.status!==t&&(n.status=t,this.updateListeners())}},{key:"updateListeners",value:function(){var e,t=o(this.listeners);try{for(t.s();!(e=t.n()).done;){(0,e.value)(this.projects.slice())}}catch(n){t.e(n)}finally{t.f()}}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),n}().getInstance(),p=function(t){a(r,u);var n=c(r);function r(){var e;return y(this,r),(e=n.call(this,"project-input","app",!0,"user-input")).titleInputElement=e.element.querySelector("#title"),e.descriptionInputElement=e.element.querySelector("#description"),e.peopleInputElement=e.element.querySelector("#people"),e.configure(),e}return v(r,[{key:"configure",value:function(){this.element.addEventListener("submit",this.submitHandler)}},{key:"renderContent",value:function(){}},{key:"gatherUserInput",value:function(){var e=this.titleInputElement.value,t=this.descriptionInputElement.value,n=this.peopleInputElement.value,r={value:t,required:!0,minLength:5},o={value:+n,required:!0,min:1,max:5};return l({value:e,required:!0})&&l(r)&&l(o)?[e,t,+n]:void alert("Invalid input, please try again")}},{key:"clearInputs",value:function(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}},{key:"submitHandler",value:function(t){t.preventDefault();var n=this.gatherUserInput();if(Array.isArray(n)){var r=e(n,3),o=r[0],i=r[1],u=r[2];d.addProject(o,i,u),this.clearInputs()}}}]),r}();!function(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);i>3&&u&&Object.defineProperty(t,n,u)}([s],p.prototype,"submitHandler",null);var h=function(e){a(n,u);var t=c(n);function n(e,r){var o;return y(this,n),(o=t.call(this,"single-project",e,!1,r.id)).project=r,o.configure(),o.renderContent(),o}return v(n,[{key:"dragStartHandler",value:function(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}},{key:"dragEndHandler",value:function(e){console.log("DragEnd")}},{key:"configure",value:function(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}},{key:"renderContent",value:function(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+"assigned",this.element.querySelector("p").textContent=this.project.description}},{key:"persons",get:function(){return 1===this.project.people?"1 person":this.project.people+" persons"}}]),n}();!function(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);i>3&&u&&Object.defineProperty(t,n,u)}([s],h.prototype,"dragStartHandler",null);var g=function(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},b=function(e){a(n,u);var t=c(n);function n(e){var r;return y(this,n),(r=t.call(this,"project-list","app",!1,e+"-projects")).type=e,r.assignedProjects=[],r.configure(),r.renderContent(),r}return v(n,[{key:"dragOverHandler",value:function(e){e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}},{key:"dropHandler",value:function(e){var t=e.dataTransfer.getData("text/plain");d.moveProject(t,"active"===this.type?i.Active:i.Finished)}},{key:"dragLeaveHandler",value:function(e){this.element.querySelector("ul").classList.remove("droppable")}},{key:"configure",value:function(){var e=this;this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),this.element.addEventListener("drop",this.dropHandler),d.addListener(function(t){var n=t.filter(function(t){return"active"===e.type?t.status===i.Active:t.status===i.Finished});e.assignedProjects=n,e.renderProjects()})}},{key:"renderContent",value:function(){var e=this.type+"-projects-list";this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+"PROJECTS"}},{key:"renderProjects",value:function(){document.getElementById(this.type+"-projects-list").innerHTML="";var e,t=o(this.assignedProjects);try{for(t.s();!(e=t.n()).done;){var n=e.value;new h(this.element.querySelector("ul").id,n)}}catch(r){t.e(r)}finally{t.f()}}}]),n}();g([s],b.prototype,"dragOverHandler",null),g([s],b.prototype,"dropHandler",null),g([s],b.prototype,"dragLeaveHandler",null),new p,new b("active"),new b("finished")}]);
},{}]},{},["E0wg"], null)
//# sourceMappingURL=bundle.3e46d19f.js.map