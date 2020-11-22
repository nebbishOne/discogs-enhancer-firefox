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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ({

/***/ 71:
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
 * This feature will compare the listed prices of a release with the prices
 * suggested by Discogs.
 *
 * The script is initiated with the code that follows the `DOM setup` comment block.
 * Testing: https://www.discogs.com/sell/release/2897713
 */
rl.ready(() => {
  if (rl.pageIs('sellRelease')) {

    let extract,
        items,
        nodeId,
        priceContainer = [],
        priceKey = {},
        prices,
        releaseId,
        symbol,
        userCurrency = rl.getPreference('userCurrency');

    // ========================================================
    // Functions (In general order of execution)
    // ========================================================

    /**
     * Starts price comparison process
     * @method init
     * @returns {undefined}
     */
    window.releasePricesInit = (() => {
      var _ref = _asyncToGenerator(function* () {

        let url = `https://www.discogs.com/sell/post/${releaseId}`,
            response = yield fetch(url, { credentials: 'include' }),
            data = yield response.text(),
            div = document.createElement('div'),
            selector = '.shortcut_navigable .item_description .item_condition span:nth-child(2)';

        document.querySelectorAll('.de-price').forEach(function (e) {
          return e.remove();
        });

        // handle errors
        if (response.status !== 200) {
          document.querySelectorAll('.de-price-preloader').forEach(function (e) {
            return e.remove();
          });
          handleErrors();
          return;
        }

        items = [...document.querySelectorAll(selector)].map(function (e) {
          return e.textContent.trim();
        });

        priceContainer = [];
        prices = document.querySelectorAll('td.item_price span.price');
        div.innerHTML = data;
        nodeId = div.querySelector('#dsdata');
        priceKey = rl.prepareObj(nodeId.outerHTML);

        checkForSellerPermissions(div);
        getPrices();
        window.appendPrices();
      });

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    })();

    /**
     * Collects the prices / conditions from the DOM
     * @returns {function}
     */
    function getPrices() {
      // Grab price / condition data from elements
      prices.forEach((price, i) => {
        priceContainer.push({ price: price.textContent, mediaCondition: items[i] });
      });

      rl.matchSymbols(priceContainer);
      rl.sanitizePrices(priceContainer);
      rl.convertPrices(priceContainer);

      symbol = rl.getSymbols(userCurrency, symbol);
    }

    /**
     * Calculates all the prices and appends them to the DOM
     * @returns {function|undefined}
     */
    window.appendPrices = function appendPrices() {

      // Insert price comparisons into each item on the page...
      document.querySelectorAll('td.item_price').forEach((listing, i) => {

        // Since adding everlasting marketplace scrolling to individual release
        // pages, make sure the empty pagination <td> elements are not
        // included when this each loop runs...
        if (priceContainer[i] && priceContainer[i].convertedPrice) {

          let actual = priceContainer[i].convertedPrice,
              colorizePrices = rl.options.colorize(),
              suggested = priceKey['post:suggestedPrices'][priceContainer[i].mediaCondition],
              difference = suggested - actual,

          //
          amount = '',
              markup,
              percentage = (difference / suggested * 100).toFixed(0),
              printPrice = rl.localizeSuggestion(symbol, suggested),
              spanOuter = document.createElement('span'),
              threshold = rl.options.threshold() || 0;

          document.querySelectorAll('.de-price-preloader').forEach(e => e.remove());

          // Debugging
          logOutput(percentage, difference, suggested);

          // No data from Discogs
          // ------------------------------------------------------
          if (!isFinite(percentage)) {

            spanOuter.className = 'converted_price de-price de-suggested-price';
            spanOuter.innerHTML = rl.css.noData;

            listing.insertAdjacentHTML('beforeend', spanOuter);
            return rl.fade(listing);
          }

          amount = rl.getAmountString(percentage, threshold);
          markup = makePriceMarkup(percentage, printPrice, amount);

          if (!listing.querySelector('.de-price')) {
            listing.insertAdjacentElement('beforeend', markup);
          }

          rl.fade(listing);

          if (amount !== 'more' && colorizePrices) {
            listing.querySelector('.price').classList.add('green');
          }
        }
      });
    };

    /**
     * Generates suggested price markup
     * @param  {number} percentage The percentage of the price difference
     * @param  {string} printPrice The suggested price
     * @param  {string} qt Either 'more', 'less' or ''
     * @returns {object}
     */
    function makePriceMarkup(percentage, printPrice, qt) {

      let _class = qt === 'more' ? 'red' : 'green',
          desc = qt.length ? 'around ' : 'within ',
          plusmn = qt.length ? '' : '\u00B1',
          spanOuter = document.createElement('span'),
          spanPct = document.createElement('span'),
          spanSug = document.createElement('span'),
          spanPrice = document.createElement('span');

      spanOuter.textContent = desc;
      spanOuter.className = 'converted_price de-price de-suggested-price';

      spanPct.textContent = `${plusmn} ${Math.abs(percentage)}% ${qt}`;
      spanPct.className = _class;

      spanSug.textContent = 'than suggested:';
      spanSug.className = 'd-block';

      spanPrice.textContent = printPrice;

      spanOuter.append(spanPct);
      spanOuter.append(spanSug);
      spanOuter.append(spanPrice);

      return spanOuter;
    }

    /**
     * Make sure the user has Seller permissions
     * @param {object} result The returned markup from Discogs
     * @returns {undefined}
     */
    function checkForSellerPermissions(result) {

      // User does not have seller setup
      if (result.querySelector('#seller-paypal-verification') && !priceKey['post:suggestedPrices']) {

        document.querySelectorAll('.de-price-preloader').forEach(e => e.remove());

        document.querySelectorAll('td.item_price').forEach(listing => {

          listing.insertAdjacentHTML('beforeend', rl.css.pleaseRegister);
        });

        return;
      }
    }

    /**
     * Logs the values used to create the price comparison
     * @param  {number} perc percentage
     * @param  {number} diff difference
     * @param  {number} sugg suggested
     * @returns {undefined}
     */
    function logOutput(perc, diff, sugg) {

      let pAmt = perc > 0 ? '% less' : '% more',
          pct = Math.abs(perc),
          value = Math.abs(diff).toFixed(3),
          vAmt = diff > 0 ? ' less' : ' more';

      if (rl.options.debug()) {

        console.log('Suggested: ', sugg);
        console.log('Difference: ', value + ' ' + userCurrency + vAmt);
        console.log('Percentage: ', pct + pAmt);
      }
    }

    /**
     * Display an error to the user
     * @returns {undefined}
     */
    function handleErrors() {
      document.querySelectorAll('td.item_price').forEach(price => {
        let span = document.createElement('span');
        span.className = 'converted_price de-price de-suggested-price';
        span.textContent = 'Error getting price data.';
        price.insertAdjacentElement('beforeEnd', span);
        rl.fade(price);
      });
    }

    // Prev/Next clicks
    rl.handlePaginationClicks(window.releasePricesInit);

    // ========================================================
    // DOM setup
    // ========================================================

    // Remove mobile clutter
    document.querySelectorAll('.hide_desktop').forEach(e => e.remove());

    // Insert preloader animation
    document.querySelectorAll('td.item_price').forEach(price => {
      price.insertAdjacentHTML('beforeend', rl.css.pricePreloader);
    });

    // Grab the releaseId from the URL
    extract = window.location.href.match(/([\d]+)/g);
    releaseId = extract[0];

    window.releasePricesInit();
  }
});

/***/ })

/******/ });