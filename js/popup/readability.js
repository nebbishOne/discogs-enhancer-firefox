/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 */

document.addEventListener('DOMContentLoaded', function () {

  let
      config = JSON.parse(localStorage.getItem('readability')) || setDefaultConfig(),
      indexTracks = document.getElementById('toggleIndexTracks'),
      nth = document.getElementById('nth'),
      otherMedia = document.getElementById('toggleOtherMedia'),
      otherThreshold = document.getElementById('otherMediaThreshold'),
      vc = document.getElementById('toggleVCreleases'),
      vcThreshold = document.getElementById('vcThreshold');

  /**
   * Sets default values in the config object
   *
   * @method setDefaultConfig
   * @return {object}
   */
  function setDefaultConfig() {

    let defaults = {
          indexTracks: false,
          nth: 10,
          otherMediaReadability: false,
          otherMediaThreshold: 15,
          vcReadability: true,
          vcThreshold: 8
        };

    localStorage.setItem('readability', JSON.stringify(defaults));

    return JSON.parse(localStorage.getItem('readability'));
  }

  /**
   * Appends options to select elements
   *
   * @method   addOptions
   * @param    {object}   targetId
   * @param    {number}   total
   * @return   {object}
   */
  function addOptions(targetId, total) {

    let fragment = document.createDocumentFragment();

    for (let i = 1; i <= total; i++) {

      let option = document.createElement('option');

      option.text = i;
      option.value = i;
      fragment.appendChild(option);
    }

    return targetId.appendChild(fragment.cloneNode(true));
  }

  // set values based on config
  vc.checked = config.vcReadability;
  otherMedia.checked = config.otherMediaReadability;
  indexTracks.checked = config.indexTracks;

  addOptions(vcThreshold, 30);
  vcThreshold.value = config.vcThreshold;

  addOptions(otherThreshold, 30);
  otherThreshold.value = config.otherMediaThreshold;

  addOptions(nth, 30);
  nth.value = config.nth;

  // ==============================================
  // UI functionality
  // ==============================================

  // Vinyl, cassette, box sets, etc ...
  $('body').on('click', '#toggleVCreleases', function(event) {

    let pref = JSON.parse(localStorage.getItem('readability'));

    pref.vcReadability = event.target.checked;

    localStorage.setItem('readability', JSON.stringify(pref));
  });

  // Single CD, digital, etc ...
  $('body').on('click', '#toggleOtherMedia', function(event) {

    let pref = JSON.parse(localStorage.getItem('readability'));

    pref.otherMediaReadability = event.target.checked;

    localStorage.setItem('readability', JSON.stringify(pref));
  });

  // Classical releases
  $('body').on('click', '#toggleIndexTracks', function(event) {

    let pref = JSON.parse(localStorage.getItem('readability'));

    pref.indexTracks = event.target.checked;

    localStorage.setItem('readability', JSON.stringify(pref));
  });

  // Value changes
  $('select').on('change', function(event) {

    let pref = JSON.parse(localStorage.getItem('readability'));

    pref[event.target.id] = event.target.value;

    localStorage.setItem('readability', JSON.stringify(pref));
  });
});