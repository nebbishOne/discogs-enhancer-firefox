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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
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
 * This will propmt the user to confirm that they would
 * like to remove the item from their collection before
 * the request to remove it is sent.
 */

rl.ready(() => {

  /**
   * Removes an item from the user's collection
   * @param {Object} event - The event object
   * @returns {undefined}
   */
  let removeFromCollection = (() => {
    var _ref = _asyncToGenerator(function* (event) {
      let block = event.target.closest('.cw_block_collection'),
          url = `/_rest/collection/${block.dataset.id}`,
          headers = { 'content-type': 'application/x-www-form-urlencoded' },
          initObj = {
        credentials: 'include',
        headers: headers,
        method: 'DELETE'
      },
          response = yield fetch(url, initObj);

      event.target.closest('.cw_block_remove.rotate-in').innerHTML = 'Removing...';

      if (response.ok) {
        block.remove();
      }
    });

    return function removeFromCollection(_x) {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * Hides the confirm prompt and unhides the Remove anchor
   * @returns {undefined}
   */


  // ========================================================
  // Functions
  // ========================================================

  /**
   * Adds event listener functions to the `.cw_block_remove`
   * elements
   * @returns {undefined}
   */
  function addUIListeners() {
    document.querySelectorAll('.de-remove-block').forEach(block => {
      block.removeEventListener('mousedown', handleRemoveClicks);
      block.addEventListener('mousedown', handleRemoveClicks);
    });
  }

  /**
   * Asks the user if they are sure they want to remove the item
   * from their collection
   * @param {Object} event - The event object
   * @returns {Boolean}
   */
  function handleRemoveClicks(event) {
    event.preventDefault();
    showConfirmPrompt(event);
  }

  /**
   * Creates and shows the confirmation prompt
   * @returns {undefined}
   */
  function showConfirmPrompt(event) {

    let span = createConfirmPrompt(),
        collectionBlock = event.target.closest('.cw_block.cw_block_collection'),
        removeLink = event.target,
        timestamp = collectionBlock.querySelector('.cw_block_timestamp span') || collectionBlock.querySelector('.cw_block_timestamp');

    removeLink.classList.add('rotate-out');
    timestamp.classList.add('rotate-out');

    setTimeout(() => {
      collectionBlock.insertAdjacentElement('afterbegin', span);

      removeLink.classList.add('hide');
      timestamp.classList.add('hide');

      removeLink.classList.remove('rotate-out');

      collectionBlock.querySelector('.de-remove-no').addEventListener('click', event => {
        hideConfirmPrompt(event);
        timestamp.classList.remove('rotate-out');
      });

      collectionBlock.querySelector('.de-remove-yes').addEventListener('click', event => {
        event.preventDefault();
        removeFromCollection(event);
      });
    }, 80);
  }

  /**
   * Creates the confirm prompt markup
   * @returns {HTMLElement}
   */
  function createConfirmPrompt() {
    let span = document.createElement('span'),
        remove = document.createElement('span'),
        yes = document.createElement('a'),
        slash = document.createElement('span'),
        no = document.createElement('a');

    remove.textContent = 'Are you sure? ';
    yes.textContent = 'Yes';
    slash.textContent = ' / ';
    no.textContent = 'No';

    span.className = 'cw_block_remove rotate-in';
    yes.className = 'de-remove-yes';
    no.className = 'de-remove-no';

    span.appendChild(remove);
    span.appendChild(yes);
    span.appendChild(slash);
    span.appendChild(no);

    return span;
  }function hideConfirmPrompt(event) {

    let collectionBlock = event.target.closest('.cw_block.cw_block_collection'),
        prompt = collectionBlock.querySelector('.cw_block_remove.rotate-in'),
        removeLink = collectionBlock.querySelector('.de-remove-block'),
        timestamp = collectionBlock.querySelector('.cw_block_timestamp span');

    prompt.classList.add('rotate-out');

    setTimeout(() => {
      prompt.remove();
      removeLink.classList.remove('hide');
      removeLink.classList.add('rotate-in');
    }, 100);

    setTimeout(() => {
      timestamp.classList.remove('hide');
      timestamp.classList.add('rotate-in');
    }, 150);
  }

  /**
   * Deletes the original "Remove" link from the DOM
   * and replaces it with an identical element so that
   * any previous eventlisteners will no longer be
   * triggered.
   * @returns {Promise}
   */
  function deleteOriginalRemoveLink() {
    return new Promise(resolve => {

      let removeText = document.querySelector('.cw_block_remove.remove_from_collection').textContent;

      document.querySelectorAll('.cw_block_remove.remove_from_collection').forEach(rem => {
        rem.remove();
      });

      document.querySelectorAll('.cw_block.cw_block_collection').forEach(block => {
        let a = document.createElement('a');
        a.textContent = removeText;
        a.classList = 'de-remove-block';

        block.insertAdjacentElement('afterbegin', a);
      });
      return resolve();
    });
  }

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
      .de-remove-block {
        float: right;
        font-size: 11px;
        padding-top: 2px;
        display: block;
      }

      .hide {
        display: none !important;
      }

      .rotate-in {
        animation: rotateIn .1s ease-out;
      }

      .rotate-out {
        animation: rotateOut .1s ease-out;
      }

      @keyframes rotateOut {
        0% { transform: rotateX(0deg); }
        100% { transform: rotateX(90deg); }
      }

      @keyframes rotateIn {
        0% { transform: rotateX(90deg); }
        100% { transform: rotateX(0deg); }
      }
  `;

  // ========================================================
  // DOM Setup
  // ========================================================
  if (rl.pageIs('release') && document.querySelector('.cw_block.cw_block_collection')) {

    rl.attachCss('random-item', rules);
    deleteOriginalRemoveLink().then(addUIListeners);
  }
});

/***/ })

/******/ });