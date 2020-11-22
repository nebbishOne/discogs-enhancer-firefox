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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ({

/***/ 63:
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
 * ---------------------------------------------------------------------------
 * Overview
 * ---------------------------------------------------------------------------
 *
 * This feature will inject `Show ratings` links into marketplace / seller items.
 * When a user clicks an injected link, the script will fetch the release page, extract the
 * release rating data and display it in the marketplace listing.
 *
 * The script is initiated with the code that follows the `init / DOM Setup` comment block.
 *
 * 1.) `insertRatingsLink` injects the links and calls the `addUiListeners` function.
 * 2.) `addUiListeners` attaches click event listeners to each `Show release link` which
 * call `getReleaseRating`.
 * 3.) `getReleaseRating` feteches the relavant data from the release page and injects it into
 * the marketplace listing.
 */

rl.ready(() => {

  /**
   * Gets the release rating and votes from a specified release
   *
   * @method getReleaseRating
   * @param  {String} id [the event's data-id attribute value]
   * @param  {object} parent [the parent of the event.target element]
   * @return {object}
   */
  let getReleaseRating = (() => {
    var _ref = _asyncToGenerator(function* (id, parent) {

      try {

        let response = yield fetch(id),
            data = yield response.text(),
            div = document.createElement('div'),
            rating;

        div.innerHTML = data;
        rating = div.querySelector('.statistics ul:first-of-type li:last-child').textContent;

        parent.querySelector('.preloader').remove();

        return parent.append(rating);
      } catch (err) {

        return console.log('Discogs Enhancer: Cannot get release ratings.', err);
      }
    });

    return function getReleaseRating(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * Injects `Show release ratings` links into the DOM
   *
   * @method insertRatingsLink
   * @return {function}
   */
  // attached to window object so it can be called by Everlasting Marketplace


  // ========================================================
  // Functions
  // ========================================================
  /**
   * Attaches event listeners to all `.de-rating-link` elements
   *
   * @method addUiListeners
   * @return {undefined}
   */
  function addUiListeners() {

    document.querySelectorAll('.de-rating-link').forEach(elem => {

      elem.addEventListener('click', event => {

        let preloader = document.createElement('i'),
            parent = event.target.parentElement;

        preloader.className = 'icon icon-spinner icon-spin preloader';
        preloader.style = 'font-style: normal; position: relative; margin-left: 10px;';

        event.preventDefault();

        parent.append(preloader);

        event.target.remove();

        getReleaseRating(event.target.dataset.id, parent);
      });
    });
  }window.insertRatingsLink = function insertRatingsLink() {

    let releases = document.querySelectorAll('.item_release_link');

    releases.forEach(release => {

      let a = document.createElement('a'),
          div = document.createElement('div'),
          parent = release.parentElement;

      div.className = 'de-rating-link-wrap';

      a.className = 'de-rating-link';
      a.dataset.id = release.href;
      a.style = 'display:block;';
      a.textContent = 'Show Ratings';

      div.append(a);

      // don't insert links if they already exist
      if (!parent.getElementsByClassName('de-rating-link-wrap').length) {

        release.insertAdjacentElement('beforebegin', div);
      }
    });

    return addUiListeners();
  };

  // ========================================================
  // Init / DOM Setup
  // ========================================================
  let marketplace = rl.pageIs('sell') && rl.pageIsNot('sellRelease', 'seller'),
      seller = rl.pageIs('seller');

  if (seller || marketplace) {
    window.insertRatingsLink();
    rl.handlePaginationClicks(window.insertRatingsLink);
  }
});

/***/ })

/******/ });