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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ({

/***/ 60:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * This feature will show the relative time an item
 * was last sold on the Release page.
 */

rl.ready(() => {
  if (rl.pageIs('release')) {
    // ========================================================
    // Functions
    // ========================================================

    /**
     * Returns the approximate relative time that has passed
     * since `date`.
     * @param {String} date - A date string: XX-MMM-YY
     * @returns {String}
     */
    function getRelativeTime(date) {

      let current = Date.now(),
          previous = new Date(date).getTime(),
          msPerMinute = 60 * 1000,
          msPerHour = msPerMinute * 60,
          msPerDay = msPerHour * 24,
          msPerMonth = msPerDay * 30,
          msPerYear = msPerDay * 365,
          elapsed = current - previous;

      if (elapsed <= msPerDay) {
        return 'Today';
      }

      if (elapsed < msPerMonth) {
        let duration = Math.floor(elapsed / msPerDay),
            units = duration > 1 ? 'days' : 'day';

        return `${duration} ${units} ago`;
      }

      if (elapsed < msPerYear) {
        let duration = elapsed / msPerMonth,
            rounded = (Math.floor(duration * 10) / 10).toFixed(2),
            floored = Math.floor(duration),
            units = floored > 1 ? 'months' : 'month',
            over = rounded > Math.floor(duration) ? 'Over' : '';

        return `${over} ${floored} ${units} ago`;
      }

      let duration = elapsed / msPerYear,
          rounded = (Math.floor(duration * 4) / 4).toFixed(2),
          floored = Math.floor(duration),
          units = floored > 1 ? 'years' : 'year',
          over = rounded > Math.floor(duration) ? 'Over' : '';

      return `${over} ${floored} ${units} ago`;
    }

    /**
     * Toggles between the relative/actual last sold dates
     * @param {String} rawDate - The raw date the item was sold
     * @param {String} relative - The relative time the item was sold
     * @returns {undefined}
     */
    function addMouseListeners(rawDate, relative) {

      lastSold.style.display = 'inline-block';
      lastSold.style.fontSize = 'inherit';

      lastSold.addEventListener('mouseover', () => {
        lastSold.textContent = rawDate;
        lastSold.style.width = '60%';
      });

      lastSold.addEventListener('mouseleave', () => {
        lastSold.textContent = relative;
        lastSold.style.width = 'auto';
      });
    }

    // ========================================================
    // DOM Setup
    // ========================================================
    let lastSold = document.querySelector('.last_sold a'),
        rawDate = lastSold && lastSold.textContent ? lastSold.textContent : null,
        relative = rawDate ? getRelativeTime(rawDate) : '';

    if (rawDate && relative) {
      lastSold.textContent = relative;
      lastSold.classList.add('de-last-sold');
      lastSold.closest('.section_content.toggle_section_content').style.width = '400px';
      addMouseListeners(rawDate, relative);
    }
  }
});

/***/ })

/******/ });