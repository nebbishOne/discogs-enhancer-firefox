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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 82:
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

rl.ready(() => {

  // ========================================================
  // Functions
  // ========================================================
  /**
   * Creates the CSS necessary for styling the
   * artist discriminators
   * @prop {Boolean} hide - Show or hide the discriminator
   * @prop {Boolean} superscript - <sup> or <span> element
   * @prop {Boolean} unselectable - Whether the discriminator can be selected by the mouse
   * @prop {Boolean} transparent - Whether transparent or not
   * @returns {undefined}
   */
  function generateCss(hide, superscript, unselectable, transparent) {

    let margin = superscript ? '0.1rem' : '0';

    hide = hide ? 'none' : 'inherit';
    unselectable = unselectable ? 'none' : 'auto';
    transparent = transparent ? '0.5' : '1';
    superscript = superscript ? '0.9rem' : '20px';

    let rules = `
      .de-discriminator {
        display: ${hide};
        font-size: ${superscript};
        margin-left: ${margin};
        opacity: ${transparent};
        user-select: ${unselectable};
      }

      .de-artist-discriminator {
        font-size: ${superscript};
        margin-left: ${margin};
        opacity: ${transparent};
        user-select: ${unselectable};
      }
    `;

    rl.attachCss('discriminator', rules);
  }

  // ========================================================
  // DOM Setup
  // ========================================================
  let defaults = { hide: false, superscript: true, unselectable: true, transparent: false },
      discriminators = rl.getPreference('discriminators') || defaults,
      elemType,
      { hide, superscript, transparent, unselectable } = discriminators,
      re = /(.+\s)(\(\d+\))$/gm;

  elemType = superscript ? 'sup' : 'span';

  // Releases
  // ------------------------------------------------------
  if (rl.pageIs('sellItem', 'release', 'master', 'buy')) {

    generateCss(hide, superscript, unselectable, transparent);

    document.querySelectorAll('#profile_title span span a').forEach(s => {

      let markup = `<span class="trim-me">$1</span><${elemType} class="de-discriminator">$2</${elemType}>`;

      s.innerHTML = s.textContent.replace(re, markup);

      if (superscript) {
        document.querySelectorAll('.trim-me').forEach(t => {
          t.textContent = t.textContent.trim();
        });
      }
    });
  }

  // Artists / Labels
  // ------------------------------------------------------
  if (rl.pageIs('artist', 'label')) {

    generateCss(hide, superscript, unselectable, transparent);

    document.querySelectorAll('.profile h1.hide_mobile').forEach(s => {

      let markup = `<span class="trim-me">$1</span><${elemType} class="de-artist-discriminator">$2</${elemType}>`;

      s.innerHTML = s.textContent.replace(re, markup);

      if (superscript) {
        document.querySelectorAll('.trim-me').forEach(t => {
          t.textContent = t.textContent.trim();
        });
      }
    });
  }
});

/***/ })

/******/ });