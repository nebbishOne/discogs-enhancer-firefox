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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_absolute_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _features_baoi_fields_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _features_contextual_menus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _features_links_in_new_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _features_dark_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _features_filter_media_condition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _features_filter_prices_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _features_filter_sleeve_condition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _features_filter_shipping_country_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _features_inventory_ratings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _features_media_condition_highlights_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony import */ var _features_min_max_columns_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var _features_seller_rep_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _features_suggested_prices_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19);
/* harmony import */ var _features_tweak_discriminators_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20);
/* harmony import */ var _features_youtube_playlists_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6);
/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * This file get inserted into the Popup.html file and contains
 * all the logic that the popup needs to function.
 *
 */
__webpack_require__(1);


















// ========================================================
// Extend Element's prototype to easily add/remove multiple
// classes from a target element.
// ========================================================
if (!Element.prototype.removeClasses) {
  Element.prototype.removeClasses = function (...remove) {
    remove.forEach(cls => this.classList.remove(cls));
  };
}

if (!Element.prototype.addClasses) {
  Element.prototype.addClasses = function (...add) {
    add.forEach(cls => this.classList.add(cls));
  };
}

/**
 * Helper method that lets me know I'm working with the
 * `development` or `staging` version of the extension
 * @returns {undefined}
 */
function isDev() {

  let hasBlocklist = localStorage.getItem('blockList'),
      blocklist = hasBlocklist ? JSON.parse(hasBlocklist) : null,
      development = false;

  if (development) {
    document.querySelector('.title h1').style.color = 'gold';
  }

  if (!development && blocklist && blocklist.list && blocklist.list.includes('github') && blocklist.list.includes('dropbox')) {
    document.querySelector('.title h1').style.color = 'hotpink';
  }
}

