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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports) {



/**
 * Posts the new rating to Discogs.
 * @param {string} releaseId The release_id to be rated
 * @param {string} rating The rating value that will be used to rate the release
 * @param {object} event The event object from the click event
 * @returns {method}
 */
let postRating = (() => {
	var _ref = _asyncToGenerator(function* (releaseId, rating, event) {

		let value = `value=${rating}`,
		    headers = { 'content-type': 'application/x-www-form-urlencoded' },
		    url = `https://www.discogs.com/release/rate?release_id=${releaseId}`,
		    initObj = {
			body: value,
			credentials: 'include',
			headers: headers,
			method: 'POST'
		},
		    response = yield fetch(url, initObj);

		if (response.ok) {

			// Update with the new rating
			if (rating !== '0') {
				event.target.closest('.rating').dataset.value = rating;
				return event.target.closest('.rating').classList.remove('not_rated');
			}

			// ... or remove it if it was 0 ('x' was clicked)
			event.target.closest('.rating').removeAttribute('data-value');
			removeStarClass(event.target.closest('.rating').querySelector('.rating_range'));
			event.target.closest('.rating').querySelector('.rating_range').classList.add('fill0');
			return event.target.closest('.rating').classList.add('not_rated');
		}
	});

	return function postRating(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
})();

/**
 * Previews the star rating when hovering over the star icons
 * @param {object} event The Event object
 * @returns {undefined}
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
 * Returns the star value from the element
 * @param {object} elem The element to get the rating class from
 * @returns {string}
 */
function getRatingClass(elem) {

	let classes = Array.from(elem.classList),
	    num = /\d/g;

	classes = classes.join('');
	return classes.match(num)[0];
}

/**
 * Injects the star rating component template in to each
 * empty ratings td that has been inserted by the
 * everlasting-collection feature.
 * @returns {undefined}
 */
window.injectStars = function injectStars() {

	let ratings = [...document.querySelectorAll('span.rating')];

	ratings.forEach(rating => {

		if (!rating.querySelector('.rating_icons')) {

			let value = rating.dataset.value || 0;

			if (value === 0) rating.classList.add('not_rated');

			rating.insertAdjacentHTML('beforeend', starTemplate(value));
		}
	});
};function previewRating(event) {

	let rating = getRatingClass(event.target);

	removeStarClass(event.target.closest('.rating_range'));
	event.target.closest('.rating_range').classList.add(`fill${rating}`);
}

/**
 * Removes all of the `.fillN` classes from the passed element.
 * @param {object} elem The object to remove the classes from
 */
function removeStarClass(elem) {
	for (let i = 0; i <= 5; i++) {
		elem.classList.remove(`fill${i}`);
	}
}

/**
 * Restores the initial rating of the release after the mouse leaves
 * @param {object} event The event object
 * @returns {undefined}
 */
function restoreRating(event) {

	let notRated = event.target.closest('.rating').classList.contains('not_rated'),
	    target = event.target.closest('.rating .rating_range'),
	    value = event.target.closest('.rating').dataset.value;

	if (notRated) {
		removeStarClass(target);
		target.classList.add('fill0');
	} else {
		removeStarClass(target);
		target.classList.add(`fill${value}`);
	}
}

/**
 * Initiates the POST to discogs with the new rating data
 * @param {object} event The event object
 * @returns {undefined}
 */
function saveRating(event) {

	let nums = /\d+/g,
	    releaseId = event.target.closest('.rating').dataset.postUrl.match(nums)[0],
	    rating = event.target.dataset.value;

	postRating(releaseId, rating, event);
}

/**
 * Returns the markup for the star ratings
 * @param {number} value The rating value
 * @returns {string}
 */
function starTemplate(value) {
	let template = `<span class="rating_icons de-rating-icons"><span class="rating_range fill${value}"><a class="star star1 icon icon-star-o" tabindex="0" aria-label="Rate this release 1 star." data-value="1"></a><a class="star star1 icon icon-star" tabindex="0" aria-label="Rate this release 1 star." data-value="1"></a><a class="star star2 icon icon-star-o" tabindex="0" aria-label="Rate this release 2 stars." data-value="2"></a><a class="star star2 icon icon-star" tabindex="0" aria-label="Rate this release 2 stars." data-value="2"></a><a class="star star3 icon icon-star-o" tabindex="0" aria-label="Rate this release 3 stars." data-value="3"></a><a class="star star3 icon icon-star" tabindex="0" aria-label="Rate this release 3 stars." data-value="3"></a><a class="star star4 icon icon-star-o" tabindex="0" aria-label="Rate this release 4 stars." data-value="4"></a><a class="star star4 icon icon-star" tabindex="0" aria-label="Rate this release 4 stars." data-value="4"></a><a class="star star5 icon icon-star-o" tabindex="0" aria-label="Rate this release 5 stars." data-value="5"></a><a class="star star5 icon icon-star" tabindex="0" aria-label="Rate this release 5 stars." data-value="5"></a></span><i class="reset icon icon-times" tabindex="0" aria-label="Remove rating" data-value="0"></i></span>`;
	return template;
}

// ========================================================
// Event listeners
// ========================================================

rl.ready(() => {
	document.querySelector('body').addEventListener('click', event => {

		let target = event.target;
		// save/reset star rating
		if (target.closest('.de-rating-icons')) {
			return saveRating(event);
		}
	});

	document.querySelector('body').addEventListener('mouseover', event => {

		let target = event.target;
		// hover over rating
		if (target.closest('.de-rating-icons .rating_range')) {
			return previewRating(event);
		}
	});

	document.querySelector('body').addEventListener('mouseout', event => {

		let target = event.target;
		// mouseout from rating
		if (target.closest('.de-rating-icons .rating_range')) {
			return restoreRating(event);
		}
	});
});

/***/ })

/******/ });