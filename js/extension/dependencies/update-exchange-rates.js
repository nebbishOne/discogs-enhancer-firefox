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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports) {

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 */

resourceLibrary.ready(() => {

  /**
   * Updates the exchange rates from Fixer.io
   * @return {object}
   */
  let updateRates = (() => {
    var _ref = _asyncToGenerator(function* () {

      let url = `https://discogs-enhancer.com/rates?base=${userCurrency}`;

      try {

        let response = yield fetch(url),
            data = yield response.json();

        exchangeRates.data = data;

        // Set last saved currency
        // If different from userCurrency it will trigger exchange rates update
        exchangeRates.currency = userCurrency;
        exchangeRates.data.lastChecked = now;

        if (debug) {

          console.log('*** Fresh rates ***');
          console.log(`Last update: ${exchangeRates.data.date} language: ${language} Currency: ${userCurrency}`);
          console.log('rates:', exchangeRates.data.rates);
        }

        // Save object to localStorage
        resourceLibrary.setPreference('exchangeRates', exchangeRates);
        exchangeRates = resourceLibrary.getItem('userPreferences').exchangeRates;
      } catch (err) {
        return console.log('Could not get currency exchange rates.', err);
      }
    });

    return function updateRates() {
      return _ref.apply(this, arguments);
    };
  })();

  // ========================================================
  // Update functionality
  // ========================================================

  let debug = resourceLibrary.options.debug(),
      language = resourceLibrary.language(),
      now = Date.now(),
      twoHours = 60 * 1000 * 120,
      userCurrency = resourceLibrary.getPreference('userCurrency'),
      exchangeRates = resourceLibrary.getPreference('exchangeRates') || setExchangeRates();

  // ========================================================
  // Functions
  // ========================================================

  /**
   * Sets the default currency object values
   * @return {object}
   */
  function setExchangeRates() {

    let obj = {
      currency: null,
      data: null
    };
    // Save it...
    resourceLibrary.setPreference('exchangeRates', obj);
    updateRates();
    // Get it again because reasons
    return resourceLibrary.getPreference('exchangeRates');
  }switch (true) {
    // if there's no rates prop it could
    // mean possible data corruption
    case !exchangeRates:
    case exchangeRates && !exchangeRates.data:
    case typeof exchangeRates.data !== 'object':

      // kill it with fire
      resourceLibrary.setPreference('exchangeRates', null);
      exchangeRates = setExchangeRates();
      break;

    // Data is stale or user has changed currency
    case now > exchangeRates.data.lastChecked + twoHours:
    case userCurrency !== exchangeRates.currency:

      // Remove old prices.
      // This will trigger a user alert if something tries to access
      // these rates before they have been returned from fixer.io
      exchangeRates.data = null;

      if (debug) {
        console.log(' ');
        console.log('Getting fresh rates... One moment please.');
      }

      updateRates();
      break;

    default:

      if (debug) {

        console.log(' ');
        console.log(`Using cached rates: ${exchangeRates.data.date} language: ${language} Currency: ${userCurrency}`);
        console.log('rates:', exchangeRates.data);
      }

      break;
  }
});

/***/ })

/******/ });