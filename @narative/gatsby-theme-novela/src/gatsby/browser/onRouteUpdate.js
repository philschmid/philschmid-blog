/* eslint-disable */
const ReactGA = require('react-ga');

function handleAccessibilityFocus() {
  const elementsWithA11yFocus = [...document.querySelectorAll('[data-a11y]')];

  document.addEventListener('keyup', event => {
    elementsWithA11yFocus.forEach(element => {
      if (element === event.target || element.contains(event.target)) {
        element.setAttribute('data-a11y', 'true');
      } else {
        element.setAttribute('data-a11y', 'false');
      }
    });
  });

  // On mouse click change data-a11y attribute false
  document.addEventListener('mousedown', event => {
    elementsWithA11yFocus.forEach(element => {
      if (element === event.target || element.contains(event.target)) {
        element.setAttribute('data-a11y', 'false');
      }
    });
  });
}

module.exports = ({location, prevLocation}) => {
  handleAccessibilityFocus();
  ReactGA.pageview(location.pathname);
  if (prevLocation) {
    localStorage.setItem('previousPath', prevLocation.pathname);
  }
  // ReactGA.initialize('UA-xxxxxx-x');

  // exports.onRouteUpdate = (state, page, pages) => {
  //   ReactGA.pageview(state.pathname);
  // };
};
