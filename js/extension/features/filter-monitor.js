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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 46:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * This feature relays the filter feature settings
 * so that their current status can be shown whilst browsing the Marketplace
 */

rl.ready(() => {

  let currentFilterState = rl.getPreference('currentFilterState'),
      sleeveCondition = rl.getPreference('sleeveCondition') || { value: null, generic: false, noCover: false },
      filterPrices = rl.getPreference('filterPrices') || { minimum: null, maximum: null },
      userCurrency = rl.getPreference('userCurrency'),
      countryList = rl.getPreference('countryList') || { list: [], currency: false, include: false },
      mediaCondition = rl.getPreference('mediaCondition') || null;

  let countryEnabled = currentFilterState.filterShippingCountry,
      currency = countryList && countryList.currency ? countryList.currency : null,
      include = countryList && countryList.include ? 'Including' : 'Excluding',
      mediaEnabled = currentFilterState.filterMediaCondition,
      pricesEnabled = currentFilterState.filterPrices,
      sleeveEnabled = currentFilterState.filterSleeveCondition,
      info = countryList && countryList.list ? `
              <span class="country-list-info">
                <i class="icon icon-info-circle muted" title=""></i>
                <span class="country-list">${countryList.list.sort().join(', ')}</span>
              </span>` : null;

  let _class = ['poor', 'fair', 'good', 'good-plus', 'very-good', 'very-good-plus', 'near-mint', 'mint'],
      key = ['P', 'F', 'G', 'G+', 'VG', 'VG+', 'NM or M-', 'M'];

  // ========================================================
  // Functions (in no particular order)
  // ========================================================

  function mediaFilter(mediaLength) {
    if (mediaEnabled && mediaLength) {
      return `Media: <span class="${_class[mediaLength]}">${key[mediaLength]}</span>`;
    }
    return null;
  }

  function priceFilter() {
    let { minimum, maximum } = filterPrices,
        currCode = {
      AUD: 'A$',
      BRL: 'R$',
      CAD: 'CA$',
      CHF: 'CHF',
      EUR: '€',
      GBP: '£',
      JPY: '¥',
      MXN: 'MX$',
      NZD: 'NZ$',
      SEK: 'SEK',
      USD: '$',
      ZAR: 'ZAR'
    };

    if (pricesEnabled && filterPrices) {
      if (minimum && !maximum) {
        return `Min Price: ${currCode[userCurrency]}${minimum}`;
      } else if (maximum && !minimum) {
        return `Max Price: ${currCode[userCurrency]}${maximum}`;
      } else if (minimum && maximum) {
        return `Min Price: ${currCode[userCurrency]}${minimum} / Max Price: ${currCode[userCurrency]}${maximum}`;
      }
    }
    return null;
  }

  function sleeveFilter(sleeveLength) {
    if (sleeveEnabled && sleeveLength) {
      return `Sleeve: <span class="${_class[sleeveLength]}">${key[sleeveLength]}</span>`;
    }
    return null;
  }

  function genericFilter() {
    if (sleeveEnabled && sleeveCondition && sleeveCondition.generic) {
      return 'Generic';
    }
    return null;
  }

  function noCoverFilter() {
    if (sleeveEnabled && sleeveCondition && sleeveCondition.noCover) {
      return 'No Cover';
    }
    return null;
  }

  function countriesFilter(enabled, list, currency) {

    let href = window.location.href,
        currencyInURL = href.includes('currency=');

    if (enabled && list && currency && currencyInURL || enabled && list && !currency) {

      return `${include} countries: ${info}`;
    }
    return null;
  }

  /**
   * Creates a string that represents the Media and Sleeve filter settings to
   * display to the user in the Marketplace.
   * @param {Number} mediaLength  - The current length of the Media Condtion array
   * @param {Number} sleeveLength - The current length of the Sleeve Condition array
   * @returns {string}
   */
  window.setFilterStateText = function setFilterStateText(mediaLength, sleeveLength) {

    let media = mediaFilter(mediaLength),
        sleeve = sleeveFilter(sleeveLength),
        generic = genericFilter(),
        noCover = noCoverFilter(),
        prices = priceFilter(),
        filters = [media, sleeve, generic, noCover, prices, countriesFilter(countryEnabled, countryList, currency)].filter(f => f !== null).join(', ');

    if (filters.length) return `Filtering - ${filters}`;

    return 'Filtering - none';
  };

  /**
   * Renders the current filter configuration below the Prev/Next links
   * in the Marketplace. Used when Everlasting Marketplace is not enabled
   * @returns {undefined}
   */
  function renderFilterConfig() {
    document.querySelectorAll('.pagination').forEach(elem => {

      let div = document.createElement('div'),
          mc = mediaCondition ? Number(mediaCondition) : null,
          sc = sleeveCondition && sleeveCondition.value ? Number(sleeveCondition.value) : null;

      div.innerHTML = window.setFilterStateText(mc, sc);
      div.style.margin = '8px 0';
      div.className = 'de-filter-stamp';
      elem.insertAdjacentElement('afterend', div);
    });
  }

  /**
   * Calls injectConfigIntoPage() when pageIs/pagIsNot conditions are met
   * @returns {method}
   */
  function injectConfigIntoPage() {
    // Marketplace
    if (rl.pageIs('allItems', 'sellRelease', 'seller', 'myWants') && rl.pageIsNot('sellerFeedback', 'settings') && !currentFilterState.everlastingMarket && !document.querySelector('.de-filter-stamp')) {

      return renderFilterConfig();
      // Seller Inventory
    } else if (rl.pageIs('seller') && rl.pageIsNot('sellerFeedback', 'settings', 'allItems', 'sellRelease', 'myWants') && currentFilterState.everlastingMarket && !document.querySelector('.de-filter-stamp')) {

      return renderFilterConfig();
    }
  }

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
      .de-show {
        display: table-row;
        border-left: 3px solid #c72020 !important;
        background: #292929 !important;
      }

      .country-list-info {
        position: relative;
        z-index: 79;
      }

      .country-list-info .country-list {
        background: #fff;
        border-radius: 5px;
        display: none;
        filter: drop-shadow(0 2px 2px #888);
        font-weight: normal;
        line-height: 1.4;
        padding: 8px;
        position: absolute;
        right: -60px;
        top: 20px;
        width: 125px;
      }

      .country-list-info:hover .country-list {
        display: block;
      }
      `;

  // ========================================================
  // DOM setup
  // ========================================================
  rl.attachCss('filter-monitor', rules);
  // Call injectConfigIntoPage on prev/next clicks
  injectConfigIntoPage();
  rl.handlePaginationClicks(injectConfigIntoPage);
});

/***/ })

/******/ });