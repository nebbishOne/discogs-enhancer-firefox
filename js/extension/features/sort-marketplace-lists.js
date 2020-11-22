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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ 69:
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
 * Marketplace sidebar filters: (Currency, Genre, Style,
 * Format, Media Condition and Year)
 *
 * The sorting functionalty is kicked off when the `sortMpLists`
 * method is fired.
 */

rl.ready(() => {

  let clicks = 0,
      desc = false,
      filterTarget,
      filterSelector = '.marketplace_filters.more_filters.marketplace_filters_',
      moreFiltersContainer = document.getElementById('more_filters_container'),
      moreFiltersStorage,
      storage;

  // ========================================================
  // Functions (Alphabetical)
  // ========================================================

  /**
   * Creates and injects the Sort A-Z button into the DOM
   * @method injectSortButton
   * @return {undefined}
   */
  function injectSortButton() {

    let div = document.createElement('div'),
        button = document.createElement('button');

    // Assemble the necessary markup
    div.style.textAlign = 'center';

    button.id = 'sortMpLists';
    button.className = 'button button-blue';
    button.textContent = 'Sort A-Z';

    div.append(button);

    // Inject it in to the DOM
    document.querySelector('.hide_more_filters').insertAdjacentElement('afterend', div);
  }

  /**
   * Attaches the event listeners to the injected sort button
   * and the 'All Filters' anchor.
   *
   * @method attachListeners
   * @return {undefined}
   */
  function attachListeners() {

    // 'Sort A-Z' button
    // Everything starts when this button is clicked
    document.getElementById('sortMpLists').addEventListener('click', trackClicks);
    // '<- All Filters' page link
    document.querySelector('.hide_more_filters').addEventListener('click', () => {

      try {
        // Tear down the 'Sort A-Z' button
        document.getElementById('sortMpLists').remove();
      } catch (err) {}
      /* Just catch the error */

      // Restore the unfiltered markup
      moreFiltersContainer.innerHTML = moreFiltersStorage.innerHTML;
      // Reset `desc` so that subsequent filter calls begin with A-Z
      desc = false;
    });
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
   * Kicks off the sorting process and tracks the
   * number of times the sort button has
   * been clicked.
   * @returns {undefined}
   */
  function trackClicks() {

    clicks++;
    rl.setButtonText(document.querySelector('#sortMpLists'));

    if (clicks > 2) {
      clicks = 0;
      document.querySelector(`${filterSelector}${filterTarget}`).innerHTML = storage.innerHTML;
      return;
    }

    // The sorting process begins here...
    sortList(event.target, desc);
    desc = !desc;
    return;
  }

  /**
   * Injects the sorted list in to the DOM
   *
   * @method injectListMarkup
   * @param {array} lis An array of <li> elements
   * @param {object} liHead A <li> element to be the first in the list
   * @return {method}
   */
  function injectListMarkup(lis, liHead) {

    let newUl,
        markup = `<ul class="marketplace_filters more_filters marketplace_filters_${filterTarget}">
                      <li style="min-width:16%;">
                        <ul class="facets_nav modified">`;

    // Clear out old markup
    moreFiltersContainer.innerHTML = '';
    // Insert new markup with custom `modified` class to hook on to
    moreFiltersContainer.insertAdjacentHTML('beforeend', markup);
    // Hook on to our new list
    newUl = document.querySelector('ul.facets_nav.modified');
    // Insert newly sorted list elements
    lis.forEach(li => newUl.append(li));

    return newUl.prepend(liHead);
  }

  /**
   * Sort our lists and create new HTML
   *
   * @method sortList
   * @param {object} target The `Sort A-Z` button that generated the event
   * @param {boolean} descending Order of the sorted list
   * @return {method}
   */
  function sortList(target, descending) {

    let liHead,
        lis = [...document.querySelectorAll(`${filterSelector}${filterTarget} ul.facets_nav li`)];

    // Examine the list elements and remove the `no_link` element
    // assign that to `liHead` for later use.
    lis.forEach(li => {

      if (li.classList.contains('no_link')) {

        liHead = li;
        lis.splice(li, 1);
      }
    });
    // Alphabetize things
    lis.sort(compareText);
    // Reverse if necessary
    if (descending) {
      lis.reverse();
    }
    // Append the sorted list
    injectListMarkup(lis, liHead);
  }

  // ========================================================
  // DOM Setup
  // ========================================================

  // Map functions to 'Show more...' anchors
  [...document.getElementsByClassName('show_more_filters')].forEach(anchor => {

    anchor.addEventListener('click', event => {

      let checkForMarkup;

      desc = false;
      // Find the right UL to filter
      filterTarget = event.target.dataset.label;

      // Make sure the correct child element exists in `#more_filters_container`
      // before storing it.
      checkForMarkup = setInterval(() => {

        if (document.querySelector(`${filterSelector}${filterTarget}`)) {
          // Store current markup of `#more_filters_container`. If the user does not
          // select a filter, it will be restored when `.hide_more_filters` is clicked
          moreFiltersStorage = moreFiltersContainer.cloneNode(true);

          storage = document.querySelector(`${filterSelector}${filterTarget}`).cloneNode(true);

          clearInterval(checkForMarkup);
        }
      }, 100);

      injectSortButton();
      attachListeners();
    });
  });
});

/***/ })

/******/ });