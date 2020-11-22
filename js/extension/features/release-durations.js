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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ({

/***/ 61:
/***/ (function(module, exports) {

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
 * This will calculate the total time for a release if track durations are
 * present.
 *
 * The script is initiated when a table with `.playlist` exists in the DOM
 * except when viewing a release's edit history page because:
 * https://www.discogs.com/forum/thread/731619
 *
 */

rl.ready(() => {

  let hasPlaylist = document.querySelector('table.playlist');

  if (hasPlaylist && rl.pageIsNot('history')) {

    let arr = [],
        emptyIndexTracks = false,
        hours,
        html,
        minutes,
        result = '',
        resultMinutes,
        seconds,
        totalSeconds;

    // ========================================================
    // Functions
    // ========================================================

    /**
     * Converts hh:mm:ss to seconds
     *
     * @method convertToSeconds
     * @param  {String} str
     * @return {Number}
     */

    function convertToSeconds(str) {

      let p = str.split(':'),
          sec = 0,
          min = 1;

      while (p.length > 0) {

        sec += min * Number(p.pop());

        min *= 60;
      }

      return sec;
    }

    /**
     * Grabs tracktimes from a target and inserts them into an array
     *
     * @method gatherTrackTimes
     * @param  {array} target
     * @return {method}
     */

    function gatherTrackTimes(target) {

      target.forEach(time => {

        let trackTime = time.textContent;

        return trackTime === '' ? arr.push('0') : arr.push(trackTime);
      });
    }

    // ========================================================
    // DOM Setup
    // ========================================================

    // Grab all track times from any Index Tracks in the tracklisting
    // and add them to the array.
    document.querySelectorAll('tr.index_track td.tracklist_track_duration span').forEach(time => {

      let trackTime = time.textContent,
          subtracks = document.querySelectorAll('.tracklist_track.subtrack .tracklist_track_duration span').textContent;

      // If there are Index Tracks present but they are empty AND
      // they have subtracks WITH data, set `emptyIndexTracks` to true
      // and use the subtrack data to calculate the total playing time.
      if (trackTime === '' && subtracks !== '') {

        emptyIndexTracks = true;
        return;

        // If there are Index Tracks and subtracks present but they are
        // both empty, don't count them in the total.
      } else if (trackTime === '' && subtracks === '') {

        return arr.push('0');
      } else {

        // Strip any times wrapped in parenthesis and add their numbers
        // to the array
        trackTime = trackTime.replace('(', '').replace(')', '');

        return arr.push(trackTime);
      }
    });

    // Grab the track times from the subtrack entries.
    if (emptyIndexTracks) {

      gatherTrackTimes(document.querySelectorAll('.tracklist_track.subtrack .tracklist_track_duration span'));
    }

    // Grab all track times from any td that is not a child of .subtrack
    // and add them to the array.
    gatherTrackTimes(document.querySelectorAll('tr.tracklist_track.track td.tracklist_track_duration span'));

    // Calculate total seconds
    totalSeconds = arr.map(convertToSeconds).reduce((acc, next) => acc + next);

    // calculate hours...
    hours = parseInt(totalSeconds / 3600, 10) % 24;

    // ...mins...
    minutes = parseInt(totalSeconds / 60, 10) % 60;

    // ...and seconds
    seconds = totalSeconds % 60;

    // Assemble the result
    if (hours) {
      result = hours + ':';
    }

    if (minutes !== null) {
      // 0 you falsy bastard!

      if (hours) {

        resultMinutes = minutes < 10 ? '0' + minutes : minutes;

        result += resultMinutes + ':';
      } else {

        result += minutes + ':';
      }
    }

    result += seconds < 10 ? '0' + seconds : seconds;

    // Don't insert any markup if necessary
    if (result === '0:00' || result === 'NaN:NaN') {

      return;
    } else {

      html = `<div class="section_content de-durations">
                <table>
                  <tbody>
                    <tr class="tracklist_track track_heading">
                      <td class="tracklist_track_pos">
                        <span style="padding-left:5px; font-weight:bold;">Total Time:</span>
                      </td>
                      <td class="track tracklist_track_title"></td>
                      <td width="25" class="tracklist_track_duration">
                        <span style="font-weight:bold;"> ${result} </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>`;

      document.querySelector('#tracklist .section_content').insertAdjacentHTML('beforeend', html);
    }
  }
});
/**
// ========================================================
I'm marvelous like Marvin Haggler in his prime
I carve kids like a dagger with my mind
I start shit with rappers who can't rhyme
I spark spliffs cuz I don't stagger when I'm high
But when I'm drunk I do, punk I do not acknowledge wackness
I gotcha grandma doin' backflips and tumbles
https://www.discogs.com/Blackalicious-Melodica/master/32289
// ========================================================
 */

/***/ })

/******/ });