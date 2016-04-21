/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido (c) 2016
 * @url: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 */

$(document).ready(function() {

  let
      currency = localStorage.getItem('currency'),
      d = new Date(),
      language = $('#i18n_select option:selected').val(),
      lastChecked = localStorage.getItem('lastChecked'),
      options = resourceLibrary.options.debug(),
      rates = JSON.parse(localStorage.getItem('rates')),
      today = d.toISOString().split('T')[0],
      userCurrency = localStorage.getItem('userCurrency');

    if (!rates || !lastChecked || lastChecked !== today || typeof rates !== 'object' || userCurrency !== currency) {

      localStorage.setItem('rates', null);

      if (options) {

        console.log('Getting fresh rates... One moment please.');
      }

      $.ajax({

        url:'https://api.fixer.io/latest?base=' + userCurrency + '&symbols=AUD,CAD,CHF,EUR,SEK,ZAR,GBP,JPY,MXN,NZD,BRL,USD',

        type: 'GET',

        success: function(ratesObj) {

          localStorage.setItem('rates', JSON.stringify(ratesObj));

          rates = JSON.parse(localStorage.getItem('rates'));

          localStorage.setItem('lastChecked', today);

          // set last saved currency,
          // if different from userCurrency will
          // trigger exchange rates update
          localStorage.setItem('currency', userCurrency);

          if (options) {

            console.log('*** Fresh rates ***');

            console.log('Last update:', lastChecked, ' ', 'language:', language, ' ', 'Currency:', userCurrency);

            console.log('rates', JSON.parse(localStorage.getItem('rates')));
          }
        },

        error: function() {

          let errorMsg = 'Discogs Enhancer could not get currency exchange rates. Price comparisons may not be accurate. Please try again later.';

          resourceLibrary.appendNotice(errorMsg, 'orange');
        }
      });

    } else {

      if (options) {

        console.log('Discogs Enhancer: Using cached rates:', lastChecked, ' ', 'language:', language, ' ', 'Currency:', userCurrency);

        console.log('rates', JSON.parse(localStorage.getItem('rates')));
      }
    }

    // Store user's lagnuage preference
    localStorage.setItem('language', language);
});