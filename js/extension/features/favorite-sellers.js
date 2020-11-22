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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * ---------------------------------------------------------------------------
 * Overview
 * ---------------------------------------------------------------------------
 *
 * This feature will add a checkmark icon to specified users in the Marketplace.
 *
 * The script is initiated with the code that follows the `DOM manipulation` comment block.
 *
 * 1.) The URL is examined to see if the user is in the marketplace.
 * 2.) localStorage is queried for a `favoriteList` item.
 * 3.) If there is a `favoriteList` and a URL match the script will add the checkmark to
 * specified seller(s) via CSS class.
 */

rl.ready(() => {

  // ========================================================
  // Functions
  // ========================================================
  /**
   * Find all instances of sellers in list and
   * add the favorites badge
   *
   * @method favoriteSellers
   * @return {function}
   */
  window.favoriteSellers = function favoriteSellers() {

    favoriteList.list.forEach(seller => {

      let sellerNames = document.querySelectorAll('td.seller_info ul li:first-child a');

      sellerNames.forEach(name => {

        if (name.textContent.trim() === seller && !name.closest('li').querySelector('.de-favorite-seller')) {

          let icon = document.createElement('span');

          icon.className = 'de-favorite-seller needs_delegated_tooltip';
          icon.title = `${seller} is on your Favorite Sellers list.`;
          icon.dataset.placement = 'bottom';
          icon.rel = 'tooltip';
          name.closest('li').insertAdjacentElement('beforeend', icon);
        }
      });
    });
  };

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
      .de-favorite-seller {
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTQuNTkxIDYuNjM3bC0xLTEuMjI5YTEuNTA3IDEuNTA3IDAgMCAxLS4yOTUtLjcwM2wtLjE4Mi0xLjU3YTEuNCAxLjQgMCAwIDAtMS4yMjgtMS4yMjZsLTEuNTY4LS4xODJhMS4zOCAxLjM4IDAgMCAxLS43MjctLjI5NWwtMS4yMjgtMWExLjM2OSAxLjM2OSAwIDAgMC0xLjcyNiAwbC0xLjIyOSAxYy0uMjAzLjE1OS0uNDMuMjUtLjcwMy4yOTVsLTEuNTcuMTgyQTEuNCAxLjQgMCAwIDAgMS45MSAzLjEzN2wtLjE4MiAxLjU2N2ExLjM3NSAxLjM3NSAwIDAgMS0uMjk1LjcyOGwtMSAxLjIyN2ExLjM2OSAxLjM2OSAwIDAgMCAwIDEuNzI3bDEgMS4yMjhjLjE1OS4yMDQuMjUuNDMxLjI5NS43MDRsLjE4MiAxLjU2OWExLjQgMS40IDAgMCAwIDEuMjI4IDEuMjI3bDEuNTY3LjE4MmMuMjczLjAyMi41MjQuMTM2LjcyOC4yOTVsMS4yMjcgMWExLjM2OSAxLjM2OSAwIDAgMCAxLjcyNyAwbDEuMjI4LTFjLjIwNC0uMTYuNDMxLS4yNS43MDQtLjI5NWwxLjU2OS0uMTgyYTEuNCAxLjQgMCAwIDAgMS4yMjctMS4yMjhsLjE4Mi0xLjU2OGMuMDIyLS4yNzIuMTM2LS41MjMuMjk1LS43MjdsMS0xLjIyOGExLjQzMiAxLjQzMiAwIDAgMCAwLTEuNzI2eiIgZmlsbD0iIzAwQjREQiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik02LjExMyAxMS4yMDVMMi44ODcgNy45NzdsMS4zODYtMS4zODYgMS44NCAxLjg0IDQuNjEzLTQuNjEzIDEuMzg3IDEuNDMyeiIvPjwvZz48L3N2Zz4=);
        display: inline-block;
        height: 14px;
        width: 14px;
        margin-left: 3px;
        margin-top: 3px;
        vertical-align: top;
      }
      .de-favorite-seller + .tooltip {
        white-space: normal;
        opacity: 1;
      }
      `;

  // ========================================================
  // DOM manipulation
  // ========================================================
  let favoriteList = rl.getPreference('favoriteList');

  if (favoriteList && favoriteList.list) {
    rl.attachCss('favorite-sellers', rules);
    if (rl.pageIs('allItems', 'seller', 'sellRelease', 'myWants')) {
      window.favoriteSellers();
      rl.handlePaginationClicks(window.favoriteSellers);
    }
  }
});

/***/ })

/******/ });