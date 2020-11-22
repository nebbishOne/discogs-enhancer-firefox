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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 58:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * This will append a small icon to the nav bar that
 * when clicked will show a random item from the user's
 * collection. The functionality is identical to the
 * Random Item feature in the collection page but
 * makes it accessable from the nav bar.
 */

rl.ready(() => {

  // ========================================================
  // Function
  // ========================================================
  /**
   * Stops the .random-item animation
   * @returns {undefined}
   */
  function stopAnimation() {
    document.querySelector('.de-random-item').classList.replace('rotate-out', 'rotate-in');
  }

  // ========================================================
  // CSS
  // ========================================================

  let rules = `
      .de-random-item {
        cursor: pointer;
        font-size: 14px;
        margin-top: 2px;
        color: white;
      }

      .de-random-item svg {
        fill: ${document.querySelector('.de-dark-theme') ? '#cccccc' : '#ffffff'};
      }

      .de-random-item span,
      .de-random-item span i {
        pointer-events: none;
      }

      .rotate-in {
        animation: rotateIn .1s ease-in;
      }

      .rotate-out {
        animation: rotateOut .4s infinite;
      }

      @keyframes rotateIn {
        from { transform: rotateX(90deg); }
        to { transform: rotateX(0deg); }
      }

      @keyframes rotateOut {
        0% { transform: rotateX(0deg); }
        25% { transform: rotateX(90deg); }
        50% { transform: rotateX(0deg); }
        75% { transform: rotateX(90deg); }
        100% { transform: rotateX(135deg); }
      }
      `;

  // ========================================================
  // DOM Setup
  // ========================================================
  let user = rl.username(),
      icon = `<li style="position: relative;">
                <a class="nav_group_control de-random-item needs_delegated_tooltip rotate-in"
                   href="/user/${user}/collection/random"
                   rel="tooltip"
                   title="Random Item"
                   data-placement="bottom"
                   arial-label="Random Item">
                  <span>
                   <svg width="15" height="12" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg"><path d="M14.9998 9.45703L11.85 12V10.3044H11.3198C9.64588 10.3044 8.41328 9.59801 7.39572 8.66267C7.78817 8.22752 8.14397 7.78952 8.47497 7.37975C8.55101 7.28523 8.62656 7.19195 8.70195 7.09867C9.45476 7.83191 10.2645 8.32656 11.32 8.32656H11.8502V6.9135L14.9998 9.45703V9.45703ZM0 3.80524H1.56967C2.56507 3.80524 3.34176 4.24592 4.05831 4.90998C4.17623 4.76739 4.29547 4.61885 4.41583 4.47054C4.70881 4.1072 5.01853 3.72463 5.35412 3.34308C4.36327 2.47094 3.16781 1.82692 1.56971 1.82692H0V3.80524V3.80524ZM11.85 0V1.68576H11.3198C8.54949 1.68576 6.9876 3.61988 5.60929 5.32689C4.36954 6.8596 3.29919 8.1851 1.56967 8.1851H0V10.1632H1.56967C4.34043 10.1632 5.90228 8.23008 7.28063 6.52348C8.51994 4.98893 9.59049 3.66362 11.3198 3.66362H11.85V5.08692L15 2.54316L11.85 0V0Z"/></svg>
                  </span>
                </a>
              </li>`;

  if (user) {

    rl.attachCss('random-item', rules);
    document.getElementById('activity_menu').insertAdjacentHTML('beforeend', icon);

    document.querySelector('.de-random-item').addEventListener('click', event => {
      event.target.classList.replace('rotate-in', 'rotate-out');
      if (event.metaKey) {
        return setTimeout(() => stopAnimation(), 250);
      }
      return setTimeout(() => stopAnimation(), 4000);
    });
  }
});
/**
// ========================================================
A fine white ash covered me. The great white light took me in.
I knew happiness, for a moment. I was going towards the eternal light
"but you come back". Yes it was my body,
it wasn't my time you see. The picture of a man was beside me
just before he slipped away he looked me in the eye he said
"Take the pictures" "Take the pictures"
We were going towards the eternal light
but I had to bring back the living pictures.
They saw it. The pictures saw it.
Light, white the colour. How could all these things be true?
If they hadn't, the living pictures saw it all...
My eyes will forget but they never will
never...
ever...
https://www.discogs.com/Microwave-Prince-Volume-3/release/32837
// ========================================================
*/

/***/ })

/******/ });