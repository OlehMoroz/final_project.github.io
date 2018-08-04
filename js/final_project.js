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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 330);
/******/ })
/************************************************************************/
/******/ ({

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(332);

__webpack_require__(333);

__webpack_require__(334);

__webpack_require__(335);

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var commutator = document.querySelectorAll(".presentation__images");

var bigImage = document.querySelector(".presentation__images-big");
var imageOne = document.querySelector(".small_images-one");
var imageTwo = document.querySelector(".small_images-two");
var imageThree = document.querySelector(".small_images-three");
var imageFour = document.querySelector(".small_images-four");

imageOne.addEventListener('click', function () {

    bigImage.classList.add('small_images-one');
    bigImage.classList.remove('small_images-two');
    bigImage.classList.remove('small_images-three');
    bigImage.classList.remove('small_images-four');

    imageOne.classList.add('active_image');
    imageTwo.classList.remove('active_image');
    imageThree.classList.remove('active_image');
    imageFour.classList.remove('active_image');
});

imageTwo.addEventListener('click', function () {

    bigImage.classList.remove('small_images-one');
    bigImage.classList.add('small_images-two');
    bigImage.classList.remove('small_images-three');
    bigImage.classList.remove('small_images-four');

    imageOne.classList.remove('active_image');
    imageTwo.classList.add('active_image');
    imageThree.classList.remove('active_image');
    imageFour.classList.remove('active_image');
});

imageThree.addEventListener('click', function () {

    bigImage.classList.remove('small_images-one');
    bigImage.classList.remove('small_images-two');
    bigImage.classList.add('small_images-three');
    bigImage.classList.remove('small_images-four');

    imageOne.classList.remove('active_image');
    imageTwo.classList.remove('active_image');
    imageThree.classList.add('active_image');
    imageFour.classList.remove('active_image');
});

imageFour.addEventListener('click', function () {

    bigImage.classList.remove('small_images-one');
    bigImage.classList.remove('small_images-two');
    bigImage.classList.remove('small_images-three');
    bigImage.classList.add('small_images-four');

    imageOne.classList.remove('active_image');
    imageTwo.classList.remove('active_image');
    imageThree.classList.remove('active_image');
    imageFour.classList.add('active_image');
});

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var accordion = document.querySelectorAll(".accordion_title");

var textOne = document.querySelector('.text-one');
var textTwo = document.querySelector('.text-two');
var titleOne = document.querySelector('.title-one');
var titleTwo = document.querySelector('.title-two');
var Plus = document.querySelector('.acordion_plus');
var PlusOne = document.querySelector('.plus_one');
var PlusTwo = document.querySelector('.plus_two');

titleOne.addEventListener('click', function () {
    if (textOne.style.display === "block") {
        textOne.style.display = "none";
        PlusOne.style.content = "url('./assets/images/plus-solid.svg')";
    } else {
        PlusOne.style.content = "url('./assets/images/minus-solid.svg')";
        PlusTwo.style.content = "url('./assets/images/plus-solid.svg')";
        textOne.style.display = "block";
        textTwo.style.display = "none";
    }
});

titleTwo.addEventListener('click', function () {
    if (textTwo.style.display === "block") {
        textTwo.style.display = "none";
        PlusTwo.style.content = "url('./assets/images/plus-solid.svg')";
    } else {
        PlusTwo.style.content = "url('./assets/images/minus-solid.svg')";
        PlusOne.style.content = "url('./assets/images/plus-solid.svg')";
        textTwo.style.display = "block";
        textOne.style.display = "none";
    }
});

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navigation = document.querySelectorAll(".page-header__navigation");

var navItemsOne = document.querySelector('.nav_item-one');
var navItemsTwo = document.querySelector('.nav_item-two');
var navItemsThree = document.querySelector('.nav_item-three');
var navItemsFour = document.querySelector('.nav_item-four');

var navActiveOne = document.querySelector('.nav_text_one-active');
var navActiveTwo = document.querySelector('.nav_text_two-active');
var navActiveThree = document.querySelector('.nav_text_three-active');
var navActiveFour = document.querySelector('.nav_text_four-active');

navItemsTwo.addEventListener('click', function () {
    if (navActiveTwo.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    } else {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "block";
        navActiveThree.style.display = "none";
        navActiveFour.style.display = "none";
    }
});

navItemsOne.addEventListener('click', function () {
    if (navActiveOne.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    } else {
        navActiveOne.style.display = "block";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.style.display = "none";
    }
});

navItemsThree.addEventListener('click', function () {
    if (navActiveThree.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    } else {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "block";
        navActiveFour.style.display = "none";
    }
});

navItemsFour.addEventListener('click', function () {
    if (navActiveFour.style.display === "block") {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.display = "none";
    } else {
        navActiveOne.style.display = "none";
        navActiveTwo.style.display = "none";
        navActiveThree.style.display = "none";
        navActiveFour.style.display = "block";
    }
});

/***/ })

/******/ });