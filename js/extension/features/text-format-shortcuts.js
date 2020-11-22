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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ({

/***/ 73:
/***/ (function(module, exports) {

/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * This will inject text format shortcut buttons
 * to textarea elements within discogs that allow
 * the user to quickly insert URLs or stylize text
 * when leaving comments or notes.
 */

rl.ready(() => {

  let hasRun = false,
      hasTextarea = false,
      selected = '';

  // ========================================================
  // Functions (Alphabetical)
  // ========================================================

  /**
   * Attaches event listeners to the B, I, S, U quick-link buttons
   * @method attachBISUlisteners
   * @return {undefined}
   */
  function attachBISUlisteners() {

    let buttons = document.querySelectorAll('.quick-bold, .quick-italic, .quick-strikethrough, .quick-underline');

    buttons.forEach(b => b.addEventListener('click', event => {

      let closer,
          opener,
          syntax,
          textarea = event.target.parentElement.parentElement.querySelector('textarea'),
          text = textarea.value,
          position = textarea.selectionStart || 0;

      event.preventDefault();

      if (event.target.classList.contains('quick-bold')) {
        opener = '[b]';
        closer = '[/b]';
      } else if (event.target.classList.contains('quick-italic')) {
        opener = '[i]';
        closer = '[/i]';
      } else if (event.target.classList.contains('quick-strikethrough')) {
        opener = '[s]';
        closer = '[/s]';
      } else if (event.target.classList.contains('quick-underline')) {
        opener = '[u]';
        closer = '[/u]';
      }

      // Either wrap the selected text with the markup or insert it by itself
      syntax = selected ? opener + selected + closer : opener + closer;
      // insert appropriate tag syntax
      textarea.value = text.substr(0, position) + syntax + text.substr(position + selected.length);
      // adjust cursor position to fit between the tags
      selectRange(textarea, position + 3);
      // set the focus
      textarea.focus();
      textarea.dispatchEvent(new Event('change', { bubbles: true }));
    }));
  }

  /**
   * Adds an event listener to the link `.quick-link` button
   * @method attachLinkListener
   * @return {method}
   */
  function attachLinkListener() {

    document.querySelector('.quick-button.quick-link').addEventListener('click', event => {

      event.preventDefault();

      return parseLink(event.target);
    });
  }

  /**
  * Maintains the text value selected by the user
  *
  * @method attachTextSelectionListeners
  * @return {undefined}
  */
  function attachTextSelectionListeners() {

    let textareaElement,
        buttons = document.querySelectorAll('.quick-bold, .quick-italic, .quick-strikethrough, .quick-underline, .quick-link');

    buttons.forEach(b => {

      b.addEventListener('mousedown', event => {

        textareaElement = event.target.parentElement.parentElement.querySelector('textarea');
        selected = getSelectedText(textareaElement);
      });
    });
  }

  /**
   * Gets the selected text from an input/textarea
   * @method getSelectedText
   * @param  {object} target The intput/textarea element
   * @return {string}
   */
  function getSelectedText(target) {

    let sSelectedText = '';

    if (window.getSelection) {

      let sTagName = target.tagName.toLowerCase();

      sSelectedText = sTagName === 'input' || sTagName === 'textarea' ? target.value.substring(target.selectionStart, target.selectionEnd) : document.getSelection().toString();
    }

    return sSelectedText;
  }

  /**
   * Injects the shortcut markup and calls click
   * event listener functions to each respective
   * shortcut button.
   * @method   insertShortcuts
   * @return   {undefined}
   */
  function insertShortcuts() {

    let markup = `<div class="quick-menu">
                    <button class="quick-button quick-link" title="Insert url">
                      <i class="icon icon-chain" style="pointer-events: none;"></i>
                    </button>
                    <button class="quick-button quick-bold" title="Insert bold code">B</button>
                    <button class="quick-button quick-italic" title="Insert italic code">I</button>
                    <button class="quick-button quick-strikethrough" title="Insert strikethrough code">S</button>
                    <button class="quick-button quick-underline" title="Insert underline code">U</button>
                  </div>`;

    // Inject buttons into DOM
    document.getElementsByTagName('textarea')[0].insertAdjacentHTML('afterend', markup);
    // bold, italic, strikethrough and underline
    attachBISUlisteners();
    attachTextSelectionListeners();
    // Links
    attachLinkListener();
  }

  /**
   * Iterate over all textarea elements and look for
   * specific ids/classes/names. If there is a match, call the
   * `insertShortcuts` function which will inject the shortcut markup
   * @method   inspectTextareas
   * @return   {object|boolean}
   */
  function inspectTextareas() {

    if (document.querySelector('.quick-menu')) return;

    let t = [...document.getElementsByTagName('textarea')];

    // see if any review boxes exist on the page
    if (t.length) {

      for (let i in t) {

        if (
        // reviews
        t[i].id === 'review' ||
        // new threads in groups/forums
        t[i].id === 'text' ||
        // comments
        t[i].name === 'comment' ||
        // forum/group replies
        t[i].className && t[i].className.includes('forum_reply')) {

          hasTextarea = true;
        }
      }

      return hasTextarea ? insertShortcuts() : false;
    }
  }

  /**
   * Parses the text passed into the prompt
   * @method   parseLink
   * @param    {object} target The target textarea element
   * @return   {method}
   */
  function parseLink(target) {

    let textarea = target.parentElement.parentElement.querySelector('textarea'),
        discogs = 'https://www.discogs.com',
        guideline = /(\d+\.+\d*)/g,
        link = window.prompt('Paste your link or guideline number (ie: 1.2.3) here:'),
        parsed = rl.parseURL(link),
        position = textarea.selectionStart || 0,
        syntax,
        text = textarea.value;

    if (parsed) {

      if (link.includes('/artist/') && link.includes(discogs)) {
        // artists
        syntax = '[a' + parsed + ']';
      } else if (guideline.test(link) && !link.includes(discogs) && !link.includes('http')) {
        // guidelines
        syntax = '[g' + link + ']';
      } else if (link.includes('/label/') && link.includes(discogs)) {
        // labels
        syntax = '[l' + parsed + ']';
      } else if (link.includes('/master/') && link.includes(discogs)) {
        // masters
        syntax = '[m' + parsed + ']';
      } else if (link.includes('/release/') && link.includes(discogs)) {
        // releases
        syntax = '[r' + parsed + ']';
      } else if (link.includes('/forum/thread/') && link.includes(discogs)) {
        // topics
        syntax = '[t=' + parsed + ']';
      } else if (link.includes('/user/') && link.includes(discogs)) {
        // users
        syntax = '[u=' + link.split('/')[link.split('/').length - 1] + ']';
      } else if (link.includes('http')) {
        // urls
        syntax = selected ? `[url=${link}]${selected}[/url]` : `[url=${link}][/url]`;
        // insert appropriate tag syntax
        textarea.value = text.substr(0, position) + syntax + text.substr(position + selected.length);
        // adjust cursor position to fit between URL tags
        selectRange(textarea, position + (link.length + 6));
        // set the focus
        textarea.focus();
        // return early
        return textarea.dispatchEvent(new Event('change', { bubbles: true }));
      } else {

        let notRecognized = 'A valid link or guideline number was not recognized. \nPlease make sure links begin with http:// or https:// and guidelines are in an x.x.x format. \n\nYou can learn more about the requirements by clicking "Learn" from the Discogs Enhancer popup menu and reading the section called "Text Format Shortcuts".';

        // 'a link has no name...'
        return alert(notRecognized);
      }

      // insert appropriate tag syntax
      textarea.value = text.substr(0, position) + syntax + text.substr(position);
      // adjust cursor position to end of the inserted tag
      selectRange(textarea, position + syntax.length);
      // set the focus
      textarea.focus();
      return textarea.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  /**
   * Inserts the cursor at a specific location inside
   * a textarea
   * @param    {object} target [The textarea element to inspect]
   * @param    {string} start [The start position]
   * @param    {string} end   [The end position]
   * @return   {object}
   */
  function selectRange(target, start, end) {

    if (end === undefined) {
      end = start;
    }

    if ('selectionStart' in target) {

      target.selectionStart = start;
      target.selectionEnd = end;
    } else if (target.setSelectionRange) {

      target.setSelectionRange(start, end);
    }

    return target;
  }

  // ========================================================
  // UI functionality
  // ========================================================
  try {
    // insert shortcuts when replying to reviews
    document.querySelectorAll('.review_action1.review_action1-reply').forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(() => {
          insertShortcuts();
          // add eventlistener to cancel button once it
          // exists in the DOM.
          document.querySelector('.reviews-cancel-event').addEventListener('click', () => {
            // if a user cancels out of a reply,
            // insert shortcuts on the main review textarea
            setTimeout(insertShortcuts, 300);
          });
        }, 500);
      });
    });

    // insert shortcuts when editing list items
    if (document.querySelector('.textedit_content')) {
      document.querySelector('.textedit_content').addEventListener('click', () => {

        setTimeout(() => {

          if (!document.getElementsByClassName('quick-menu').length) {
            insertShortcuts();
          }
        }, 500);
      });
    }
  } catch (err) {
    console.warn('Discogs Enhancer: Could not add quickmenu to textarea.\n', err);
  }

  // ========================================================
  // Init / DOM Setup
  // ========================================================

  // Forums, history pages, etc ...
  // --------------------------------------------------------
  // There's no need to wait for the textarea element to
  // appear in the DOM so just call `inspectTextareas` immediately
  window.addEventListener('load', () => inspectTextareas());

  // Release pages
  // --------------------------------------------------------
  // Textarea elements are not immediately available in the DOM
  // so listen for them via mutation observer
  let page = document.querySelector('#page') || null,
      config = { attributes: true, childList: true, subtree: true },
      observer,
      action;

  action = mutationsList => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(n => {
          if (n.classList && (n.classList.contains('review_compose') || n.id === 'comment') && !hasRun) {

            hasRun = true;
            inspectTextareas();
            observer.disconnect();
          }
        });
      }
    }
  };

  if (page) {
    observer = new MutationObserver(action);
    observer.observe(page, config);
  }
});

/***/ })

/******/ });