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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
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

resourceLibrary.ready(() => {

  let visible = false,
      loc = window.location.href,
      modal = `<div id="optionsModal" class="options-modal" style="display: none;">
                <div class="options-modal-content">
                  <span class="options-close">x</span>
                  <h3>Super Secret Options Menu</h3>
                  <ul class="options">
                    <li>
                      <input id="colorize" name="colorize" type="checkbox" value="colorize" />
                      <label for="colorize">Colorize Prices</label>
                    </li>
                    <li>
                      <input id="debug" name="debug" type="checkbox" value="debug" />
                      <label for="debug">Debug Messages</label>
                    </li>
                    <li>
                      <input id="comments" name="comments" type="checkbox" value="comments" />
                      <label for="comments">Highlight Comments</label>
                    </li>
                    <li>
                      <input id="unittests" name="unittests" type="checkbox" value="unittests" />
                      <label for="unittests">Unit Tests</label>
                    </li>
                    <li>
                      <label for="threshold" id="thresholdLabel">Threshold:</label>
                      <input id="threshold" name="threshold" type="number" value="" max="10" min="0"/>
                    </li>
                    <li>
                      <label for="quicksearch" id="quickSearchLabel">Quick Search:</label>
                      <input id="quicksearch" name="quicksearch" />
                    </li>
                  </ul>
                  <a href="#" class="options-save button button-green" id="saveOptions">Save options &amp; refresh</a>
                </div>
              </div>`;

  // Keyboard Shortcut
  document.addEventListener('keyup', event => {

    let close = document.querySelector('.options-close'),
        modalElem = document.querySelector('.options-modal'),
        save = document.querySelector('.options-save');

    // Alt + Ctrl + 7
    if (event.altKey && event.ctrlKey && event.which === 55) {

      if (!visible) {

        visible = true;
        modalElem.style = 'display:block;';
        resourceLibrary.options.getOptions();

        // Close it
        close.addEventListener('click', () => {

          modalElem.style = 'display: none;';
          visible = false;
        });

        // Save it
        save.addEventListener('click', () => resourceLibrary.options.saveOptions());
      }

      return false;
    }
  });

  // The options form screws with the checkbox count on the collection page
  // so I'm not appending it if a user is currently on the collection page.
  if (!loc.includes('/collection')) {

    document.body.insertAdjacentHTML('beforeend', modal);

    resourceLibrary.options.getOptions();
  }
});

/***/ })

/******/ });