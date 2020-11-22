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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ({

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

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

  let log = __webpack_require__(87),
      clearSearch = document.querySelector('.clear-search'),
      debounce = null,
      select = document.getElementById('nav-select'),
      search = document.getElementById('search'),
      tabs = document.querySelectorAll('.tabs');

  // ======================================================
  // Functions (Alphabetical)
  // ======================================================

  /**
   * Adds the `.highlight` class to the target element
   * @param {object} value The value from the selected feature
   * @returns {method}
   */
  function addHighlight(value) {

    let target = document.querySelector(`#${value}`);

    return target.classList.add('highlight');
  }

  /**
   * Checks the URL for a hash and scrolls the document
   * to the specified ID.
   * @returns {Undefined}
   */
  function checkForURLHash() {

    if (location.hash) {
      document.querySelector(`${location.hash}`).scrollIntoView();
      // (-80px to adjust for space up top)
      setTimeout(() => window.scrollTo(window.scrollX, window.scrollY - 80), 0);
    }
  }

  /**
   * Clears the search query from the input element
   * @returns {undefined}
   */
  function clearSearchField() {

    search.value = '';
    search.focus();
    select.innerHTML = '<option>Select a feature</option>';
    searchFeatures('');
  }

  /**
   * Appends new features markup to the Learn page.
   * @param {Array} target - The type of feature to get (current or previous)
   * @returns {HTMLElement}
   */
  function getFeatures(target) {

    let fragment = document.createDocumentFragment(),
        { features } = target;

    features.forEach(feature => {
      let p = document.createElement('p'),
          feat = document.createElement('span'),
          title = document.createElement('span'),
          desc = document.createElement('span'),
          link = document.createElement('a');

      feat.textContent = 'New Feature:';
      feat.className = 'feature';

      title.textContent = feature.name;
      title.classList = 'item-title';
      title.style = 'margin-bottom: 10px; display: block;';

      desc.textContent = feature.description + ' ';
      desc.classList = 'text';

      link.textContent = 'Click here to read more about it';
      link.classList = 'scroll-target';
      link.href = feature.link;

      p.append(feat);
      p.append(title);
      p.append(desc);
      desc.append(link);
      fragment.appendChild(p);
    });

    return fragment;
  }

  /**
   * Appends updates to the Learn page
   * @returns {undefined}
   */
  function getUpdates(target) {

    let fragment = document.createDocumentFragment(),
        { updates } = target;

    updates.forEach(update => {
      let li = document.createElement('li'),
          name = document.createElement('div'),
          desc = document.createElement('span');

      name.classList = 'mint';
      name.textContent = update.name;
      desc.textContent = update.description;
      li.append(name);
      li.append(desc);
      fragment.appendChild(li);
    });

    return fragment;
  }

  /**
   * Appends thanks to the Learn page
   * @returns {undefined}
   */
  function getThanks() {
    let { thanks } = log.current[0],
        fragment = document.createDocumentFragment();

    thanks.forEach(thank => {
      let li = document.createElement('li');
      li.innerHTML = thank;
      fragment.appendChild(li);
    });

    document.querySelector('.update-list').append(fragment);
  }

  /**
   * Appends the new features to the DOM
   * @returns {undefined}
   */
  function getCurrentFeatures() {
    let features = getFeatures(log.current[0]);
    document.querySelector('.new-features').append(features);
  }

  /**
   * Appends the new updates to the DOM
   * @returns {undefined}
   */
  function getCurrentUpdates() {
    let updates = getUpdates(log.current[0]);
    document.querySelector('.update-list').append(updates);
  }

  /**
   * Creates and appends `details` elements containing
   * previous update information
   * @returns {undefined}
   */
  function getPreviousFeaturesAndUpdates() {

    let fragment = document.createDocumentFragment();

    log.previous.forEach(entry => {

      let features = getFeatures(entry),
          updates = getUpdates(entry),
          ul = document.createElement('ul'),
          details = document.createElement('details'),
          summary = document.createElement('summary');

      summary.textContent = entry.version;
      details.append(summary);
      details.append(features);
      ul.append(updates);
      details.append(ul);
      fragment.append(details);
    });

    document.querySelector('.news-item.previous').append(fragment);
  }

  /**
   * Appends the version and year to the DOM
   * @method   getVersionAndYear
   * @return   {undefined}
   */
  function getVersionAndYear() {

    let manifest = chrome.runtime.getManifest(),
        version = document.querySelector('.version'),
        year = new Date().getFullYear(),
        yearSpan = document.getElementById('year');

    version.textContent = 'version ' + manifest.version;

    yearSpan.textContent = year;
  }

  /**
   * Checks for the `hide` class on an element
   * @param {object} elem The element to examine
   * @returns {boolean}
   */
  function isHidden(elem) {
    return elem.classList.contains('hide');
  }

  /**
   * Lists the number of results returned from
   * the search
   * @returns {undefined}
   */
  function listResults() {

    let features = [...document.querySelectorAll('.feature-block')],
        quantity,
        searchStatus = document.querySelector('.search-status'),
        searchResults = features.filter(elem => !elem.classList.contains('hide'));

    quantity = searchResults.length === 1 ? 'result' : 'results';

    if (!search.value) {
      searchStatus.textContent = '';
      return;
    }
    searchStatus.textContent = `${searchResults.length} ${quantity}`;
    return;
  }

  /**
   * Shows the `no-results` element if all features
   * are hidden
   * @param {Array} features An array of every feature
   * @returns {method}
   */
  function noResultsCheck(features) {

    let noResults = document.querySelector('.no-results');

    if (features.every(isHidden)) {

      return noResults.classList.remove('hide');
    }
    return noResults.classList.add('hide');
  }

  /**
   * Populates the select element in the navigation
   * with IDs of any element with a .feature class
   * @method   populateNavigation
   * @return   {undefined}
   */
  function populateNavigation(features) {

    let noResults = document.createElement('option'),
        selectFeature = document.createElement('option');

    noResults.textContent = 'No results';
    selectFeature.textContent = 'Select a feature';

    if (features.length !== 0) {

      if (search.value.length === 0) select.add(selectFeature);

      return features.forEach(feature => {

        let option = document.createElement('option');

        option.textContent = feature.querySelector('h2').textContent;
        option.value = feature.querySelector('h2').id;

        select.add(option);
      });
    }
    return select.add(noResults);
  }

  /**
   * Removes all `.highlight` classes from the h2 elements
   * @method removeHighlight
   * @returns {undefined}
   */
  function removeHighlight() {

    let h2s = [...document.querySelectorAll('.feature-block h2')];

    h2s.forEach(h => h.classList.remove('highlight'));
  }

  /**
   * Searches the features for a matching text
   * @param {string} query The string to search the DOM with
   * @returns {method} Adds or removes the `.hide` class
   */
  function searchFeatures(query) {

    let features = [...document.querySelectorAll('.feature-block')];

    features.forEach(feat => {

      query = query.toLowerCase();

      if (!feat.textContent.toLowerCase().includes(query)) {

        return feat.classList.add('hide');
      }

      return feat.classList.remove('hide');
    });

    noResultsCheck(features);
    toggleClearButton();
    listResults();
    updateNavigation(features);
  }

  /**
   * Sets the `.selected` class on a tab
   * @param {object} target The `.tabs` object that was clicked
   * @returns {method}
   */
  function setTabFocus(target) {

    tabs.forEach(tab => tab.classList.remove('selected'));

    return target.classList.add('selected');
  }

  /**
   * Shows the selected tab's content
   * @param {object} target The tab element that was clicked
   * @returns {undefined}
   */
  function showTabContent(target) {

    let tabContents = document.querySelectorAll('.tab-content');
    // Hide everything first
    tabContents.forEach(content => content.classList.add('hide'));
    // Show selected tab-content
    tabContents.forEach(content => {
      target.classList.forEach(targetClass => {
        if (content.classList.contains(targetClass)) {
          content.classList.remove('hide');
        }
      });
    });
  }

  /**
   * Shows/hides the `.clear-search` button
   * @returns {method}
   */
  function toggleClearButton() {

    if (search.value !== '') {

      return clearSearch.classList.remove('hide');
    }
    return clearSearch.classList.add('hide');
  }

  /**
   * Updates the select element to display a ToC of sorts
   * when searching.
   * @param {Array} features Array of all the features
   * @returns {method}
   */
  function updateNavigation(features) {

    let visibleFeatures = features.filter(f => !f.classList.contains('hide')),
        length = visibleFeatures.length;

    select.innerHTML = '';

    populateNavigation(visibleFeatures);

    if (length !== features.length && length !== 1 && length !== 0) {

      select.size = length;
      // wrapped in setTimeout so select element will animate
      return setTimeout(() => {
        select.style.height = length * 33;
      }, 0);
    }

    select.size = 1;
    return setTimeout(() => {
      select.style.height = '35px';
    }, 0);
  }

  /**
   * Adds click event listeners to each `.scroll-target` element
   * which will scroll to the specified feature.
   * @returns {undefined}
   */
  function scrollTargetListeners() {
    document.querySelectorAll('.scroll-target').forEach(f => {
      f.addEventListener('click', () => {
        setTimeout(() => window.scrollTo(window.scrollX, window.scrollY - 80), 0);
      });
    });
  }

  // ======================================================
  // UI Functionality
  // ======================================================

  //  Scroll the page to the selected element
  // ------------------------------------------------------
  select.addEventListener('change', () => {

    removeHighlight();
    addHighlight(select.value);

    location.hash = '#' + select.value;

    if (location.hash) {
      // (-80px to adjust for space up top)
      setTimeout(() => window.scrollTo(window.scrollX, window.scrollY - 80), 0);
    }
  });

  // Searches the features for a string match
  // ------------------------------------------------------
  search.addEventListener('keydown', event => {

    clearTimeout(debounce);

    debounce = setTimeout(() => {
      searchFeatures(event.target.value);
    }, 300);
  });

  // Clear the search input
  // ------------------------------------------------------
  clearSearch.addEventListener('click', event => {

    event.preventDefault();
    clearSearchField();
  });

  // Escape key listener
  // ------------------------------------------------------
  document.addEventListener('keydown', event => {

    if (event.which === 27) {

      event.preventDefault();
      clearSearchField();
    }
  });

  // Tab functionality
  // ------------------------------------------------------
  tabs.forEach(tab => {
    tab.addEventListener('click', event => {

      event.preventDefault();
      setTabFocus(event.target);
      showTabContent(event.target);
    });
  });

  // ======================================================
  // Init / DOM Setup
  // ======================================================

  getVersionAndYear();
  populateNavigation([...document.querySelectorAll('.feature-block')]);

  setTimeout(() => {
    search.focus();
    checkForURLHash();
    getCurrentFeatures();
    getCurrentUpdates();
    getThanks();
    getPreviousFeaturesAndUpdates();
    scrollTargetListeners();
  }, 200);
});

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = {
  current: [{
    version: '2.21.3',
    features: [],
    updates: [{
      name: 'Enhancement',
      description: 'More Dark Theme fixes thanks to ToastyMallows on GitHub!'
    }],
    thanks: ['Thank you TheMightyChew for your generous donation!', 'Huge shoutout to ToastyMallows on GitHub for putting together a fix for the Dark Theme!']
  }],
  previous: [{
    version: '2.21.2',
    features: [],
    updates: [{
      name: 'Bugfix',
      description: 'Fixed an issue where the dark theme would be applied when printing an invoice.'
    }, {
      name: 'Bugfix',
      description: 'Fixed an issue where the currency converter would appear when printing an invoice.'
    }],
    thanks: ['Thank you Collector for your generous donation!']
  }, {
    version: '2.21.1',
    features: [],
    updates: [{
      name: 'Bugfix',
      description: 'Fixed an issue where Release Scanner would not work after clicking on pagination links.'
    }, {
      name: 'Enhancement',
      description: 'Dark Theme updates for the Shipping Policy Editor and Free Shipping banners'
    }],
    thanks: ['Thank you Ian and Alan for their generous donations!']
  }, {
    version: '2.21.0',
    features: [{
      name: 'Open Links In New Tabs',
      description: 'Allows you select which links in various sections of Discogs will open in new tabs.',
      link: '#linksInTabs'
    }],
    updates: [{
      name: 'Enhancement',
      description: 'Tag Seller Reputation will now let you filter sellers based on reputation!'
    }, {
      name: 'Enhancement',
      description: 'The Demand Index feature will now be applied to items in the Marketplace'
    }, {
      name: 'Enhancement',
      description: 'More Dark Theme fixes! Woohoo!'
    }, {
      name: 'Bugfix',
      description: 'Fixed an issue where Release Scanner would not work after clicking on pagination links.'
    }],
    thanks: ['Thank you Mick, Ritesh K, Jason, Cuddly_D, and Ollie S. for their generous donations!']
  }, {
    version: '2.20.0',
    features: [{
      name: 'Filter Prices',
      description: 'Hides all items that are below a minimum value or above a maximum value in the Marketplace.',
      link: '#filterPrices'
    }],
    updates: [{
      name: 'Bug fix',
      description: 'Fixed an issue with Marketplace Highlights always being applied. Fixed an issue where the Filter settings were appearing under all pagination links across the site. Fixed an issue where Filter Prices would not work if Suggested Prices was not enabled.'
    }, {
      name: 'Enhancement',
      description: 'New option for Contextual Menu Searching: rateyourmusic.com.'
    }, {
      name: 'Enhancement',
      description: 'Everlasting Collection will now respect page parameters in the URL.'
    }, {
      name: 'Enhancement',
      description: 'Marketplace Highlights will now be applied to the Orders page!'
    }, {
      name: 'Enhancement',
      description: 'Various Dark Theme fixes! Woohoo!'
    }],
    thanks: ['Thank you to <a href="https://www.discogs.com/user/Mark_Anthony">Mark_Anthony</a> for the shoutout on his <a href="https://www.youtube.com/watch?v=fTvwDiHnPWU">Mark Anthony\'s Music Picks show</a>. Check it out if you are into Electronic music!']
  }, {
    version: '2.19.0',
    features: [],
    updates: [{
      name: 'Enhancement',
      description: 'New option for Contextual Menu Searching: rateyourmusic.com.'
    }],
    thanks: ['Thank you to <a href="https://www.discogs.com/user/Mark_Anthony">Mark_Anthony</a>, <b>Joe Brabant</b>, and <b>Chance Warner</b> for their generous donations!']
  }, {
    version: '2.18.2',
    features: [],
    updates: [{
      name: 'Enhancement',
      description: 'Text Format Shortcuts has a new look - no more garish buttons!'
    }, {
      name: 'Enhancement',
      description: 'A few small Dark Theme fixes - .highlight class color rule, dashboard module header fix, and GDPR cookie consent styles.'
    }],
    thanks: []
  }, {
    version: '2.18.1',
    features: [],
    updates: [{
      name: 'Feature Removal',
      description: 'The "beta" collection app has been removed from Discogs so I\'ve updated the extension to remove the Collection Links In New Tabs feature as well as (hopefully) all references to the "beta" collection.'
    }],
    thanks: ['Thank you to sdsowlsa and Roman G. for buying me a coffee!']
  }, {
    version: '2.18.0',
    features: [{
      name: 'Confirm Before Removing Items',
      description: 'Asks you to confirm that you want to remove an item from your Collection when clicking "Remove" on a Release page.',
      link: '#confirm-before-removing'
    }],
    updates: [{
      name: 'Enhancement',
      description: 'Made the dropshadow color darker on inbox messages when using the Dark Theme.'
    }, {
      name: 'Enhancement',
      description: 'Disabled images will be more visible in the Release History when using the Dark Theme.'
    }],
    thanks: ['Thank you to Transferwise for buying me a coffee!']
  }, {
    version: '2.17.1',
    features: [],
    updates: [{
      name: 'Enhancement',
      description: 'Fixed an issue where Collection Links In New Tabs did not always open links in new tabs.'
    }],
    thanks: ['Thanks again to <span class="mint">nmussy</span> for opening up some issues on GitHub!']
  }, {
    version: '2.17.0',
    features: [{
      name: 'Filter Unavailable Items',
      description: 'Hide all items in the Marketplace if they are unavailable in your country.',
      link: '#filter-unavailable'
    }],
    updates: [{
      name: 'Enhancement',
      description: 'Random Item Button has a new icon and you can now right-click on it and open the random page in a new tab/window!'
    }],
    thanks: ['Thanks again to <span class="mint">nmussy</span> for opening up some issues on GitHub!']
  }, {
    version: '2.16.0',
    features: [{
      name: 'Show Relative Last Sold Dates',
      description: 'See the relative time an item was last sold on the Release page.',
      link: '#relative-sold-date'
    }],
    updates: [{
      name: 'Enhancement',
      description: 'Functional testing with Travis CI and Puppeteer! This means Discogs Enhancer will ship with less bugs!'
    }, {
      name: 'Enhancement',
      description: 'Extension support for Korean language.'
    }, {
      name: 'Enhancement',
      description: 'Fixed an issue where hidden sellers were not actually hidden on previous/next page clicks.'
    }, {
      name: 'Bug fix',
      description: 'Fixed an issue where block buyer shortcuts would not correctly parse some usernames.'
    }],
    thanks: []
  }, {
    version: '2.15.0',
    features: [{
      name: 'Block Buyer Shortcuts',
      description: 'Adds a "Block Buyer" button to the order invoice page that allows you to block the buyer directly.',
      link: '#blockBuyers'
    }],
    updates: [{
      name: 'Show Actual Dates',
      description: 'Show Actual Dates will now only show the relative date when you mouseover it (no more clicking to see it).'
    }, {
      name: 'Suggested Prices',
      description: 'Suggested Prices will handle server errors better now.'
    }, {
      name: 'Show Actual Dates',
      description: 'Show Actual Dates will now show the relative date when you mouse over it (no more clicking)'
    }, {
      name: 'Bug Fix',
      description: 'Page loads in the Marketplace should be faster if you are NOT using Everlasting Marketplace.'
    }, {
      name: 'Enhancement',
      description: 'Seller icons will now show a tooltip when you mouse over them in the Marketplace.'
    }],
    thanks: ['Thank you to <span class="mint">Andy G.</span> for his donation!']
  }, {
    version: '2.14.0',
    features: [{
      name: 'Quick Search',
      description: 'Lets you search for the release on Google in a new tab by clicking the release\'s title.',
      link: '#quick-search'
    }],
    updates: [{
      name: 'Show Sellers In Cart',
      description: 'Show Sellers In Cart will now check your cart every 15 minutes. This will help keep your cart counts in sync if you use this extension on multiple computers.'
    }, {
      name: 'Enhancement',
      description: 'Buyer Feedback Notifications will now have a blue icon.'
    }]
  }, {
    version: '2.13.0',
    features: [{
      name: 'Tweak Discriminators',
      description: 'Allows you to tweak the way Artist/Label discriminators are displayed. Discriminators are the numbers in parentheses that appear next to artists/labels that have duplicate names.',
      link: '#tweak-discrims'
    }, {
      name: 'List Items In New Tabs',
      description: 'Opens links in new tabs/windows when clicking on links in user lists. Helpful if you like to explore other user\'s lists and don\'t want to constantly click the back button (or you\'re prone to rabbit holing, like me, and lose track of the list you were exploring.)',
      link: '#listsInTabs'
    }],
    updates: [{
      name: 'Enhancement',
      description: '"View Release Page" links in the Marketplace open in new tabs.'
    }, {
      name: 'Enhancement',
      description: 'Added feature support for Russian and Brazilian Portuguese languages.'
    }]
  }, {
    version: '2.12.0',
    features: [{
      name: 'Show Sellers In Cart',
      description: 'Adds a shopping cart icon next to any seller\'s name in the Marketplace when you have items of theirs in your cart.',
      link: '#show-sellers-in-cart'
    }],
    updates: [{
      name: 'Enhancement',
      description: '"Discogs" will now be the first item on the list when using Contextual Menu Searching.'
    }, {
      name: 'Enhancement',
      description: 'Fixed an issue with horizontal scrollbars on Windows.'
    }, {
      name: 'Enhancement',
      description: 'Fixed an issue with the currency converter\'s no results display.'
    }]
  }, {
    version: '2.11.0',
    features: [{
      name: 'Inventory Ratings',
      description: 'Marks an item\'s rating in red if it is above the value set in the option when viewing a seller\'s inventory.',
      link: '#inventory-ratings'
    }],
    updates: [{
      name: 'Bug fix',
      description: 'Fixed missing icons for Seller Reputation, Blocked Sellers, and Favorite Sellers.'
    }, {
      name: 'Bug fix',
      description: 'Fixed an issue with Blocked/Favorite sellers where seller names might be incorrectly matched.'
    }, {
      name: 'Enhancement',
      description: 'Multiple icons can now be shown per seller.'
    }]
  }]
};

/***/ })

/******/ });