// ========================================================
// Document ready
// ========================================================
window.addEventListener('load', () => {

  let searchbox = document.getElementById('searchbox'),
      toggleAbsoluteDate = document.getElementById('toggleAbsoluteDate'),
      toggleAveragePrice = document.getElementById('toggleAveragePrice'),
      toggleBaoiFields = document.getElementById('toggleBaoiFields'),
      toggleBlockBuyers = document.getElementById('toggleBlockBuyers'),
      toggleBlockSellers = document.getElementById('toggleBlockSellers'),
      toggleBlurryImageFix = document.getElementById('toggleBlurryImageFix'),
      toggleConfirmBeforeRemoving = document.getElementById('toggleConfirmBeforeRemoving'),
      toggleCollectionUi = document.getElementById('toggleCollectionUi'),
      toggleConverter = document.getElementById('toggleConverter'),
      toggleDarkTheme = document.getElementById('toggleDarkTheme'),
      toggleDemandIndex = document.getElementById('toggleDemandIndex'),
      toggleEverlastingCollection = document.getElementById('toggleEverlastingCollection'),
      toggleEverlastingMarket = document.getElementById('toggleEverlastingMarket'),
      toggleFavoriteSellers = document.getElementById('toggleFavoriteSellers'),
      toggleFeedback = document.getElementById('toggleFeedback'),
      toggleFilterMediaCondition = document.getElementById('toggleFilterMediaCondition'),
      toggleFilterPrices = document.getElementById('toggleFilterPrices'),
      toggleFilterSleeveCondition = document.getElementById('toggleFilterSleeveCondition'),
      toggleFilterShippingCountry = document.getElementById('toggleFilterShippingCountry'),
      toggleFilterUnavailable = document.getElementById('toggleFilterUnavailable'),
      toggleHighlights = document.getElementById('toggleHighlights'),
      toggleInventoryRatings = document.getElementById('toggleInventoryRatings'),
      toggleMinMaxColumns = document.getElementById('toggleMinMaxColumns'),
      toggleNotesCount = document.getElementById('toggleNotesCount'),
      toggleQuickSearch = document.getElementById('toggleQuickSearch'),
      togglePrices = document.getElementById('togglePrices'),
      toggleRandomItem = document.getElementById('toggleRandomItem'),
      toggleRatingPercent = document.getElementById('toggleRatingPercent'),
      toggleReadability = document.getElementById('toggleReadability'),
      toggleRelativeSoldDate = document.getElementById('toggleRelativeSoldDate'),
      toggleReleaseDurations = document.getElementById('toggleReleaseDurations'),
      toggleReleaseRatings = document.getElementById('toggleReleaseRatings'),
      toggleReleaseScanner = document.getElementById('toggleReleaseScanner'),
      toggleRemoveFromWantlist = document.getElementById('toggleRemoveFromWantlist'),
      toggleSellerItemsInCart = document.getElementById('toggleSellerItemsInCart'),
      toggleSellerRep = document.getElementById('toggleSellerRep'),
      toggleShortcuts = document.getElementById('toggleShortcuts'),
      toggleSortBtns = document.getElementById('toggleSortBtns'),
      toggleTweakDiscrims = document.getElementById('toggleTweakDiscrims'),
      toggleYtPlaylists = document.getElementById('toggleYtPlaylists'),
      userCurrency = document.getElementById('currency'),


  // Contextual menus
  toggleAllDay,
      toggleBandcamp,
      toggleBoomkat,
      toggleClone,
      toggleDeeJay,
      toggleDiscogs,
      toggleEarcave,
      toggleGramaphone,
      toggleHardwax,
      toggleJuno,
      toggleKristina,
      toggleOye,
      togglePhonica,
      toggleRateYourMusic,
      toggleRushhour,
      toggleSotu,
      toggleYoutube;

  // ========================================================
  // UI EVENT LISTENERS
  // ========================================================


  // Toggle light/dark theme
  // ========================================================
  toggleDarkTheme.addEventListener('click', () => {

    let html = document.querySelector('html');

    if (toggleDarkTheme.checked) {

      return html.classList.remove('light');
    }

    return html.classList.add('light');
  });

  // Open Learn page
  // ========================================================
  document.getElementById('learn').addEventListener('click', function () {

    chrome.tabs.create({ url: '../html/learn.html' });
    Object(_utils__WEBPACK_IMPORTED_MODULE_16__["acknowledgeUpdate"])();

    if (ga) {
      ga('send', 'event', 'learn', 'learn clicked');
    }
  });

  // Help Bubble Clicks
  // ========================================================
  document.querySelectorAll('.help').forEach(bubble => {
    let id = bubble.classList[1];
    bubble.addEventListener('click', () => {
      chrome.tabs.create({ url: `../html/learn.html#${id}` });
    });
  });

  // Open Block Sellers Configuration page
  // ========================================================
  document.getElementById('editList').addEventListener('click', function () {
    chrome.tabs.create({ url: '../html/block-sellers.html' });
  });

  // Open Filter Shipping Countries Configuration page
  // ========================================================
  document.getElementById('editShippingList').addEventListener('click', function () {
    chrome.tabs.create({ url: '../html/filter-shipping-country.html' });
  });

  // Open Favorite Sellers Configuration page
  // ========================================================
  document.getElementById('editFavList').addEventListener('click', function () {
    chrome.tabs.create({ url: '../html/favorite-sellers.html' });
  });

  // Open Readability Configuration page
  // ========================================================
  document.getElementById('editReadability').addEventListener('click', function () {
    chrome.tabs.create({ url: '../html/readability.html' });
  });

  // Contextual Menu Searching Options
  // ========================================================
  document.querySelector('.toggle-group.menus').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_16__["optionsToggle"])('#contextMenus', this, '.menus', 180);
  });

  // Open Links In New tabs
  // ------------------------------------------------------
  document.querySelector('.toggle-group.tabs').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_16__["optionsToggle"])('#linksInTabs', this, '.tabs', 130);
  });

  // Absolute Date Feature
  // ------------------------------------------------------
  _features_absolute_date_js__WEBPACK_IMPORTED_MODULE_0__["init"]();

  // Filter Media Condition Options
  // ========================================================
  _features_filter_media_condition_js__WEBPACK_IMPORTED_MODULE_5__["init"]();

  // Filter Prices
  // ========================================================
  _features_filter_prices_js__WEBPACK_IMPORTED_MODULE_6__["init"]();

  // Filter Sleeve Condition Options
  // ========================================================
  _features_filter_sleeve_condition_js__WEBPACK_IMPORTED_MODULE_7__["init"]();

  // Inventory Ratings Options
  // ========================================================
  _features_inventory_ratings_js__WEBPACK_IMPORTED_MODULE_9__["init"]();

  // Search Functionality
  // ========================================================
  searchbox.addEventListener('keydown', _utils__WEBPACK_IMPORTED_MODULE_16__["searchFeatures"]);

  // Clear search input
  document.querySelector('.clear-search').addEventListener('mousedown', function () {

    searchbox.value = '';
    Object(_utils__WEBPACK_IMPORTED_MODULE_16__["searchFeatures"])();

    // reset the focus
    setTimeout(() => {
      searchbox.focus();
    }, 200);
  });

  // Seller Reputation
  // ========================================================
  _features_seller_rep_js__WEBPACK_IMPORTED_MODULE_12__["init"]();

  // Tweak Discriminators
  // ========================================================
  _features_tweak_discriminators_js__WEBPACK_IMPORTED_MODULE_14__["init"]();

  // ========================================================
  // Event listeners for toggles
  // ========================================================
  toggleAbsoluteDate.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleAveragePrice.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleBaoiFields.addEventListener('change', _features_baoi_fields_js__WEBPACK_IMPORTED_MODULE_1__["toggleBAOIfields"]);
  toggleBlockBuyers.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleBlockSellers.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleBlurryImageFix.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleConfirmBeforeRemoving.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleCollectionUi.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleConverter.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleDarkTheme.addEventListener('change', _features_dark_theme_js__WEBPACK_IMPORTED_MODULE_4__["useDarkTheme"]);
  toggleDemandIndex.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleEverlastingCollection.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleEverlastingMarket.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleFavoriteSellers.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleFeedback.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleFilterMediaCondition.addEventListener('change', _features_filter_media_condition_js__WEBPACK_IMPORTED_MODULE_5__["toggleHideConditions"]);
  toggleFilterPrices.addEventListener('change', _features_filter_prices_js__WEBPACK_IMPORTED_MODULE_6__["validateFilterPrices"]);
  toggleFilterSleeveCondition.addEventListener('change', _features_filter_sleeve_condition_js__WEBPACK_IMPORTED_MODULE_7__["toggleSleeveConditions"]);
  toggleFilterShippingCountry.addEventListener('change', _features_filter_shipping_country_js__WEBPACK_IMPORTED_MODULE_8__["toggleHideCountries"]);
  toggleFilterUnavailable.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleHighlights.addEventListener('change', _features_media_condition_highlights_js__WEBPACK_IMPORTED_MODULE_10__["toggleMediaHighlights"]);
  toggleInventoryRatings.addEventListener('change', _features_inventory_ratings_js__WEBPACK_IMPORTED_MODULE_9__["saveInventoryRatings"]);
  toggleMinMaxColumns.addEventListener('change', _features_min_max_columns_js__WEBPACK_IMPORTED_MODULE_11__["toggleColumns"]);
  toggleNotesCount.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleQuickSearch.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  togglePrices.addEventListener('change', _features_suggested_prices_js__WEBPACK_IMPORTED_MODULE_13__["validateAndSave"]);
  toggleRandomItem.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleRatingPercent.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleReadability.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleRelativeSoldDate.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleReleaseDurations.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleReleaseRatings.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleReleaseScanner.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleRemoveFromWantlist.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleSellerItemsInCart.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleSellerRep.addEventListener('change', _features_seller_rep_js__WEBPACK_IMPORTED_MODULE_12__["saveSellerRep"]);
  toggleShortcuts.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleSortBtns.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleTweakDiscrims.addEventListener('change', _utils__WEBPACK_IMPORTED_MODULE_16__["triggerSave"]);
  toggleYtPlaylists.addEventListener('change', _features_youtube_playlists_js__WEBPACK_IMPORTED_MODULE_15__["toggleYtPlaylists"]);
  userCurrency.addEventListener('change', () => Object(_utils__WEBPACK_IMPORTED_MODULE_16__["applySave"])(null, event));

  // ========================================================
  // DOM Setup
  // ========================================================

  /**
   * Sets toggle button values when the popup is rendered
   * and calls necessary methods in order to render
   * the popup's UI in the correct state
   * @method   init
   * @return   {undefined}
   */
  function init() {

    _features_contextual_menus_js__WEBPACK_IMPORTED_MODULE_2__["createContextualMenuElements"]();
    _features_links_in_new_tabs_js__WEBPACK_IMPORTED_MODULE_3__["createLinkTabElements"]();

    // Assign contextual menu elements to vars
    toggleAllDay = document.getElementById('allday');
    toggleBandcamp = document.getElementById('bandcamp');
    toggleBoomkat = document.getElementById('boomkat');
    toggleClone = document.getElementById('clone');
    toggleDeeJay = document.getElementById('deejay');
    toggleDiscogs = document.getElementById('discogs');
    toggleEarcave = document.getElementById('earcave');
    toggleGramaphone = document.getElementById('gramaphone');
    toggleHardwax = document.getElementById('hardwax');
    toggleJuno = document.getElementById('juno');
    toggleKristina = document.getElementById('kristina');
    toggleOye = document.getElementById('oye');
    togglePhonica = document.getElementById('phonica');
    toggleRateYourMusic = document.getElementById('rateyourmusic');
    toggleRushhour = document.getElementById('rushhour');
    toggleSotu = document.getElementById('sotu');
    toggleYoutube = document.getElementById('youtube');

    // Get the user's saved preferences and set the toggles accordingly
    chrome.storage.sync.get('prefs', result => {
      // Feature preferences
      toggleAbsoluteDate.checked = result.prefs.absoluteDate;
      toggleAveragePrice.checked = result.prefs.averagePrice;
      toggleBaoiFields.checked = result.prefs.baoiFields;
      toggleBlockBuyers.checked = result.prefs.blockBuyers;
      toggleBlockSellers.checked = result.prefs.blockSellers;
      toggleBlurryImageFix.checked = result.prefs.blurryImageFix;
      toggleConfirmBeforeRemoving.checked = result.prefs.confirmBeforeRemoving;
      toggleCollectionUi.checked = result.prefs.collectionUi;
      toggleConverter.checked = result.prefs.converter;
      toggleDarkTheme.checked = result.prefs.darkTheme;
      toggleDemandIndex.checked = result.prefs.demandIndex;
      toggleEverlastingCollection.checked = result.prefs.everlastingCollection;
      toggleEverlastingMarket.checked = result.prefs.everlastingMarket;
      toggleFavoriteSellers.checked = result.prefs.favoriteSellers;
      toggleFeedback.checked = result.prefs.feedback;
      toggleFilterMediaCondition.checked = result.prefs.filterMediaCondition;
      toggleFilterPrices.checked = result.prefs.filterPrices;
      toggleFilterSleeveCondition.checked = result.prefs.filterSleeveCondition;
      toggleFilterShippingCountry.checked = result.prefs.filterShippingCountry;
      toggleFilterUnavailable.checked = result.prefs.filterUnavailable;
      toggleHighlights.checked = result.prefs.highlightMedia;
      toggleInventoryRatings.checked = result.prefs.inventoryRatings;
      toggleMinMaxColumns.checked = result.prefs.hideMinMaxColumns;
      toggleNotesCount.checked = result.prefs.notesCount;
      toggleQuickSearch.checked = result.prefs.quickSearch;
      togglePrices.checked = result.prefs.suggestedPrices;
      toggleRandomItem.checked = result.prefs.randomItem;
      toggleRatingPercent.checked = result.prefs.ratingPercent;
      toggleReadability.checked = result.prefs.readability;
      toggleRelativeSoldDate.checked = result.prefs.relativeSoldDate;
      toggleReleaseDurations.checked = result.prefs.releaseDurations;
      toggleReleaseRatings.checked = result.prefs.releaseRatings;
      toggleReleaseScanner.checked = result.prefs.releaseScanner;
      toggleRemoveFromWantlist.checked = result.prefs.removeFromWantlist;
      toggleSellerItemsInCart.checked = result.prefs.sellerItemsInCart;
      toggleSellerRep.checked = result.prefs.sellerRep;
      toggleShortcuts.checked = result.prefs.formatShortcuts;
      toggleSortBtns.checked = result.prefs.sortButtons;
      toggleTweakDiscrims.checked = result.prefs.tweakDiscrims;
      toggleYtPlaylists.checked = result.prefs.ytPlaylists;

      // Contextual menus
      toggleAllDay.checked = result.prefs.useAllDay;
      toggleBandcamp.checked = result.prefs.useBandcamp;
      toggleBoomkat.checked = result.prefs.useBoomkat;
      toggleClone.checked = result.prefs.useClone;
      toggleDeeJay.checked = result.prefs.useDeejay;
      toggleDiscogs.checked = result.prefs.useDiscogs;
      toggleEarcave.checked = result.prefs.useEarcave;
      toggleGramaphone.checked = result.prefs.useGramaphone;
      toggleHardwax.checked = result.prefs.useHardwax;
      toggleJuno.checked = result.prefs.useJuno;
      toggleKristina.checked = result.prefs.useKristina;
      toggleOye.checked = result.prefs.useOye;
      togglePhonica.checked = result.prefs.usePhonica;
      toggleRateYourMusic.checked = result.prefs.useRateYourMusic;
      toggleRushhour.checked = result.prefs.useRushhour;
      toggleSotu.checked = result.prefs.useSotu;
      toggleYoutube.checked = result.prefs.useYoutube;
    });

    // Set values for features with options
    Object(_utils__WEBPACK_IMPORTED_MODULE_16__["checkForUpdate"])();
    _features_suggested_prices_js__WEBPACK_IMPORTED_MODULE_13__["getSuggestedPricesCurrency"]();
    _features_filter_prices_js__WEBPACK_IMPORTED_MODULE_6__["getFilterPricesCurrency"]();
    _features_seller_rep_js__WEBPACK_IMPORTED_MODULE_12__["setSellerRep"]();
    _features_absolute_date_js__WEBPACK_IMPORTED_MODULE_0__["setAbsoluteDateStatus"]();
    _features_inventory_ratings_js__WEBPACK_IMPORTED_MODULE_9__["setInventoryRatings"]();

    setTimeout(() => {
      _features_filter_media_condition_js__WEBPACK_IMPORTED_MODULE_5__["setupFilterByCondition"](toggleFilterMediaCondition.checked);
    }, 0);

    setTimeout(() => {
      _features_filter_sleeve_condition_js__WEBPACK_IMPORTED_MODULE_7__["setupFilterSleeveCondition"](toggleFilterSleeveCondition.checked);
    }, 0);

    // .mac class will remove scrollbars from the popup menu
    if (navigator.userAgent.includes('Mac OS X')) {
      document.getElementsByTagName('html')[0].classList.add('mac');
    }

    // Check for #toggleDarkTheme then remove the class if needed
    let a = setInterval(() => {

      if (document.querySelector('#toggleDarkTheme')) {

        if (!toggleDarkTheme.checked) {
          document.querySelector('html').classList.add('light');
        }
        clearInterval(a);
      }
    }, 13);

    isDev();

    // Set the focus on the search box
    setTimeout(() => {
      searchbox.focus();
    }, 300);
  }

  init();
}, false);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html {\n  --bg-color: #313335;\n  --off-white: #CCCCCC;\n  --white: #FFFFFF;\n  --gray: #808080;\n  --bg-accent: #292929;\n  --text-color: #cccccc;\n  --logo: #e8e8e8;\n  --green: #51B32C;\n  --green-hover: #61D335;\n  --help: #222222;\n  --help-icon: #606060;\n  --help-text: #CCCCCC;\n  --disabled-element: #808080;\n  --disabled-text: #ffffff;\n  --learn-more: #51B32C;\n  --select-bg: #333;\n  --select-border: #424242; }\n\nhtml.light {\n  --bg-color: #FFFFFF;\n  --off-white: #CCCCCC;\n  --white: #222222;\n  --help: dimgray;\n  --gray: #808080;\n  --bg-accent: #F0F0F0;\n  --text-color: dimgray;\n  --logo: darkgray;\n  --help-icon: #CCCCCC;\n  --help-text: #FFFFFF;\n  --disabled-element: lightgray;\n  --disabled-text: gray;\n  --learn-more: lawngreen;\n  --select-bg: #fafafa;\n  --select-border: #ccc; }\n\n.light .status {\n  font-weight: bold; }\n\n.light select:disabled,\n.light input:disabled {\n  color: var(--text-color) !important; }\n\n.light input::-webkit-input-placeholder {\n  color: var(--logo); }\n\n/* hide scrollbar in popup */\n.mac {\n  overflow: scroll;\n  overflow-x: hidden; }\n\n.mac::-webkit-scrollbar {\n  width: 0;\n  /* remove scrollbar space */\n  background: transparent;\n  /* make scrollbar invisible */ }\n\nhtml {\n  background-color: var(--bg-color); }\n\nbody {\n  background-color: var(--bg-color);\n  font-family: 'Lato', sans-serif;\n  height: auto;\n  width: 350px; }\n\nh1 {\n  color: var(--logo);\n  display: inline-block;\n  font-family: 'Barlow', sans-serif;\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  margin-left: 15px;\n  margin-top: 10px; }\n\np {\n  color: var(--text-color);\n  cursor: default;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  user-select: none;\n  word-spacing: 2px; }\n\na.button {\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 100;\n  height: 2em;\n  letter-spacing: 0.05rem;\n  line-height: 2em;\n  margin: 0 0 0 10px;\n  outline: none;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase; }\n  a.button.button_orange {\n    background-color: #F98717;\n    background-image: linear-gradient(#F98717, #F96C17);\n    border-bottom-color: #F96C17 !important;\n    border-color: #EEA236;\n    border-top-color: #F98717 !important;\n    width: 25%;\n    color: white !important; }\n  a.button.button_green {\n    background-size: 100%;\n    color: var(--green);\n    border: 1px solid var(--green) !important;\n    width: 25%; }\n    a.button.button_green:hover {\n      border: 1px solid var(--green-hover) !important;\n      color: var(--green-hover) !important; }\n\nselect {\n  font-size: 14px; }\n\nselect option {\n  font-size: 14px; }\n\n#learn {\n  vertical-align: top;\n  margin-top: 0.8rem; }\n\n#editList,\n#editShippingList,\n#editFavList,\n#editReadability,\n#sellerRepConfig {\n  display: inline-block;\n  margin-top: 17px;\n  margin-left: 10px;\n  outline: none;\n  color: var(--gray);\n  vertical-align: top;\n  font-size: .75rem; }\n\n.rep-value {\n  display: inline-block; }\n\n#editList:hover,\n#editReadability:hover {\n  color: var(--white); }\n\n.marketplace-features-container {\n  height: 100%;\n  margin-left: 0; }\n\n.toggle-group {\n  clear: both;\n  height: 50px;\n  width: 105%;\n  margin: 0 0 0 -10px;\n  position: relative;\n  border-top: 1px solid var(--bg-accent);\n  transition: all 0.3s ease; }\n  .toggle-group:hover {\n    background-color: var(--bg-accent); }\n    .toggle-group:hover p {\n      color: var(--white); }\n  .toggle-group.has-options:hover p {\n    margin-left: 8px;\n    cursor: pointer; }\n\n.rotate90 {\n  transform: rotate(90deg); }\n\n/* marketplace features arrow */\n.arrow {\n  display: inline-block;\n  margin-top: -2px;\n  font-size: 16px;\n  font-weight: bold;\n  /*color: #6F6F6F;*/\n  color: #809BBE;\n  transition: all 0.3s ease; }\n\n.label {\n  float: left;\n  padding: 4px 0 0 28px;\n  font-size: 13px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 300; }\n\n.onoffswitch {\n  float: right;\n  margin-top: 13px;\n  margin-right: 20px; }\n\n.notifications {\n  float: left;\n  clear: both;\n  height: 114px;\n  width: 100%;\n  margin: 8px 0;\n  position: fixed;\n  z-index: 101;\n  top: -30px;\n  left: 0;\n  background-color: #666666;\n  font-family: 'Lato', sans-serif;\n  font-size: 12px;\n  font-weight: bold; }\n  .notifications img {\n    width: 45px; }\n  .notifications .icon {\n    float: left;\n    margin: 0 10px 0 45px; }\n  .notifications .warning-text {\n    line-height: 18px; }\n\n#notify {\n  margin: 46px;\n  padding-right: 10px;\n  font-weight: 400;\n  color: var(--off-white); }\n\nsup {\n  color: #454545; }\n\n.hide {\n  display: none; }\n\ninput[type=\"checkbox\"]:focus {\n  outline: 0; }\n\n.context-menus,\n.links-in-tabs {\n  clear: both;\n  overflow: hidden;\n  margin-top: 55px; }\n\n.checkbox-wrap {\n  float: left;\n  width: 110px;\n  color: var(--text-color);\n  font-size: .75rem; }\n  .checkbox-wrap input {\n    margin-right: 5px; }\n  .checkbox-wrap label {\n    margin-right: 5px; }\n\n#currency {\n  margin-top: 16px;\n  margin-left: 15px;\n  outline: none; }\n\n.alert {\n  outline: 1px dotted red !important; }\n\n.rate-button {\n  border-top: 1px solid var(--bg-accent);\n  transition: all 0.3s ease; }\n\n#rate,\n#twitter,\n#donate {\n  width: 60%;\n  margin: 15px auto;\n  display: block;\n  padding: 0 20px; }\n\n/* Filter Marketplace Items by Condition */\n/*sub-menu*/\n.hide-condition,\n.hide-sleeve-condition {\n  position: relative; }\n  .hide-condition select,\n  .hide-sleeve-condition select {\n    position: absolute;\n    top: 55px;\n    left: 50px;\n    outline: none; }\n\n.hide-sleeve-condition .generic-no-cover {\n  color: var(--text-color); }\n  .hide-sleeve-condition .generic-no-cover .generic-opt {\n    position: absolute;\n    top: 85px;\n    left: 15px;\n    margin-left: 32px; }\n  .hide-sleeve-condition .generic-no-cover .no-cover-opt {\n    position: absolute;\n    top: 105px;\n    left: 15px;\n    margin-left: 32px; }\n\n.min-max-values {\n  color: var(--white);\n  font-size: .7rem; }\n\n.hide-filter-prices .user-currency {\n  position: absolute;\n  top: 45px;\n  left: 52px; }\n\n.hide-filter-prices .minimum {\n  position: absolute;\n  top: 74px;\n  left: 52px; }\n\n.hide-filter-prices .maximum {\n  position: absolute;\n  top: 100px;\n  left: 52px; }\n\n.hide-filter-prices label[for=filterPricesCurrency],\n.hide-filter-prices label[for=minimum],\n.hide-filter-prices label[for=maximum] {\n  color: var(--text-color);\n  display: inline-block; }\n\n.hide-filter-prices input[type=number] {\n  display: inline-block;\n  width: 4rem; }\n\n.hide-filter-prices #filterPricesCurrency {\n  margin-left: .5rem; }\n\n.hide-filter-prices #minimum {\n  margin-left: .5rem; }\n\n.hide-filter-prices #maximum {\n  margin-left: .4rem; }\n\n.absolute .us-date-format {\n  display: block;\n  clear: both;\n  color: var(--text-color);\n  margin-left: 32px;\n  padding-top: 5px; }\n  .absolute .us-date-format input {\n    margin-right: 5px; }\n  .absolute .us-date-format .date-example {\n    display: block;\n    margin-left: 24px;\n    margin-top: 5px;\n    font-style: italic; }\n\n.inventory .inventory-ratings {\n  color: var(--text-color); }\n  .inventory .inventory-ratings input#ratingsValue {\n    margin-right: 5px;\n    display: inline-block;\n    max-width: 45px;\n    margin-right: 3px;\n    margin-left: 5px;\n    font-size: inherit;\n    border-radius: 5px;\n    border: 1px solid var(--select-border);\n    padding: 0.25rem;\n    font-size: 15px; }\n  .inventory .inventory-ratings .ratings-value {\n    position: absolute;\n    margin-left: 18px;\n    top: 56px;\n    left: 33px; }\n    .inventory .inventory-ratings .ratings-value label {\n      font-size: 13px; }\n\n/* Seller Reputation */\n/*sub-menu*/\n.seller-rep {\n  position: relative; }\n\n.percent-wrap {\n  margin-bottom: 10px;\n  margin-top: 2px;\n  font-size: 18px; }\n\n#percent {\n  margin-bottom: 10px; }\n\n.percentage-interface {\n  width: 300px;\n  position: absolute;\n  top: 52px;\n  left: 50px;\n  font-size: 15px;\n  color: var(--white); }\n  .percentage-interface input {\n    display: inline-block;\n    max-width: 80px;\n    margin-right: 3px;\n    margin-left: 0;\n    font-size: inherit;\n    border-radius: 5px;\n    border: 1px solid var(--select-border);\n    padding: 0.25rem; }\n  .percentage-interface label {\n    margin-bottom: 8px;\n    font-size: 13px;\n    color: var(--text-color);\n    display: block; }\n  .percentage-interface a {\n    display: inline-block;\n    width: 50px;\n    margin: -5px 0 0 15px;\n    padding: 0;\n    font-size: 13px; }\n  .percentage-interface span.message {\n    display: inline-block;\n    font-size: 13px;\n    color: #60C43F; }\n  .percentage-interface .filter-rep-wrap {\n    display: inline-block;\n    margin-bottom: 10px; }\n    .percentage-interface .filter-rep-wrap label {\n      display: inline-block; }\n\n.rep-color {\n  width: 30px;\n  height: 20px;\n  border-radius: 5px;\n  display: inline-block;\n  margin-right: 2px;\n  position: relative;\n  /* Hightlight */\n  /* Swatch colors */ }\n  .rep-color:hover::after {\n    content: \"\\026AC\";\n    color: #fff;\n    position: absolute;\n    font-size: 13px;\n    top: 2px;\n    left: 11px; }\n  .rep-color.selected::after {\n    content: \"\\02022\";\n    color: #fff;\n    position: absolute;\n    font-size: 15px;\n    top: 0px;\n    left: 11px; }\n  .rep-color.BF3A38 {\n    background-color: #BF3A38; }\n  .rep-color.darkorange {\n    background-color: darkorange; }\n  .rep-color.darkgoldenrod {\n    background-color: darkgoldenrod; }\n  .rep-color.darkslategray {\n    background-color: darkslategray; }\n  .rep-color.slategray {\n    background-color: slategray; }\n  .rep-color.dimgray {\n    background-color: dimgray; }\n  .rep-color.black {\n    background-color: black; }\n\n.save-wrap {\n  margin-top: 10px;\n  margin-left: 10px;\n  padding-left: 96px; }\n\n.percent-save {\n  display: inline-block;\n  outline: none;\n  color: lightgray; }\n\n#currency:disabled,\n#filterCountry:disabled,\n#filterCountryCurrency:disabled,\n#filterPricesCurrency:disabled,\n#maximum:disabled,\n#minimum:disabled,\n#percent:disabled,\n#ratingsValue:disabled {\n  background-color: var(--disabled-element);\n  border: 1px solid var(--disabled-element);\n  color: var(--bg-accent);\n  cursor: not-allowed; }\n\n/* hide arrows in number input */\n.percentage-interface input::-webkit-outer-spin-button,\n.percentage-interface input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none; }\n\n.toggle-group.menus,\n.toggle-group.condition,\n.toggle-group.country,\n.toggle-group.seller-rep,\n.toggle-group.absolute {\n  cursor: pointer; }\n\n/* tweak discriminators */\n.tweak-discriminators {\n  position: absolute;\n  top: 3rem;\n  color: var(--text-color); }\n  .tweak-discriminators #hide-discrims,\n  .tweak-discriminators #superscript-discrims,\n  .tweak-discriminators #unselectable-discrims,\n  .tweak-discriminators #transparent-discrims {\n    margin-right: 5px; }\n  .tweak-discriminators .discrim-option {\n    display: block;\n    margin-left: 46px; }\n\n#contextMenus {\n  margin-left: 30px;\n  z-index: 10; }\n\n#linksInTabs {\n  margin-left: 30px;\n  z-index: 10; }\n\n.status,\n.condition-status {\n  position: absolute;\n  top: 18px;\n  right: 23px;\n  letter-spacing: 0.05rem; }\n\n.enabled {\n  color: #5BD14B; }\n\n.disabled {\n  color: var(--disabled-text); }\n\n.mint {\n  color: #00B4DB; }\n\n.near-mint {\n  color: #00DBB4; }\n\n.very-good-plus {\n  color: #00DB1F; }\n\n.very-good {\n  color: #85AB11; }\n\n.good-plus {\n  color: #F6BF48; }\n\n.good {\n  color: #D87307; }\n\n.fair {\n  color: #E54803; }\n\n.poor {\n  color: #FF0000; }\n\n/**\n * Search box\n */\n.search-wrap {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  text-align: center; }\n\n#searchbox {\n  background-color: var(--bg-accent);\n  border-radius: 5px;\n  border: 1px solid var(--bg-accent);\n  color: var(--white);\n  font-size: 14px;\n  height: 20px;\n  margin: 0 auto 18px;\n  outline: none;\n  padding: 5px 25px 5px 32px;\n  width: 75%; }\n\nspan.clear-search {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  z-index: 10;\n  top: 8px;\n  right: 25px;\n  cursor: pointer;\n  color: var(--gray);\n  transition: all 0.1s ease-in; }\n  span.clear-search:hover {\n    color: var(--white); }\n\n.feather-search {\n  position: absolute;\n  top: 7px;\n  left: 20px;\n  color: var(--gray); }\n\n.help {\n  float: right;\n  margin-right: 10px;\n  margin-top: 18px;\n  position: relative;\n  stroke: var(--help-icon);\n  width: 15px;\n  z-index: 100;\n  cursor: pointer; }\n\n.help:hover {\n  stroke: var(--text-color); }\n\n.help .help-bubble {\n  background-color: var(--help);\n  border-radius: 5px;\n  box-shadow: -2px 3px 5px 0px var(--bg-accent);\n  color: var(--help-text);\n  font-size: .75rem;\n  padding: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-51%) translateX(-107%);\n  transition: 0s visibility;\n  visibility: hidden;\n  width: 150px;\n  z-index: 100; }\n\n.help:hover .help-bubble {\n  border: 1px solid dimgray;\n  transition-delay: 0.2s;\n  visibility: visible; }\n\n.help-bubble .help-text span {\n  color: var(--help-text);\n  display: block;\n  margin-top: 10px;\n  padding: 0;\n  text-transform: none !important; }\n\n.help-bubble .help-text span.learn-more::before {\n  color: var(--learn-more);\n  content: 'Click the \\\"?\\\" icon for additional important details.';\n  display: block;\n  margin-top: 10px; }\n\n.help.contextual-help {\n  margin-right: 74px;\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.arrow-right {\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid var(--help);\n  border-top: 10px solid transparent;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%) translateX(1635%);\n  width: 0; }\n\n.arrow-right.stroke {\n  border-left: 10px solid dimgray;\n  transform: translateY(-50%) translateX(1650%); }\n\n#noResults .label {\n  padding-left: 150px; }\n\n/* fadeout animation */\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.fadeOut {\n  animation-name: fadeOut;\n  animation-duration: 0.5s; }\n\n/* fadeIn animation */\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  display: block;\n  animation-name: fadeIn;\n  animation-duration: 0.5s; }\n\n.show {\n  display: block; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAbsoluteDateStatus", function() { return setAbsoluteDateStatus; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Absolute Date feature
 */



/**
 * Sets up the event listeners for the Absolute Date UI
 */
function init() {

  // Expand and show the submenu
  document.querySelector('.toggle-group.absolute').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["optionsToggle"])('#absolute', this, '.absolute', 110);
  });

  // Save the Use US Date format preference
  document.getElementById('usFormat').addEventListener('change', function () {
    localStorage.setItem('usDateFormat', JSON.stringify(this.checked));
  });

  // Setup example US date format
  let today = new Date(),
      options = { year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric' },
      dateString = today.toLocaleDateString('en-US', options);

  document.querySelector('.date-example').textContent = `e.g.: Added ${dateString}`;

  // Set "enabled/disabled" status
  document.getElementById('toggleAbsoluteDate').addEventListener('change', function () {

    let self = document.querySelector('.toggle-group.absolute .status');

    if (this.checked) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Enabled');
    } else {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
    }
  });
}

