function toggleTheme() {
  var theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') == 'style.css') {
      theme.setAttribute('href', 'high.css');
  } else {
      theme.setAttribute('href', 'style.css');
  }
}