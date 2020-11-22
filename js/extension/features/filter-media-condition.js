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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 45:
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
 * This feature will hide all items below a specifed condition in the Marketplace.
 *
 * The script is initiated with the code that follows the `DOM manipulation` comment block.
 *
 * 1.) The URL is examined to see if the user is in the Marketplace.
 * 2.) localStorage is queried for a `mediaCondition` item.
 * 3.) The value of `mediaCondition` is used to truncate the length of the `conditions` array which
 * is then iterated over and any remaining values in the array are used to remove items in
 * those conditions from the DOM.
 */

rl.ready(() => {
  // ========================================================
  // Functions
  // ========================================================
  /**
   * Find all instances of selected items in list and hide them
   *
   * @method filterMediaCondition
   * @return {undefined}
   */
  window.filterMediaCondition = function filterMediaCondition() {

    // BUGFIX: allows this feature to work when the user has not enabled the marketplace highlights
    document.querySelectorAll('.condition-label-mobile').forEach(elem => elem.remove());

    if (mediaCondition) {
      let conditions = ['Poor (P)', 'Fair (F)', 'Good (G)', 'Good Plus (G+)', 'Very Good (VG)', 'Very Good Plus (VG+)', 'Near Mint (NM or M-)', 'Mint (M)'];

      // Truncate conditions array based on localStorage value
      conditions.length = Number(mediaCondition);

      // Remove offending items from the DOM based on whatever's left in the conditions array
      conditions.forEach(condition => {
        // Create array of media conditions
        let elems = document.querySelectorAll('td.item_description p.item_condition .condition-label-desktop:first-child + span');

        elems.forEach(el => {
          if (el.textContent.trim() === condition) {
            el.closest('.shortcut_navigable').classList.add('de-hide-media');
          }
        });
      });

      // Show message if all results have been removed
      if (!document.getElementsByClassName('shortcut_navigable').length) {

        let html = `<tr class="shortcut_navigable">
                      <th>
                        All results have been filtered out.
                      </th>
                    </tr>`;

        document.querySelector('#pjax_container tbody').innerHTML = html;

        document.querySelectorAll('.pagination_total').forEach(e => {
          e.textContent = 'All results have been filtered out.';
        });
      }
    } else {
      return;
    }
  };

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
      .de-hide-media {
        display: none;
      }`;

  // ========================================================
  // DOM manipulation
  // ========================================================
  let mediaCondition = rl.getPreference('mediaCondition');

  if (rl.pageIs('allItems', 'seller', 'sellRelease', 'myWants') && rl.pageIsNot('sellerFeedback', 'settings')) {

    rl.attachCss('filter-media-condition', rules);
    // hide items when page first loads
    window.filterMediaCondition();
    // Prev/Next clicks
    rl.handlePaginationClicks(window.filterMediaCondition);
  }
});

/***/ })

/******/ });