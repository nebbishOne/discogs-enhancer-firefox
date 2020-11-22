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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
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
 * This feature will hide items that ship from specified countries in the Marketplace.
 */

rl.ready(() => {

  let countryList = rl.getPreference('countryList'),
      href = window.location.href,
      currencyInURL = href.includes('currency=');

  // ========================================================
  // Functions
  // ========================================================

  /**
   * Filter items in the Marketplace
   *
   * @method filterCountries
   * @return {function}
   */
  window.filterCountries = function filterCountries(include, useCurrency) {

    if (rl.pageIs('allItems', 'sellRelease', 'myWants')) {

      let shipsFrom = [...document.querySelectorAll('td.seller_info ul li:nth-child(3)')];

      if (!useCurrency || useCurrency && currencyInURL) {

        shipsFrom.forEach(location => {

          let countryName = location.textContent.split(':')[1];

          if (!countryList.list.includes(countryName.toLowerCase()) === include) {
            location.closest('.shortcut_navigable').classList.add('de-hide-country');
          }

          if (shipsFrom.every(rl.isHidden)) {

            let html = `<tr class="shortcut_navigable">
                          <th>
                            All results have been filtered out.
                          </th>
                        </tr>`;

            document.querySelector('#pjax_container tbody').innerHTML = html;
          }
        });
      }
    }
  };

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
      .de-hide-country {
        display: none;
      }`;

  // ========================================================
  // DOM manipulation
  // ========================================================

  if (countryList) {

    // Convert to lowercase for comparisons
    countryList.list = countryList.list.map(i => i.toLowerCase());

    if (rl.pageIs('allItems', 'sellRelease', 'myWants')) {

      rl.attachCss('filterShippingCountryCss', rules);
      window.filterCountries(countryList.include, countryList.currency);
      // Prev/Next clicks
      rl.handlePaginationClicks(window.filterCountries, countryList.include, countryList.currency);
    }
  }
});

/***/ })

/******/ });