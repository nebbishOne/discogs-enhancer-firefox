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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ({

/***/ 68:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * These functions are used exclusively for sorting the
 * Explore modals (Genre, Style, Format, Country and Decade)
 */

rl.ready(() => {

  let clicks = 0,
      desc = false,
      storage;

  // ========================================================
  // Functions (Alphabetical)
  // ========================================================

  /**
   * Injects sort button into modal
   * @returns {undefined}
   */
  function appendSortButton() {

    let sortButton = `<div style="text-align: center;">
                        <button id="sortExplore" class="button button-blue">
                          Sort A-Z
                        </button>
                     </div>`;

    document.querySelector('.react-modal-header').insertAdjacentHTML('beforeend', sortButton);
  }

  /**
   * Alphabetizes the links
   * @method compareText
   * @param {string} a1 The string value of the href
   * @param {string} a2 The string value of the href
   * @return {integer}
   */
  function compareText(a1, a2) {

    let x = a1.querySelector('a').href.toLowerCase(),
        y = a2.querySelector('a').href.toLowerCase();

    return x > y ? 1 : x < y ? -1 : 0;
  }

  /**
   * Adds click event listeners to the `Sort A-Z` button
   * @returns {undefined}
   */
  function registerButtonClicks() {

    document.querySelector('#sortExplore').addEventListener('click', trackClicks);
    // reset `desc` when modal is closed with the 'X' button
    document.querySelector('.react-modal-close-button-icon').addEventListener('click', () => {
      desc = false;
    });
  }

  /**
   * Sorts the lists and injects the newly sorted elements
   * into a custom UL element.
   * @param {object} ul The target UL element
   * @param {boolean} sortDescending The sort direction
   * @returns {undefined}
   */
  function sortUnorderedList(ul, sortDescending) {

    let listElms = [...document.querySelectorAll('.react-modal-content div ul.facets_nav li')],
        ulstub = document.createElement('ul'),
        newUl = null;

    listElms.sort(compareText);

    if (sortDescending) {
      listElms.reverse();
    }

    ul.innerHTML = '';
    ulstub.className = 'facets_nav';
    ul.append(ulstub);

    newUl = document.querySelector('.react-modal-content div ul.facets_nav');

    listElms.forEach(elem => newUl.insertAdjacentElement('beforeend', elem));
    // shrink modal to small column size (for looks)
    document.querySelector('.react-modal.more_facets_dialog').classList.add('contract');
  }

  /**
   * Tracks the number of times the `Sort A-Z` button has been clicked
   * and calls `sortUnorderedList` accordingly.
   * @returns {undefined}
   */
  function trackClicks() {

    clicks++;
    rl.setButtonText(document.querySelector('#sortExplore'));

    if (clicks > 2) {

      document.querySelector('.react-modal-content div').innerHTML = storage.innerHTML;
      document.querySelector('.react-modal.more_facets_dialog').classList.remove('contract');
      clicks = 0;
      return;
    }

    sortUnorderedList(document.querySelector('.react-modal-content div'), desc);
    desc = !desc;
    return;
  }

  // ========================================================
  // DOM Setup / Init
  // ========================================================

  // Attach listeners to `All` anchors to kick things off...
  [...document.querySelectorAll('.more_facets_link')].forEach(link => {

    link.addEventListener('click', () => {

      desc = false;

      let append = setInterval(() => {

        if (document.querySelector('.react-modal.more_facets_dialog')) {

          // Store current state
          storage = document.querySelector('.react-modal-content div').cloneNode(true);

          appendSortButton();
          registerButtonClicks();

          clearInterval(append);
        }
      }, 100);
    });
  });
});

/***/ })

/******/ });