/**
 * Updates the Enabled/Disabled status of
 * Filter By Country in the popup
 * @method setAbsoluteDateStatus
 */
function setAbsoluteDateStatus() {

  let self = document.querySelector('.toggle-group.absolute .status');

  chrome.storage.sync.get('prefs', result => {

    if (result.prefs.absoluteDate) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Enabled');
    } else {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
    }
    // Setup US Date Format checkbox preference
    document.getElementById('usFormat').checked = JSON.parse(localStorage.getItem('usDateFormat'));
  });
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acknowledgeUpdate", function() { return acknowledgeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySave", function() { return applySave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForUpdate", function() { return checkForUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsToggle", function() { return optionsToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFeatures", function() { return searchFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnabledStatus", function() { return setEnabledStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerSave", function() { return triggerSave; });
/**
 * Utitlity methods used by the popup
 */

// ========================================================
// acknowledgeUpdate
// ========================================================
/**
 * Clears the update notification
 * @method   acknowledgeUpdate
 * @return   {undefined}
 */
function acknowledgeUpdate() {
  chrome.storage.sync.set({ didUpdate: false }, function () {/*noop*/});
}

// ========================================================
// applySave
// ========================================================
/**
 * Saves the users preferences when a toggle is clicked
 *
 * @method   applySave
 * @param    {String}  message - The message displayed to the user
 * @param    {Object}  event   - The event object
 * @param    {String}  currencyTarget  - The id of the currency select element
 * @return   {undefined}
 */
function applySave(message, event, currencyTarget = 'currency') {

  let prefs = {
    absoluteDate: document.getElementById('toggleAbsoluteDate').checked,
    averagePrice: document.getElementById('toggleAveragePrice').checked,
    baoiFields: document.getElementById('toggleBaoiFields').checked,
    blockBuyers: document.getElementById('toggleBlockBuyers').checked,
    blockSellers: document.getElementById('toggleBlockSellers').checked,
    blurryImageFix: document.getElementById('toggleBlurryImageFix').checked,
    confirmBeforeRemoving: document.getElementById('toggleConfirmBeforeRemoving').checked,
    collectionUi: document.getElementById('toggleCollectionUi').checked,
    converter: document.getElementById('toggleConverter').checked,
    darkTheme: document.getElementById('toggleDarkTheme').checked,
    demandIndex: document.getElementById('toggleDemandIndex').checked,
    everlastingCollection: document.getElementById('toggleEverlastingCollection').checked,
    everlastingMarket: document.getElementById('toggleEverlastingMarket').checked,
    favoriteSellers: document.getElementById('toggleFavoriteSellers').checked,
    feedback: document.getElementById('toggleFeedback').checked,
    filterMediaCondition: document.getElementById('toggleFilterMediaCondition').checked,
    filterPrices: document.getElementById('toggleFilterPrices').checked,
    filterSleeveCondition: document.getElementById('toggleFilterSleeveCondition').checked,
    filterShippingCountry: document.getElementById('toggleFilterShippingCountry').checked,
    filterUnavailable: document.getElementById('toggleFilterUnavailable').checked,
    formatShortcuts: document.getElementById('toggleShortcuts').checked,
    hideMinMaxColumns: document.getElementById('toggleMinMaxColumns').checked,
    highlightMedia: document.getElementById('toggleHighlights').checked,
    inventoryRatings: document.getElementById('toggleInventoryRatings').checked,
    notesCount: document.getElementById('toggleNotesCount').checked,
    quickSearch: document.getElementById('toggleQuickSearch').checked,
    randomItem: document.getElementById('toggleRandomItem').checked,
    ratingPercent: document.getElementById('toggleRatingPercent').checked,
    readability: document.getElementById('toggleReadability').checked,
    relativeSoldDate: document.getElementById('toggleRelativeSoldDate').checked,
    releaseDurations: document.getElementById('toggleReleaseDurations').checked,
    releaseScanner: document.getElementById('toggleReleaseScanner').checked,
    releaseRatings: document.getElementById('toggleReleaseRatings').checked,
    removeFromWantlist: document.getElementById('toggleRemoveFromWantlist').checked,
    sellerItemsInCart: document.getElementById('toggleSellerItemsInCart').checked,
    sellerRep: document.getElementById('toggleSellerRep').checked,
    sortButtons: document.getElementById('toggleSortBtns').checked,
    suggestedPrices: document.getElementById('togglePrices').checked,
    tweakDiscrims: document.getElementById('toggleTweakDiscrims').checked,
    ytPlaylists: document.getElementById('toggleYtPlaylists').checked,
    userCurrency: document.getElementById(currencyTarget).value,

    // Contextual menus
    useAllDay: document.getElementById('allday').checked,
    useBandcamp: document.getElementById('bandcamp').checked,
    useBoomkat: document.getElementById('boomkat').checked,
    useClone: document.getElementById('clone').checked,
    useDeejay: document.getElementById('deejay').checked,
    useDiscogs: document.getElementById('discogs').checked,
    useEarcave: document.getElementById('earcave').checked,
    useGramaphone: document.getElementById('gramaphone').checked,
    useHardwax: document.getElementById('hardwax').checked,
    useJuno: document.getElementById('juno').checked,
    useKristina: document.getElementById('kristina').checked,
    useOye: document.getElementById('oye').checked,
    usePhonica: document.getElementById('phonica').checked,
    useRateYourMusic: document.getElementById('rateyourmusic').checked,
    useRushhour: document.getElementById('rushhour').checked,
    useSotu: document.getElementById('sotu').checked,
    useYoutube: document.getElementById('youtube').checked
  };

  chrome.storage.sync.set({ prefs: prefs }, function () {

    // Make sure both user currency selects are in sync.
    // TODO: move this into a global single preference
    document.querySelectorAll('#currency, #filterPricesCurrency').forEach(select => {
      select.value = document.getElementById(currencyTarget).value;
    });

    notify(message);
  });
  // Google Analyitcs
  if (ga) {

    let checked = event.target.checked;

    if (checked !== undefined) {

      ga('send', 'event', event.target.id, checked);
    }
  }
}

// ========================================================
// checkForUpdate
// ========================================================
/**
 * Displays a message to the user
 * @param {String} message - The message to display to the user
 */
function notify(message) {

  if (message) {

    let notifications = document.getElementsByClassName('notifications')[0];

    message = message === 'refresh' ? 'Please refresh the page for changes to take effect.' : message;

    document.getElementById('notify').textContent = message;

    notifications.classList.add('show');
    setTimeout(() => {
      fadeOut(notifications);
    }, 1500);
  }
}

// ========================================================
// checkForUpdate
// ========================================================
/**
 * Checks extension for any recent updates and sets
 * the `learn` button color if an update has occured
 * @method   checkForUpdate
 * @return   {undefined}
 */

function checkForUpdate() {

  chrome.storage.sync.get('didUpdate', function (result) {

    let learn = document.getElementById('learn');

    if (result.didUpdate) {

      learn.textContent = 'Updates!';
      learn.classList.remove('button_green');
      learn.classList.add('button_orange');

      chrome.browserAction.setBadgeText({ text: '' });
    } else {

      learn.textContent = 'Learn';
      learn.classList.add('button_green');
      learn.classList.remove('button_orange');
    }
  });
}

// ========================================================
// fadeIn
// ========================================================
/**
 * Fades in an element via CSS animation
 * @method fadeIn
 * @param  {object} elem [the element to fade]
 * @return {undefined}
 */
function fadeIn(elem) {

  elem.removeClasses('fadeOut', 'hide');
  elem.addClasses('fadeIn', 'show');
}

// ========================================================
// fadeOut
// ========================================================
/**
 * Fades out an element via CSS animation
 * @method fadeOut
 * @param  {object} elem [the element to fade]
 * @return {undefined}
 */
function fadeOut(elem) {

  elem.classList.add('fadeOut');
  elem.classList.remove('fadeIn');

  setTimeout(() => {

    elem.removeClasses('fadeOut', 'show');
    elem.classList.add('hide');
  }, 400);
}

// ========================================================
// isHidden
// ========================================================
/**
 * Returns true when an element has classname 'hide'
 * @method isHidden
 * @param  {element}  element [the element to examine]
 * @return {Boolean}
 */
function isHidden(element) {
  return element.parentNode.classList.contains('hide');
}

// ========================================================
// optionsToggle
// ========================================================
/**
 * Displays the options in the popup menu
 * @method optionsToggle
 * @param  {object}    options      [the DOM element to display]
 * @param  {object}    toggleGroup  [the actual feature in the popup menu]
 * @param  {number}    height       [the height that `target` will expand to]
 * @param  {string}    parentClass  [the parent class of the animated arrow]
 * @return {undefined}
 */
function optionsToggle(options, toggleGroup, parentClass, height) {

  let arrow = document.querySelector(`${parentClass} .arrow`),
      status = document.querySelector(`${parentClass} .status`);

  options = document.querySelector(options);

  // Expand
  // Check the current height and either expand or collapse it
  if (toggleGroup.clientHeight === 50) {

    toggleGroup.style.height = height + 'px';

    arrow.classList.add('rotate90');

    let int = setInterval(function () {

      if (toggleGroup.clientHeight >= 30) {

        fadeIn(options);

        if (status) {
          fadeOut(status);
        }

        clearInterval(int);
      }
    }, 100);
  }
  // Collapse
  // (don't collapse when clicking these elements)
  else if (event.target.nodeName !== 'INPUT' && event.target.type !== 'checkbox' && event.target.nodeName !== 'LABEL' && event.target.nodeName !== 'SPAN' && event.target.nodeName !== 'A' && event.target.nodeName !== 'SELECT' && !event.target.className.includes('rep-color') && !event.target.className.includes('maximum') && !event.target.className.includes('minimum') && event.target.parentNode.className !== 'rep-color-wrap') {

      fadeOut(options);

      if (status) {
        status.classList.add('fadeIn');
      }

      arrow.classList.remove('rotate90');

      let int = setInterval(function () {

        if (options.offsetParent === null) {

          toggleGroup.style.height = '50px';

          clearInterval(int);
        }
      }, 100);
    }
}

// ========================================================
// searchFeatures
// ========================================================
/**
 * Adds/removes `hide` class from the
 * features in popup. Also shows/hides
 * the clear button.
 * @method searchFeatures
 * @return {undefined}
 */
function searchFeatures() {

  let features = [...document.querySelectorAll('.toggle-group .meta')],
      noResults = document.getElementById('noResults');

  setTimeout(() => {

    features.forEach(feature => {

      let clear = document.getElementsByClassName('clear-search')[0],
          query = document.getElementById('searchbox').value.toLowerCase(),
          searchbox = document.getElementById('searchbox'),
          text = feature.textContent.toLowerCase();

      if (!text.includes(query)) {

        feature.parentNode.classList.add('hide');
      } else {

        feature.parentNode.classList.remove('hide');
        noResults.classList.add('hide');
      }

      // Show no results notification
      if (features.every(isHidden)) {

        noResults.classList.remove('hide');
      }

      // show/hide the X icon
      return searchbox.value ? clear.classList.remove('hide') : clear.classList.add('hide');
    });
  }, 0);
}

// ========================================================
// setEnabledStatus
// ========================================================
/**
 * Sets the enabled/disabled text status on SUBMENUS
 * @method setEnabledStatus
 * @param  {object}         target [the DOM element]
 * @param  {string}         status [Enabled/Disabled]
 * @returns {undefined}
 */
function setEnabledStatus(target, status) {

  if (status === 'Enabled') {

    target.classList.add('enabled');
    target.classList.remove('disabled');
  } else {

    target.classList.add('disabled');
    target.classList.remove('enabled');
  }
  target.textContent = status;
  return;
}

// ========================================================
// triggerSave
// ========================================================
/**
 * Tells the user to refresh after updating a preference
 *
 * @method   triggerSave
 * @param    {Object}    event [The event object]
 * @return   {undefined}
 */

function triggerSave(event) {
  applySave('refresh', event);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBAOIfields", function() { return toggleBAOIfields; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Media condition hightlights features
 */



// ========================================================
// toggleBAOIfields
// ========================================================
/**
 * Toggles BAOI field CSS
 * @method   toggleBAOIfields
 * @param    {object}         event [the event object]
 * @return   {undefined}
 */
function toggleBAOIfields(event) {
  chrome.tabs.executeScript(null, { file: 'js/extension/features/toggle-baoi-fields.js' }, function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
  });
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContextualMenuElements", function() { return createContextualMenuElements; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Contextual Menus search feature
 */



// ========================================================
// createContextualMenuElements
// ========================================================
/**
 * Creates contextual menu markup inside the
 * Contextual Menu options feature in the popup.
 * @method createContextualMenuElements
 * @return {undefined}
 */
function createContextualMenuElements() {

  let contextMenus = document.getElementById('contextMenus'),
      fragment = document.createDocumentFragment(),
      menus = [{
    name: 'All Day',
    fn: 'searchAllDay',
    id: 'allday'
  }, {
    name: 'Bandcamp',
    fn: 'searchBandcamp',
    id: 'bandcamp'
  }, {
    name: 'Boomkat',
    fn: 'searchBoomkat',
    id: 'boomkat'
  }, {
    name: 'Clone',
    fn: 'searchClone',
    id: 'clone'
  }, {
    name: 'DeeJay',
    fn: 'searchDeeJay',
    id: 'deejay'
  }, {
    name: 'Discogs',
    fn: 'searchDiscogs',
    id: 'discogs'
  }, {
    name: 'Earcave',
    fn: 'searchEarcave',
    id: 'earcave'
  }, {
    name: 'Gramaphone',
    fn: 'searchGramaphone',
    id: 'gramaphone'
  }, {
    name: 'Hardwax',
    fn: 'searchHardwax',
    id: 'hardwax'
  }, {
    name: 'Juno',
    fn: 'searchJuno',
    id: 'juno'
  }, {
    name: 'Kristina',
    fn: 'searchKristina',
    id: 'kristina'
  }, {
    name: 'Oye',
    fn: 'searchOye',
    id: 'oye'
  }, {
    name: 'Phonica',
    fn: 'searchPhonica',
    id: 'phonica'
  }, {
    name: 'RateYourMusic',
    fn: 'searchRateYourMusic',
    id: 'rateyourmusic'
  }, {
    name: 'Rush Hour',
    fn: 'searchRushhour',
    id: 'rushhour'
  }, {
    name: 'SOTU',
    fn: 'searchSotu',
    id: 'sotu'
  }, {
    name: 'YouTube',
    fn: 'searchYoutube',
    id: 'youtube'
  }];

  // Create contextual menu elements
  menus.forEach(menu => {

    let boxwrap = document.createElement('div'),
        input = document.createElement('input'),
        label = document.createElement('label'),
        span = document.createElement('span');

    boxwrap.className = 'checkbox-wrap';

    input.type = 'checkbox';
    input.id = menu.id;
    input.dataset.name = menu.name;
    input.dataset.fn = menu.fn;

    span.textContent = menu.name;

    // Assemble markup
    label.appendChild(input);
    label.appendChild(span);
    boxwrap.appendChild(label);
    fragment.appendChild(boxwrap);
  });

  // Append all contextual menu elements
  contextMenus.appendChild(fragment);

  // Attach eventListeners
  menus.forEach(menu => {
    document.getElementById(menu.id).addEventListener('change', updateContextualMenu);
  });
}

// ========================================================
// updateContextualMenu
// ========================================================
/**
 * Creates/removes contextual menu items
 * @method   updateContextualMenu
 * @param    {Object}   event [The event object]
 * @return   {undefined}
 */
function updateContextualMenu(event) {

  if (event.target.checked) {

    chrome.runtime.sendMessage({
      fn: event.target.dataset.fn,
      id: event.target.id,
      method: 'create',
      name: event.target.dataset.name,
      request: 'updateContextMenu'
    });

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
  } else {

    chrome.runtime.sendMessage({
      id: event.target.id,
      method: 'remove',
      request: 'updateContextMenu'
    });

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkTabElements", function() { return createLinkTabElements; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Contextual Menus search feature
 *
 * TODO:
 * - Save link preferences to localStorage
 * - Pass prefs to frontend via background.js
 * - Only save enabled boolean to chrome.storage
 */



const defaults = {
  artists: false,
  collection: false,
  dashboard: false,
  labels: false,
  lists: false,
  marketplace: false,
  releases: false,
  wantlist: false
};

// ========================================================
// createLinkTabElements
// ========================================================
/**
 * Creates contextual menu markup inside the
 * Contextual Menu options feature in the popup.
 */
function createLinkTabElements() {
  // TODO: rename linkTabs to someting more descriptive
  let linkTabs = document.getElementById('linksInTabs'),
      fragment = document.createDocumentFragment(),
      prefs = getPreferences(),
      menus = [{
    name: 'Artists',
    value: 'artists'
  }, {
    name: 'Collection',
    value: 'collection'
  }, {
    name: 'Dashboard',
    value: 'dashboard'
  }, {
    name: 'Labels',
    value: 'labels'
  }, {
    name: 'Lists',
    value: 'lists'
  }, {
    name: 'Marketplace',
    value: 'marketplace'
  }, {
    name: 'Releases',
    value: 'releases'
  }, {
    name: 'Wantlist',
    value: 'wantlist'
  }];

  // Create contextual menu elements
  menus.forEach(menu => {
    let boxwrap = document.createElement('div'),
        input = document.createElement('input'),
        label = document.createElement('label'),
        span = document.createElement('span');

    boxwrap.className = 'checkbox-wrap';

    input.type = 'checkbox';
    input.id = menu.value;
    input.checked = prefs[menu.value];

    span.textContent = menu.name;

    // Assemble markup
    label.appendChild(input);
    label.appendChild(span);
    boxwrap.appendChild(label);
    fragment.appendChild(boxwrap);
  });

  // Append all contextual menu elements
  linkTabs.appendChild(fragment);

  // Attach eventListeners
  menus.forEach(menu => {
    document.getElementById(menu.value).addEventListener('change', updateLinkPreference);
  });
}

/**
 * Returns the saved preferences as an object
 */
function getPreferences() {
  let prefs = JSON.parse(localStorage.getItem('linksInTabs')) || defaults;
  return prefs;
}

function setPreferences(prefs) {
  localStorage.setItem('linksInTabs', JSON.stringify(prefs));
}

// ========================================================
// updateLinkPreference
// ========================================================
/**
 * Sets the enabled/disabled preference
 */
function updateLinkPreference(event) {

  let prefs = getPreferences(),
      id = event.target.id;

  prefs[id] = event.target.checked;
  setPreferences(prefs);

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDarkTheme", function() { return useDarkTheme; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Dark theme feature
 */



// ========================================================
// useDarkTheme
// ========================================================
/**
 * Toggles the dark theme
 * @method   useDarkTheme
 * @param    {Object}     event [The event object]
 * @return   {undefined}
 */
function useDarkTheme(event) {

  chrome.tabs.executeScript(null, { file: 'js/extension/features/toggle-dark-theme.js' }, function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
  });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearClasses", function() { return clearClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupFilterByCondition", function() { return setupFilterByCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHideConditions", function() { return toggleHideConditions; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Filter Media Condition feature
 */



/**
 * These arrays corespond to the `.status` string [conditions] and
 * the `.status` element's classes [colors] that change when the condition
 * select element is changed.
 */
const conditions = ['Poor', 'Fair', 'Good', 'Good Plus', 'Very Good', 'Very Good Plus', 'Near Mint', 'Mint'];
const colors = ['poor', 'fair', 'good', 'good-plus', 'very-good', 'very-good-plus', 'near-mint', 'mint'];

/**
 * Removes the condition classes from the select element
 * @param {Array} classes An array of class lists for each condition
 * @param {object} status The status element to remove classes from
 * @returns {undefined}
 */
function clearClasses(classes, status) {
  for (let i = 0; i < classes.length; i++) {
    status.classList.remove(classes[i]);
  }
}

/**
 * Sets up the event listeners for the Filter By Condition UI
 */
function init() {

  document.querySelector('.toggle-group.condition').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["optionsToggle"])('.hide-condition', this, '.condition', 100);
  });

  // Save the Filter by Condition Select value to localStorage
  document.getElementById('conditionValue').addEventListener('change', function () {

    let toggle = document.getElementById('toggleFilterMediaCondition'),
        mediaCondition = localStorage.getItem('mediaCondition') || 7,
        status = document.querySelector('.toggle-group.condition .label .status');

    mediaCondition = this.value;
    localStorage.setItem('mediaCondition', String(mediaCondition));

    if (!toggle.checked) {

      toggle.checked = true;
    }

    clearClasses(colors, status);

    status.textContent = conditions[this.value];
    status.classList.add(colors[this.value]);

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  });
}

/**
 * Sets the text value/color of the Filter by Condition
 * setting in the popup menu when it is first rendered
 * @param {boolean} enabled Enabled or disabled state
 * @return {undefined}
 */
function setupFilterByCondition(enabled) {

  let select = document.getElementById('conditionValue'),
      setting = Number(localStorage.getItem('mediaCondition')) || 7,
      status = document.querySelector('.toggle-group.condition .label .status');

  if (enabled) {

    status.textContent = conditions[setting];
    status.classList.add(colors[setting]);
  } else {

    status.textContent = 'Disabled';
    status.classList.add('disabled');
  }

  if (setting) {
    select.value = setting;
  }
}

/**
 * Validates that the user has a condition selected from
 * the select element before letting the user
 * enabled the feature
 * @returns {undefined}
 */
function toggleHideConditions(event) {

  let setting = Number(localStorage.getItem('mediaCondition')) || 7,
      status = document.querySelector('.toggle-group.condition .label .status');

  if (!event.target.checked) {

    status.className = 'status hide disabled';
    status.textContent = 'Disabled';
  } else {

    status.textContent = conditions[setting];
    status.classList.add(colors[setting]);
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterPricesCurrency", function() { return getFilterPricesCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFilterPrices", function() { return validateFilterPrices; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Filter Prices feature
 */



/**
 * Sets up the event listeners for the Filter Prices UI
 */
function init() {

  let filterPrices = JSON.parse(localStorage.getItem('filterPrices')) || { minimum: null, maximum: null },
      minimum = document.getElementById('minimum'),
      maximum = document.getElementById('maximum');

  // Open / Close options
  document.querySelector('.toggle-group.filter-prices').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["optionsToggle"])('.hide-filter-prices', this, '.filter-prices', 140);
    updateDisplayValues();
  });

  // Populate inputs with saved values
  minimum.value = filterPrices.minimum;
  maximum.value = filterPrices.maximum;

  // Toggle enabled / disabled status
  document.getElementById('toggleFilterPrices').addEventListener('change', () => setStatus());

  // Set initial enabled / disabled status
  setTimeout(() => {
    setStatus();
    updateDisplayValues();
    setMinMaxValues();
  }, 0);
}

/**
 * Sets the Enabled / Disabled status in the popup menu
 */
function setStatus() {
  let self = document.querySelector('.toggle-group.filter-prices .status'),
      min = document.querySelector('#minimum'),
      max = document.querySelector('#maximum');

  if (document.getElementById('toggleFilterPrices').checked) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Enabled');
    min.disabled = true;
    max.disabled = true;
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
    min.disabled = false;
    max.disabled = false;
  }
}

/**
 * Displays the user's settings along side the feature title
 */
function updateDisplayValues() {
  let values = document.querySelector('.min-max-values'),
      userCurrency = document.getElementById('filterPricesCurrency').value || 'USD',
      filterPrices = JSON.parse(localStorage.getItem('filterPrices')) || { minimum: null, maximum: null },
      { minimum, maximum } = filterPrices,
      currCode = {
    AUD: 'A$',
    BRL: 'R$',
    CAD: 'CA$',
    CHF: 'CHF',
    EUR: '&euro;',
    GBP: '&pound;',
    JPY: '&yen;',
    MXN: 'MX$',
    NZD: 'NZ$',
    SEK: 'SEK',
    USD: '$',
    ZAR: 'ZAR'
  };

  if (!document.getElementById('toggleFilterPrices').checked) {
    values.innerHTML = '';
    return;
  }

  if (minimum && !maximum) {
    values.innerHTML = `&#8209; Min: ${currCode[userCurrency]}${minimum}`;
  } else if (maximum && !minimum) {
    values.innerHTML = `&#8209; Max: ${currCode[userCurrency]}${maximum}`;
  } else if (maximum && minimum) {
    values.innerHTML = `&#8209; Min: ${currCode[userCurrency]}${minimum} / Max: ${currCode[userCurrency]}${maximum}`;
  } else {
    values.innerHTML = '';
  }
}

/**
 * Sets the Min / Max values to localStorage and updates the display
 * on the popup
 */
function setMinMaxValues() {
  let filterPrices = JSON.parse(localStorage.getItem('filterPrices')) || { minimum: null, maximum: null },
      min = document.querySelector('#minimum'),
      max = document.querySelector('#maximum');

  min.addEventListener('change', event => {
    filterPrices.minimum = Math.abs(Number(event.target.value));
    localStorage.setItem('filterPrices', JSON.stringify(filterPrices));
    updateDisplayValues();
  });

  max.addEventListener('change', event => {
    filterPrices.maximum = Math.abs(Number(event.target.value));
    localStorage.setItem('filterPrices', JSON.stringify(filterPrices));
    updateDisplayValues();
  });
}

/**
 * Gets and saves currency preferences
 * @return   {undefined}
 */
function getFilterPricesCurrency() {

  let toggleFilterPrices = document.getElementById('toggleFilterPrices'),
      userCurrency = document.getElementById('filterPricesCurrency'),
      min = document.querySelector('#minimum'),
      max = document.querySelector('#maximum');

  chrome.storage.sync.get('prefs', function (result) {

    // if there is a saved value, set the select with it
    if (result.prefs.userCurrency) {
      userCurrency.value = result.prefs.userCurrency;

      // validation
      if (userCurrency.value !== '-' && toggleFilterPrices.checked === true) {
        userCurrency.disabled = true;
        min.disabled = true;
        max.disabled = true;
      }
    } else {

      toggleFilterPrices.checked = false;
      userCurrency.disabled = false;
      min.disabled = true;
      max.disabled = true;
    }
  });
}

/**
 * Toggles Filter Prices and displays an Error
 * if a currency value is not selected.
 * @method   validateFilterPrices
 * @param    {Object} event - The event object
 * @return   {undefined}
 */
function validateFilterPrices(event) {

  let togglePrices = document.getElementById('toggleFilterPrices'),
      userCurrency = document.getElementById('filterPricesCurrency'),
      min = document.querySelector('#minimum'),
      max = document.querySelector('#maximum');

  if (event.target.checked && userCurrency.value !== '-') {

    userCurrency.disabled = true;
    togglePrices.checked = true;
    min.disabled = true;
    max.disabled = true;
    userCurrency.className = '';

    updateDisplayValues();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event, 'filterPricesCurrency');
  } else if (userCurrency.value === '-') {

    let message = 'Please choose a currency from the select box first.',
        notifications = document.querySelector('.notifications');

    document.getElementById('notify').textContent = message;

    notifications.classList.add('show');

    setTimeout(() => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(notifications);
    }, 1500);

    togglePrices.checked = false;
    userCurrency.className = 'alert';
    return;
  } else {

    userCurrency.disabled = false;
    updateDisplayValues();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event, 'filterPricesCurrency');
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearClasses", function() { return clearClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupFilterSleeveCondition", function() { return setupFilterSleeveCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSleeveConditions", function() { return toggleSleeveConditions; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Filter Sleeve Condition feature
 */



/**
 * These arrays corespond to the `.status` string [conditions] and
 * the `.status` element's classes [colors] that change when the condition
 * select element is changed.
 */
const conditions = ['Poor', 'Fair', 'Good', 'Good Plus', 'Very Good', 'Very Good Plus', 'Near Mint', 'Mint'];
const colors = ['poor', 'fair', 'good', 'good-plus', 'very-good', 'very-good-plus', 'near-mint', 'mint'];
const defaultObj = { value: 7, generic: false, noCover: false };

/**
 * Removes the condition classes from the select element
 * @param {Array} classes An array of class lists for each condition
 * @param {object} status The status element to remove classes from
 * @returns {undefined}
 */
function clearClasses(classes, status) {
  for (let i = 0; i < classes.length; i++) {
    status.classList.remove(classes[i]);
  }
}

/**
 * Sets up the event listeners for the Filter By Condition UI
 */
function init() {

  let hasSettings = localStorage.getItem('sleeveCondition'),
      sleeveCondition = hasSettings ? JSON.parse(hasSettings) : defaultObj;

  if (!hasSettings) {
    localStorage.setItem('sleeveCondition', JSON.stringify(defaultObj));
  }

  document.querySelector('.toggle-group.sleeve-condition').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["optionsToggle"])('.hide-sleeve-condition', this, '.sleeve-condition', 135);
  });

  // Save the Filter by Condition Select value to localStorage
  document.getElementById('sleeveConditionValue').addEventListener('change', function () {

    let toggle = document.getElementById('toggleFilterSleeveCondition'),
        status = document.querySelector('.toggle-group.sleeve-condition .label .status');

    sleeveCondition.value = this.value;
    localStorage.setItem('sleeveCondition', JSON.stringify(sleeveCondition));

    if (!toggle.checked) {
      toggle.checked = true;
    }

    clearClasses(colors, status);

    status.textContent = conditions[this.value];
    status.classList.add(colors[this.value]);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  });

  // Checkbox listeners
  document.getElementById('generic').addEventListener('change', function (event) {
    sleeveCondition.generic = this.checked;
    localStorage.setItem('sleeveCondition', JSON.stringify(sleeveCondition));
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  });

  document.getElementById('no-cover').addEventListener('change', function (event) {
    sleeveCondition.noCover = this.checked;
    localStorage.setItem('sleeveCondition', JSON.stringify(sleeveCondition));
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  });
}

/**
 * Sets the text value/color of the Filter Sleeve Condition
 * setting in the popup menu when it is first rendered
 * @param {boolean} enabled Enabled or disabled state
 * @return {undefined}
 */
function setupFilterSleeveCondition(enabled) {

  let generic = document.getElementById('generic'),
      noCover = document.getElementById('no-cover'),
      select = document.getElementById('sleeveConditionValue'),
      hasSettings = localStorage.getItem('sleeveCondition'),
      setting = hasSettings ? JSON.parse(hasSettings) : defaultObj,
      status = document.querySelector('.toggle-group.sleeve-condition .label .status');

  if (!hasSettings) {
    localStorage.setItem('sleeveCondition', JSON.stringify(defaultObj));
  }

  if (enabled) {

    status.textContent = conditions[setting.value];
    status.classList.add(colors[setting.value]);
  } else {

    document.getElementById('toggleFilterSleeveCondition').checked = false;
    status.textContent = 'Disabled';
    status.classList.add('disabled');
  }

  select.value = setting.value;
  generic.checked = setting.generic;
  noCover.checked = setting.noCover;
}

/**
 * Validates that the user has a condition selected from
 * the select element before letting the user
 * enable the feature
 * @returns {undefined}
 */
function toggleSleeveConditions(event) {

  let hasSettings = localStorage.getItem('sleeveCondition'),
      setting = hasSettings ? JSON.parse(hasSettings) : defaultObj,
      status = document.querySelector('.toggle-group.sleeve-condition .label .status');

  if (!hasSettings) {
    localStorage.setItem('sleeveCondition', JSON.stringify(defaultObj));
  }

  if (!event.target.checked) {

    status.className = 'status hide disabled';
    status.textContent = 'Disabled';
  } else {

    status.textContent = conditions[setting.value];
    status.classList.add(colors[setting.value]);
    localStorage.setItem('sleeveCondition', JSON.stringify(setting));
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHideCountries", function() { return toggleHideCountries; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Filter by Country feature
 */



// ========================================================
// toggleHideCountries
// ========================================================
/**
 * Validates then enables/disables the CSS for Filter Shipping Country
 * @method toggleHideCountries
 * @param  {object} event [the event object]
 * @return {undefined}
 */
function toggleHideCountries(event) {

  let path = 'js/extension/features/toggle-filter-shipping-country-css.js';

  chrome.tabs.executeScript(null, { file: path }, () => {});
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveInventoryRatings", function() { return saveInventoryRatings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInventoryRatings", function() { return setInventoryRatings; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * inventory-ratings feature
 */



/**
 * Sets up the event listeners for the Inventory Ratings UI
 * @returns {undefined}
 */
function init() {

  // Expand and show the submenu
  document.querySelector('.toggle-group.inventory').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["optionsToggle"])('#inventoryRatings', this, '.inventory', 110);
  });

  // Set "enabled/disabled" status
  document.getElementById('toggleInventoryRatings').addEventListener('change', function () {

    let self = document.querySelector('.toggle-group.inventory .status'),
        status = this.checked ? 'Enabled' : 'Disabled';

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, status);
  });

  setInventoryRatings();
}

/**
 * Saves the inventory rating
 * @method saveInventoryRatings
 * @return {undefined}
 */
function saveInventoryRatings() {

  let input = document.getElementById('ratingsValue'),
      inventoryValue = document.getElementsByClassName('inventory-value')[0],
      self = document.querySelector('.inventory .status'),
      toggle = document.getElementById('toggleInventoryRatings');

  // enabled -and- has value entered
  if (input.value && toggle.checked) {

    input.disabled = true;
    toggle.disabled = false;
    input.classList.remove('alert');

    localStorage.setItem('inventoryRatings', input.value);

    input.value = localStorage.getItem('inventoryRatings');

    // Displays rating as "- 4.45"
    inventoryValue.innerHTML = `&#8209; ${input.value}`;

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Enabled');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  } else if (input.value && !toggle.checked) {

    input.disabled = false;
    inventoryValue.textContent = '';

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  } else if (!input.value) {

    toggle.checked = false;
    input.classList.add('alert');
  }
}

/**
 * Sets the value of the inventory rating input
 * when the popup is rendered
 * @method setInventoryRating
 * @return {undefined}
 */
function setInventoryRatings() {

  let input = document.getElementById('ratingsValue'),
      minimumValue = localStorage.getItem('inventoryRatings') || null,
      ratingDisplay = document.querySelector('.inventory-value'),
      self = document.querySelector('.inventory .status'),
      toggle = document.getElementById('toggleInventoryRatings');

  if (minimumValue !== null) {
    input.value = minimumValue;
  }

  chrome.storage.sync.get('prefs', function (result) {
    // Has value saved
    if (result.prefs.inventoryRatings && minimumValue !== null) {

      input.disabled = true;
      input.value = minimumValue;

      ratingDisplay.innerHTML = `&#8209; ${input.value}`;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Enabled');
    }
    // Has no value saved
    else if (result.prefs.inventoryRatings && minimumValue === null) {

        toggle.checked = false;
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
      } else {

        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
      }
  });
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMediaHighlights", function() { return toggleMediaHighlights; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Media condition hightlights features
 */



// ========================================================
// toggleMediaHighlights
// ========================================================
/**
 * Toggles Marketplace highlights
 * @method   toggleMediaHighlights
 * @param    {object}         event [the event object]
 * @return   {undefined}
 */
function toggleMediaHighlights(event) {
  chrome.tabs.executeScript(null, { file: 'js/extension/features/toggle-highlights.js' }, function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
  });
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleColumns", function() { return toggleColumns; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Min, median, max columns
 */



// ========================================================
// toggleColumns
// ========================================================
/**
 * Toggles the Min, Median, Max column visibility on the Collection page.
 * @method   toggleColumns
 * @param    {Object}     event [The event object]
 * @return   {undefined}
 */
function toggleColumns(event) {

  chrome.tabs.executeScript(null, { file: 'js/extension/features/toggle-min-max-columns.js' }, function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
  });
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSellerRep", function() { return saveSellerRep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSellerRep", function() { return setSellerRep; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Seller Reputation feature
 */



function init() {

  document.querySelector('.toggle-group.seller-rep').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["optionsToggle"])('.hide-percentage', this, '.seller-rep', 230);
  });

  // Swatches
  [...document.querySelectorAll('.rep-color')].forEach(swatch => {
    swatch.addEventListener('click', event => {
      selectSwatch(event);
    });
  });

  // Filter checkbox
  document.getElementById('filter-seller-rep').addEventListener('change', event => {
    localStorage.setItem('sellerRepFilter', JSON.stringify(event.target.checked));
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  });
}
/**
 * Saves the sellerRep percentage
 * @method saveSellerRep
 * @return {undefined}
 */
function saveSellerRep() {

  let input = document.getElementById('percent'),
      repValue = document.getElementsByClassName('rep-value')[0],
      self = document.querySelector('.seller-rep .status'),
      toggle = document.getElementById('toggleSellerRep');

  // enabled -and- has value entered
  if (input.value && toggle.checked) {

    input.disabled = true;
    toggle.disabled = false;
    input.classList.remove('alert');

    // reset value to '100' if user enters a greater value
    if (input.value > 100) {
      input.value = 100;
    }

    localStorage.setItem('sellerRep', input.value);

    input.value = localStorage.getItem('sellerRep');

    // Displays percentage value like: - 80%
    repValue.innerHTML = `&#8209; ${input.value}%`;

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Enabled');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  } else if (input.value && !toggle.checked) {

    input.disabled = false;
    repValue.textContent = '';

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);
  } else if (!input.value) {

    toggle.checked = false;
    input.classList.add('alert');
  }
}

// ========================================================
// setSellerRep
// ========================================================
/**
 * Sets the value of the seller reputation input
 * when the popup is rendered
 * @method setSellerRep
 * @return {undefined}
 */
function setSellerRep() {

  let checkbox = document.getElementById('filter-seller-rep'),
      filter = localStorage.getItem('sellerRepFilter') || false,
      input = document.getElementById('percent'),
      percent = localStorage.getItem('sellerRep') || null,
      lscolor = localStorage.getItem('sellerRepColor') || 'darkorange',
      color = lscolor.match(/\w/g).join(''),
      repValue = document.getElementsByClassName('rep-value')[0],
      self = document.querySelector('.seller-rep .status'),
      swatch = document.querySelector(`.rep-color.${color}`),
      toggle = document.getElementById('toggleSellerRep');

  if (percent !== null) {
    input.value = percent;
  }

  // Set default color to localStorage
  if (!localStorage.getItem('sellerRepColor')) {
    localStorage.setItem('sellerRepColor', JSON.stringify('darkorange'));
  }

  if (filter && JSON.parse(filter)) {
    checkbox.checked = true;
  }

  swatch.className += ' selected';

  chrome.storage.sync.get('prefs', function (result) {

    if (result.prefs.sellerRep && percent !== null) {

      input.disabled = true;
      // Displays percentage value like: - 80%
      repValue.innerHTML = `&#8209; ${input.value}%`;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Enabled');
    } else if (result.prefs.sellerRep && percent === null) {

      toggle.checked = false;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
    } else {

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, 'Disabled');
    }
  });
}

