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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ({

/***/ 85:
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

document.addEventListener('DOMContentLoaded', () => {

  let hasList = localStorage.getItem('countryList'),
      countryList = hasList ? JSON.parse(hasList) : setNewlist(),
      countryListError = 'is already on your list.';

  // ========================================================
  // Functions (Alphabetical)
  // ========================================================

  /**
   * Adds click event listeners to each country name
   * @returns {undefined}
   */
  function addCountryEventListeners() {
    [...document.getElementsByClassName('country-name')].forEach(name => {

      name.addEventListener('click', removeCountryName);
    });
  }

  /**
   * Adds the country to the list
   * @returns {method}
   */
  function addCountryToList() {

    let input = document.getElementById('country-input').value;

    if (input) {

      countryList.list.push(input);

      countryList = JSON.stringify(countryList);

      localStorage.setItem('countryList', countryList);

      document.querySelector('.errors').textContent = '';

      return location.reload();
    }
  }

  /**
   * Checks for an empty country list and displays
   * a message letting the user know their list is empty.
   * @returns {undefined}
   */
  function checkForEmptyCountryList() {

    let countries = document.querySelectorAll('.blocked-country .country').length,
        noCountries = '<p><em>Your list is empty.</em></p>';

    if (!countries) {
      document.querySelector('.blocked-country').insertAdjacentHTML('beforeend', noCountries);
      document.querySelector('.backup-output').textContent = '';
      document.querySelector('.backup-instructions').textContent = 'You can backup your block list once you add at least one country to your list using the form above.';
    }
  }

  /**
   * Iterates over the countryList object and injects
   * each name as markup into the DOM
   * @returns {undefined}
   */
  function insertCountriesIntoDOM() {

    countryList.list.sort();
    countryList.list.forEach(country => {

      let node = document.createElement('div'),
          countries = document.getElementById('blocked-country');

      node.className = 'country';

      node.innerHTML = `<div class="country-name">
                          <span class="name">
                            ${country}
                          </span>
                        </div>`;

      countries.appendChild(node);
    });
  }

  /**
   * Checks if index is a string
   * @param {any primitive} index
   * @returns {Boolean}
   */
  function isString(index) {
    return typeof index === 'string';
  }

  /**
   * Remove the country name from the list/localStorage
   * @param {object} event The event object
   * @returns {function}
   */
  function removeCountryName(event) {

    let targetName = event.target.innerHTML.trim();

    event.target.parentNode.classList.add('fadeOut');

    countryList.list.forEach((country, i) => {

      if (targetName === country) {

        countryList.list.splice(i, 1);

        countryList = JSON.stringify(countryList);

        localStorage.setItem('countryList', countryList);

        return setTimeout(() => updatePageData(), 400);
      }
    });
  }

  /**
   * Instantiates a new list object
   * @returns {object}
   */
  function setNewlist() {

    localStorage.setItem('countryList', '{ "list": [], "currency": false, "include": false }');

    return JSON.parse(localStorage.getItem('countryList'));
  }

  /**
   * Show error if the country is already on the list
   * @returns {undefined}
   */
  function showError(message) {

    let input = document.getElementById('country-input').value;

    document.querySelector('.errors').textContent = `${input} ${message}`;
  }

  /**
   * Updates the country list and the restore array data
   * on the page without refreshing.
   * @returns {undefined}
   */
  function updatePageData() {

    countryList = JSON.parse(localStorage.getItem('countryList'));
    // remove all the countries from the DOM
    [...document.getElementsByClassName('country')].forEach(c => c.remove());

    // Add them back in with the newly updated countrylist data
    insertCountriesIntoDOM();
    // reattach event listerns to countries
    addCountryEventListeners();
    // update backup/restore output
    document.querySelector('.backup-output').textContent = JSON.stringify(countryList.list);
    // check for empty list
    checkForEmptyCountryList();
  }

  /**
   * Validates the input value from the restore section by
   * checking that it is first parseable and second an Array
   * with strings in each index.
   * @param  {string} list The country list passed in from localStorage
   * @returns {boolean}
   */
  function validateCountrylist(list) {

    let isValid = false;

    try {
      // make sure it's parsable
      list = JSON.parse(list);
    } catch (event) {

      return isValid;
    }

    // make sure every index is a string
    if (list && Array.isArray(list)) {

      return list.every(isString);
    }
  }

  // ========================================================
  // UI Functionality
  // ========================================================

  // Add country to list
  document.querySelector('.btn-green').addEventListener('click', () => {

    let input = document.getElementById('country-input').value;

    if (input && !countryList.list.includes(input)) {

      addCountryToList();

      return location.reload();
    } else if (countryList.list.includes(input)) {

      return showError(countryListError);
    }
  });

  // Radio button listener
  document.getElementById('country-prefs').addEventListener('change', event => {

    countryList = JSON.parse(localStorage.getItem('countryList'));

    countryList.include = JSON.parse(event.target.value);

    countryList = JSON.stringify(countryList);

    localStorage.setItem('countryList', countryList);

    return location.reload();
  });

  // Checkbox listener
  document.getElementById('currency').addEventListener('change', event => {

    countryList = JSON.parse(localStorage.getItem('countryList'));

    countryList.currency = event.target.checked;

    countryList = JSON.stringify(countryList);

    localStorage.setItem('countryList', countryList);

    return location.reload();
  });

  // Restore functionality
  document.querySelector('.restore .btn-green').addEventListener('click', () => {

    let list = document.querySelector('.restore-input').value;

    if (validateCountrylist(list)) {

      let restore = { list: JSON.parse(list), currency: false, include: false };

      localStorage.setItem('countryList', JSON.stringify(restore));

      return location.reload();
    } else {

      document.querySelector('.restore-errors').classList.remove('hide');
    }
  });

  // keyup event for Enter key
  document.addEventListener('keyup', e => {

    let input = document.getElementById('country-input').value;

    // Enter key is pressed
    if (e.which === 13 && input && !countryList.list.includes(input)) {

      addCountryToList();

      return location.reload();

      // name is already on the list
    } else if (countryList.list.includes(input)) {

      return showError(countryListError);
    } else {

      // clear any previous errors
      document.querySelector('.errors').textContent = '';
    }
  });

  // ========================================================
  // DOM Setup
  // ========================================================

  // Select the radio button on page load
  if (countryList.include) {
    document.getElementById('include').checked = true;
  } else {
    document.getElementById('exclude').checked = true;
  }

  // Select the currency checkbox on page load
  if (countryList.currency) {
    document.getElementById('currency').checked = true;
  }

  // Focus on input
  document.getElementById('country-input').focus();
  updatePageData();
});

/***/ })

/******/ });