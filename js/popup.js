document.addEventListener('DOMContentLoaded', function () {

  var toggleDarkMode = document.getElementById('toggleDarkMode'),
      toggleConditions = document.getElementById('toggleConditions'),
      toggleSortBtns = document.getElementById('toggleSortBtns'),
      toggleReleaseDurations = document.getElementById('toggleReleaseDurations'),
      toggleCollectionUi = document.getElementById('toggleCollectionUi'),
      prefs = {};



  /**
   * Save preferences
   */

  function saveChanges(message) {

    prefs = {
      darkMode: toggleDarkMode.checked,
      highlightMedia: toggleConditions.checked,
      sortButtons: toggleSortBtns.checked,
      releaseDurations: toggleReleaseDurations.checked,
      collectionUi: toggleCollectionUi.checked
      };

    chrome.storage.sync.set({prefs: prefs}, function() {

      if (message) {

        $('.notify').html(message);

        $('.notifications').removeClass('hide');
      }
    });
  }



  /**
   * Toggle dark mode on/off
   */

  function toggleDarkness(event) {

    if (event.target.checked) {

      chrome.tabs.executeScript(null, {file: 'js/apply-dark-mode.js'}, function() {

        saveChanges();
      });

    } else {

      chrome.tabs.executeScript(null, {file: 'js/remove-dark-mode.js'}, function() {

        saveChanges();
      });
    }
  }



  /**
   * Toggle release condition highlighting on/off
   */

  function toggleHighlights(event) {

    var response = 'Please refresh the page for changes to take effect.';

    if (event.target.checked) {

      chrome.tabs.executeScript(null, {file: 'js/apply-highlights.js'}, function() {

        saveChanges(response);
      });

    } else {

      chrome.tabs.executeScript(null, {file: 'js/remove-highlights.js'}, function() {

        saveChanges();
      });
    }
  }



  /**
   * Toggle ability to sort genres, etc
   */

  function sortGenres(event) {

    var response = 'Please refresh the page for changes to take effect.';

    if (event.target.checked) {

      chrome.tabs.executeScript(null, {file: 'js/sort-explore-lists.js'}, function() {

        saveChanges(response);
      });

    } else {

      saveChanges(response);
    }
  }



  /**
   * Toggle track totals
   */

  function trackTotals(event) {

    var response = 'Please refresh the page for changes to take effect.';

    saveChanges(response);
  }

  /**
   * Toggle better collection UI
   */

  function enableCollectionUi(event) {

    var response = 'Please refresh the page for changes to take effect.';

    if (event.target.checked) {

      chrome.tabs.executeScript(null, {file: 'js/better-collection-ui.js'}, function() {

        saveChanges();
      });

    } else {

      saveChanges(response);
    }
  }


  /**
   * Get stored preferences for extension menu
   */

  function init() {

    chrome.storage.sync.get('prefs', function(result) {

      toggleDarkMode.checked = result.prefs.darkMode;

      toggleConditions.checked = result.prefs.highlightMedia;

      toggleSortBtns.checked = result.prefs.sortButtons;

      toggleReleaseDurations.checked = result.prefs.releaseDurations;

      toggleCollectionUi.checked = result.prefs.collectionUi;
    });
  }



  // Start it up
  init();



  // Event listeners on toggles
  toggleDarkMode.addEventListener('change', toggleDarkness);

  toggleConditions.addEventListener('change', toggleHighlights);

  toggleSortBtns.addEventListener('change', sortGenres);

  toggleReleaseDurations.addEventListener('change', trackTotals);

  toggleCollectionUi.addEventListener('change', enableCollectionUi);


  // Open about tab
  $('body').on('click', '#about', function() {

    chrome.tabs.create({url: '../html/about.html'});
  });
});
