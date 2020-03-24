import 'normalize.css';
import './static/style.css';

// Prepare the body tag by adding a "js-paused" class
document.body.className += ' js-loading';
// Listen for when everything has loaded
window.addEventListener('load', showPage, false);
function showPage() {
  // Remove the "js-paused" class
  document.body.className = document.body.className.replace(
    'js-loading',
    ''
  );
}
