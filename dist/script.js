/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst NAV = document.querySelector('.navbar__page-nav');\r\nconst LI = document.querySelectorAll('.navbar__page-nav_1');\r\n\r\nfor (let i = 0; i < LI.length; i++) {\r\n    LI[i].addEventListener('click', () => {\r\n        NAV.querySelector('li.selected').classList.remove('selected');    \r\n        LI[i].classList.add('selected');\r\n    });\r\n}\r\n\r\nconst PORTFNAV = document.querySelector('.list');\r\nconst PORTFLI = document.querySelectorAll('.mark');\r\n\r\nfor (let i = 0; i < PORTFLI.length; i++) {\r\n    PORTFLI[i].addEventListener('click', () => {\r\n        PORTFNAV.querySelector('.active').classList.remove('active');    \r\n        PORTFLI[i].classList.add('active');\r\n\r\n        const pictures =Array.from(document.querySelectorAll('.picture')).sort(function(){\r\n            return Math.random() - 0.5;\r\n          });\r\n          \r\n          const album = document.querySelector('.album');\r\n\r\n          for (let j = 0; j < pictures.length; j++) {\r\n            album.append(pictures[j]);\r\n          }\r\n    });\r\n}\r\n\r\nconst PICBORDER = document.querySelectorAll('.picture');\r\nfor (let i = 0; i < PICBORDER.length; i++) {\r\n    PICBORDER[i].addEventListener('click', () => {\r\n        if (PICBORDER[i].classList.contains('border')) {\r\n            PICBORDER[i].classList.remove('border');\r\n        } else {\r\n            const border = document.querySelector('.border');\r\n            \r\n            if (border) {\r\n                border.classList.remove('border');\r\n            }\r\n\r\n            PICBORDER[i].classList.add('border'); \r\n        }\r\n    })\r\n}\r\n\r\nconst FORM = document.querySelector('.form-submit');\r\nFORM.addEventListener('submit', () => {\r\n    event.preventDefault();\r\n\r\n    document.querySelector('.background-black').classList.remove('hidden');\r\n    \r\n    let MESSAGE = 'Письмо отправлено';\r\n        if (document.querySelector('.contact-subject').value === '') {\r\n            MESSAGE += '<br>' + 'Без темы';\r\n        } else {\r\n            MESSAGE += '<br/>' + 'Тема:' + document.querySelector('.contact-subject').value;\r\n        }\r\n\r\n        if (document.querySelector('.contact-description').value === '') {\r\n            MESSAGE += '<br/>' + 'Без описания';\r\n        } else {\r\n            MESSAGE += '<br/>' + 'Описание:' + document.querySelector('.contact-description').value;\r\n        }\r\n        \r\n        MESSAGE+= '<br/><button type=\"button\" class=\"background-black-btn\">OK</button>';\r\n        document.querySelector('.background-black-window').innerHTML = MESSAGE;\r\n\r\n    document.querySelector('.background-black-btn').addEventListener('click', () => {\r\n        document.querySelector('.background-black').classList.add('hidden');\r\n        FORM.reset();\r\n    });\r\n})\r\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });