(function() {

  var id = 'darkThemeCss',
      link = document.getElementById(id),
      styles = link.getAttribute('disabled');

  if (!styles) { link.setAttribute('disabled', true); }
})();