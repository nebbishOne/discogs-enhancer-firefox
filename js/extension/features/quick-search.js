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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * --------------------------------------------------------
 * Lets you search for the release on Google in a new tab
 * by clicking the release's title.
 * --------------------------------------------------------
 */

rl.ready(() => {

  let additionalText = rl.options.quicksearch(),
      re,
      shouldRun = false,
      title = document.title;

  // Master release pages
  // ------------------------------------------------------
  if (rl.pageIs('master')) {
    // Match patterns:
    // Lofthouse | Releases, Reviews, Credits | Discogs
    re = /(\|+.*)/g;
    shouldRun = true;
  }

  // Individual release pages
  // ------------------------------------------------------
  if (rl.pageIs('release') && rl.pageIsNot('reviews', 'videos', 'edit', 'stats', 'update')) {
    // Match patterns:
    // Tissu - Unmanned Vehicle (Vinyl, UK, 2015) For Sale | Discogs
    re = /(?:.(?!\(.+\).+\| Discogs))+$/g;
    shouldRun = true;
  }

  // Details pages
  // ------------------------------------------------------
  if (rl.pageIs('sellItem')) {
    // Match patterns:
    // Tissu - Unmanned Vehicle: 12" For Sale | Discogs
    additionalText = ` ${additionalText}`;
    re = /(?:.(?!\:.+\| Discogs))+$/g;
    shouldRun = true;
  }

  if (!shouldRun) return;

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
      .de-one-click {
        cursor: pointer;
      }
      .de-one-click:hover {
        text-decoration: underline;
      }
      .de-external {
        color: #03b;
        font-size: 1rem;
        margin-left: 0.5rem;
        opacity: 0;
        position: absolute;
      }
      .de-one-click:hover + .de-external {
        opacity: 1;
        text-decoration: none;
      }
    `;

  // ========================================================
  // DOM Setup
  // ========================================================
  let i = document.createElement('i'),
      query = title.replace(re, ''),
      releaseTitle = document.querySelector('#profile_title span');

  // DOM manipulation
  i.classList = 'icon icon-external-link de-external';
  releaseTitle.nextElementSibling.classList = 'de-one-click';
  releaseTitle.nextElementSibling.insertAdjacentElement('afterend', i);
  releaseTitle.nextElementSibling.textContent = releaseTitle.nextElementSibling.textContent.trim();

  // Handle click events
  releaseTitle.nextElementSibling.addEventListener('click', () => {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query) + additionalText);
  });

  rl.attachCss('quick-search', rules);
});

/***/ })

/******/ });