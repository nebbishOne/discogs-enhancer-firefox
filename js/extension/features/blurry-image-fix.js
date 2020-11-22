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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * Fixes blurry images in galleries on non-HD screens (e.g.: not 4k/Retina screens).
 * See this thread for more info:
 * https://www.discogs.com/forum/thread/759801?page=1#7536285
 */
rl.ready(() => {

  let gallery = document.querySelector('.image_gallery.image_gallery_large'),
      hasListeners = false,
      href = window.location.href;

  // ========================================================
  // Functions
  // ========================================================

  /**
   * Attaches event listeners to UI elements to call unblur with
   * @method addUIListeners
   * @returns {undefined}
   */
  function addUIListeners() {

    let next = '.image_gallery_nav.image_gallery_next',
        prev = '.image_gallery_nav.image_gallery_prev',
        slide = '.image_gallery_slide img',
        thumb = '.image_gallery_thumb',
        elems = document.querySelectorAll([next, prev, slide, thumb].join(','));

    // Images/UI elements
    elems.forEach(el => {
      el.addEventListener('click', () => setTimeout(checkForZoom, 0));
      el.classList.add('de-blurry-fix');
    });
  }

  /**
   * Checks to see if the gallery image is zoomed. If it is, then the transform
   * property is reset so that the image remains centered. Otherwise, the image
   * is unblurred.
   * @method checkForZoom
   * @returns {undefined}
   */
  function checkForZoom() {

    let isZoomed = document.getElementById('image_gallery_modal').classList.contains('image_zoomed');

    if (isZoomed) {

      let img = document.querySelectorAll('.image_gallery_slide img.loaded');

      img.forEach(i => {
        i.style.transform = 'translate(0, 0)';
      });
    } else {
      unblur();
    }
  }
  /**
   * Centers the images so that the blur from `transform` is remedied
   * @method unblur
   * @returns {undefined}
   */
  function unblur() {

    let img = document.querySelectorAll('.image_gallery_slide img.loaded'),
        calc = 'calc(-50% + 0.5px)';

    img.forEach(i => {

      let w = i.clientWidth,
          h = i.clientHeight;

      if (w % 2 === 1 && h % 2 === 1) {
        i.style.transform = `translateX(${calc}) translateY(${calc})`;
      } else if (w % 2 === 1 && h % 2 === 0) {
        i.style.transform = `translateX(${calc}) translateY(-50%)`;
      } else if (w % 2 === 0 && h % 2 === 1) {
        i.style.transform = `translateX(-50%) translateY(${calc})`;
      } else {
        i.style.transform = 'translateX(-50%) translateY(-50%)';
      }
    });
  }

  // ========================================================
  // DOM setup
  // ========================================================

  if (gallery) {
    // Testing class
    gallery.classList.add('de-blurry-fix');
    // Add initial event listener to gallery element.
    // Delaying a bit so that the UI elements that
    // this script hooks on to have time to be
    // rendered in the DOM
    gallery.addEventListener('click', () => {
      setTimeout(() => {
        // Fix initial image that is loaded
        unblur();
        if (!hasListeners) {
          // add event listeners only once
          addUIListeners();
          hasListeners = true;
        }
      }, 300);
    });

    // Left and Right key presses
    document.addEventListener('keyup', event => {
      let code = event.keyCode || event.which;
      if (code === 39 || code === 37) {
        checkForZoom();
      }
    });

    // Check the url for `#images` for instances
    // when a user might follow a link that goes directly
    // to an image.
    if (href.includes('#images')) {

      let int = setInterval(() => {
        // Check to make sure the image has been loaded
        // then wait a bit so that the gallery can animate
        // into position. Then call the unblur/ui methods.
        let img = document.querySelectorAll('#image_gallery_modal .image_gallery_slide_wrapper img.loaded');

        if (img.length) {
          clearInterval(int);

          setTimeout(() => {
            addUIListeners();
            unblur();
            hasListeners = true;
          }, 300);
        }
      }, 13);
    }
  }
});

/***/ })

/******/ });