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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 35:
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
   * Fetches the current exchange rates from fixer.io based on the
   * value set in the converter.
   * @method getConverterRates
   * @param {string} base The exchange name of the currency
   * @returns {object}
   */
  let getConverterRates = (() => {
    var _ref = _asyncToGenerator(function* (base) {

      let url = ``;

      setUIforUpdating(true, 'Updating...');

      try {

        let response = yield fetch(url),
            data = yield response.json();

        data.lastChecked = now;

        rl.setPreference('converterRates', data);
        rates = rl.getPreference('converterRates');

        setUIforUpdating(false, '');
        convertCurrency();

        if (debug) {

          console.log(' ');
          console.log('*** Converter Rates ***');
          console.log('Date: ', rates.date);
          console.log('Base: ', rates.base);
          console.log(rates.rates);
        }
      } catch (err) {

        console.log('Could not get exchange rates for currency converter', err);

        input.placeholder = '';
        errors.textContent = 'Error. Please try again later.';
      }
    });

    return function getConverterRates(_x) {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * Returns the index number from the exchangeList array
   * that matches the user's currency value which is used
   * to look up the currency symbol to display in the
   * converter.
   * @method getExchangeSymbolIndex
   * @returns {integer}
   */


  let baseCurrency,
      debug = rl.options.debug(),
      errors,
      input,
      language = rl.language(),
      lastUsedCurrency = rl.getPreference('lastUsedCurrency'),
      now = Date.now(),
      output,
      rates,
      twoHours = 60 * 1000 * 120,
      userCurrency,

  //
  markup = `<div class="currency-converter">
                  <div class="toggle">¥ € $</div>
                  <div class="top">
                    <div class="ui-wrap">
                      <div class="currency">Convert:</div>
                      <div class="currency-select">
                        <select id="baseCurrency">
                          <option value="-">-</option>
                          <option value="AUD">AUD (A$)</option>
                          <option value="BRL">BRL (R$)</option>
                          <option value="CAD">CAD (CA$)</option>
                          <option value="CHF">CHF (CHF)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="JPY">JPY (¥)</option>
                          <option value="MXN">MXN (MX$)</option>
                          <option value="NZD">NZD (NZ$)</option>
                          <option value="RUB">RUB (&#8381;)</option>
                          <option value="SEK">SEK (SEK)</option>
                          <option value="USD">USD ($)</option>
                          <option value="ZAR">ZAR (ZAR)</option>
                        </select>
                      </div>
                      <div class="<value-input></value-input>">
                        <input type="number" id="ccInput" max="999999999" min="0"></input>
                      </div>
                    </div>
                  </div>

                  <div class="bottom">
                    <div class="ui-wrap">
                      <div class="currency">To:</div>
                      <div class="currency-select">
                        <select id="userCurrency">
                          <option value="-">-</option>
                          <option value="AUD">AUD (A$)</option>
                          <option value="BRL">BRL (R$)</option>
                          <option value="CAD">CAD (CA$)</option>
                          <option value="CHF">CHF (CHF)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="JPY">JPY (¥)</option>
                          <option value="MXN">MXN (MX$)</option>
                          <option value="NZD">NZD (NZ$)</option>
                          <option value="RUB">RUB (&#8381;)</option>
                          <option value="SEK">SEK (SEK)</option>
                          <option value="USD">USD ($)</option>
                          <option value="ZAR">ZAR (ZAR)</option>
                        </select>
                      </div>
                      <div id="clearBtn">
                        <button id="clear" class="button button-blue">Clear</button>
                      </div>
                      <div class="value-output">
                        <span id="ccOutput"></span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span id="errors" style="color: red !important;"></span>
                  </div>
                </div>`;

  // ========================================================
  // Functions (Alphabetical)
  // ========================================================

  /**
   * Clears the errors in the currency converter
   * @method clearErrors
   * @returns {string}
   */
  function clearErrors() {

    if (baseCurrency !== '-' && userCurrency !== '-') {
      errors.textContent = '';
    }
  }

  /**
   * Converts the currencies set by the user
   * @method convertCurrency
   * @returns {undefined}
   */
  function convertCurrency() {

    let result,
        symbol,
        symbolIndex = getExchangeSymbolIndex();

    // Make sure stuff is selected
    if (baseCurrency.value === '-' || userCurrency.value === '-') {

      input.value = '';
      output.textContent = '';

      errors.textContent = 'Please select two currencies.';
    }

    // Calculate the result
    result = (input.value * rates.rates[userCurrency.value]).toFixed(2);
    // Grab correct symbol from printSymbol array
    symbol = rl.printSymbol[language][symbolIndex];
    // Voilà
    output.textContent = rl.localizeSuggestion(symbol, result, userCurrency.value, language);

    // Let's be reasonable about our conversion values
    if (input.value.length > 10 || input.value > 9999999) {

      input.value = '';
      // ¯\_(ツ)_/¯
      setTimeout(() => {
        output.textContent = '\u00AF\u005C\u005F\u0028\u30C4\u0029\u005F\u002F\u00AF';
      }, 0);
    }

    if (input.value === '') {
      output.textContent = '';
    }
  }

  /**
   * Disables an option in a select element
   * @param {object} select The select element to iterate over
   * @param {string} value The string to compare the option value to
   * @returns {undefined}
   */
  function disableOption(select, value) {

    [...select.options].forEach(opt => {
      if (opt.value === value) {
        opt.disabled = true;
      }
    });
  }

  /**
   * Deletion animation that runs when clear is pressed.
   * @method disolveAnimation
   * @returns {undefined}
   */
  function disolveAnimation() {

    let disolve = setInterval(() => {

      let text = input.textContent,
          val = input.value;

      text = val.substring(0, val.length - 1);
      input.value = text;
      convertCurrency();

      if (val <= 0 && val.length < 1) {

        clearInterval(disolve);
      }
    }, 30);
  }function getExchangeSymbolIndex() {

    let index;

    rl.exchangeList.forEach((exchangeName, i) => {

      if (exchangeName === userCurrency.value) {
        index = i;
      }
    });

    return index;
  }

  /**
   * Returns the value of the selected option from a select element
   * @method getOptionValue
   * @param {object} elem The select element to get the option value from
   * @returns {string}
   */
  function getOptionValue(elem) {
    return elem.options[elem.options.selectedIndex].value;
  }

  /**
   * Selects an option from a select element
   * @param {object} select The select element to iterate over
   * @param {string} value The value to compare the options to
   * @returns {undefined}
   */
  function selectOption(select, value) {

    [...select.options].forEach(opt => {

      if (opt.value === value) {

        opt.selected = true;
      }
    });
  }

  /**
   * Enables or disables the UI when the converter
   * is updating the rates
   * @method setUIforUpdating
   * @param {boolean} disable Whether to enable the select/input element
   * @param {string} placeholderText The placeholder text to display during an update
   */
  function setUIforUpdating(disable, placeholderText) {

    userCurrency.disabled = disable;
    output.disabled = disable;
    input.placeholder = placeholderText;
  }

  /**
   * Shows or Hides the currency converter
   * @method toggleConverter
   * @returns {method}
   */
  function toggleConverter() {

    let converter = document.querySelector('.currency-converter');

    return converter.classList.contains('show-converter') ? converter.classList.remove('show-converter') : converter.classList.add('show-converter');
  }

  // ========================================================
  // DOM Setup / Init
  // ========================================================

  // First thing to do is inject the form into the page
  document.body.insertAdjacentHTML('beforeend', markup);

  // UI Element selectors
  userCurrency = document.querySelector('#userCurrency');
  baseCurrency = document.querySelector('#baseCurrency');
  input = document.querySelector('.currency-converter #ccInput');
  output = document.querySelector('.currency-converter #ccOutput');
  errors = document.querySelector('#errors');

  // Check for existing rates
  if (!rl.getPreference('converterRates')) {

    rates = null;
  } else {

    rates = rl.getPreference('converterRates');
    // Select the value for `baseCurrency` if available
    selectOption(baseCurrency, rates.base);
  }
  // Remember state for #userCurrency
  if (lastUsedCurrency) {
    selectOption(userCurrency, lastUsedCurrency);
  } else {
    selectOption(userCurrency, 'USD');
  }
  // Disable ability to select '-' option
  // so ajax call does not come back 422 (Unprocessable Entity)
  disableOption(baseCurrency, '-');
  // Disable the matching currency in the other select box
  // so that you can't compare EUR to EUR, etc...
  if (rates && rates.base) {
    disableOption(userCurrency, rates.base);
  }

  // Check to see how old the rates are and update them if needed
  if (rates && now > rates.lastChecked + twoHours || rates && !rates.timestamp) {

    if (debug) {

      console.log(' ');
      console.log(' *** Auto-updating Currency Converter rates *** ');
    }

    rates = rl.getPreference('converterRates');
    getConverterRates(rates.base);
  }

  // ========================================================
  // Form Functionality
  // ========================================================

  // Calculate currency value on each key stroke.
  // `setTimeout` is used here because without it, calculations are not performed in
  // realtime and, instead, are one calculation behind the last digit entered.
  input.addEventListener('keydown', () => setTimeout(convertCurrency, 0));

  // ========================================================
  // UI Functionality
  // ========================================================

  // Clear out all data
  document.querySelector('.currency-converter #clear').addEventListener('click', () => {

    let hasDecimal = input.value.includes('.');
    // Strip decimal to stop browser from console.warning on invalid number
    if (hasDecimal) {
      input.value = input.value.replace('.', '');
    }
    // Delete the value from the input in an animated fashion
    disolveAnimation();
  });

  // Update the UI depending on the selected base currency
  document.querySelector('#baseCurrency').addEventListener('change', () => {

    let baseValue = getOptionValue(baseCurrency),
        userValue = getOptionValue(userCurrency);

    // Reset #userCurrency if #baseCurrency is the same
    if (baseValue === userValue) {
      userCurrency.options.selectedIndex = 0;
      return;
    }

    clearErrors();
    // Disable the cooresponding option in `userCurrency` if
    // it is the same as `baseCurrency`
    [...userCurrency.options].forEach(opt => {
      opt.disabled = opt.value === baseValue ? true : false;
    });
    // Update rates
    getConverterRates(baseValue);
  });

  // Show/Hide converter on click
  document.querySelector('.currency-converter .toggle').addEventListener('click', ({ target }) => {

    let baseValue = getOptionValue(baseCurrency),
        userValue = getOptionValue(userCurrency);

    // Reset #userCurrency if #baseCurrency is the same
    if (baseValue === userValue) {
      userCurrency.options.selectedIndex = 0;
    }

    // Show/Hide the converter
    toggleConverter();

    // Set the focus on the input
    input.focus();
    // Clear out errors so hiding continues to work as expected
    errors.textContent = '';
    // Change the tab text
    target.textContent = target.textContent === '¥ € $' ? '£ € $ $' : '¥ € $';
  });

  // Save last known state of #userCurrency
  userCurrency.addEventListener('change', () => {

    clearErrors();
    convertCurrency();

    rl.setPreference('lastUsedCurrency', getOptionValue(userCurrency));
  });
});

/***/ })

/******/ });