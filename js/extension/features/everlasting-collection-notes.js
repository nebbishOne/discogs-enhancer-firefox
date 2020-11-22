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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ (function(module, exports) {



/**
 * Sends the new notes data to Discogs
 * @returns {undefined}
 */
let postNotes = (() => {
  var _ref = _asyncToGenerator(function* (notesData, event) {

    let query = queryString(notesData),
        value = query,
        headers = { 'content-type': 'application/x-www-form-urlencoded' },
        url = 'https://www.discogs.com/list/coll_update',
        initObj = {
      body: value,
      credentials: 'include',
      headers: headers,
      method: 'POST'
    },
        response = yield fetch(url, initObj);

    if (response.ok) {

      let res = yield response.json(),
          target = event.target.closest('.notes_field');

      target.classList.remove('notes_editing');

      // Add the appropriate classes depending on what was edited
      if (!res.html) {
        target.classList.add('notes_not_edited');
        target.classList.remove('notes_edited');
      } else {
        target.classList.remove('notes_not_edited');
        target.classList.add('notes_edited');
      }

      target.querySelector('.notes_text').dataset.content = res.content;
      target.querySelector('.notes_text').innerHTML = res.html;
    }
  });

  return function postNotes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * Converts an object to a query string for
 * posting notes data to Discogs
 * @param {object} obj The object to strigify
 * @returns {string}
 */


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 */

// ========================================================
// All of these functions are used with the Everlasting
// Collection feature. When appending new sets of pages
// to the DOM, the event listeners are not updated
// so the new elements will not function. These functions
// recreate the missing functionality on the new DOM
// elements.
// ========================================================

// ========================================================
// Functions (Alphabetical)
// ========================================================

/**
 * Removes the `.notes_editing` class from the
 * element which closes the notes textarea.
 * @param {object} event The event object
 * @returns {undefined}
 */
function cancelNotes(event) {
  event.target.closest('.notes_field').classList.remove('notes_editing');
}

/**
 * Opens the note field for editing and adds
 * event listeners to the save and cancel buttons
 * @param {object} event The event object
 * @returns {undefined}
 */
function openNoteField(event) {

  let content = event.target.dataset.content || '',
      target = event.target.closest('.notes_field');

  target.classList.add('notes_editing');
  target.querySelector('.notes_textarea').value = content;
  target.querySelector('.notes_textarea').focus();
}function queryString(obj) {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

/**
 * Gathers the new note data to send to Discogs
 * @param {object} event The event object
 * @returns {method}
 */
function saveNotes(event) {

  let colId = event.target.closest('.notes_field').dataset.collId,
      fieldId = event.target.closest('.notes_field').dataset.field,
      folderId,
      // TODO: what is this value for?
  val = event.target.closest('.notes_field').querySelector('.notes_textarea').value,
      notes = event.target.closest('.notes_field').querySelector('.notes_textarea').value,
      notesObj = {
    coll_id: colId,
    field_id: fieldId,
    folder_id: folderId || null,
    val: val,
    notes: notes
  };

  return postNotes(notesObj, event);
}

// ========================================================
// Event listeners
// ========================================================

rl.ready(() => {

  if (rl.pageIs('collection')) {
    document.querySelector('body').addEventListener('click', event => {

      let target = event.target;

      // cancel button
      if (target.id === 'notes_edit_cancel') {
        return cancelNotes(event);
      }
      // edit/add notes
      if (target.closest('.de-notes-show')) {
        return openNoteField(event);
      }
      // save notes
      if (target.parentElement.previousElementSibling && target.parentElement.previousElementSibling.closest('.de-notes-show') && target.id == 'notes_edit_save') {
        return saveNotes(event);
      }
    });
  }
});

/***/ })

/******/ });