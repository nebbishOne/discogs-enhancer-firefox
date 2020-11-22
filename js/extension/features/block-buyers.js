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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
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
  // ========================================================
  // Functions
  // ========================================================
  /**
   * Gets the `Buyers` form data from the seller settings page
   * @param {String} buyer - The buyer to block
   * @returns {Object}
   */
  let getBuyersForm = (() => {
    var _ref = _asyncToGenerator(function* (buyer) {

      try {
        let url = '/settings/seller/',
            response = yield fetch(url),
            data = yield response.text(),
            div = document.createElement('div');

        div.innerHTML = data;

        return extractFormData(div, buyer);
      } catch (err) {
        errorMsg();
      }
    });

    return function getBuyersForm(_x) {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * Extracts the necessary data from the seller form.
   * @param {HTMLElement} div - The element to pull the data from
   * @param {String} buyer - The buyer's username to block
   * @returns {Object}
   */


  /**
   * Posts the blocked user data to Discogs
   * @param {String} buyer - The name of the buyer to block
   * @returns {HTMLElement} - Success or Error user notification
   */
  let blockBuyer = (() => {
    var _ref2 = _asyncToGenerator(function* (buyer) {

      let params = yield getBuyersForm(buyer),
          query = `fpt_token=${params.fpt}&min_buyer_rating=${params.mbr}&blocked=${params.buyers}`,
          url = '/settings/seller/update_buyer_criteria',
          headers = { 'content-type': 'application/x-www-form-urlencoded' },
          initObj = {
        body: query,
        credentials: 'include',
        headers: headers,
        method: 'POST'
      },
          response = yield fetch(url, initObj);

      if (response.ok) {
        return successMsg(buyer);
      }
      return errorMsg();
    });

    return function blockBuyer(_x2) {
      return _ref2.apply(this, arguments);
    };
  })();

  /**
   * Inject the block buyer button into the page
   * @returns {undefined}
   */


  function extractFormData(div, buyer) {

    let fp_token = div.querySelector('#fp_token').value || null,
        min_buyer_rating = div.querySelector('#min_buyer_rating').value || '',
        blocked = div.querySelector('#blocked').value,
        list = blocked.match(/([-.\w]{3,50})/g) || [],
        newList = [];

    if (!fp_token) throw new Error('fp_token not found.');

    list.push(buyer);
    newList = [...new Set(list)].join('\n');

    return {
      token: fp_token,
      mbr: min_buyer_rating,
      buyers: newList
    };
  }function setup() {

    let username = '.order-user-details a[href*="/user/"]',
        buyerInfo = document.querySelector(username).closest('.box-card'),
        button = document.createElement('button'),
        header = buyerInfo.querySelector('.box-card-header');

    button.classList = 'button button-small button-red de-block-buyer';
    button.textContent = 'Block Buyer';

    header.insertAdjacentElement('beforeend', button);
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.querySelector('h3.no_vertical').style.display = 'inline-block';
  }

  /**
   * Click event listener
   * @returns {undefined}
   */
  function addBlockListener() {
    document.querySelector('.de-block-buyer').addEventListener('click', () => {
      let name = document.querySelector('.order-user-details a').textContent,
          btn = document.querySelector('.de-block-buyer');

      btn.innerHTML = '<i class="icon icon-spinner icon-spin" style="color: #999 !important"></i> Blocking...';
      btn.disabled = true;
      blockBuyer(name);
    });
  }

  /**
   * Display a success message to the user.
   * @returns {undefined}
   */
  function successMsg(buyer) {
    let banner,
        btn = document.querySelector('.de-block-buyer');

    btn.innerHTML = 'Blocked!';
    btn.disabled = true;
    banner = `<div class="alert-message alert-message-js alert-message-accept alert-message-top">
                <div class="alert-message-content" style="max-width: none;">
                  <i class="icon icon-check-circle alert-message-icon"></i>
                  <span class="alert-message-text">
                    ${buyer} has been blocked.
                    <a href="/settings/seller/#seller-buyers-form">Click here to view your blocked buyers.</a>
                  </span>
                </div>
              </div>`;
    document.querySelector('#site_header_wrap').insertAdjacentHTML('beforeend', banner);
  }

  /**
   * Display an error message to the user.
   * @returns {undefined}
   */
  function errorMsg() {
    let banner = `<div class="alert-message alert-message-js alert-message-error alert-message-top">
                    <div class="alert-message-content" style="max-width: none;">
                      <i class="icon icon-exclamation-triangle alert-message-icon"></i>
                      <span class="alert-message-text">
                        Oops! Something went wrong. Please make sure you are logged in.
                      </span>
                    </div>
                  </div>`;
    document.querySelector('#site_header_wrap').insertAdjacentHTML('beforeend', banner);
  }

  // ========================================================
  // DOM Setup
  // ========================================================
  let orders = '.order-page-header a[href*="/sell/orders"]';

  if (rl.pageIs('order') && document.querySelector(orders)) {
    setup();
    addBlockListener();
  }
});
/*
// ========================================================
   180 degrees, but not that hot
   So whether or not you find the answer is really not the plot
   Because giving is receiving and seeing is believing
   And the solar system rotates so harmonious and even
   It's perfectly balanced...
   https://www.discogs.com/Aceyalone-A-Book-Of-Human-Language/master/19149
// ========================================================
 */

/***/ })

/******/ });