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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 70:
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
 * user's personal lists.
 */

rl.ready(() => {

  let clicks = 0,
      delay = 125,
      desc = false,
      storage;

  // ========================================================
  // Functions
  // ========================================================

  /**
   * Adds an event listener to the `Sort A-Z` button
   * and resets the `desc` value when the modal is dismissed.
   * @returns {undefined}
   */
  function addClickListener() {

    document.querySelector('#sortPLists').addEventListener('click', trackClicks);

    // Reset our `desc` value when canceled or saved.
    [...document.querySelectorAll('.ui-dialog-titlebar-close', '.lists_list_add_cancel', '.lists_list_add_save')].forEach(elem => {
      elem.addEventListener('click', () => {
        desc = false;
      });
    });
  }

  /**
   * Alphabetizes the links
   * @param {string} o1 The string value of the option
   * @param {string} o2 The string value of the option
   * @returns {integer}
   */
  function compareOptions(o1, o2) {

    let x = o1.textContent.toLowerCase(),
        y = o2.textContent.toLowerCase();

    return x > y ? 1 : x < y ? -1 : 0;
  }

  /**
   * Waits for the list modal to render the
   * form inside it before adding the `Sort A-Z`
   * button
   * @returns {undefined}
   */
  function injectSortButton() {

    let injectSortButton,
        sortButton = `<div style="position: absolute; left: 295px; top: 10px;">
                        <button id="sortPLists" class="button button-blue">
                          Sort A-Z
                        </button>
                      </div>`;

    injectSortButton = setInterval(() => {

      if (document.querySelector('#listadd')) {

        clearInterval(injectSortButton);

        storage = document.querySelector('#list_oldpick').cloneNode(true);

        document.querySelector('#listadd').insertAdjacentHTML('afterend', sortButton);
        addClickListener();
      }
    }, 100);
  }

  /**
   * Sorts the options from A-Z or Z-A
   * @param {boolean} sortDescending The sort direction
   * @returns {undefined}
   */
  function sortOptions(sortDescending) {

    let select = document.querySelector('#list_oldpick'),
        opt = document.createElement('option'),
        optionsArray = [...select.querySelectorAll('option')];

    optionsArray.sort(compareOptions);

    if (sortDescending) {
      optionsArray.reverse();
    }
    // Clear out select element
    [...select.querySelectorAll('option')].forEach(opt => opt.remove());

    // Create temporary option
    opt.textContent = 'Sorting...';
    select.insertAdjacentElement('beforeend', opt);

    // intentional delay for illustrative purposes only
    setTimeout(() => {
      // Remove temporary option
      select.querySelector('option').remove();
      // Insert newly sorted options
      optionsArray.forEach(opt => select.append(opt));
      // Select the first option after reordering
      select.value = select.querySelector('option').value;
    }, delay);
  }

  /**
   * Tracks the `Sort A-Z` button clicks
   * @returns {undefined}
   */
  function trackClicks() {

    let select = document.querySelector('#list_oldpick'),
        opt = document.createElement('option');

    clicks++;
    rl.setButtonText(document.querySelector('#sortPLists'));

    if (clicks > 2) {

      [...select.querySelectorAll('option')].forEach(opt => opt.remove());

      opt.textContent = 'Undoing...';
      select.insertAdjacentElement('beforeend', opt);

      // intentional delay for illustrative purposes only
      setTimeout(() => {
        select.innerHTML = storage.innerHTML;
      }, delay);

      clicks = 0;
      return;
    }

    sortOptions(desc);
    desc = !desc;
    return;
  }

  // ========================================================
  // DOM Setup / Init
  // ========================================================
  try {

    document.querySelectorAll('.add_to_list').forEach(link => {

      link.addEventListener('click', () => {
        let waitForListModal = setInterval(() => {
          desc = false;
          // Make sure the select exists
          if (document.querySelector('#list_oldpick option')) {
            clearInterval(waitForListModal);
            // Insert our sort button
            injectSortButton();
          }
        }, 100);
      });
    });
  } catch (err) {
    // just catch the error
  }
});

/***/ })

/******/ });