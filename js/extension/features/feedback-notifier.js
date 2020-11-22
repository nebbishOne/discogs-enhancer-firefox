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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
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
 * This will monitor the user's Buyer and Seller feedback numbers
 * and append badges to the navbar when any new feedback has been
 * detected.
 */
rl.ready(() => {

  /**
   * Creates the buyer/seller objects when none exist.
   * @returns {function}
   */
  let createBuyerSellerObjs = (() => {
    var _ref = _asyncToGenerator(function* () {

      if (debug) {

        console.log(' ');
        console.log(' *** initializing base object values *** ');
        console.time('createBuyerSellerObjs');
      }

      let div = yield fetchBuyerSellerTotals(),
          buyerTotal = getTotalCount(div, 'buyer'),
          sellerTotal = getTotalCount(div, 'seller'),
          response = { seller: sellerTotal, buyer: buyerTotal };

      if (debug) {
        console.timeEnd('createBuyerSellerObjs');
      }

      resetStats(response);
      getStatsFor('seller');
      getStatsFor('buyer');
    });

    return function createBuyerSellerObjs() {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * Fetches the buyer and seller total numbers
   * from a user's profile.
   * @returns {object}
   */


  let fetchBuyerSellerTotals = (() => {
    var _ref2 = _asyncToGenerator(function* () {

      let url = `https://www.discogs.com/user/${user}`,
          response = yield fetch(url),
          data = yield response.text(),
          div = document.createElement('div');

      div.innerHTML = data;
      return div;
    });

    return function fetchBuyerSellerTotals() {
      return _ref2.apply(this, arguments);
    };
  })();

  /**
   * Fetches the most recent Pos, Neu, and Neg numbers from a
   * user's profile.
   * @param {string} type Buyer or seller
   * @returns {object}
   */


  let fetchFeedbackData = (() => {
    var _ref3 = _asyncToGenerator(function* (type) {

      let url = `https://www.discogs.com/sell/${type}_feedback/${user}`,
          response = yield fetch(url),
          data = yield response.text(),
          div = document.createElement('div');

      div.innerHTML = data;
      return div;
    });

    return function fetchFeedbackData(_x) {
      return _ref3.apply(this, arguments);
    };
  })();

  /**
   * Finds the differences between old/new stats.
   * @param {string} type Either 'Negative' or 'Neutral' used for debugging
   * @param {array} oldStat Previous value
   * @param {array} newStat Current value
   * @returns {number}
   */


  /**
   * Sets the object with the most recent stats
   * from the profile page when feedback-notifier is
   * first run.
   * @param {string} type Either 'buyer' or 'seller'
   * @returns {undefined}
   */
  let getStatsFor = (() => {
    var _ref4 = _asyncToGenerator(function* (type) {

      /* used to report time elapsed for debugging */
      let randomTime = Math.random();

      feedback = rl.getPreference('feedback');

      if (debug) {

        console.log(' ');
        console.log(' *** updating ' + type + ' object stats *** ');
        console.time(randomTime);
      }

      let data = yield fetchFeedbackData(type),
          obj = feedback[type],
          pos = getTabCount(data, 0),
          neu = getTabCount(data, 1),
          neg = getTabCount(data, 2);

      /* Assign new values to obj */
      obj.negCount = neg;
      obj.neuCount = neu;
      obj.posCount = pos;
      obj.hasViewed = true;

      /* Save obj updates */
      feedback[type] = obj;

      /* Set timestamp when checked */
      feedback.lastChecked = timeStamp;

      rl.setPreference('feedback', feedback);

      if (debug) {

        console.log(obj);
        console.timeEnd(randomTime);
      }
    });

    return function getStatsFor(_x2) {
      return _ref4.apply(this, arguments);
    };
  })();

  /**
   * Gets the number from the specified feedback tab on
   * a user's profile.
   * @param {object} data The element to pull the total from
   * @param {integer} index The index position of the element
   * @returns {integer}
   */


  /**
   * Get's the user's feedback numbers from their profile,
   * parses the HTML returned in the response for the Positive,
   * Neutral and Negative totals and then appends those numbers
   * (if any) to the nav bar.
   * @param {string} type Either `buyer` or `seller`
   * @param {number} gTotal Total number of all transactions
   * @returns {function}
   */
  let getUpdates = (() => {
    var _ref5 = _asyncToGenerator(function* (type, gTotal) {

      let data, obj;

      feedback = rl.getPreference('feedback');

      obj = feedback[type];

      if (debug) {

        console.log(' *** Getting updates for ' + type + ' *** ');
        console.time('getUpdates');
      }

      data = yield fetchFeedbackData(type);
      parseFeedbackData(data, obj, type, gTotal);
      return appendBadge(type);
    });

    return function getUpdates(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  })();

  /**
   * Parses the DOM elements passed in for feedback numbers from
   * the user's profile. As an aside, I tried writing this using
   * a `forEach` loop with computed properties. It was way shorter
   * but it sucked to read so I'm sticking with this verbose
   * version because it's much easier to understand.
   * @param {object} data The feedback elements from the user's page
   * @param {object} obj An object used to store the new data to be written into localStorage
   * @param {string} type Buyer or seller
   * @param {string} gTotal Total number of feedbacks received
   * @returns {undefined}
   */


  /**
   * Checks the user's profile for changes to their total number of
   * feedbacks received and calls
   * @returns {undefined}
   */
  let pollForChanges = (() => {
    var _ref6 = _asyncToGenerator(function* () {

      let div = yield fetchBuyerSellerTotals(),
          buyerTotal = getTotalCount(div, 'buyer'),
          sellerTotal = getTotalCount(div, 'seller');

      /* Set timestamp when checked */
      feedback.lastChecked = timeStamp;

      rl.setPreference('feedback', feedback);

      if (debug) {

        console.log(' ');
        console.log(' *** Polling for changes *** ');
        console.log('Buyer count: ', buyerTotal, 'Seller count: ', sellerTotal);
        console.log('%cNext check-in time: ', 'color: limegreen', new Date(feedback.lastChecked + waitTime).toLocaleTimeString());
        console.timeEnd('poll-time');
      }

      // Check Seller stats
      if (sellerTotal > feedback.seller.gTotal) {

        if (debug) {

          console.log(' ');
          console.log(' *** Changes in Seller stats detected *** ');
          console.log('difference of: ', sellerTotal - feedback.seller.gTotal);
          console.log(feedback.seller);
        }

        appendPreloader('seller_');
        getUpdates('seller', sellerTotal);
      }

      // Check buyer stats
      if (buyerTotal > feedback.buyer.gTotal) {

        if (debug) {

          console.log(' ');
          console.log(' *** Changes in Buyer stats detected *** ');
          console.log('difference of: ', buyerTotal - feedback.buyer.gTotal);
          console.log(feedback.buyer);
        }

        appendPreloader('buyer_');
        getUpdates('buyer', buyerTotal);
      }
    });

    return function pollForChanges() {
      return _ref6.apply(this, arguments);
    };
  })();

  /**
   * Resets the objects and adds the most recent buyer/seller grand total stats
   * @param {object} obj {seller: seller, buyer: buyer}
   * @returns {method}
   */


  let debug = rl.options.debug(),
      feedback = rl.getPreference('feedback') || null,
      language = rl.language(),
      timeStamp = new Date().getTime(),
      user = rl.username() || null,

  // user = 'recordsale-de', /* used for testing */
  waitTime = 1000 * 60 * 2; // 2 mins
  if (!user) return;
  // ========================================================
  // Functions (Alphabetical)
  // ========================================================

  /**
   * Appends badges to menu bar
   * @param {string} type Either buyer or seller
   * @returns {function}
   */
  function appendBadge(type) {

    let obj = rl.getPreference('feedback')[type],
        existing = !obj.hasViewed,
        badge,
        id,
        neg,
        neu,
        pos;

    id = type === 'seller' ? 'de-seller-feedback' : 'de-buyer-feedback';

    if (existing && debug) {

      console.log(' ');
      console.log(' *** Existing notifications for: ' + type + ' *** ');
    }

    pos = obj.posDiff;
    neu = obj.neuDiff;
    neg = obj.negDiff;

    /* Don't show a 0 value in notificaiton */
    pos = pos > 0 ? pos : '';
    neu = neu > 0 ? neu : '';
    neg = neg > 0 ? neg : '';

    badge = `<li style="position: relative;">
              <span id="${id}">
                <a class="nav_group_control ${id}">
                  <span class="skittle skittle_collection" style="cursor: pointer; pointer-events: none;">
                    <span class="count" style="color: white !important;"></span>
                  </span>
                </a>
                <ul class="feedback-chart ${type}">
                  <li class="pos-reviews" alt="View Positive reviews">
                    <h3 class="pos">Positive</h3>
                    <h2 class="pos-count">${pos}</h2>
                  </li>
                  <li class="neu-reviews" alt="View Neutral reviews">
                    <h3 class="neu">Neutral</h3>
                    <h2 class="neu-count">${neu}</h2>
                  </li>
                  <li class="neg-reviews last" alt="View negative reviews">
                    <h3 class="neg">Negative</h3>
                    <h2 class="neg-count">${neg}</h2>
                  </li>
                </ul>
              </span>
            </li>`;

    /* Remove preloader */
    if (document.querySelector(`.${type}_feedbackLoader`)) {
      document.querySelector(`.${type}_feedbackLoader`).remove();
    }

    document.querySelector('#activity_menu').insertAdjacentHTML('beforeend', badge);

    return bindUi();
  }

  /**
   * Appends the badge preloader to the navbar.
   * @param {string} type buyer or seller
   * @returns {method}
   */
  function appendPreloader(type) {

    let preloader = `<li style="position: relative;" class="${type}feedbackLoader">
                        <i class="icon icon-spinner icon-spin nav_group_control"></i>
                     </li>`;
    // remove previous badge if it exists
    if (document.querySelector(`#de-${type}-feedback`)) {
      document.querySelector(`#de-${type}-feedback`).parentElement.remove();
    }

    return document.querySelector('#activity_menu').insertAdjacentHTML('beforeend', preloader);
  }

  /**
   * Attaches event listeners to the buyer and seller badges.
   * @returns {undefined}
   */
  function bindUi() {
    // --------------------------------------------------------
    // Clear notifications and save "viewed" states
    // --------------------------------------------------------
    [...document.querySelectorAll('.de-buyer-feedback, .de-seller-feedback')].forEach(elem => {

      elem.addEventListener('click', ({ target }) => {

        let elemClass = target.className,
            type,
            obj;

        type = elemClass === 'nav_group_control de-buyer-feedback' ? 'buyer' : 'seller';

        obj = rl.getPreference('feedback')[type];

        clearNotification(type, obj);

        target.parentElement.style.display = 'none';
      });
    });
    // --------------------------------------------------------
    // Menu interactions
    // --------------------------------------------------------
    [...document.querySelectorAll('.pos-reviews, .neu-reviews, .neg-reviews')].forEach(elem => {

      elem.addEventListener('click', ({ target }) => {

        let elem = target.className,
            id = target.parentElement.parentElement.id,
            obj,
            queryParam,
            type;

        type = id === 'de-seller-feedback' ? 'seller' : 'buyer';

        obj = rl.getPreference('feedback')[type];

        switch (elem) {

          case 'pos-reviews':
            queryParam = '?show=Positive';
            break;

          case 'neu-reviews':
            queryParam = '?show=Neutral';
            break;

          case 'neg-reviews last':
            queryParam = '?show=Negative';
            break;
        }

        clearNotification(type, obj);

        /*
          The href is declared here because I need to be able to update
          the object props before the transition. Don't try to pass them into the
          appendBadge markup. It won't work.
        */
        window.location.href = `https://www.discogs.com/${language}sell/${type}_feedback/${user}${queryParam}`;
      });
    });
  }

  /**
   * Updates the `buyer`/`seller` objects hasViewed prop
   * after user clicks on notifications
   * @param {string} type Either buyer or seller
   * @param {object} obj The object written to localStorage
   * @returns {method}
   */
  function clearNotification(type, obj) {

    feedback = rl.getPreference('feedback');

    /* update obj props. */
    obj.posDiff = 0;
    obj.neuDiff = 0;
    obj.negDiff = 0;
    obj.hasViewed = true;
    // Note: obj.gTotal is set during 'poll for changes' cycle

    /* save updated obj */
    feedback[type] = obj;

    return rl.setPreference('feedback', feedback);
  }function findStatsShift(type, oldStat, newStat) {

    let shift = newStat - oldStat;

    if (oldStat === newStat || shift < 0) {

      /* No changes were found */
      if (debug) {

        console.log('No changes in ' + type + ' stats');
        console.log('Stats for:', type, 'old:', oldStat, 'new:', newStat);
      }
      return 0;
    }
    return shift;
  }function getTabCount(data, index) {

    let sel = '.tab_menu .menu-item .facet_count';

    return Number(data.querySelectorAll(sel)[index].textContent.trim().replace(/,/g, ''));
  }

  /**
   * Gets the total feedback count from the user's profile
   * @param {object} div The HTML element to pull the total from
   * @param {string} type Buyer or seller
   * @returns {integer}
   */
  function getTotalCount(div, type) {

    let sel = '#page_aside .list_no_style.user_marketplace_rating ',
        typeSel = `a[href*="${type}_feedback"]`;

    if (div.querySelector(sel + typeSel)) {
      return Number(div.querySelector(sel + typeSel).textContent.trim().replace(/,/g, ''));
    }
  }function parseFeedbackData(data, obj, type, gTotal) {

    let pos = getTabCount(data, 0),
        neu = getTabCount(data, 1),
        neg = getTabCount(data, 2),
        negAnswer,
        neuAnswer,
        posAnswer,
        newStats,
        oldStats;

    /* Our stats objects */
    newStats = {
      posCount: pos,
      neuCount: neu,
      negCount: neg
    };

    oldStats = {
      posCount: obj.posCount,
      neuCount: obj.neuCount,
      negCount: obj.negCount
    };

    negAnswer = findStatsShift('Negative', oldStats.negCount, newStats.negCount);
    neuAnswer = findStatsShift('Neutral', oldStats.neuCount, newStats.neuCount);
    posAnswer = findStatsShift('Positive', oldStats.posCount, newStats.posCount);

    /* Assign new diff values to obj for reference */
    obj.posDiff = obj.posDiff > 0 ? obj.posDiff + posAnswer : posAnswer;
    obj.neuDiff = obj.neuDiff > 0 ? obj.neuDiff + neuAnswer : neuAnswer;
    obj.negDiff = obj.negDiff > 0 ? obj.negDiff + negAnswer : negAnswer;
    obj.hasViewed = false;
    obj.gTotal = gTotal;

    /* Update feedback[type] with new stats */
    obj.posCount = pos;
    obj.neuCount = neu;
    obj.negCount = neg;

    feedback[type] = obj;

    /* Set timestamp when checked */
    feedback.lastChecked = timeStamp;

    /* Save our object with the new stats/notification totals */
    rl.setPreference('feedback', feedback);

    if (debug) {

      console.log(' ');
      console.log(' *** Got ' + type + ' Updates *** ');
      console.log('pos: ', posAnswer, 'neu: ', neuAnswer, 'neg: ', negAnswer);
      console.log('Previous stats:');
      console.log('pos:', obj.posCount, 'neu:', obj.neuCount, 'neg:', obj.negCount);
      console.log(type + ' obj: ', feedback[type]);
      console.log('Results from new stats', 'pos', posAnswer, 'neu', neuAnswer, 'neg', negAnswer);
      console.timeEnd('getUpdates');
    }
  }function resetStats(obj) {

    let buyerObj = {
      posCount: 0,
      posDiff: 0,
      neuCount: 0,
      neuDiff: 0,
      negCount: 0,
      negDiff: 0,
      gTotal: obj.buyer,
      hasViewed: true
    },
        sellerObj = {
      posCount: 0,
      posDiff: 0,
      neuCount: 0,
      neuDiff: 0,
      negCount: 0,
      negDiff: 0,
      gTotal: obj.seller,
      hasViewed: true
    };

    /* Get current object state */
    feedback = rl.getPreference('feedback') || {};

    if (debug) {

      console.log(' *** Resetting Object Values *** ');
      console.log('Reset sellerObj: ');
      console.log(sellerObj);
      console.log(' ');
      console.log('Reset buyerObj: ');
      console.log(buyerObj);
      console.time('resetStats');
    }

    feedback.seller = sellerObj;
    feedback.buyer = buyerObj;

    /* Save current state */
    rl.setPreference('feedback', feedback);

    if (debug) {

      console.log('Done resetting buyer/seller objects.');
      console.timeEnd('resetStats');
    }
  }

  // ========================================================
  // DOM Setup/Init
  // ========================================================

  /* Set language for URL formation */
  language = language === 'en' ? '' : language + '/';

  /* Create our object if it does not exist */
  if (!rl.getPreference('feedback')) {

    feedback = {
      buyer: null,
      seller: null,
      lastChecked: timeStamp
    };

    /* Save it... */
    rl.setPreference('feedback', feedback);
  }

  /* Create the `buyer` / `seller` objects; */
  if (!feedback.buyer || !feedback.seller) {
    return createBuyerSellerObjs();
  }

  /* Append notifictions if they are unread. */
  if (!feedback.seller.hasViewed) {
    appendBadge('seller');
  }

  if (!feedback.buyer.hasViewed) {
    appendBadge('buyer');
  }

  // ========================================================
  // Poll for changes
  // ========================================================

  feedback = rl.getPreference('feedback');

  /* If it's been longer than the `waitTime` */
  if (timeStamp > feedback.lastChecked + waitTime) {

    if (debug) {
      console.time('poll-time');
    }

    pollForChanges();
  }
});

/***/ })

/******/ });