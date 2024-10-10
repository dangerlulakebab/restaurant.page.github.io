/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAbout: () => (/* binding */ loadAbout)
/* harmony export */ });
function loadAbout() {
    const content = document.getElementById('content')

    content.innerHTML = ''

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('content')

    const phoneP = document.createElement('p');
    phoneP.classList.add('primary_text')
    phoneP.textContent = 'Contact: +999_XXX_XXX'

    aboutDiv.appendChild(phoneP);

    content.appendChild(aboutDiv)
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza.png */ "./src/images/pizza.png");


function loadHome() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const primaryText = document.createElement('p');
    primaryText.classList.add('primary_text');
    primaryText.textContent = 'Modern Pizza'

    const secondaryText = document.createElement('p');
    secondaryText.classList.add('secondary_text');
    secondaryText.textContent = 'Italian';

    descriptionDiv.appendChild(primaryText)
    descriptionDiv.appendChild(secondaryText)

    const pizzaimg = document.createElement('img');
    pizzaimg.id = 'pizza';
    pizzaimg.src = _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__
    pizzaimg.alt = 'pizza';

    content.appendChild(descriptionDiv)
    content.appendChild(pizzaimg)
}

    

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {

    const content = document.getElementById('content');

    content.innerHTML = '';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu')

    const item1 = document.createElement('div');
    item1.classList.add('item');

    const pizzaName1 = document.createElement('div')
    pizzaName1.classList.add('primary_text')
    pizzaName1.textContent = 'Peperoni'

    const pizzaPrice1 = document.createElement('div');
    pizzaPrice1.classList.add('secondary_text');
    pizzaPrice1.textContent = '$2.49'

    item1.appendChild(pizzaName1)
    item1.appendChild(pizzaPrice1)

    menuDiv.appendChild(item1)

    // const descriptionDiv = document.createElement('div');
    // descriptionDiv.classList.add('description');

    // const primaryText = document.createElement('p');
    // primaryText.classList.add('primary_text');
    // primaryText.textContent = 'Modern Pizza'

    // const secondaryText = document.createElement('p');
    // secondaryText.classList.add('secondary_text');
    // secondaryText.textContent = 'Italian';

    // descriptionDiv.appendChild(primaryText)
    // descriptionDiv.appendChild(secondaryText)

    

    content.appendChild(menuDiv)
}


/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e43d8772cc3843c98592.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");




document.addEventListener('DOMContentLoaded', () => {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();

    document.getElementById('about').addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_2__.loadAbout)
    document.getElementById('home').addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);
    document.getElementById('menu').addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDNUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQnFDO0FBQ0Q7QUFDRztBQUN2QztBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaO0FBQ0EsK0RBQStELGdEQUFTO0FBQ3hFLDhEQUE4RCw4Q0FBUTtBQUN0RSw4REFBOEQsOENBQVE7QUFDdEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQucGFnZS5naXRodWIuaW8vLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC5wYWdlLmdpdGh1Yi5pby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQucGFnZS5naXRodWIuaW8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LnBhZ2UuZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQucGFnZS5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQucGFnZS5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LnBhZ2UuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC5wYWdlLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQucGFnZS5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC5wYWdlLmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZEFib3V0KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxyXG5cclxuICAgIGNvbnN0IHBob25lUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBob25lUC5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5X3RleHQnKVxyXG4gICAgcGhvbmVQLnRleHRDb250ZW50ID0gJ0NvbnRhY3Q6ICs5OTlfWFhYX1hYWCdcclxuXHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChwaG9uZVApO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXREaXYpXHJcbn0iLCJpbXBvcnQgcGl6emFJbWFnZSBmcm9tICcuL2ltYWdlcy9waXp6YS5wbmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICBjb25zdCBwcmltYXJ5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHByaW1hcnlUZXh0LmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnlfdGV4dCcpO1xyXG4gICAgcHJpbWFyeVRleHQudGV4dENvbnRlbnQgPSAnTW9kZXJuIFBpenphJ1xyXG5cclxuICAgIGNvbnN0IHNlY29uZGFyeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzZWNvbmRhcnlUZXh0LmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeV90ZXh0Jyk7XHJcbiAgICBzZWNvbmRhcnlUZXh0LnRleHRDb250ZW50ID0gJ0l0YWxpYW4nO1xyXG5cclxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHByaW1hcnlUZXh0KVxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dClcclxuXHJcbiAgICBjb25zdCBwaXp6YWltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcGl6emFpbWcuaWQgPSAncGl6emEnO1xyXG4gICAgcGl6emFpbWcuc3JjID0gcGl6emFJbWFnZVxyXG4gICAgcGl6emFpbWcuYWx0ID0gJ3BpenphJztcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaXp6YWltZylcclxufVxyXG5cclxuICAgICIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcblxyXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW0xLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcclxuXHJcbiAgICBjb25zdCBwaXp6YU5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHBpenphTmFtZTEuY2xhc3NMaXN0LmFkZCgncHJpbWFyeV90ZXh0JylcclxuICAgIHBpenphTmFtZTEudGV4dENvbnRlbnQgPSAnUGVwZXJvbmknXHJcblxyXG4gICAgY29uc3QgcGl6emFQcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBpenphUHJpY2UxLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeV90ZXh0Jyk7XHJcbiAgICBwaXp6YVByaWNlMS50ZXh0Q29udGVudCA9ICckMi40OSdcclxuXHJcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChwaXp6YU5hbWUxKVxyXG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQocGl6emFQcmljZTEpXHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChpdGVtMSlcclxuXHJcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICAvLyBjb25zdCBwcmltYXJ5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIC8vIHByaW1hcnlUZXh0LmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnlfdGV4dCcpO1xyXG4gICAgLy8gcHJpbWFyeVRleHQudGV4dENvbnRlbnQgPSAnTW9kZXJuIFBpenphJ1xyXG5cclxuICAgIC8vIGNvbnN0IHNlY29uZGFyeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAvLyBzZWNvbmRhcnlUZXh0LmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeV90ZXh0Jyk7XHJcbiAgICAvLyBzZWNvbmRhcnlUZXh0LnRleHRDb250ZW50ID0gJ0l0YWxpYW4nO1xyXG5cclxuICAgIC8vIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHByaW1hcnlUZXh0KVxyXG4gICAgLy8gZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5VGV4dClcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXYpXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSAnLi9ob21lLmpzJztcclxuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL21lbnUuanMnXHJcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gJy4vYWJvdXQuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxvYWRIb21lKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWJvdXQpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9