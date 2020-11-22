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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ({

/***/ 88:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 */

document.addEventListener('DOMContentLoaded', function () {

  let hasConfig = localStorage.getItem('readability'),
      config = hasConfig ? JSON.parse(hasConfig) : setDefaultConfig(),
      nth = document.getElementById('nth'),
      otherMedia = document.getElementById('toggleOtherMedia'),
      otherThreshold = document.getElementById('otherMediaThreshold'),
      size = document.getElementById('size'),
      vc = document.getElementById('toggleVCreleases'),
      vcThreshold = document.getElementById('vcThreshold');

  // ========================================================
  // Functions
  // ========================================================

  /**
   * Appends options to select elements
   *
   * @method   addOptions
   * @param    {object}   targetId
   * @param    {number}   total
   * @return   {object}
   */
  function addOptions(targetId, total) {

    let fragment = document.createDocumentFragment();

    for (let i = 1; i <= total; i++) {

      let option = document.createElement('option');

      option.text = i;
      option.value = i;
      fragment.appendChild(option);
    }

    return targetId.appendChild(fragment.cloneNode(true));
  }

  /**
   * Sets default values in the config object
   *
   * @method setDefaultConfig
   * @return {object}
   */
  function setDefaultConfig() {

    let defaults = {
      indexTracks: false,
      nth: 10,
      otherMediaReadability: false,
      otherMediaThreshold: 15,
      size: 0.5,
      vcReadability: true,
      vcThreshold: 8
    };

    localStorage.setItem('readability', JSON.stringify(defaults));

    return JSON.parse(localStorage.getItem('readability'));
  }

  // ========================================================
  // DOM setup
  // ========================================================

  // Set values based on config
  vc.checked = config.vcReadability;
  otherMedia.checked = config.otherMediaReadability;
  size.value = config.size;

  addOptions(vcThreshold, 30);
  vcThreshold.value = config.vcThreshold;

  addOptions(otherThreshold, 30);
  otherThreshold.value = config.otherMediaThreshold;

  addOptions(nth, 30);
  nth.value = config.nth;

  // ==============================================
  // UI functionality
  // ==============================================

  // Vinyl, cassette, box sets, etc ...

  document.getElementById('toggleVCreleases').addEventListener('click', function () {

    config.vcReadability = event.target.checked;

    localStorage.setItem('readability', JSON.stringify(config));
  });

  // Single CD, digital, etc ...
  document.getElementById('toggleOtherMedia').addEventListener('click', function () {

    config.otherMediaReadability = event.target.checked;

    localStorage.setItem('readability', JSON.stringify(config));
  });

  // Value changes
  [...document.getElementsByTagName('select')].forEach(function (select) {

    select.addEventListener('change', function (event) {

      config[event.target.id] = event.target.value;

      localStorage.setItem('readability', JSON.stringify(config));
    });
  });
});

/***/ })

/******/ });