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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 65:
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
 * ---------------------------------------------------------------------------
 * Overview
 * ---------------------------------------------------------------------------
 *
 * This feature will inject `Remove From Wantlist` links into marketplace / seller items.
 * When a user clicks an injected link, the script will remove the item from the user's
 * wantlist without having to open a new page and click remove.
 *
 * The script is initiated with the code that follows the `init / DOM Setup` comment block.
 */

rl.ready(() => {

  /**
   * Gets the release rating and votes from a specified release
   *
   * @method removeFromWantlist
   * @param  {String} id [the event's data-id attribute value]
   * @param  {object} parent [the parent of the event.target element]
   * @return {object}
   */
  let removeFromWantlist = (() => {
    var _ref = _asyncToGenerator(function* (id, parent, target) {

      try {

        let releaseId = id.split('/release/')[1],
            releases = document.querySelectorAll('.item_description .item_release_link'),
            headers = { 'content-type': 'application/x-www-form-urlencoded' },
            url = `https://www.discogs.com/_rest/wantlist/${releaseId}`,
            initObj = {
          credentials: 'include',
          headers: headers,
          method: 'DELETE'
        },
            response = yield fetch(url, initObj);

        if (response.ok) {
          // Go over all the releases to check for duplicates
          releases.forEach(function (release) {
            let tr = release.closest('.shortcut_navigable');
            if (release.href === id) {
              tr.classList.add('hide');
              setTimeout(function () {
                tr.style.display = 'none';
              }, 300);
            }
          });
        } else if (response.status === 404) {
          target.parentElement.innerHTML = '<div>This Item has already been removed from your Wantlist.</div>';
        }
      } catch (err) {

        return console.log('Discogs Enhancer: Could not remove from wantlist.', err);
      }
    });

    return function removeFromWantlist(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * Injects `Remove From Wantlist` links into the DOM
   *
   * @method insertRemoveLinks
   * @return {function}
   */
  // attached to window object so it can be called by Everlasting Marketplace


  let marketplace = rl.pageIs('myWants');

  // ========================================================
  // Functions
  // ========================================================

  /**
   * Generates the confirm box markup that gets appened to the DOM
   * @returns {object} HTML
   */
  function createConfirmBox() {

    let confirmBox = document.createElement('div'),
        areYouSure = document.createElement('div'),
        yes = document.createElement('a'),
        no = document.createElement('a'),
        slash = document.createElement('div'),
        inblk_mr = 'display: inline-block; margin-right: 5px;';

    areYouSure.textContent = 'Remove From Wantlist?';
    areYouSure.style = inblk_mr;

    yes.textContent = 'Yes';
    yes.style = inblk_mr;
    yes.className = 'de-remove-yes';
    yes.dataset.id = event.target.dataset.id;

    slash.textContent = ' / ';
    slash.style = inblk_mr;

    no.textContent = 'No';
    no.style = inblk_mr;
    no.className = 'de-remove-no';

    confirmBox.appendChild(areYouSure);
    confirmBox.appendChild(yes);
    confirmBox.appendChild(slash);
    confirmBox.appendChild(no);

    return confirmBox;
  }window.insertRemoveLinks = function insertRemoveLinks() {

    if (marketplace) {

      let releases = document.querySelectorAll('.item_release_link');

      releases.forEach(release => {

        let a = document.createElement('a'),
            div = document.createElement('div'),
            parent = release.parentElement;

        div.className = 'de-remove-wantlist-wrap';

        a.className = 'de-remove-wantlist';
        a.dataset.id = release.href;
        a.style = 'display:block;';
        a.textContent = 'Remove From Wantlist';

        div.append(a);

        // don't insert links if they already exist
        if (!parent.getElementsByClassName('de-remove-wantlist-wrap').length) {
          release.insertAdjacentElement('beforebegin', div);
        }
      });
    }
  };

  // ========================================================
  // CSS
  // ========================================================
  let rules = `
      .shortcut_navigable {
        transition: opacity 0.3s;
        transition-timing-function: ease;
      }

      .shortcut_navigable.hide {
        opacity: 0;
      }
      `;

  // ========================================================
  // DOM Setup
  // ========================================================

  if (marketplace) {
    rl.attachCss('remove-from-wantlist', rules);
    window.insertRemoveLinks();

    // Prev/Next clicks
    // ---------------------------------------------------------------------------
    rl.handlePaginationClicks(window.insertRemoveLinks);

    // Confirm/negate removal
    document.querySelector('body').addEventListener('click', event => {

      let target = event.target,
          parent = event.target.parentElement;

      // Remove From Wantlist intial click
      if (target.classList.contains('de-remove-wantlist')) {
        event.preventDefault();
        event.target.style.display = 'none';
        parent.append(createConfirmBox());
      }
      // Yes, remove this
      if (target.classList.contains('de-remove-yes')) {
        removeFromWantlist(event.target.dataset.id, parent, event.target);
      }
      // No, don't remove anything
      if (target.classList.contains('de-remove-no')) {
        target.parentElement.previousElementSibling.style.display = 'block';
        target.parentElement.remove();
      }
    });
  }
});

/***/ })

/******/ });