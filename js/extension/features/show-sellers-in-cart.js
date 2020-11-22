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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ({

/***/ 67:
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

rl.ready(() => {

  /**
   * Fetches the sellers from the cart page
   * @returns {object}
   */
  let fetchSellersFromCart = (() => {
    var _ref = _asyncToGenerator(function* () {

      let url = '/sell/cart',
          response = yield fetch(url),
          data = yield response.text(),
          div = document.createElement('div');

      div.innerHTML = data;
      return div;
    });

    return function fetchSellersFromCart() {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * Find all instances of sellers in list and
   * add the cart badge
   * @return {function}
   */


  // ========================================================
  // Functions
  // ========================================================
  /**
   * Iterates over each seller in the cart and
   * saves the names to localStorage.
   * @param {Object} elem - the element to iterate over
   * @returns {Promise}
   */
  function captureSellerNames(elem = document) {

    return new Promise(resolve => {
      let namesInCart = elem.querySelectorAll('.linked_username'),
          sellerNames = {
        names: []
      };

      if (namesInCart.length) {
        namesInCart.forEach(n => sellerNames.names.push(n.textContent.trim()));
      }

      rl.setPreference('sellerNames', sellerNames);
      return resolve(sellerNames);
    });
  }window.sellerItemsInCart = function sellerItemsInCart({ names }) {

    names.forEach(seller => {

      let sellers = document.querySelectorAll('td.seller_info ul li:first-child a');

      sellers.forEach(name => {

        if (name.textContent.trim() === seller && !name.closest('li').querySelector('.de-items-in-cart')) {

          let icon = document.createElement('span');

          icon.className = 'de-items-in-cart needs_delegated_tooltip';
          icon.dataset.placement = 'bottom';
          icon.rel = 'tooltip';
          icon.title = `There is at least one item from ${seller} in your cart.`;
          name.closest('li').insertAdjacentElement('beforeend', icon);
        }
      });
    });
  };

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
        .de-items-in-cart {
          display: inline-block;
          height: 14px;
          width: 14px;
          margin-left: 3px;
          margin-top: 3px;
          vertical-align: top;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iNyIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPjxwYXRoIGQ9Ik0xMC4wNDkzIDEwLjM3NDRDMTAuMzI1NCAxMC4zNzQ0IDEwLjU0OTMgMTAuMTUwNiAxMC41NDkzIDkuODc0NDVDMTAuNTQ5MyA5LjU5ODMxIDEwLjMyNTQgOS4zNzQ0NSAxMC4wNDkzIDkuMzc0NDVWMTAuMzc0NFpNNC43NTYwNCA5Ljg3NDQ1TDQuMjg2MTQgOS43MDM1OEM0LjIzMDQgOS44NTY4NiA0LjI1MjkzIDEwLjAyNzcgNC4zNDY1IDEwLjE2MTNDNC40NDAwOCAxMC4yOTQ5IDQuNTkyOTMgMTAuMzc0NCA0Ljc1NjA0IDEwLjM3NDRWOS44NzQ0NVpNNS4wMzEwMSA5LjExODI3TDUuNTAwOTEgOS4yODkxNUM1LjUzMzk4IDkuMTk4MiA1LjUzOTk1IDkuMDk5NiA1LjUxODA4IDkuMDA1MzNMNS4wMzEwMSA5LjExODI3Wk0zLjkzMTEyIDQuMzc1TDQuNDE4MiA0LjI2MjA1QzQuMzY1NjUgNC4wMzU0NCA0LjE2Mzc1IDMuODc1IDMuOTMxMTIgMy44NzVWNC4zNzVaTTIuNjI1IDMuODc1QzIuMzQ4ODYgMy44NzUgMi4xMjUgNC4wOTg4NiAyLjEyNSA0LjM3NUMyLjEyNSA0LjY1MTE0IDIuMzQ4ODYgNC44NzUgMi42MjUgNC44NzVWMy44NzVaTTEwLjA0OTMgOS4zNzQ0NUg0Ljc1NjA0VjEwLjM3NDRIMTAuMDQ5M1Y5LjM3NDQ1Wk01LjIyNTkzIDEwLjA0NTNMNS41MDA5MSA5LjI4OTE1TDQuNTYxMTEgOC45NDc0TDQuMjg2MTQgOS43MDM1OEw1LjIyNTkzIDEwLjA0NTNaTTUuNTE4MDggOS4wMDUzM0w0LjQxODIgNC4yNjIwNUwzLjQ0NDA0IDQuNDg3OTVMNC41NDM5MyA5LjIzMTIyTDUuNTE4MDggOS4wMDUzM1pNMy45MzExMiAzLjg3NUgyLjYyNVY0Ljg3NUgzLjkzMTEyVjMuODc1WiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNC4xMzczMyA0LjgxMjQxQzQuMDYwOTEgNC44MTI0MSAzLjk4ODY5IDQuODQ3MzYgMy45NDEyOCA0LjkwNzI4QzMuODkzODYgNC45NjcyMSAzLjg3NjQ2IDUuMDQ1NTMgMy44OTQwMyA1LjExOTlMNC42NTAyIDguMzE5OTFDNC42Nzk4OCA4LjQ0NTQ4IDQuODAwMjUgOC41Mjc4NSA0LjkyODA1IDguNTEwMDFMMTAuODQgNy42ODUxQzEwLjk2MzUgNy42Njc4NiAxMS4wNTU0IDcuNTYyMjIgMTEuMDU1NCA3LjQzNzVWNS4wNjI0MUMxMS4wNTU0IDQuOTI0MzQgMTAuOTQzNSA0LjgxMjQxIDEwLjgwNTQgNC44MTI0MUg0LjEzNzMzWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSI1LjAzMSIgY3k9IjEwLjk3NDQiIHI9IjAuNjg3NDMxIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjkuNzA1NTYiIGN5PSIxMC45NzQ0IiByPSIwLjY4NzQzMSIgZmlsbD0id2hpdGUiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI3IiB5MT0iMCIgeDI9IjciIHkyPSIxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM2NTAwQ0EiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0QTAwOTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=);
        }
        .de-items-in-cart + .tooltip {
          white-space: normal;
          opacity: 1;
        }`;

  // ========================================================
  // DOM Setup
  // ========================================================

  // Marketplace wantlists, all items, release pages
  if (rl.pageIs('myWants', 'allItems', 'sellRelease')) {
    fetchSellersFromCart().then(data => captureSellerNames(data)).then(sellerNames => {
      rl.attachCss('items-in-cart', rules);
      if (sellerNames && sellerNames.names && sellerNames.names.length) {
        window.sellerItemsInCart(sellerNames);
        rl.handlePaginationClicks(window.sellerItemsInCart, sellerNames);
      }
    });
  }
});
/*
// ========================================================
Come, fly the teeth of the wind. Share my wings.
https://www.discogs.com/FSOL-ISDN/master/6486
// ========================================================
*/

/***/ })

/******/ });