// ========================================================
// selectSwatch
// ========================================================
/**
 * Selects the swatch when clicked and sets the
 * value in localStorage.
 *
 * Each key in the `colorTable` object corresponds with a
 * CSS class. Swatch color values are determined by class
 * and then saved as their value from the `colorTable`
 * object.
 *
 * @method selectSwatch
 * @param  {object} event The event object
 * @return {string}
 */
function selectSwatch(event) {

  let classname,
      colorTable = {
    darkgoldenrod: 'darkgoldenrod',
    dimgray: 'dimgray',
    BF3A38: '#BF3A38',
    darkorange: 'darkorange',
    slategray: 'slategray',
    darkslategray: 'darkslategray',
    black: 'black'
  },
      swatch = event.target;

  // Remove .selected from className
  [...document.querySelectorAll('.rep-color')].forEach(el => {

    if (el.classList.contains('selected')) {

      el.classList.remove('selected');
    }
  });

  // Extract the class name for the `colorTable` value
  classname = swatch.className.split(' ')[1];

  localStorage.setItem('sellerRepColor', JSON.stringify(colorTable[classname]));

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event);

  return swatch.classList.add('selected');
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestedPricesCurrency", function() { return getSuggestedPricesCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAndSave", function() { return validateAndSave; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Suggested Prices feature
 */



// ========================================================
// getSuggestedPricesCurrency
// ========================================================
/**
 * Gets and saves currency preferences
 * @method   getSuggestedPricesCurrency
 * @return   {undefined}
 */
function getSuggestedPricesCurrency() {

  let togglePrices = document.getElementById('togglePrices'),
      userCurrency = document.getElementById('currency');

  chrome.storage.sync.get('prefs', function (result) {

    // if there is a saved value, set the select with it
    if (result.prefs.userCurrency) {
      userCurrency.value = result.prefs.userCurrency;

      // validation
      if (userCurrency.value !== '-' && togglePrices.checked === true) {
        userCurrency.disabled = true;
      }
    } else {

      togglePrices.checked = false;
      userCurrency.disabled = false;
    }
  });
}

// ========================================================
// validateAndSave
// ========================================================
/**
 * Toggles price comparisons and displays an Error
 * if a currency value is not selected.
 * @method   validateAndSave
 * @param    {Object} event - The event object
 * @return   {undefined}
 */
function validateAndSave(event) {

  let togglePrices = document.getElementById('togglePrices'),
      userCurrency = document.getElementById('currency');

  if (event.target.checked && userCurrency.value !== '-') {

    userCurrency.disabled = true;
    togglePrices.checked = true;
    userCurrency.className = '';

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event, 'currency');
  } else if (userCurrency.value === '-') {

    let message = 'Please choose a currency from the select box first.',
        notifications = document.querySelector('.notifications');

    document.getElementById('notify').textContent = message;

    notifications.classList.add('show');

    setTimeout(() => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(notifications);
    }, 1500);

    togglePrices.checked = false;
    userCurrency.className = 'alert';
    return;
  } else {

    userCurrency.disabled = false;
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])('refresh', event, 'currency');
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * Tweak Discriminators Popup logic
 *
 */



