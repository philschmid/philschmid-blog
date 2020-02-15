exports.onInitialClientRender = require('./src/gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('./src/gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('./src/gatsby/browser/shouldUpdateScroll');
const ReactGA = require('react-ga');

const state = localStorage.getItem('Privacy');
console.log(state);
if (state === 'true') {
  ReactGA.initialize('UA-154999168-1');
  ReactGA.set({anonymizeIp: true});

  console.log('init');
}
