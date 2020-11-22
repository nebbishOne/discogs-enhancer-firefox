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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

/***/ 66:
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
 * This feature will mark any seller who's reputation falls below a specified number.
 *
 * 1.) The URL is examined to see if the user is in the Marketplace.
 * 2.) localStorage is queried for a `threshold` item.
 * 3.) The seller's reputations are pushed into a `ratings` array and iterated over.
 * 4.) If the reputation value is below the specified threshold, the `de-seller-rep`
 * class is added to the seller's rating element in the DOM.
 */

rl.ready(() => {

  let threshold = rl.getPreference('sellerRep'),
      filter = rl.getPreference('sellerRepFilter');

  if (!threshold) return;

  if (rl.pageIs('allItems', 'sellRelease', 'myWants')) {

    // ========================================================
    // Functions
    // ========================================================
    /**
     * Finds all the seller's reputation scores in the DOM and
     * adds a `de-seller-rep` class to them if necessary. Also
     * injects the seller-rep icon into the DOM.
     * @method sellersRep
     * @return {undefined}
     */
    window.sellersRep = function sellersRep() {

      let ratingVals = [...document.getElementsByClassName('seller_info')],
          ratings = ratingVals.map(val => Number(val.textContent.match(/\d+\.+\d/g)));

      // Tag any sellers below threshold
      ratings.forEach((rating, i) => {

        let seller_info = document.getElementsByClassName('seller_info');

        // if you want to tag new sellers as well change this to:
        // if ( rating < threshold ) {
        if (rating && rating < threshold && !seller_info[i].querySelector('.de-seller-rep-icon')) {

          let icon = document.createElement('span'),
              name = seller_info[i].querySelector('ul li:first-child a').textContent;

          icon.className = 'de-seller-rep-icon needs_delegated_tooltip';
          icon.dataset.placement = 'bottom';
          icon.rel = 'tooltip';
          icon.title = `${name}'s seller reputation is below ${threshold}%`;

          if (filter) {
            seller_info[i].closest('tr.shortcut_navigable').classList.add('de-seller-rep-hide');
          }

          seller_info[i].classList.add('de-seller-rep');
          seller_info[i].querySelector('li:first-child').insertAdjacentElement('beforeend', icon);
        }
      });
    };

    // ========================================================
    // CSS
    // ========================================================

    let sellerRepColor = rl.getPreference('sellerRepColor') || 'darkorange',
        color = sellerRepColor.match(/#*\w/g).join(''),
        rules = `
        .de-dark-theme .de-seller-rep ul li i,
        .de-dark-theme .de-seller-rep ul li strong,
        .de-seller-rep ul li i,
        .de-seller-rep ul li strong {
          color: ${color} !important;
        }
        .de-seller-rep-icon {
          background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjIxOCAxMy44NjNMOS4xMjguNTc0QTEuMSAxLjEgMCAwIDAgOC4xNDYgMGMtLjQxIDAtLjc4LjI0Ni0uOTg4LjYxNUwuMTIxIDEzLjkwNGMtLjE2Ni4zMjgtLjE2OC43OC4wMzYgMS4xMDcuMjA0LjMyOS41MzIuNDkzLjk0My40OTNoMTQuMTI1Yy40MSAwIC43OC0uMjA1Ljk0Ni0uNTM0LjIwNy0uMzI4LjIwOS0uNzM4LjA0Ni0xLjEwNyIgdHJhbnNmb3JtPSJzY2FsZSguODU3MTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+PHBhdGggZD0iTTYuOTk5IDQuNDk1YS41MzQuNTM0IDAgMCAwLS41MzMuNTMydjMuMmEuNTMxLjUzMSAwIDAgMCAuOTA5LjM3NmMuMS0uMS4xNTYtLjIzNS4xNTctLjM3NnYtMy4yYS41My41MyAwIDAgMC0uNTMzLS41MzJ6bTAgNS4zM2EuNTMzLjUzMyAwIDEgMC0uMDAxIDEuMDY1LjUzMy41MzMgMCAwIDAgLjAwMS0xLjA2NnoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjc1IiBzdHJva2U9IiM0MDMzMEQiIHN0cm9rZS13aWR0aD0iLjkwMiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgLTE2LjYxMSAxNi43MjMgMCAtOC45MDcgMTUuODM0KSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQzUxNSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRDU1QiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==);
          display: inline-block;
          height: 14px;
          width: 14px;
          margin-top: 3px;
          margin-left: 3px;
          vertical-align: top;
        }
        .de-seller-rep-icon + .tooltip {
          white-space: normal;
          opacity: 1;
        }

        .de-seller-rep-hide {
          display: none;
        }
        `;
    // ========================================================
    // DOM manipulation
    // ========================================================
    rl.attachCss('sellerRepCss', rules);
    window.sellersRep();

    // Prev/Next clicks
    rl.handlePaginationClicks(window.sellersRep);
  }
});
/**
// ========================================================
She moved so easily all I could think of was sunlight
I said, "Aren't you the woman who was recently given a Fulbright?"
She said, "Don't I know you from the cinematographer's party?"
I said, "Who am I to blow against the wind?"
https://www.discogs.com/master/view/55658
// ========================================================
 */

/***/ })

/******/ });