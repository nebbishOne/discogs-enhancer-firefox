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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 55:
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

rl.ready(() => {
  /**
  * Iterate over the target array and add classes as needed
  * @method addHighlights
  * @return {undefined}
  */
  function addHighlights(target) {

    target.forEach(t => {

      switch (t.textContent.trim()) {
        case 'Mint (M)':
          t.className = 'mint bold';
          break;
        case 'Near Mint (NM or M-)':
          t.className = 'near-mint bold';
          break;
        case 'Very Good Plus (VG+)':
          t.className = 'very-good-plus bold';
          break;
        case 'Very Good (VG)':
          t.className = 'very-good bold';
          break;
        case 'Good Plus (G+)':
          t.className = 'good-plus bold';
          break;
        case 'Good (G)':
          t.className = 'good bold';
          break;
        case 'Fair (F)':
          t.className = 'fair bold';
          break;
        case 'Poor (P)':
          t.className = 'poor bold';
          break;
      }
    });
  }

  /**
   * Find all Marketplace item conditions and apply classes
   * @method applyStyles
   * @return {undefined}
   */
  window.applyStyles = function applyStyles() {

    // Remove mobile clutter
    document.querySelectorAll('.condition-label-mobile').forEach(d => d.remove());

    // Media/sleeve conditions
    const media = document.querySelectorAll('p.item_condition .condition-label-desktop:first-child + span'),
          sleeves = document.querySelectorAll('span.item_sleeve_condition');

    addHighlights(media);
    addHighlights(sleeves);

    // ========================================================
    // Orders Page
    // ========================================================

    // Media conditions
    const orderMedia = [...document.querySelectorAll('.order-item-conditions span:nth-child(2)')],
          orderSleeves = [...document.querySelectorAll('.order-item-conditions span:nth-child(5)')];

    addHighlights(orderMedia);
    addHighlights(orderSleeves);
  };

  // ========================================================
  // DOM Setup
  // ========================================================

  // Apply styles on ready/prev/next clicks
  if (rl.pageIs('allItems', 'sellRelease', 'myWants', 'seller', 'order')) {
    window.applyStyles();
    // Prev/Next clicks
    rl.handlePaginationClicks(window.applyStyles);
  }
});

/***/ })

/******/ });