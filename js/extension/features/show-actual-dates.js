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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 74:
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

  if (document.querySelector('.cw_block')) {

    let { usDateFormat } = rl.getItem('userPreferences'),
        copies = document.querySelectorAll('.cw_block_timestamp'),
        language = rl.language(),
        monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // ========================================================
    // Functions
    // ========================================================
    /**
     * Sets a data attribute on each span that contains the
     * relative date the item was added to the collection/wantlist
     * @returns {Undefined}
     */
    function storeRelativeDates() {
      let dates = document.querySelectorAll('.cw_block_timestamp span');
      dates.forEach(date => {
        date.dataset.approx = date.textContent;
      });
    }

    /**
     * Converts time from 12 hour format to 24 hour format
     * @param {String} time12h - The time in 12 hour format (1:15 PM)
     * @returns {String}
     */
    function convertTo24(time12h) {

      let [time, modifier] = time12h.split(' '),
          [hours, minutes] = time.split(':');

      if (hours === '12') {
        hours = '00';
      }

      if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
      }

      return `${hours}:${minutes}`;
    }

    /**
    * Returns the localized month
    * @param {Number} monthIndex - The index of the month from the `monthList` array
    * @returns {String} - The localized month string
    */
    function getMonth(monthIndex) {
      let objDate = new Date();
      objDate.setMonth(monthIndex);
      return objDate.toLocaleString(language, { month: 'long' });
    }

    /**
    * Renders the date format into the DOM
    * @returns {undefined}
    */
    function renderDate(elem) {

      let timestamp = elem.querySelector('span').title,
          date = timestamp.split('-'),
          timeRaw = date[2].split(' '),
          time = [timeRaw[1], timeRaw[2]].join(' '),
          monthIndex = monthList.indexOf(date[1]),
          international = `${date[0]} ${getMonth(monthIndex)} 20${timeRaw[0]} ${convertTo24(time)}`,
          american = `${getMonth(monthIndex)} ${date[0]}, 20${timeRaw[0]}, ${time}`,
          specific = usDateFormat ? american : international;

      elem.querySelector('span').textContent = specific;
    }

    // ========================================================
    // CSS
    // ========================================================
    let rules = `
        .cw_block_timestamp span {
          display: inline-block;
          width: 45%;
        }`;

    // ========================================================
    // DOM setup
    // ========================================================
    if (usDateFormat === undefined) usDateFormat = false;

    rl.attachCss('date-toggle', rules);
    storeRelativeDates();
    copies.forEach(copy => renderDate(copy));

    // Event listeners
    // ------------------------------------------------------
    copies.forEach(copy => {

      let span = copy.querySelector('span'),
          actual = span.textContent;

      copy.addEventListener('mouseover', () => {
        span.textContent = span.dataset.approx;
      });

      copy.addEventListener('mouseleave', () => {
        span.textContent = actual;
      });
    });
  }
});
/*
// ========================================================
And maybe my issues are not your issues
But everyone has to sleep and everybody carries weight.
You can't escape regret, but you might regret escape
If you closed your eyes and held it, would you recognize the shape?
https://www.discogs.com/master/view/419728
// ========================================================
*/

/***/ })

/******/ });