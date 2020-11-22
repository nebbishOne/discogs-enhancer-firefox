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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * This rearranges the UI on the collection page
 * to what I think is a better layout and colors the
 * Move and Remove Selected buttons.
 */

rl.ready(() => {

  if (rl.pageIs('collection')) {

    let int = setInterval(() => {

      if (document.getElementById('move_folder_id_bottom') && document.getElementById('move_folder_id_bottom').length) {

        clearInterval(int);

        let bottomButtons = document.querySelector('.release_list_actions.multiple-buttons.bottom .fright'),
            bottomSelectFolder = document.getElementById('move_folder_id_bottom').outerHTML,
            moveButtonMarkup = document.querySelector('[name^="Action.MoveItems"]').outerHTML,
            toFolderString = '&nbsp; to folder: &nbsp;',
            topButtons = document.querySelector('.release_list_actions.multiple-buttons.top .fright'),
            topSelectFolder = document.getElementById('move_folder_id_top').outerHTML;

        // Swap the 'Move Selected' button with the 'Folder' select element on top
        topButtons.innerHTML = '';
        topButtons.insertAdjacentHTML('beforeend', moveButtonMarkup);
        topButtons.insertAdjacentHTML('beforeend', toFolderString);
        topButtons.insertAdjacentHTML('beforeend', topSelectFolder);
        // Swap the 'Move Selected' button with the 'Folder' select element on bottom
        bottomButtons.innerHTML = '';
        bottomButtons.insertAdjacentHTML('beforeend', moveButtonMarkup);
        bottomButtons.insertAdjacentHTML('beforeend', toFolderString);
        bottomButtons.insertAdjacentHTML('beforeend', bottomSelectFolder);

        // Label the 'Folder' select element with "Current folder:"
        document.querySelector('label[for="folder_top"]').textContent = 'Current folder: ';
        document.querySelector('label[for="folder_bottom"]').textContent = 'Current folder: ';
        // Move the 'Random Item' link over to the right
        document.getElementById('random_list_form').style = 'float: right; margin-top: 11px;';
        // Make the 'Remove Selected' buttons red
        [...document.querySelectorAll('.release_list_remove')].forEach(b => b.classList.add('button-red'));
        // Make the 'Move Selected' buttons green
        [...document.querySelectorAll('[name^="Action.MoveItems"]')].forEach(b => b.classList.add('button-green'));
      }
    }, 100);
  }
});

/***/ })

/******/ });