const LS_KEY = 'discriminators';
const DEFAULTS = {
  hide: false,
  superscript: true,
  unselectable: true,
  transparent: false
};

/**
 * Gets the feature's setting values
 * @param {Object} lsObject - the localStorage object that saves the user's preferences
 * @returns {Object} - The user's preferences or the default settings
 */
function getSettings(lsObject) {
  let obj = localStorage.getItem(lsObject) || null;
  if (obj) return JSON.parse(obj);
  localStorage.setItem(LS_KEY, JSON.stringify(DEFAULTS));
  return DEFAULTS;
}

/**
 * Saves the user's preferences to localStorage
 * @param {Object} lsObject - The localStorage object that saves the user's preferences
 * @param {String} key - The name of the preference
 * @param {Boolean} value - The preference value
 * @returns {undefined}
 */
function setSettings(lsObject, key, value) {
  let obj = getSettings(lsObject) || DEFAULTS;
  obj[key] = value;
  localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

/**
 * Sets the checkbox values when the popup menu is rendered
 * @returns {undefined}
 */
function setCheckboxValues() {
  let settings = getSettings(LS_KEY),
      status = document.querySelector('.toggle-group.discrims .status');
  // Submenu checkboxes
  for (let prop in settings) {
    document.getElementById(`${prop}-discrims`).checked = settings[prop];
  }

  // Enabled/Disabled status
  setTimeout(() => {
    let checked = document.getElementById('toggleTweakDiscrims').checked,
        state = checked ? 'Enabled' : 'Disabled';
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(status, state);
  }, 0);

  // Disable checkboxes
  disableBoxes();
}

/**
 * Toggles checkbox enabled/disabled status
 * @returns {undefined}
 */
function disableBoxes() {
  let hide = document.querySelector('#hide-discrims'),
      boxes = ['superscript', 'transparent', 'unselectable'];

  boxes.forEach(box => {
    document.getElementById(`${box}-discrims`).disabled = hide.checked;
  });
}

/**
 * Sets up the event listeners for the Tweak Discriminators UI
 * @returns {undefined}
 */
function init() {
  // Expand and show the submenu
  document.querySelector('.toggle-group.discrims').addEventListener('click', function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["optionsToggle"])('#discrims', this, '.discrims', 140);
  });
  // Save the preferences
  for (let prop in getSettings(LS_KEY)) {
    document.getElementById(`${prop}-discrims`).addEventListener('change', function () {
      setSettings(LS_KEY, prop, this.checked);
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])('refresh');
    });
  }
  // Set "enabled/disabled" status
  document.getElementById('toggleTweakDiscrims').addEventListener('change', function () {
    let self = document.querySelector('.toggle-group.discrims .status'),
        checked = this.checked,
        state = checked ? 'Enabled' : 'Disabled';
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setEnabledStatus"])(self, state);
  });
  // Disable checkboxes
  document.getElementById('hide-discrims').addEventListener('change', disableBoxes);
  // Set checkboxes by preference
  setCheckboxValues();
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleYtPlaylists", function() { return toggleYtPlaylists; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/**
 * Media condition hightlights features
 */



// ========================================================
// toggleYtPlaylists
// ========================================================
/**
 * Toggles BAOI field CSS
 * @method   toggleYtPlaylists
 * @param    {object}         event [the event object]
 * @return   {undefined}
 */
function toggleYtPlaylists(event) {
  chrome.tabs.executeScript(null, { file: 'js/extension/features/toggle-youtube-playlists.js' }, function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applySave"])(null, event);
  });
}

/***/ })
/******/ ]);